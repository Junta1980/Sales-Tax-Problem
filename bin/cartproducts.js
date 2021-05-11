"use strict";
exports.__esModule = true;
exports.CartProduct = void 0;
var CartProduct = /** @class */ (function () {
    function CartProduct(product, quantity) {
        this._product = product;
        this._quantity = quantity;
    }
    CartProduct.prototype.getProduct = function () {
        return this._product;
    };
    CartProduct.prototype.getQuantity = function () {
        return this._quantity;
    };
    return CartProduct;
}());
exports.CartProduct = CartProduct;
