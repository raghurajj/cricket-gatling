var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "175",
        "ok": "175",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "30800",
        "ok": "30800",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "17697",
        "ok": "17697",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8569",
        "ok": "8569",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17815",
        "ok": "17815",
        "ko": "-"
    },
    "percentiles2": {
        "total": "25457",
        "ok": "25457",
        "ko": "-"
    },
    "percentiles3": {
        "total": "30117",
        "ok": "30117",
        "ko": "-"
    },
    "percentiles4": {
        "total": "30662",
        "ok": "30662",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 998,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.258",
        "ok": "32.258",
        "ko": "-"
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
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "175",
        "ok": "175",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "30800",
        "ok": "30800",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "17697",
        "ok": "17697",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8569",
        "ok": "8569",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17815",
        "ok": "17815",
        "ko": "-"
    },
    "percentiles2": {
        "total": "25457",
        "ok": "25457",
        "ko": "-"
    },
    "percentiles3": {
        "total": "30117",
        "ok": "30117",
        "ko": "-"
    },
    "percentiles4": {
        "total": "30662",
        "ok": "30662",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 998,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.258",
        "ok": "32.258",
        "ko": "-"
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
