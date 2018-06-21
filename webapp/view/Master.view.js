sap.ui.jsview("com.rizing.demo.mvc.view.Master", {

	
	getControllerName : function() {
		return "com.rizing.demo.mvc.controller.Master";
	},

	createContent : function(oController) {
	    
	    // Create JSon Model
			var oModel = new sap.ui.model.json.JSONModel();
			//oModel.setData(oData);
			oModel.loadData("../model/data.json");
			
			sap.ui.getCore().setModel(oModel);

			// Bind model to UI5 Core
			var aColumns = [ 
				new sap.m.Column({
					header : new sap.m.Text({
						text : "BusinessPartnerID"
					})
				}),
				new sap.m.Column({
					header : new sap.m.Text({
						text : "CompanyName"
					})
				})
			];

			var oTemplate = new sap.m.ColumnListItem({
				type: "Navigation",
				cells : [
					new sap.m.ObjectIdentifier({
						text : "{BusinessPartnerID}"
					}),
					new sap.m.ObjectIdentifier({
						text : "{CompanyName}"
					})
				],
				press: [oController.onNavDetail, oController]
			});

			var oTableHeader = new sap.m.Toolbar({
				content : [
					new sap.m.Title({
						text : "Number of Business Partners: {/Count}"
					})
				]
			});

			var oTable = new sap.m.Table({
				columns : aColumns,
				headerToolbar : oTableHeader
			});

			oTable.bindItems("/BusinessPartners", oTemplate); 
			
			return oTable;
	}
});