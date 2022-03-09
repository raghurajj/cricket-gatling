var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "885",
        "ko": "115"
    },
    "minResponseTime": {
        "total": "71",
        "ok": "202",
        "ko": "71"
    },
    "maxResponseTime": {
        "total": "2210",
        "ok": "2210",
        "ko": "199"
    },
    "meanResponseTime": {
        "total": "407",
        "ok": "441",
        "ko": "142"
    },
    "standardDeviation": {
        "total": "354",
        "ok": "362",
        "ko": "30"
    },
    "percentiles1": {
        "total": "344",
        "ok": "350",
        "ko": "144"
    },
    "percentiles2": {
        "total": "374",
        "ok": "381",
        "ko": "157"
    },
    "percentiles3": {
        "total": "1156",
        "ok": "1533",
        "ko": "192"
    },
    "percentiles4": {
        "total": "2089",
        "ok": "2106",
        "ko": "198"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 827,
    "percentage": 83
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 50,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 115,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "295",
        "ko": "38.333"
    }
},
contents: {
"req_get-player-requ-7ab0d": {
        type: "REQUEST",
        name: "get player request",
path: "get player request",
pathFormatted: "req_get-player-requ-7ab0d",
stats: {
    "name": "get player request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "885",
        "ko": "115"
    },
    "minResponseTime": {
        "total": "71",
        "ok": "202",
        "ko": "71"
    },
    "maxResponseTime": {
        "total": "2210",
        "ok": "2210",
        "ko": "199"
    },
    "meanResponseTime": {
        "total": "407",
        "ok": "441",
        "ko": "142"
    },
    "standardDeviation": {
        "total": "354",
        "ok": "362",
        "ko": "30"
    },
    "percentiles1": {
        "total": "344",
        "ok": "350",
        "ko": "144"
    },
    "percentiles2": {
        "total": "374",
        "ok": "381",
        "ko": "157"
    },
    "percentiles3": {
        "total": "1156",
        "ok": "1533",
        "ko": "192"
    },
    "percentiles4": {
        "total": "2089",
        "ok": "2106",
        "ko": "198"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 827,
    "percentage": 83
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 50,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 115,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "295",
        "ko": "38.333"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
