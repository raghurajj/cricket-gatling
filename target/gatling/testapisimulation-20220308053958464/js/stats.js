var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "960",
        "ko": "40"
    },
    "minResponseTime": {
        "total": "63",
        "ok": "1080",
        "ko": "63"
    },
    "maxResponseTime": {
        "total": "6636",
        "ok": "6636",
        "ko": "242"
    },
    "meanResponseTime": {
        "total": "3972",
        "ok": "4131",
        "ko": "169"
    },
    "standardDeviation": {
        "total": "1844",
        "ok": "1707",
        "ko": "45"
    },
    "percentiles1": {
        "total": "4098",
        "ok": "4209",
        "ko": "172"
    },
    "percentiles2": {
        "total": "5640",
        "ok": "5735",
        "ko": "207"
    },
    "percentiles3": {
        "total": "6529",
        "ok": "6533",
        "ko": "238"
    },
    "percentiles4": {
        "total": "6600",
        "ok": "6601",
        "ko": "242"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 956,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 40,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "137.143",
        "ko": "5.714"
    }
},
contents: {
"req_get-user-reques-a4fef": {
        type: "REQUEST",
        name: "get user request",
path: "get user request",
pathFormatted: "req_get-user-reques-a4fef",
stats: {
    "name": "get user request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "960",
        "ko": "40"
    },
    "minResponseTime": {
        "total": "63",
        "ok": "1080",
        "ko": "63"
    },
    "maxResponseTime": {
        "total": "6636",
        "ok": "6636",
        "ko": "242"
    },
    "meanResponseTime": {
        "total": "3972",
        "ok": "4131",
        "ko": "169"
    },
    "standardDeviation": {
        "total": "1844",
        "ok": "1707",
        "ko": "45"
    },
    "percentiles1": {
        "total": "4098",
        "ok": "4209",
        "ko": "172"
    },
    "percentiles2": {
        "total": "5640",
        "ok": "5735",
        "ko": "207"
    },
    "percentiles3": {
        "total": "6529",
        "ok": "6533",
        "ko": "238"
    },
    "percentiles4": {
        "total": "6600",
        "ok": "6601",
        "ko": "242"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 956,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 40,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "137.143",
        "ko": "5.714"
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
