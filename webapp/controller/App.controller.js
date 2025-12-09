sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("artech.capacitacion.fiori.controller.App", {
        onInit() {
        },

        goToHobbies: function() {
            // Obtenemos el router
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // Navegamos a la ruta definida en el manifest como "RouteHobbies"
            oRouter.navTo("RouteHobbies");
        }

    });
});