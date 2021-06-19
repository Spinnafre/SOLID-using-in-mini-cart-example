import { CartType } from "./CartType"
export interface ShoppingCartProtocol{
    cart:Readonly<CartType[]>
    total:number
    Discount:number
    totalWithDiscount():number
    addItem(item:CartType):void
    removeItem(index:number):void
    clear():void
    checkIsEmpty():boolean
}


