/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsapktlist/listofholidays/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
