package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetPlayerSimulation extends Simulation{

  //http conf
  var httpConf = http.baseUrl("http://localhost:8080/cricket/v1")
    .header("Accept",value="Application/json")
    .header("content-type",value="Application/json")


  //scenario
  val scn = scenario("get Player")
    .exec(http("get player request")
      .get("/matches/1/players/7")
      .check(status is 200))

  //setup
  setUp(scn.inject(atOnceUsers(1000))).protocols(httpConf)


}