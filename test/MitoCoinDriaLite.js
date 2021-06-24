var MitoCoinDriaLite = artifacts.require("MitoCoinDriaLite");

contract('MitoCoinDriaLite', function(accounts) {

	it('Sets the total supply upon deployment', function() {
		return MitoCoinDriaLite.deployed().then(function(instance) {
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply) {
			assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1M');
		});
	});

})