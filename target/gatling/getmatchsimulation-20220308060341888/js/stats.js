var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "689",
        "ko": "311"
    },
    "minResponseTime": {
        "total": "63",
        "ok": "4936",
        "ko": "63"
    },
    "maxResponseTime": {
        "total": "16623",
        "ok": "16623",
        "ko": "209"
    },
    "meanResponseTime": {
        "total": "7811",
        "ok": "11277",
        "ko": "134"
    },
    "standardDeviation": {
        "total": "6266",
        "ok": "4286",
        "ko": "38"
    },
    "percentiles1": {
        "total": "6500",
        "ok": "11109",
        "ko": "125"
    },
    "percentiles2": {
        "total": "14497",
        "ok": "15530",
        "ko": "170"
    },
    "percentiles3": {
        "total": "16543",
        "ok": "16562",
        "ko": "192"
    },
    "percentiles4": {
        "total": "16585",
        "ok": "16593",
        "ko": "197"
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
    "count": 689,
    "percentage": 69
},
    "group4": {
    "name": "failed",
    "count": 311,
    "percentage": 31
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.824",
        "ok": "40.529",
        "ko": "18.294"
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
        "ok": "689",
        "ko": "311"
    },
    "minResponseTime": {
        "total": "63",
        "ok": "4936",
        "ko": "63"
    },
    "maxResponseTime": {
        "total": "16623",
        "ok": "16623",
        "ko": "209"
    },
    "meanResponseTime": {
        "total": "7811",
        "ok": "11277",
        "ko": "134"
    },
    "standardDeviation": {
        "total": "6266",
        "ok": "4286",
        "ko": "38"
    },
    "percentiles1": {
        "total": "6500",
        "ok": "11109",
        "ko": "125"
    },
    "percentiles2": {
        "total": "14497",
        "ok": "15530",
        "ko": "170"
    },
    "percentiles3": {
        "total": "16543",
        "ok": "16562",
        "ko": "192"
    },
    "percentiles4": {
        "total": "16585",
        "ok": "16593",
        "ko": "197"
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
    "count": 689,
    "percentage": 69
},
    "group4": {
    "name": "failed",
    "count": 311,
    "percentage": 31
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.824",
        "ok": "40.529",
        "ko": "18.294"
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
