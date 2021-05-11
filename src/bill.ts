import { BillItem } from "./model"
export class Bill {
    private bills: BillItem[] = [];

    private calcPrice (bill: BillItem): number {
        return (bill.product.getPrice() + bill.tax) * bill.quantity;
    }

    addToBill ( bill: BillItem): this {
        bill.totalPrice = this.calcPrice(bill);
        this.bills.push(bill);
        return this;
    }

    getBill(){
        return this.bills
    }

}