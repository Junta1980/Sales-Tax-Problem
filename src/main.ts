import { Cart } from "./cart";
import { Product } from "./Product";
import {Types} from "./model"
import { BillCalc } from "./billCalc";
import { CalcTaxes } from "./calcTaxes";
import { Bill } from "./bill";

let cart = new Cart()
    .addTochart(new Product({ name: 'book', price: 12.49, type: Types.BOOK }), 2)
    .addTochart(new Product({ name: 'music CD', price: 14.99, type: Types.OTHER }))
    .addTochart(new Product({ name: 'chocolate bar', price: 0.85, type: Types.FOOD }));

    
let calcTax = new CalcTaxes()
let billCalc = new BillCalc(calcTax);
let bill = billCalc.cretate(cart)
billCalc.billPrintable(bill).forEach(
    item => console.log(item)
)

console.log('------------------------------')

cart = new Cart()
    .addTochart(new Product({ name: 'bottle of chocolates', price: 10.00, type: Types.FOOD, importax : true  }))
    .addTochart(new Product({ name: 'bottle of perfume', price: 47.50, type: Types.OTHER, importax : true }))

calcTax = new CalcTaxes()
billCalc = new BillCalc(calcTax);
bill = billCalc.cretate(cart)
billCalc.billPrintable(bill).forEach(
    item => console.log(item)
)
console.log('------------------------------')
cart = new Cart()
    .addTochart(new Product({ name: 'bottle of perfume', price: 27.99, type: Types.OTHER, importax : true  }))
    .addTochart(new Product({ name: 'bottle of perfume', price: 18.99, type: Types.OTHER }))
    .addTochart(new Product({ name: 'packet of headache pills', price: 9.75, type: Types.MEDICAL}))
    .addTochart(new Product({ name: 'box of imported chocolates', price: 11.25, type: Types.FOOD,importax : true }) ,3);

calcTax = new CalcTaxes()
billCalc = new BillCalc(calcTax);
bill = billCalc.cretate(cart)
billCalc.billPrintable(bill).forEach(
    item => console.log(item)
)
console.log('------------------------------')