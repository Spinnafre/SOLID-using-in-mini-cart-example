type CartType={name:string,price:number}
export class Cart{
    private readonly _cartList:CartType[]=[]
    private orderStatus:'open'|'closed'='open'
    get cart():Readonly<CartType[]>{
        return this._cartList
    }

    get total():number{
        return this.cart.reduce((t,n)=>{
            return t+=n.price
        },0)
    }
    addItem(item:CartType){
        this._cartList.push(item)
    }
    removeItem(index:number){
        this._cartList.splice(index,1)
    }
    checkIsEmpty():boolean{
        if(!this.cart.length){
            return true
        }
        return false
    }
    clear(){
        this._cartList.length=0
    }
    sendMessage(msg:string){
        console.log(msg)
    }
    saveOrder(){
        console.log('Pedido salvo...')
    }
    checkout(){
        if(this.checkIsEmpty()){
            console.log('Desculpe, mas o seu carrinho está vazio')
            return
        }
        this.orderStatus='open'
        this.sendMessage('Salvando...')
        this.saveOrder()
        this.clear()
    }
}

const shoppingCart=new Cart()
shoppingCart.addItem({name:'Ps5',price:5000})
shoppingCart.addItem({name:'Ps3',price:1000})
shoppingCart.checkout()
console.log(shoppingCart.cart)
