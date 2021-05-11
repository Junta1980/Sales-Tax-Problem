"use strict";
exports.__esModule = true;
exports.BillCalc = void 0;
var bill_1 = require("./bill");
var BillCalc = /** @class */ (function () {
    function BillCalc(calcTaxes) {
        this.calcTaxes = calcTaxes;
    }
    BillCalc.prototype.cretate = function (cart) {
        var _this = this;
        return cart.getItmes().reduce(function (bill, cart) {
            var product = cart.getProduct();
            var quantity = cart.getQuantity();
            var tax = _this.calcTaxes.calcProductTax(product);
            return bill.addToBill({ product: product, tax: tax, quantity: quantity });
        }, new bill_1.Bill());
    };
    BillCalc.prototype.billPrintable = function (bill) {
        var printablebill = [];
        var totalPrice = 0;
        var totalTax = 0;
        bill.getBill().forEach(function (elment) {
            printablebill.push(elment.quantity + ' ' +
                (elment.product.getImportax() ? 'imported ' : '') +
                elment.product.getName() + ': ' +
                elment.totalPrice.toFixed(2));
            totalPrice += elment.totalPrice;
            totalTax += elment.quantity * elment.tax;
        });
        printablebill.push('Sales Taxes: ' + totalTax.toFixed(2));
        printablebill.push('Total: ' + totalPrice.toFixed(2));
        return printablebill;
    };
    return BillCalc;
}());
exports.BillCalc = BillCalc;
