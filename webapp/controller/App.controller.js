sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("artech.capacitacion.fiori.controller.App", {
    onInit() {},

    onLinkImage: function (oEvent) {
      // 1. Obtenemos el ID del control que fue clickeado
            const sControlId = oEvent.getSource().getId();
            let sUrl = "";

            // 2. Verificamos si el ID contiene la palabra "GitHub" o "Linkedin"
            // (Usamos .includes() porque UI5 a veces agrega prefijos largos al ID)
            if (sControlId.includes("appImageGitHub")) {
                sUrl = "https://github.com/Dev2Mist";
            } 
            else if (sControlId.includes("appImageLinkedin")) {
                // ¡IMPORTANTE! Siempre usa https:// al principio, si no fallará.
                sUrl = "https://www.linkedin.com/in/benjaminborges";
            }

            // 3. Abrimos la URL en una nueva pestaña ("_blank")
            if (sUrl) {
                window.open(sUrl, "_blank");
            }
    },

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
