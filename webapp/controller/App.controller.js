sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
],
  
  (Controller, MessageToast) => {
  "use strict";

  return Controller.extend("artech.capacitacion.fiori.controller.App", {
    onMostrarSaludo() {

      const input = this.getView().byId("inputUsuario");

      if (input.getValue().length === 0) MessageToast.show("¡Has ingresado un input vacío!");
      else {
        MessageToast.show(`Hola ${input.getValue()}`);
      }

    }
  });
});
