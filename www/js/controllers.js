/**
 * Created by victormanuel on 01/10/2014.
 */
controllers = angular.module('controllers', []);
controllers.controller('MenuCtrl',function($scope,$state,$ionicSideMenuDelegate){
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    this.informacion = function () {
        $state.go('app.visita.informacion');
    };
    this.calificacion = function () {
        $state.go('app.visita.calificacion');
    };
    this.seguir = function () {
        $state.go('app.visita.seguimiento');
    };
    this.cerrar = function () {
        $state.go('app.lista.index');
    };
});
controllers.controller('InfoCtrl',function(){});
controllers.controller('CalificaCtrl',function(){});
controllers.controller('SeguirCtrl',function(){});


controllers.controller('mainCtrl', function ($state) {
});
controllers.controller('ListaCtrl', function (clientes) {
    this.clientes = clientes;
});
controllers.controller('OpcionCtrl', function (cliente, $scope, $state, Camara, $cordovaDialogs, $cordovaGeolocation) {
    this.cliente = cliente;
    this.iniciarVisita = function () {
        console.log('Iniciar Visita Ok');
        //$state.go('app.visita.index',{'clienteId': cliente.id});
        $state.go('app.visita.index');
    };
    $scope.getPhoto = function () {

        //$cordovaDialogs.alert($cordovaNetwork.getNetwork(),'supermio','hecho');

        $cordovaGeolocation
            .getCurrentPosition()
            .then(function (position) {
                var lat  = position.coords.latitude, long = position.coords.longitude;
                $cordovaDialogs.alert('lat: ' + lat + ' long: ' + long, 'supermio', 'hecho');
            }, function (err) {
                $cordovaDialogs.alert('error:' + err);
            });
        /*Camera.getPicture().then(function(imageData) {
            console.log(imageData);
            $cordovaDialogs.alert(imageData,'supermio','Hecho');
            $scope.lastPhoto= imageData;
        }, function(err) {
            console.err(err);
            $cordovaDialogs.alert('Error:'+err,'supermio','hecho');
        },{
            quality: 50,
            targetWidth: 160,
            targetHeight: 160,
            saveToPhotoAlbum: true,
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.DATA_URL
            //allowEdit: true
        });*/
        Camara.getPicture({
            quality: 50,
            targetWidth: 320,
            targetHeight: 320,
            saveToPhotoAlbum: false,
            encodingType: Camera.EncodingType.PNG,
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.DATA_URL
            //allowEdit: true
        }).then(function (imageData) {
            console.log(imageData);
            //$cordovaDialogs.alert(imageData,'supermio','Hecho');
            $scope.lastPhoto = "data:image/png;base64," + imageData;
        }, function (err) {
            console.err(err);
            $cordovaDialogs.alert('Error:' + err, 'supermio', 'Hecho');
        });
    };
});
controllers.controller('Base', function () {

});
controllers.controller('LoginCtrl', function ($state) {
    this.user = {
        name: '',
        pass: ''
    };
    this.ingresar = function () {
        console.log('Autenticación Ok');
        $state.go('app.lista.index');
    };
});
controllers.controller('VisitaCtrl', function () {
    //this.cliente = cliente;
});
