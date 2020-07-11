sap.ui.define(
  ['sap/ui/core/Control'],
  // eslint-disable-next-line strict
  function (Control) {

    return Control.extend("${PATH/TO/YOUR/CONTROL/}.fullPage", {
      metadata: {
        properties: {},
        aggregations : {
          "elements" : {
            "type":"friscas.dev.control.fullPageItem",
            "multiple":true,
            "singularName":"element"
          }
        },
        defaultAggregation : "elements",
      },

      renderer: function (oRm, oControl) {
        oRm.write('<div fullpage="full-page"');
        oRm.writeControlData(oControl);
        oRm.write(">");
        $.each(oControl.getElements(),function(key,value){
          oRm.renderControl(value);
        });
        oRm.write("</div>");
      },

      onAfterRendering: function () {
        if (sap.ui.core.Control.prototype.onAfterRendering) {
          sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments);
        }
        var eFullPage = document.querySelector('[fullpage="full-page"]');
        new fullpage(eFullPage, {
          licenseKey : "I_NEED_A_KEY"
          navigation : true,
          autoScrolling : true
        });
      },

    });
  });
