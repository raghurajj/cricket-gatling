var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "697",
        "ko": "303"
    },
    "minResponseTime": {
        "total": "72",
        "ok": "4257",
        "ko": "72"
    },
    "maxResponseTime": {
        "total": "16010",
        "ok": "16010",
        "ko": "185"
    },
    "meanResponseTime": {
        "total": "7422",
        "ok": "10591",
        "ko": "131"
    },
    "standardDeviation": {
        "total": "6013",
        "ok": "4326",
        "ko": "26"
    },
    "percentiles1": {
        "total": "8362",
        "ok": "10133",
        "ko": "129"
    },
    "percentiles2": {
        "total": "13712",
        "ok": "15007",
        "ko": "153"
    },
    "percentiles3": {
        "total": "15933",
        "ok": "15949",
        "ko": "173"
    },
    "percentiles4": {
        "total": "15978",
        "ok": "15980",
        "ko": "184"
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
    "count": 697,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 303,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.824",
        "ok": "41",
        "ko": "17.824"
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
        "ok": "697",
        "ko": "303"
    },
    "minResponseTime": {
        "total": "72",
        "ok": "4257",
        "ko": "72"
    },
    "maxResponseTime": {
        "total": "16010",
        "ok": "16010",
        "ko": "185"
    },
    "meanResponseTime": {
        "total": "7422",
        "ok": "10591",
        "ko": "131"
    },
    "standardDeviation": {
        "total": "6013",
        "ok": "4326",
        "ko": "26"
    },
    "percentiles1": {
        "total": "8362",
        "ok": "10133",
        "ko": "129"
    },
    "percentiles2": {
        "total": "13712",
        "ok": "15007",
        "ko": "153"
    },
    "percentiles3": {
        "total": "15933",
        "ok": "15949",
        "ko": "173"
    },
    "percentiles4": {
        "total": "15978",
        "ok": "15980",
        "ko": "184"
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
    "count": 697,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 303,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.824",
        "ok": "41",
        "ko": "17.824"
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
