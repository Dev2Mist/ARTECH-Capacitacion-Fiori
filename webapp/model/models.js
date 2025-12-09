sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "artech/capacitacion/fiori/model/models"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createProfileModel: async function () {
            const response = await fetch("../model/data.json");
            const profile = await response.json();

            const oModel = new JSONModel(profile);

            console.log(oModel)
            return oModel;
        }


    };

});