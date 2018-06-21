sap.ui.jsview("com.rizing.demo.mvc.view.App", {

		getControllerName : function() {
		return "com.rizing.demo.mvc.controller.App";
	},


	createContent : function(oController) {
	    
		oApp = new sap.m.SplitApp();
		
		var oPageMasterView = sap.ui.view("masterPage", {
			type: sap.ui.core.mvc.ViewType.XML,
			viewName: "com.rizing.demo.mvc.view.Master"
		});
		
		//oPageMasterView.getController().nav = this.getController();
		
		oApp.addMasterPage(oPageMasterView);
		oApp.setInitialMaster("masterPage");
		
		var oPageDetailView = sap.ui.view("detailPage", {
			type: sap.ui.core.mvc.ViewType.XML,
			viewName: "com.rizing.demo.mvc.view.Detail"
		});
		
		//oPageDetailView.getController().nav = this.getController();
		
		
		oApp.addDetailPage(oPageDetailView);
		oApp.setInitialDetail("detailPage");

		return oApp;
	}
});