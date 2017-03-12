var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../dataStore');
var expect = chai.expect;

chai.use(chaiHttp);

describe('dataStore', function() {
  describe('/set?somekey=somevalue', function() {
    it('responds with 200', function(done) {
      chai.request(app)
        .post('/set?somekey=somevalue')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('/get?key=somekey', function() {
    it('responds with 200', function(done) {
      chai.request(app)
        .post('/set?somekey=somevalue')
        .then(function() {
          chai.request(app)
            .get('/get?key=somekey')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(res.text).to.equal('somevalue');
              done();
            });
        });
    });
  });
});
