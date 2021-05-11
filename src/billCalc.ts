import { Bill } from "./bill";
import { CalcTaxes } from "./calcTaxes";
import { Cart } from "./cart";
import { CartProduct } from "./cartproducts";

export class BillCalc {

    private calcTaxes: CalcTaxes

    constructor(calcTaxes : CalcTaxes){
        this.calcTaxes = calcTaxes;
    }

    cretate(cart: Cart): Bill {
      return  cart.getItmes().reduce( (bill: Bill, cart: CartProduct ) => {
            const product = cart.getProduct()
            const quantity = cart.getQuantity()
            const tax = this.calcTaxes.calcProductTax(product)
            return bill.addToBill({product,tax,quantity})
        },
            new Bill());
    }

    billPrintable(bill : Bill){
        let printablebill = []
        let totalPrice : number = 0;
        let totalTax : number = 0;
        bill.getBill().forEach( elment => {
            printablebill.push(
            elment.quantity + ' ' +
            (elment.product.getImportax() ? 'imported ' : '') +
            elment.product.getName() + ': ' +
            elment.totalPrice.toFixed(2))
            totalPrice += elment.totalPrice
            totalTax += elment.quantity * elment.tax
        });
        printablebill.push('Sales Taxes: ' + totalTax.toFixed(2))
        printablebill.push('Total: ' + totalPrice.toFixed(2))  
        return printablebill      
    }

}