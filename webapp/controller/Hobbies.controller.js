sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";

    return Controller.extend("artech.capacitacion.fiori.controller.Hobbies", {
      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        // Si hay historial (venimos de otra página), usamos el historial del navegador
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          // Si no hay historial (ej: recargamos la página aquí), forzamos ir al Inicio
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("RouteApp", {}, true);
        }
      },
    });

})