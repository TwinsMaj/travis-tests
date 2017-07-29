/*(function(exports) {*/

	var logger = require('./logger.js');

	function Play(name) {
		this.name = name || "maja";
	}

	

	Play.prototype.greets = function(target) {
		if(!target) {
			logger.error("cannot find target");
			return;
		}

		logger.info(this.name + " greets " + target);
	}

	Play.prototype.lateGreeting = function(target, cb) {
		// igboro...
		var that = this;

		setTimeout(function(){

			try {
				cb(null, that.greets(target));

			} catch(err) {
				cb(err);
			}

		}, 1000)
	}

	module.exports = Play;

/*})(module.exports);*/





