sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/Image"
], function (MessageToast, Controller, JSONModel, Image) {
	"use strict";

	return Controller.extend("com.winslow.yve.newsfeed.Card", {
		onInit: function () {
			var that = this;
			var cardId = "com.winslow.yve.newsfeed";
			cardId = cardId.replace(/\./g, '/');
			var oImgModel = new JSONModel({
				Image_1: sap.ui.require.toUrl(cardId + "/images") + "/community_updates.jpg",
				Image_2: sap.ui.require.toUrl(cardId + "/images") + "/project_updates.jpg",
				Image_3: sap.ui.require.toUrl(cardId + "/images") + "/tream_updates.jpg",
			});
			this.getView().setModel(oImgModel, "images");
			// debugger
			var oCarousel = this.byId("carouselSample");
			oCarousel.destroyPages();
			var x = Object.keys(oImgModel.getData());
			for (var i = 1; i <= x.length; i++) {

				var iImageNumber = i + 1;

				oCarousel.addPage(new Image({
					src: "{images>/Image_" + i + "}",
					alt: "Example picture " + iImageNumber,
					densityAware: false,
					decorative: false,
					active: true, // 🔹 required for press
					press: this.onImagePress.bind(that)
				}));
			}
		},
		onImagePress: function () {
			// window.open("https://news.winslow.com.au/", "_blank");
			sap.m.URLHelper.redirect("https://news.winslow.com.au/", true);
		}

	});
});