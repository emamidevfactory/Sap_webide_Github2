sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.uniEmamidemo.controller.firstImage", {
		onInit:function(){
		},
		handleNavButtonPress: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("welcome");
		}
	});
});