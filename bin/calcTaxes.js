"use strict";
exports.__esModule = true;
exports.CalcTaxes = void 0;
var model_1 = require("./model");
var CalcTaxes = /** @class */ (function () {
    function CalcTaxes() {
        this.roundtax = function (number, precision) {
            return (Math.ceil(number / precision) * precision);
        };
    }
    CalcTaxes.prototype.calcProductTax = function (product) {
        var totalTax = (+this.calcTax(product.getType(), product.getPrice()).toFixed(2) +
            +this.calcIportendTax(product.getPrice(), product.getImportax()).toFixed(2));
        var totalTaxRound = this.roundtax(totalTax, 0.05);
        return totalTaxRound;
    };
    CalcTaxes.prototype.calcTax = function (type, price) {
        return [model_1.Types.BOOK, model_1.Types.MEDICAL, model_1.Types.FOOD].indexOf(type) !== -1 ? 0.0 : price * 0.10;
    };
    CalcTaxes.prototype.calcIportendTax = function (price, imported) {
        return imported ? price * 0.05 : 0;
    };
    return CalcTaxes;
}());
exports.CalcTaxes = CalcTaxes;
