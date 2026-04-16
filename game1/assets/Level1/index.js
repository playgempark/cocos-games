System.register("chunks:///_virtual/Level1",["./PartyMarkCmp.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PartyMarkCmp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GlobalTmpData.ts"],(function(t){"use strict";var r,n,o,a,e;return{setters:[function(t){r=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,a=t.Component},function(t){e=t.GlobalTmpData}],execute:function(){var i;n._RF.push({},"b204bbyixNMxK2nyvyvs0g8","PartyMarkCmp",void 0);var s=o.ccclass;o.property,t("PartyMarkCmp",s("PartyMarkCmp")(i=function(t){function n(){return t.apply(this,arguments)||this}return r(n,t),n.prototype.onEnable=function(){var t=this;setTimeout((function(){e.PartyInfo.partyMark.set(t.node.worldPosition)}),0)},n}(a))||i);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/Level1', 'chunks:///_virtual/Level1'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});