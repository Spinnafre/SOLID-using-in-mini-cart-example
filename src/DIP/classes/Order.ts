import { SaveOrder } from "../services/saveOrder";
import { Message } from "./interfaces/Message";
import { Customer } from "./interfaces/CustomerProtocol";
import { orderStatus } from "./interfaces/orderType";
import { ShoppingCartProtocol} from "./interfaces/CartProtocol";
import { SaveOrderProtocol } from "./interfaces/SaveOrder";

export class Order{
    private orderStatus:orderStatus='open'
    private cart:ShoppingCartProtocol
    private msg:Message
    private order:SaveOrderProtocol
    private customer:Customer

    // Ao invés de 'order' depender da classe concreta SaveOrder , irá depender da
    // interface SaveOrderProtocol, cujo será a abstração de SaveOrder
    constructor(cart:ShoppingCartProtocol,msg:Message,order:SaveOrderProtocol,customer:Customer){
        this.cart=cart
        this.msg=msg
        this.order=order
        this.customer=customer
    }
    checkout(){
        if(this.cart.checkIsEmpty()){
            console.log('Desculpe, mas o seu carrinho está vazio')
            return
        }
        this.orderStatus='open'
        this.msg.sendMessage(`
        --------------------------------------
            Comprovante: \n
            - NOME DO CLIENTE: ${this.customer.getName()}
            - TOTAL (SEM DESCONTO): ${this.cart.total}
            - DESCONTO: ${this.cart.Discount}
            - TOTAL (DESCONTO): ${this.cart.totalWithDiscount()}
        --------------------------------------
        `)
        this.order.saveOrder()
        this.cart.clear()
    }
}
