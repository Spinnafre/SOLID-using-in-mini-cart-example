import { CartType } from "./interfaces/CartType";

export class Product implements CartType{
    public name:string
    public price:number
    constructor(name:string,price:number){
        this.name=name
        this.price=price
    }
}
