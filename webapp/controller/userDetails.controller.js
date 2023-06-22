sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.uniEmamidemo.controller.userDetails", {
		onInit: function() {
			//var usersModel = new sap.ui.model.json.JSONModel("model/users.json");
			//this.getView().setModel(usersModel, "usersModel");
			if (!this.valueHepForNewUser)
				this.valueHepForNewUser = new sap.ui.xmlfragment("com.uniEmamidemo.fragments.valueHepForNewUser", this);
			this.getView().addDependent(this.valueHepForNewUser);
			var todayDate = new Date().toDateString();
			var todayTime = new Date().toLocaleTimeString();
			this.getView().byId("dateTextUser").setText(todayDate);
			this.getView().byId("timeTextUser").setText(todayTime);
			this.handleTimeEvent();
		},
		handleTimeEvent: function() {
			var that = this;
			var todayTime = new Date().toLocaleTimeString();
			this.getView().byId("timeTextUser").setText(todayTime);
			window.setTimeout(function() {
				that.handleTimeEvent();
			});
		},
		handleSearch: function(evt) {
			var searchString = evt.getParameter("newValue");
			if (searchString.length == 0) {
				var filters = [];
			} else {
				var filter1 = new sap.ui.model.Filter("firstName", "Contains", searchString);
				var filter2 = new sap.ui.model.Filter("lastName", "Contains", searchString);
				var filters = new sap.ui.model.Filter([filter1, filter2], false);
			}
			this.getView().byId("usersTableId").getBinding("items").filter(filters);
		},
		handleNavButtonPress: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("secondImage");
		},
		handleAddNewCustomer: function() {
			this.valueHepForNewUser.open();
		},
		handleUserCancelPress: function() {
			this.valueHepForNewUser.close();
		},
		handleAddUsersDataPress: function() {
			this.valueHepForNewUser.close();
		}
	});
});