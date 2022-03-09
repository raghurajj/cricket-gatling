var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "955",
        "ko": "45"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "5814",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "25055",
        "ok": "25055",
        "ko": "225"
    },
    "meanResponseTime": {
        "total": "15581",
        "ok": "16308",
        "ko": "156"
    },
    "standardDeviation": {
        "total": "7191",
        "ok": "6512",
        "ko": "50"
    },
    "percentiles1": {
        "total": "16408",
        "ok": "16677",
        "ko": "158"
    },
    "percentiles2": {
        "total": "22034",
        "ok": "22200",
        "ko": "194"
    },
    "percentiles3": {
        "total": "24957",
        "ok": "24961",
        "ko": "216"
    },
    "percentiles4": {
        "total": "25019",
        "ok": "25019",
        "ko": "225"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 955,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 45,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.462",
        "ok": "36.731",
        "ko": "1.731"
    }
},
contents: {
"req_get-match-reque-8f1fd": {
        type: "REQUEST",
        name: "get match request",
path: "get match request",
pathFormatted: "req_get-match-reque-8f1fd",
stats: {
    "name": "get match request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "955",
        "ko": "45"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "5814",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "25055",
        "ok": "25055",
        "ko": "225"
    },
    "meanResponseTime": {
        "total": "15581",
        "ok": "16308",
        "ko": "156"
    },
    "standardDeviation": {
        "total": "7191",
        "ok": "6512",
        "ko": "50"
    },
    "percentiles1": {
        "total": "16408",
        "ok": "16677",
        "ko": "158"
    },
    "percentiles2": {
        "total": "22034",
        "ok": "22200",
        "ko": "194"
    },
    "percentiles3": {
        "total": "24957",
        "ok": "24961",
        "ko": "216"
    },
    "percentiles4": {
        "total": "25019",
        "ok": "25019",
        "ko": "225"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 955,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 45,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.462",
        "ok": "36.731",
        "ko": "1.731"
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
