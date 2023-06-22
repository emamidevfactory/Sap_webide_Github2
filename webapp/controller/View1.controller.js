sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.uniEmamidemo.controller.View1", {
		onAfterRendering: function() {
			/*var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("userDetails");*/
		},
		onLoginPress: function() {
			var oModel = this.getView().getModel();
			var username = this.getView().byId("username").getValue();
			var password = this.getView().byId("password").getValue();
			// Validate username and password
			if (username === "admin" && password === "123456") {
				// Successful authentication
				sap.m.MessageToast.show("LoggedIn Successfully");
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("welcome"); // Navigate to the welcome screen
			} else {
				MessageBox.error("Please enter the valid credentails");
				// Invalid credentials
				// Show error message or perform other actions
			}
		},
		onForgotPasswordPress: function() {
			this.getView().byId("loginForm").setVisible(false);
			this.getView().byId("forgotPasswordForm").setVisible(true);
			this.getView().byId("confirmPasswordForm").setVisible(false);
		},
		onBacktoSigninPress: function() {
			this.getView().byId("loginForm").setVisible(true);
			this.getView().byId("forgotPasswordForm").setVisible(false);
			this.getView().byId("confirmPasswordForm").setVisible(false);
		},
		onChangePasswordPress:function(){
			this.getView().byId("loginForm").setVisible(false);
			this.getView().byId("forgotPasswordForm").setVisible(false);
			this.getView().byId("confirmPasswordForm").setVisible(true);
		},
		onGenerateOTPPress: function() {
			this.getView().byId("otp").setVisible(true);
			this.getView().byId("generateOTP").setVisible(false);
			this.getView().byId("loginButton").setVisible(true);
			MessageBox.success("OTP generated successfully and sent to the mobile");
		},
		onConfirmLoginPress: function() {
			this.getView().byId("otp").setVisible(false);
			this.getView().byId("generateOTP").setVisible(true);
			this.getView().byId("loginButton").setVisible(false);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("welcome");
			sap.m.MessageToast.show("LoggedIn Successfully");
		},
	});
});