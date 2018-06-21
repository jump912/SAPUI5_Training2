sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	return Controller.extend("com.rizing.demo.mvc.controller.Detail", {
		
		onInit: function() {
			// Create JSon Model
			var oModel = new JSONModel("model/data.json");
			this.getOwnerComponent().setModel(oModel);
			
			// Try to display the first object if exist
			var oContext = oModel.createBindingContext("/BusinessPartners/0");
			this.getOwnerComponent().setBindingContext(oContext); 
		}
		
	});
});