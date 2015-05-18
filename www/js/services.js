/**
 * Created by victormanuel on 01/10/2014.
 */
var services = angular.module('services',[]);

services.service('Camera',['$q', function($q) {
    return {
        getPicture: function(options){
            var q = $q.defer();

            navigator.camera.getPicture(function(result) {
                q.resolve(result);
            }, function(err){
                q.reject(err);
            }, options);

            return q.promise;
        }
    }
}]);
services.service('Camara',['$q','$cordovaCamera', function($q,$cordovaCamera) {
    return {
        getPicture: function(options){
            var q = $q.defer();

            $cordovaCamera.getPicture(options).then(function(result) {
                q.resolve(result);
            }, function(err){
                q.reject(err);
            });

            return q.promise;
        }
    }
}]);
services.service('ClientesService',function($q){
    return {
        clientes: [
            {
                id:'1',
                nombre:'Enrique Cornejo',
                empresa:'Empresa 1',
                direccion: 'Av sin nombre sin número',
                fecha: 'Lunes 18 mayo 2015',
                hora: '09:00:00 AM'
            },
            {
                id:'2',
                nombre: 'Susana Villaran',
                empresa: 'Empresa 2',
                direccion: 'Av 2 número 3',
                fecha: 'Lunes 18 mayo 2015',
                hora: '11:00:00 AM'
            },
            {
                id:'3',
                nombre: 'Salvador Heresi',
                empresa: 'Empresa 3',
                direccion: 'Av 4 número 4',
                fecha: 'Lunes 18 mayo 2015',
                hora: '02:00:00 PM'
            },
            {
                id:'4',
                nombre: 'Enrique Ocrospoma',
                empresa: 'Empresa 4',
                direccion: 'Av 5 número 5',
                fecha: 'Lunes 18 mayo 2015',
                hora: '04:00:00 PM'
            },
            {
                id:'5',
                nombre: 'Fernan Altuve',
                empresa: 'Empresa 5',
                direccion: 'Av 6 número 6',
                fecha: 'Lunes 18 mayo 2015',
                hora: '06:00:00 PM'
            }
        ],
        getClientes: function(){
            return this.clientes;
        },
        getCliente: function(clienteId){
            var dfd = $q.defer();
            this.clientes.forEach(function(cliente){
                if (cliente.id === clienteId) dfd.resolve(cliente)
            })
            return dfd.promise;
        }
    }
});
services.service('OpcionesService',function($q){
    return {
        cands: [
            {
                id:'1',
                nombre:'Enrique Cornejo',
                partido:'APRA',
                tipo: 'Partido'
            },
            {
                id:'2',
                nombre:'Susana Villaran',
                partido:'Dialogo Vecinal',
                tipo: 'Independiente'
            },
            {
                id:'3',
                nombre: 'Salvador Heresi',
                partido:'Perú Patria segura',
                tipo:'independiente'
            },
            {
                id:'4',
                nombre: 'Enrique Ocrospoma',
                partido:'PPC',
                tipo:'partido'
            },
            {
                id:'5',
                nombre: 'Fernan Altuve',
                partido:'Vamos Perú',
                tipo:'independiente'
            }
        ],
        getCands: function(){
            return this.cands;
        },
        getCand: function(candId){
            var dfd = $q.defer();
            this.cands.forEach(function(cand){
                if (cand.id === candId) dfd.resolve(cand)
            })
            return dfd.promise;
        }
    }
});