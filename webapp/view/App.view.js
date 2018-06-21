sap.ui.jsview("com.rizing.demo.mvc.view.App", {

		getControllerName : function() {
		return "com.rizing.demo.mvc.controller.App";
	},


	createContent : function(oController) {
	    
		oApp = new sap.m.App({
			initialPage: "masterPage"
		});
		
		var oPageMasterView = sap.ui.view("masterPage", {
			type: sap.ui.core.mvc.ViewType.XML,
			viewName: "com.rizing.demo.mvc.view.Master"
		});
		
		var oPageDetailView = sap.ui.view("detailPage", {
			type: sap.ui.core.mvc.ViewType.XML,
			viewName: "com.rizing.demo.mvc.view.Detail"
		});
		
		oApp.addPage(oPageMasterView);
		oApp.addPage(oPageDetailView);

		return oApp;
	}
});