sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
],
  
  (Controller, MessageToast) => {
  "use strict";

  return Controller.extend("artech.capacitacion.fiori.controller.App", {
    onMostrarSaludo() {

      // Obtengo la vista asociada al controlador
      const oView = this.getView();

      // Ahora, de esa vista obtengo el elemento con ID inputUsuario
      const oInput = oView.byId("inputUsuario");

      const sInput = oInput.getValue();

      // Si el "value" del input ingresado por el usuario tiene un lenght === 0...
      if (sInput.length > 0) {
        // Convoco al objeto MessageToast y muestro por pantalla el mensaje
        MessageToast.show(`Hola ${sInput}, bienvenido a mi aplicación UI5 :)`);
      } else {
        // Convoco al objeto MessageToast que pase por parametro a la arrow function y utilizo el método show para mostrar un mensaje por pantalla
        MessageToast.show("¡Has ingresado un input vacío!");
      }

    }
  });
});
