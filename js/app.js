﻿var babaOmoApp = angular.module("BabaOmoApp", ["ui.router"]);

babaOmoApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/info');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: rootPartialsUrl('splash.html')
        })
        .state('info', {
            url: '/info',
            templateUrl: rootPartialsUrl('info.html'),
            controller: 'InfoCtrl'
        })
        .state('child', {
            url: '/child',
            templateUrl: rootPartialsUrl('child.html'),
            controller: 'AllelesCtrl'
        })
        .state('father', {
            url: '/father',
            templateUrl: rootPartialsUrl('father.html'),
            controller: 'AllelesCtrl'
        })
        .state('result', {
            url: '/result',
            templateUrl: rootPartialsUrl('result.html'),
            controller: 'ResultCtrl'
        });
});

function rootUrl(url) {
    return "" + url;
}

function webApiUrl(url) {
    return "/" + url;
}

function errorhandler(err, obj) {
    console.error(err, obj);
}

function rootPartialsUrl(url) {
    return rootUrl('partials/') + url;
}

function rootDirectivesUrl(url) {
    return rootUrl('js/directives/') + url;
}

function rootJsUrl(url) {
    return rootUrl('js/') + url;
}

<<<<<<< HEAD
var sampleFather = {
    "NIG": [{ "name": "D3S1358", "allele1": 15, "allele2": 16 }, { "name": "D7S820", "allele1": 11, "allele2": 11 }, { "name": "VWA", "allele1": 13, "allele2": 16 }, { "name": "FGA", "allele1": 22, "allele2": 28 }, { "name": "D8S1179", "allele1": 13, "allele2": 14 }, { "name": "D21S11", "allele1": 28, "allele2": 32.2 }, { "name": "D18S51", "allele1": 17, "allele2": 18 }, { "name": "D5S818", "allele1": 8, "allele2": 12 }],
    "CND": [{ "name": "D3S1358", "allele1": 16, "allele2": 18 }, { "name": "D7S820", "allele1": 10, "allele2": 11 }, { "name": "VWA", "allele1": 14, "allele2": 16 }, { "name": "FGA", "allele1": 22, "allele2": 26 }, { "name": "D8S1179", "allele1": 14, "allele2": 14 }, { "name": "D21S11", "allele1": 27, "allele2": 30 }, { "name": "D18S51", "allele1": 14, "allele2": 18 }, { "name": "D5S818", "allele1": 9, "allele2": 12 }],
    "BEN": [{ "name": "D3S1358", "allele1": 16, "allele2": 18 }, { "name": "D7S820", "allele1": 10, "allele2": 11 }, { "name": "VWA", "allele1": 14, "allele2": 16 }, { "name": "FGA", "allele1": 22, "allele2": 26 }, { "name": "D8S1179", "allele1": 14, "allele2": 14 }, { "name": "D21S11", "allele1": 27, "allele2": 30 }, { "name": "D18S51", "allele1": 14, "allele2": 18 }, { "name": "D5S818", "allele1": 9, "allele2": 12 }],
    "VIR": [{ "name": "D3S1358", "allele1": 16, "allele2": 18 }, { "name": "D7S820", "allele1": 10, "allele2": 11 }, { "name": "VWA", "allele1": 14, "allele2": 16 }, { "name": "FGA", "allele1": 22, "allele2": 26 }, { "name": "D8S1179", "allele1": 14, "allele2": 14 }, { "name": "D21S11", "allele1": 27, "allele2": 30 }, { "name": "D18S51", "allele1": 14, "allele2": 18 }, { "name": "D5S818", "allele1": 9, "allele2": 12 }]
}

var sampleChild = {
    "NIG": [{ "name": "D3S1358", "allele1": 16, "allele2": 17 }, { "name": "D7S820", "allele1": 8, "allele2": 11 }, { "name": "VWA", "allele1": 14, "allele2": 16 }, { "name": "FGA", "allele1": 21, "allele2": 28 }, { "name": "D8S1179", "allele1": 14, "allele2": 15 }, { "name": "D21S11", "allele1": 28, "allele2": 32.2 }, { "name": "D18S51", "allele1": 17, "allele2": 18 }, { "name": "D5S818", "allele1": 8, "allele2": 14 }],
    "CND": [{ "name": "D3S1358", "allele1": 15, "allele2": 18 }, { "name": "D7S820", "allele1": 9, "allele2": 10 }, { "name": "VWA", "allele1": 14, "allele2": 16 }, { "name": "FGA", "allele1": 23, "allele2": 26 }, { "name": "D8S1179", "allele1": 14, "allele2": 14 }, { "name": "D21S11", "allele1": 30, "allele2": 31.2 }, { "name": "D18S51", "allele1": 14, "allele2": 16 }, { "name": "D5S818", "allele1": 9, "allele2": 14 }],
    "BEN": [{ "name": "D3S1358", "allele1": 15, "allele2": 18 }, { "name": "D7S820", "allele1": 9, "allele2": 10 }, { "name": "VWA", "allele1": 14, "allele2": 16 }, { "name": "FGA", "allele1": 23, "allele2": 26 }, { "name": "D8S1179", "allele1": 14, "allele2": 14 }, { "name": "D21S11", "allele1": 30, "allele2": 31.2 }, { "name": "D18S51", "allele1": 14, "allele2": 16 }, { "name": "D5S818", "allele1": 9, "allele2": 14 }],
    "VIR": [{ "name": "D3S1358", "allele1": 15, "allele2": 18 }, { "name": "D7S820", "allele1": 9, "allele2": 10 }, { "name": "VWA", "allele1": 14, "allele2": 16 }, { "name": "FGA", "allele1": 23, "allele2": 26 }, { "name": "D8S1179", "allele1": 14, "allele2": 14 }, { "name": "D21S11", "allele1": 30, "allele2": 31.2 }, { "name": "D18S51", "allele1": 14, "allele2": 16 }, { "name": "D5S818", "allele1": 9, "allele2": 14 }]
}
=======
var sampleFatherLoci = [
    {
        "name": "D3S1358",
        "allele1": 15,
        "allele2": 16
    },
    {
        "name": "D7S820",
        "allele1": 11,
        "allele2": 11
    },
    {
        "name": "VWA",
        "allele1": 13,
        "allele2": 16
    },
    {
        "name": "FGA",
        "allele1": 22,
        "allele2": 28
    },
    {
        "name": "D8S1179",
        "allele1": 13,
        "allele2": 14
    },
    {
        "name": "D21S11",
        "allele1": 28,
        "allele2": 32.2
    },
    {
        "name": "D18S51",
        "allele1": 17,
        "allele2": 18
    },
    {
        "name": "D5S818",
        "allele1": 8,
        "allele2": 12
    }
]

var sampleChildLoci = [
    {
        "name": "D3S1358",
        "allele1": 16,
        "allele2": 17
    },
    {
        "name": "D7S820",
        "allele1": 8,
        "allele2": 11
    },
    {
        "name": "VWA",
        "allele1": 14,
        "allele2": 16
    },
    {
        "name": "FGA",
        "allele1": 21,
        "allele2": 28
    },
    {
        "name": "D8S1179",
        "allele1": 14,
        "allele2": 15
    },
    {
        "name": "D21S11",
        "allele1": 28,
        "allele2": 32.2
    },
    {
        "name": "D18S51",
        "allele1": 17,
        "allele2": 18
    },
    {
        "name": "D5S818",
        "allele1": 8,
        "allele2": 14
    }
]
>>>>>>> 49fcd89a42c4c205ee58f72270372f532d399296
