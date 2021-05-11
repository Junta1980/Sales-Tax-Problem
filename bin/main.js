"use strict";
exports.__esModule = true;
var cart_1 = require("./cart");
var Product_1 = require("./Product");
var model_1 = require("./model");
var billCalc_1 = require("./billCalc");
var calcTaxes_1 = require("./calcTaxes");
var cart = new cart_1.Cart()
    .addTochart(new Product_1.Product({ name: 'book', price: 12.49, type: model_1.Types.BOOK }), 2)
    .addTochart(new Product_1.Product({ name: 'music CD', price: 14.99, type: model_1.Types.OTHER }))
    .addTochart(new Product_1.Product({ name: 'chocolate bar', price: 0.85, type: model_1.Types.FOOD }));
var calcTax = new calcTaxes_1.CalcTaxes();
var billCalc = new billCalc_1.BillCalc(calcTax);
var bill = billCalc.cretate(cart);
billCalc.billPrintable(bill).forEach(function (item) { return console.log(item); });
console.log('------------------------------');
cart = new cart_1.Cart()
    .addTochart(new Product_1.Product({ name: 'bottle of chocolates', price: 10.00, type: model_1.Types.FOOD, importax: true }))
    .addTochart(new Product_1.Product({ name: 'bottle of perfume', price: 47.50, type: model_1.Types.OTHER, importax: true }));
calcTax = new calcTaxes_1.CalcTaxes();
billCalc = new billCalc_1.BillCalc(calcTax);
bill = billCalc.cretate(cart);
billCalc.billPrintable(bill).forEach(function (item) { return console.log(item); });
console.log('------------------------------');
cart = new cart_1.Cart()
    .addTochart(new Product_1.Product({ name: 'bottle of perfume', price: 27.99, type: model_1.Types.OTHER, importax: true }))
    .addTochart(new Product_1.Product({ name: 'bottle of perfume', price: 18.99, type: model_1.Types.OTHER }))
    .addTochart(new Product_1.Product({ name: 'packet of headache pills', price: 9.75, type: model_1.Types.MEDICAL }))
    .addTochart(new Product_1.Product({ name: 'box of imported chocolates', price: 11.25, type: model_1.Types.FOOD, importax: true }), 3);
calcTax = new calcTaxes_1.CalcTaxes();
billCalc = new billCalc_1.BillCalc(calcTax);
bill = billCalc.cretate(cart);
billCalc.billPrintable(bill).forEach(function (item) { return console.log(item); });
console.log('------------------------------');
