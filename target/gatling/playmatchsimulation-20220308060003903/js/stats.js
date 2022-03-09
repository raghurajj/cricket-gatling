var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "879",
        "ko": "121"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "2023",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "12687",
        "ok": "12687",
        "ko": "182"
    },
    "meanResponseTime": {
        "total": "6876",
        "ok": "7805",
        "ko": "133"
    },
    "standardDeviation": {
        "total": "3980",
        "ok": "3301",
        "ko": "26"
    },
    "percentiles1": {
        "total": "6973",
        "ok": "8018",
        "ko": "139"
    },
    "percentiles2": {
        "total": "10542",
        "ok": "10917",
        "ko": "151"
    },
    "percentiles3": {
        "total": "12507",
        "ok": "12533",
        "ko": "170"
    },
    "percentiles4": {
        "total": "12629",
        "ok": "12629",
        "ko": "175"
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
    "count": 879,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 121,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "76.923",
        "ok": "67.615",
        "ko": "9.308"
    }
},
contents: {
"req_add-match-reque-9a622": {
        type: "REQUEST",
        name: "add match request",
path: "add match request",
pathFormatted: "req_add-match-reque-9a622",
stats: {
    "name": "add match request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "879",
        "ko": "121"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "2023",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "12687",
        "ok": "12687",
        "ko": "182"
    },
    "meanResponseTime": {
        "total": "6876",
        "ok": "7805",
        "ko": "133"
    },
    "standardDeviation": {
        "total": "3980",
        "ok": "3301",
        "ko": "26"
    },
    "percentiles1": {
        "total": "6973",
        "ok": "8018",
        "ko": "139"
    },
    "percentiles2": {
        "total": "10542",
        "ok": "10917",
        "ko": "151"
    },
    "percentiles3": {
        "total": "12507",
        "ok": "12533",
        "ko": "170"
    },
    "percentiles4": {
        "total": "12629",
        "ok": "12629",
        "ko": "175"
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
    "count": 879,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 121,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "76.923",
        "ok": "67.615",
        "ko": "9.308"
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
