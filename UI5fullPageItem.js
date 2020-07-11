sap.ui.define(
  ['sap/ui/core/Control'],
  function (Control) {

    return Control.extend("${PATH/TO/YOUR/CONTROL/}.UI5fullPageItem", {
      metadata: {
        properties: {},
        aggregations : {
          "contents" : {
            "type":"sap.ui.core.Control",
            "multiple":true,
            "singularName":"content"
          }
        },
        defaultAggregation: "contents"
      },

      renderer: function (oRm, oControl) {
        oRm.write('<div class="section"');
        oRm.writeControlData(oControl);
        oRm.write(">");
        $.each(oControl.getContents(),function(key,value){
          oRm.renderControl(value);
        });
        oRm.write("</div>");
      },

      onAfterRendering: function () {
        if (sap.ui.core.Control.prototype.onAfterRendering) {
          sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments);
        }
      },

    });
  });
