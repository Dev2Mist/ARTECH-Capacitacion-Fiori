sap.ui.define(["sap/ui/core/UIComponent"], (UIComponent) => {
  "use strict";

  return UIComponent.extend("artech.capacitacion.fiori.Component", {
    metadata: {
      interfaces: ["sap.ui.core.IASyncContentCreation"],
      manifest: "json",
    },

    init() {
      UIComponent.prototype.init.apply(this, arguments);
    },
  });
});
