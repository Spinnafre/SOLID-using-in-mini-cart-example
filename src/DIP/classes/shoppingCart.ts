import { CartType } from "./interfaces/CartType"
import {Discounts} from '../services/Discount'
import {ShoppingCartProtocol} from './interfaces/CartProtocol'
export class ShoppingCart implements ShoppingCartProtocol{
    private readonly _cartList:CartType[]=[]
    public readonly _Discount:Discounts

    constructor(Discount:Discounts){
        this._Discount=Discount
    }

    get cart():Readonly<CartType[]>{
        return this._cartList
    }
    get Discount():number{
        return this._Discount.percent
    }
    get total():number{
        return this.cart.reduce((t,n)=>{
            return t+=n.price
        },0)
    }
    totalWithDiscount():number{
        return this._Discount.calculateDiscount(this.total)
    }
    addItem(item:CartType){
        this._cartList.push(item)
    }
    removeItem(index:number){
        this._cartList.splice(index,1)
    }
    clear(){
        this._cartList.length=0
    }

    //
    checkIsEmpty():boolean{
        if(!this.cart.length){
            return true
        }
        return false
    }


}


