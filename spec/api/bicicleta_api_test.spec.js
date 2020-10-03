var Bicicleta = require('../../models/bicicleta');
var request = require('request');
var server = require('../../bin/www');



describe ('Bicicleta API', () => {
    describe ('GET BICICLETAS /', () => {
        it('Status 200', () => {
            expect(Bicicleta.allBicis.length).toBe(0);

            var a = new Bicicleta(1, 'negro', 'urbana', [-34.7253769, -58.2515929]); // Brandsen y Mitre
            Bicicleta.add (a);

            request.get('http://localhost:5000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200);
            });
        });
    });
   
    describe ('POST BICICLETAS /create', () => {
        it('Status 200', (done) => {
            var headers = {'content-type' : 'application/json'};
            var aBici = { "id": 10, "color": "rojo", "modelo": "urbana", "lat":-34, "lng": -54};
            request.post({
                headers: headers,
                url: 'http://localhost:5000/api/bicicletas/create',
                body: JSON.stringify(aBici)
            }, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(10).color).toBe("rojo");
                done();
            });
        });
    });

    describe ('POST BICICLETAS /delete', () => {
        it('Status 204', (done) => {
            var headers = {'content-type' : 'application/json'};
            var a = new Bicicleta(10, 'rojo', 'urbana', [-34, -54]);
            var aBiciId = { "id": a.id };
            Bicicleta.add (a);
            
            expect(Bicicleta.allBicis.length).toBe(1);

            request.post({
                headers: headers,
                url: 'http://localhost:5000/api/bicicletas/delete',
                body: JSON.stringify(aBiciId)
            }, function(error, response, body) {
                expect(response.statusCode).toBe(204);
                expect(Bicicleta.allBicis.length).toBe(0);
                done();
            });
        });
    });

    describe ('POST BICICLETAS /update', () => {
        it('Status 200', (done) => {
            var headers = {'content-type' : 'application/json'};
            var a = new Bicicleta(10, 'rojo', 'urbana', [-34, -54]);
            Bicicleta.add (a);

            var headers = {'content-type' : 'application/json'};
            var updatedBici = { "id": a.id, "color": "verde", "modelo": "montaña", "lat":-33, "lng": -55};
            request.post({
                headers: headers,
                url: 'http://localhost:5000/api/bicicletas/update',
                body: JSON.stringify(updatedBici)
            }, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                var foundBici = Bicicleta.findById(10);
                expect(foundBici.id).toBe(10);
                expect(foundBici.color).toBe(updatedBici.color);
                expect(foundBici.modelo).toBe(updatedBici.modelo);
                expect(foundBici.ubicacion[0]).toBe(updatedBici.lat);
                expect(foundBici.ubicacion[1]).toBe(updatedBici.lng);
                done();
            });
        });
    });
    
});
