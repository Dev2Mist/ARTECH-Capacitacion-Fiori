sap.ui.define(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
  "use strict";

  new ComponentContainer({
    name: "artech.capacitacion.fiori",

    settings: {
      id: "fiori",
    },

    async: true,
  }).placeAt("content");
});
