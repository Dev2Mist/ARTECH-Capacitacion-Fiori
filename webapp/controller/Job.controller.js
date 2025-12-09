sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History", // Necesario para el botón volver
    "sap/ui/core/UIComponent", // Necesario para llamar al Router
  ],
  function (Controller, JSONModel, History, UIComponent) {
    "use strict";

    return Controller.extend("artech.capacitacion.fiori.controller.Job", {

      onInit: function () {
        // Obtenemos el router de la app
        var oRouter = UIComponent.getRouterFor(this);

        // Nos "suscribimos" a la ruta "RouteJob".
        // Cuando alguien entre aquí, se ejecuta la función _onRouteMatched
        oRouter
          .getRoute("RouteJob")
          .attachPatternMatched(this._onRouteMatched, this);
      },

      _onRouteMatched: function (oEvent) {
        // Capturamos el dato "company" de la URL
        var sCompany = oEvent.getParameter("arguments").company;

        // Creamos un modelo JSON local solo para esta vista
        var oModel = new JSONModel({
          companyName: sCompany,
        });

        // Asignamos el modelo a la vista con el nombre "job"
        this.getView().setModel(oModel, "job");
      },

      //TODO: Falta agregar la funcionalidad para volver atras
      onNavBack: function() { 
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        // Si hay historial (venimos de otra página), usamos el historial del navegador
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          // Si no hay historial (ej: recargamos la página aquí), forzamos ir al Inicio
          //TODO: Falta completar la funcionalidad de regresar
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("AppRoot", {}, true);
        }

      }

    });
  }
);
