sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	return Controller.extend("com.rizing.demo.mvc.controller.Master", {
		
		onInit: function() {
			// Create JSon Model
			var oModel = new JSONModel("model/data.json");
			this.getOwnerComponent().setModel(oModel);
		},
		
		onNavDetail: function(oEvent) {
			var oContext = oEvent.getSource().getBindingContext();
			
			var sPageId = "detailPage";
			//oApp.to(sPageId, oContext);

			var oPage = oApp.getPage(sPageId);
			
			oPage.setBindingContext(oContext); 

		}
	});
});