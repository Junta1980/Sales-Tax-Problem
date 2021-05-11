import {Types , Prod} from "./model"

export class Product {
    private _name: string;
    private _price: number;
    private _type: Types;
    private _importax: boolean;

    constructor ({name, price, type, importax }: Prod) {
        this._name = name;
        this._price = price;
        this._type = type || Types.OTHER;
        this._importax = importax || false;

    }

    getName(): string {
        return this._name;
    }

    getPrice(): number {
        return this._price;
    }

    getType (): Types {
        return this._type;
    }

    getImportax(): boolean{
        return this._importax
    }
}