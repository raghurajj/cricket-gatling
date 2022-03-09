var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "964",
        "ko": "36"
    },
    "minResponseTime": {
        "total": "57",
        "ok": "1112",
        "ko": "57"
    },
    "maxResponseTime": {
        "total": "5526",
        "ok": "5526",
        "ko": "151"
    },
    "meanResponseTime": {
        "total": "2194",
        "ok": "2272",
        "ko": "104"
    },
    "standardDeviation": {
        "total": "1542",
        "ok": "1516",
        "ko": "26"
    },
    "percentiles1": {
        "total": "1572",
        "ok": "1585",
        "ko": "98"
    },
    "percentiles2": {
        "total": "1752",
        "ok": "1758",
        "ko": "132"
    },
    "percentiles3": {
        "total": "5459",
        "ok": "5460",
        "ko": "147"
    },
    "percentiles4": {
        "total": "5505",
        "ok": "5505",
        "ko": "151"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 939,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 36,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "160.667",
        "ko": "6"
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
        "ok": "964",
        "ko": "36"
    },
    "minResponseTime": {
        "total": "57",
        "ok": "1112",
        "ko": "57"
    },
    "maxResponseTime": {
        "total": "5526",
        "ok": "5526",
        "ko": "151"
    },
    "meanResponseTime": {
        "total": "2194",
        "ok": "2272",
        "ko": "104"
    },
    "standardDeviation": {
        "total": "1542",
        "ok": "1516",
        "ko": "26"
    },
    "percentiles1": {
        "total": "1572",
        "ok": "1585",
        "ko": "98"
    },
    "percentiles2": {
        "total": "1752",
        "ok": "1758",
        "ko": "132"
    },
    "percentiles3": {
        "total": "5459",
        "ok": "5460",
        "ko": "147"
    },
    "percentiles4": {
        "total": "5505",
        "ok": "5505",
        "ko": "151"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 939,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 36,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "160.667",
        "ko": "6"
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
