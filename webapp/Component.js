sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("com.rizing.demo.mvc.Component", {

		createContent: function() {
			UIComponent.prototype.createContent.apply(this, arguments);
			
			var oRootView = sap.ui.view({
				type: sap.ui.core.mvc.ViewType.JS,
				viewName: "com.rizing.demo.mvc.view.App"
			});
	
			return oRootView; 
		}
	});
});