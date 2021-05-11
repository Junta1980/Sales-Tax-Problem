"use strict";
exports.__esModule = true;
exports.Bill = void 0;
var Bill = /** @class */ (function () {
    function Bill() {
        this.bills = [];
    }
    Bill.prototype.calcPrice = function (bill) {
        return (bill.product.getPrice() + bill.tax) * bill.quantity;
    };
    Bill.prototype.addToBill = function (bill) {
        bill.totalPrice = this.calcPrice(bill);
        this.bills.push(bill);
        return this;
    };
    Bill.prototype.getBill = function () {
        return this.bills;
    };
    return Bill;
}());
exports.Bill = Bill;
