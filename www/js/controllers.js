/**
 * Created by victormanuel on 01/10/2014.
 */
controllers = angular.module('controllers',[]);
controllers.controller('mainCtrl',function($state){

});
controllers.controller('ListaCtrl',function(candidates){
    this.cands = candidates;
});
controllers.controller('OpcionCtrl',function(cand,$scope,Camara,$cordovaDialogs,$cordovaGeolocation){
    this.cand = cand;
    $scope.getPhoto = function() {

        //$cordovaDialogs.alert($cordovaNetwork.getNetwork(),'supermio','hecho');

        $cordovaGeolocation
            .getCurrentPosition()
            .then(function (position) {
                var lat  = position.coords.latitude;
                var long = position.coords.longitude;
                $cordovaDialogs.alert('lat: '+lat+ ' long: '+long,'supermio','hecho');
            }, function(err) {
                $cordovaDialogs.alert('error:'+err);
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
        }).then(function(imageData){
            console.log(imageData);
            //$cordovaDialogs.alert(imageData,'supermio','Hecho');
            $scope.lastPhoto = "data:image/png;base64,"+imageData;
        }, function(err){
            console.err(err);
            $cordovaDialogs.alert('Error:'+err,'supermio','Hecho');
        });
    };
});
controllers.controller('Base',function(){

});
controllers.controller('LoginCtrl',function($state){
    this.ingresar = function(){
        $state.go('app.lista.index');
    };
});
