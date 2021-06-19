import { Order } from "./classes/Order"
import { Product } from "./classes/Product"
import { ShoppingCart } from "./classes/shoppingCart"
import {Message} from './services/sendMessage'
import {SaveOrder} from './services/saveOrder'
import {FiftyPercentDiscount,SixtyPercentDiscount,TenPercentDiscount} from './services/Discount'
import {IndividualCustomer,EnterpriseCustomer} from './classes/Customer'

const shoppingCart=new ShoppingCart(new FiftyPercentDiscount())
const message=new Message()
const Customer=new IndividualCustomer('DAVI','SILVA DA PENHA','054.541.310-20')
// const customerEnterprise=new EnterpriseCustomer('Epic games','000.000.100-50')
// Injeção de dependência
shoppingCart.addItem(new Product('PS5',5000))
shoppingCart.addItem(new Product('Ps3',1000))
const order=new Order(shoppingCart,new Message(),new SaveOrder(),Customer)

console.log('TOTAL SEM DESCONTO -> ',shoppingCart.total)
console.log('TOTAL COM DESCONTO -> ',shoppingCart.totalWithDiscount())
order.checkout()
