sap.ui.jsview("com.rizing.demo.mvc.view.Detail", {

		getControllerName : function() {
		return "com.rizing.demo.mvc.controller.Detail";
	},


	createContent : function(oController) {
	    
	    var oObjectHeader = new sap.m.ObjectHeader({
			title: "{CompanyName}",
			number: "BusinessPartnerID: {BusinessPartnerID}",
			attributes: [
				new sap.m.ObjectAttribute({
					text: "{Address/Street}"
				}),
				new sap.m.ObjectAttribute({
					text: "{Address/City}"
				}),
				new sap.m.ObjectAttribute({
					text: "{Address/Country}"
				})
			]
		});
		
 		return new sap.m.Page({
			title: "Business Partner Detail",
			showNavButton: true,
			navButtonPress: [oController.onNavPress, oController],
			content: [oObjectHeader]
		});

	}
});