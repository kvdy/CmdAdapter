"use strict";

let contextPath = process.cwd();
let _ = require('underscore');
let Bindable = require('bindable.js');

class CmdAdapter extends Bindable {

	constructor(request) {
		 super();

		if(_.isEmpty(request)) {
			console.log('Request object is required and must be defined.');
		}
		this.request = request;
		this.warningMessages = [];

	}

	_init() {
		console.log('Initializing the CmdAdapter');
		console.log('CmdAdapter Input => ' + this.request);
		return this.request;
	}

}

module.exports = CmdAdapter;
