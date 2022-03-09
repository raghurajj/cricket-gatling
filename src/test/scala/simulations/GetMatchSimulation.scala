package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetMatchSimulation extends Simulation{

  //http conf
  var httpConf = http.baseUrl("http://localhost:8080/cricket/v1")
    .header("Accept",value="Application/json")
    .header("content-type",value="Application/json")


  //scenario
  val scn = scenario("get Match")
    .exec(http("get match request")
    .get("/matches/single/1")
    .check(status is 200))

  //setup
  setUp(scn.inject(atOnceUsers(1000))).protocols(httpConf)


}