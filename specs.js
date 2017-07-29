var chai	= require('chai'),
	Play    = require('./play.js'),
	sinon	= require('sinon'),
	logger 	= require('./logger.js')
	assert 	= chai.assert,
	expect	= chai.expect;


describe("Play Libray", function() {
	
	describe("#constructor", function() {
		var play = new Play()

		it("should return a default name if no name is passed", function() {
			expect(play.name).to.be.equal("maja");
		})

		it("should return a name if passed", function() {
			play = new Play("Oyin");
			//expect(play.name).to.be.equal("Oyin");
			assert.equal(play.name, "Oyin");
		})

	});

	describe("#greets", function() {

		var play, sandbox, info, error;

		before(function() {
			play = new Play("Tunde");
			sandbox 	= sinon.sandbox.create(),
			info 		= sandbox.stub(logger, "info"),
			error 		= sandbox.stub(logger, "error");
		})

		afterEach(function() {
			info.reset();
			error.reset();
			sinon.sandbox.reset();
		})

		it("should throw an error if target is not passed", function() {
			play.greets();

			sinon.assert.calledOnce(error);
			sinon.assert.calledWithExactly(error, "cannot find target");
			sinon.assert.notCalled(info);
		})

		xit("should return a mesage when target is passed", function() {
			play.greets("Olumide")

			sinon.assert.calledOnce(info);
			sinon.assert.calledWithExactly(info, "Tunde greets Olumide");
			sinon.assert.notCalled(error);
		})
	})
	describe("#lateGreet", function() {
		var play;

		before(function() {
			play = new Play();
		}) 

		it("should throw an error if the target is not passed", function(done) {
			play.lateGreeting(null, function(err, val) {
				expect(err).to.be.an.instanceof(Error);
				done();
			})
		})

		xit("should return a value that matches the target", function(done) {
			play.lateGreeting("Ade", function(err, val) {
				expect(val).to.be.equal("maja greets Ade")
				done();
			})
		})
	})
	

})