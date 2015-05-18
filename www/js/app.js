// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('superbase', [
    'ionic',
    'ngCordova',
    'services',
    'controllers']);

app.run(function ($ionicPlatform, $cordovaSplashscreen) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
    //setTimeout(function(){$cordovaSplashscreen.hide()},5000);
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('login', {
        url: '/login',
        views: {
            index: {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl as login'
            }            
        },
        onEnter: function () {
            console.log("Estoy en el estado Login");
        }
    });
    $stateProvider.state('app', {
        abstract: true,
        views: {
            index: {
                templateUrl: 'templates/main.html',
                controller: 'mainCtrl as main'
            }
        },
        onEnter: function () {
            console.log("Estoy en el estado app");
        }
    });
    $stateProvider.state('app.lista', {
        abstract: true,
        url: '/lista',
        views: {
            cuerpo: {
                template: '<ion-nav-view name="menu" animation="slide-left-right"></ion-nav-view>'
            }
        },
        onEnter: function () {
            console.log("Estoy en el estado app.lista");
        }
    });
    $stateProvider.state('app.lista.index', {
        url: '',
        views: {
            menu: {
                templateUrl: 'templates/lista.html',
                controller: 'ListaCtrl as lista'
            }
        },
        resolve: {
            clientes: function (ClientesService) {
                return ClientesService.getClientes();
            }
        },
        onEnter: function () {
            console.log("Estoy en el esado app.lista.index");
        }
    });
    $stateProvider.state('app.lista.opcion', {
        url: '/:clienteId',
        views: {
            menu: {
                templateUrl: 'templates/opcion.html',
                controller: 'OpcionCtrl as opcion'
            }
        },
        resolve: {
            cliente: function (ClientesService, $stateParams) {
                return ClientesService.getCliente($stateParams.clienteId);
            }
        },
        onEnter: function () {
            console.log("Estoy en el esado app.lista.opcion");
        }
    });
    
    $stateProvider.state('app.visita', {
        abstract: true,
        url: '/visita',
        views: {
            cuerpo: {
                templateUrl: 'templates/menu.html',
                controller: 'MenuCtrl as menu'
            }
        },
        onEnter: function () {
            console.log("Estoy en el estado app.visita");
        }
    });
    $stateProvider.state('app.visita.index', {
        url: '',
        views: {
            menuContent: {
                templateUrl: 'templates/visita.html',
                controller: 'MenuCtrl as visita'
            }
        },
        onEnter: function () {
            console.log("Estoy en el esado app.visita.index");
        }
    });
    $stateProvider.state('app.visita.informacion', {
        url: '/info',
        views: {
            menuContent: {
                templateUrl: 'templates/informacion.html',
                controller: 'InfoCtrl as info'
            }
        },
        onEnter: function () {
            console.log("Estoy en el estado app.visita.informacion");
        }
    });
    $stateProvider.state('app.visita.calificacion', {
        url: '/cal',
        views: {
            menuContent: {
                templateUrl: 'templates/calificacion.html',
                controller: 'CalificaCtrl as califica'
            }
        },
        onEnter: function () {
            console.log("Estoy en el estado app.visita.calificacion");
        }
    });
    $stateProvider.state('app.visita.seguimiento', {
        url: '/seg',
        views: {
            menuContent: {
                templateUrl: 'templates/seguimiento.html',
                controller: 'SeguirCtrl as seguir'
            }
        },
        onEnter: function () {
            console.log("Estoy en el estado app.visita.seguimiento");
        }
    });
});