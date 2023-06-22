sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.uniEmamidemo.controller.welcome", {
		onInit: function() {},

		onAfterRendering: function() {
			var that = this;
			this.getView().byId("firstVboxId").addEventDelegate({
				onclick: function(evt) {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
					oRouter.navTo("firstImage");
				}
			});
			this.getView().byId("secondVboxId").addEventDelegate({
				onclick: function(evt) {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
					oRouter.navTo("secondImage");
				}
			});
		},
		handleNavButtonPress: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View1");
		},
		handleFirstImagePress: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("firstImage");
		},
		handleSecondImagePress: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("secondImage");
		},
	});
});