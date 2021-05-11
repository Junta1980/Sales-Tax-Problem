"use strict";
exports.__esModule = true;
exports.Cart = void 0;
var cartproducts_1 = require("./cartproducts");
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.addTochart = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this._items.push(new cartproducts_1.CartProduct(product, quantity));
        return this;
    };
    Cart.prototype.getItmes = function () {
        return this._items;
    };
    return Cart;
}());
exports.Cart = Cart;
