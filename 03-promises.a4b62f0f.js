!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),a={form:document.querySelector(".form"),delayInp:document.querySelector('[name="delay"]'),stepInp:document.querySelector('[name="step"]'),amountInp:document.querySelector('[name="amount"]')};function u(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}a.form.addEventListener("submit",(function(n){n.preventDefault();for(var t=parseInt(a.amountInp.value),o=parseInt(a.delayInp.value),r=parseInt(a.stepInp.value),l=o,c=1;c<=t;c+=1)u(c,l).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),l+=r}))}();
//# sourceMappingURL=03-promises.a4b62f0f.js.map