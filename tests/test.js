'use strict';

var expect = require('chai').expect;
var CmdAdapter = require('../index');

describe('#cmdAdapter', function() {
	it('should print', function() {
		var cmdAdapter = new CmdAdapter('Hello');
		var result = cmdAdapter._init();
		expect(result).to.equal('Hello');
	});
});