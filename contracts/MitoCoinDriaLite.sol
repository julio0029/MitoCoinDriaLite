// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MitoCoinDriaLite {
	// Constructor
	// Set total nb of token
	// Read the total number of tokens

	uint256 public totalSupply;

	// Old way was function MitoCoinDriaLite ()
	constructor () public {
		totalSupply = 10000000;
	}
}
