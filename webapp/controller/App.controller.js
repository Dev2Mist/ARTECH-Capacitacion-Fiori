sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("artech.capacitacion.fiori.controller.App", {
    onInit() {},

    goToHobbies: function () {
      // Obtenemos el router
      const oRouter = this.getOwnerComponent().getRouter();
      // Navegamos a la ruta definida en el manifest como "RouteHobbies"
      oRouter.navTo("RouteHobbies");
    },

    goToJob: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        
        oRouter.navTo("RouteJob", {company : "Artech"});
    },
  });
});
