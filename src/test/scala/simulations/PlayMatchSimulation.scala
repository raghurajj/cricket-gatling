package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class PlayMatchSimulation extends Simulation{

  //http conf
  var httpConf = http.baseUrl("http://localhost:8080/cricket/v1")
    .header("Accept",value="Application/json")
    .header("content-type",value="Application/json")


  //scenario
  val scn = scenario("play Match")
    .exec(http("add match request")
      .post("/matches/SINGLE")
      .body(RawFileBody("./src/test/resources/bodies/addMatch.json")).asJson
      .header("content-type",value="Application/json")
      .check(status is 201))

  //setup
  setUp(scn.inject(atOnceUsers(1000))).protocols(httpConf)
}