sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/Image"
], function (MessageToast, Controller, JSONModel, Image) {
	"use strict";

	return Controller.extend("com.winslow.yve.newsfeed.Card", {
		onInit: function () {
			var cardId = "com.winslow.yve.newsfeed";
			cardId = cardId.replace(/\./g, '/');
			var oImgModel = new JSONModel({
				// Image_1 : sap.ui.require.toUrl(cardId + "/images") + "/Newfeed3.png",
				// Image_2 : sap.ui.require.toUrl(cardId + "/images") + "/Newfeed2.png",
				// Image_3 : sap.ui.require.toUrl(cardId + "/images") + "/Newsfeed1.png",
				// Image_4 : sap.ui.require.toUrl(cardId + "/images") + "/Newfeed4.png",
				// Image_5 : sap.ui.require.toUrl(cardId + "/images") + "/Newfeed5.png",

				Image_1: sap.ui.require.toUrl(cardId + "/images") + "/community_updates.jpg",
				Image_2: sap.ui.require.toUrl(cardId + "/images") + "/project_updates.jpg",
				Image_3: sap.ui.require.toUrl(cardId + "/images") + "/tream_updates.jpg",
			});
			this.getView().setModel(oImgModel, "images");
			debugger
			var oCarousel = this.byId("carouselSample");
			oCarousel.destroyPages();
			var x = Object.keys(oImgModel.getData());
			for (var i = 1; i <= x.length; i++) {

				var iImageNumber = i + 1;

				oCarousel.addPage(new Image({
					src: "{images>/Image_" + i + "}",
					alt: "Example picture " + iImageNumber,
					densityAware: false,
					decorative: false
				}));
			}
		}
	});
});