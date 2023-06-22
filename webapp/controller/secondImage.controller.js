sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.uniEmamidemo.controller.secondImage", {
		onInit: function() {
			var todayDate = new Date().toDateString();
			var todayTime = new Date().toLocaleTimeString();
			this.getView().byId("dateText").setText(todayDate);
			this.getView().byId("timeText").setText(todayTime);
			if (!this.popoverForUserMenu)
				this.popoverForUserMenu = new sap.ui.xmlfragment("com.uniEmamidemo.fragments.popoverForUserMenu", this);
			this.getView().addDependent(this.popoverForUserMenu);
			//var chartModel = new sap.ui.model.json.JSONModel("model/charts.json");
			//this.getView().setModel(chartModel, "chartModel");
			this.handleTimeEvent();
		},
		handleTimeEvent: function() {
			var that = this;
			var todayTime = new Date().toLocaleTimeString();
			this.getView().byId("timeText").setText(todayTime);
			window.setTimeout(function(){
				that.handleTimeEvent();
			});
		},
		onAfterRendering: function() {
			/*var oVizFrame = this.getView().byId("oVizFrame");
			oVizFrame.setVizProperties({
				title: {
					visible: false,
					text: 'Revenue by City and Store Name'
				}
			});*/
		},
		handleNavButtonPress: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("welcome");
		},
		handleUserProfilePress: function(evt) {
			this.popoverForUserMenu.openBy(evt.getSource());
		},
		handleNavigationItemPress: function(evt) {
			if (evt.getParameter("item").getText() == "Users") {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("userDetails");
			}
		}
	});
});