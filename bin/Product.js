"use strict";
exports.__esModule = true;
exports.Product = void 0;
var model_1 = require("./model");
var Product = /** @class */ (function () {
    function Product(_a) {
        var name = _a.name, price = _a.price, type = _a.type, importax = _a.importax;
        this._name = name;
        this._price = price;
        this._type = type || model_1.Types.OTHER;
        this._importax = importax || false;
    }
    Product.prototype.getName = function () {
        return this._name;
    };
    Product.prototype.getPrice = function () {
        return this._price;
    };
    Product.prototype.getType = function () {
        return this._type;
    };
    Product.prototype.getImportax = function () {
        return this._importax;
    };
    return Product;
}());
exports.Product = Product;
