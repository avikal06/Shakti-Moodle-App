cordova.define("cordova-plugin-moodleapp.moodleapp", function(require, exports, module) {
    "use strict";
(() => {
  // src/ts/plugins/SystemUI.ts
  var SystemUI = class {
    /**
     * Set navigation bar color.
     *
     * @param color Color.
     */
    async setNavigationBarColor(color) {
      await new Promise((resolve, reject) => {
        cordova.exec(resolve, reject, "SystemUI", "setNavigationBarColor", [color]);
      });
    }
  };

  // src/ts/index.ts
  var api = {
    systemUI: new SystemUI()
  };
  module.exports = api;
})();

});
