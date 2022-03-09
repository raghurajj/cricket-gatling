var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "670",
        "ko": "330"
    },
    "minResponseTime": {
        "total": "62",
        "ok": "4818",
        "ko": "62"
    },
    "maxResponseTime": {
        "total": "17094",
        "ok": "17094",
        "ko": "240"
    },
    "meanResponseTime": {
        "total": "7854",
        "ok": "11647",
        "ko": "152"
    },
    "standardDeviation": {
        "total": "6512",
        "ok": "4437",
        "ko": "48"
    },
    "percentiles1": {
        "total": "6908",
        "ok": "11683",
        "ko": "145"
    },
    "percentiles2": {
        "total": "14128",
        "ok": "16760",
        "ko": "196"
    },
    "percentiles3": {
        "total": "17047",
        "ok": "17066",
        "ko": "235"
    },
    "percentiles4": {
        "total": "17081",
        "ok": "17086",
        "ko": "239"
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
    "count": 670,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 330,
    "percentage": 33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "55.556",
        "ok": "37.222",
        "ko": "18.333"
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
        "ok": "670",
        "ko": "330"
    },
    "minResponseTime": {
        "total": "62",
        "ok": "4818",
        "ko": "62"
    },
    "maxResponseTime": {
        "total": "17094",
        "ok": "17094",
        "ko": "240"
    },
    "meanResponseTime": {
        "total": "7854",
        "ok": "11647",
        "ko": "152"
    },
    "standardDeviation": {
        "total": "6512",
        "ok": "4437",
        "ko": "48"
    },
    "percentiles1": {
        "total": "6908",
        "ok": "11683",
        "ko": "145"
    },
    "percentiles2": {
        "total": "14128",
        "ok": "16760",
        "ko": "196"
    },
    "percentiles3": {
        "total": "17047",
        "ok": "17066",
        "ko": "235"
    },
    "percentiles4": {
        "total": "17081",
        "ok": "17086",
        "ko": "239"
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
    "count": 670,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 330,
    "percentage": 33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "55.556",
        "ok": "37.222",
        "ko": "18.333"
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
