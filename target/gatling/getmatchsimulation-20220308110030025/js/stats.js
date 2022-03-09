var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "880",
        "ko": "120"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "1496",
        "ko": "93"
    },
    "maxResponseTime": {
        "total": "21312",
        "ok": "21312",
        "ko": "264"
    },
    "meanResponseTime": {
        "total": "12085",
        "ok": "13712",
        "ko": "155"
    },
    "standardDeviation": {
        "total": "6876",
        "ok": "5627",
        "ko": "36"
    },
    "percentiles1": {
        "total": "12765",
        "ok": "13945",
        "ko": "145"
    },
    "percentiles2": {
        "total": "18543",
        "ok": "19157",
        "ko": "189"
    },
    "percentiles3": {
        "total": "21226",
        "ok": "21231",
        "ko": "207"
    },
    "percentiles4": {
        "total": "21284",
        "ok": "21287",
        "ko": "261"
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
    "count": 880,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 120,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.455",
        "ok": "40",
        "ko": "5.455"
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
        "ok": "880",
        "ko": "120"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "1496",
        "ko": "93"
    },
    "maxResponseTime": {
        "total": "21312",
        "ok": "21312",
        "ko": "264"
    },
    "meanResponseTime": {
        "total": "12085",
        "ok": "13712",
        "ko": "155"
    },
    "standardDeviation": {
        "total": "6876",
        "ok": "5627",
        "ko": "36"
    },
    "percentiles1": {
        "total": "12765",
        "ok": "13945",
        "ko": "145"
    },
    "percentiles2": {
        "total": "18543",
        "ok": "19157",
        "ko": "189"
    },
    "percentiles3": {
        "total": "21226",
        "ok": "21231",
        "ko": "207"
    },
    "percentiles4": {
        "total": "21284",
        "ok": "21287",
        "ko": "261"
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
    "count": 880,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 120,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.455",
        "ok": "40",
        "ko": "5.455"
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
