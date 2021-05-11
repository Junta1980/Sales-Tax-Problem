import { Types } from "./model";
import { Product } from "./Product";


export class CalcTaxes{

   calcProductTax(product : Product){
    const  totalTax = (
      +this.calcTax(product.getType(),product.getPrice()).toFixed(2)  +
      +this.calcIportendTax(product.getPrice(),product.getImportax()).toFixed(2)
     )
     const totalTaxRound = this.roundtax(totalTax , 0.05)
     return totalTaxRound
      
   }

  private calcTax( type: Types, price: number): number{
    return [ Types.BOOK,Types.MEDICAL,Types.FOOD].indexOf(type) !== -1 ? 0.0 : price * 0.10
  }

   private calcIportendTax(price: number , imported: boolean): number{
    return imported ?  price * 0.05  : 0;
   }

   private roundtax = (number: number, precision: number): number => {
    return (Math.ceil(number / precision) * precision);
  }
}

