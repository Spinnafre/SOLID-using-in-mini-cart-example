import {CustomerProtocol,EnterpriseProtocol} from './interfaces/CustomerProtocol'
export class IndividualCustomer implements CustomerProtocol{
     firstName:string
     lastName:string
     cpf:string

     constructor(firstName:string,lastName:string,cpf:string){
         this.firstName=firstName
         this.lastName=lastName
         this.cpf=cpf
     }
     getName():string{
         return `${this.firstName} ${this.lastName}`
     }
}

export class EnterpriseCustomer implements EnterpriseProtocol{
    name:string
    cnpj:string
    constructor(name:string,cnpj:string){
        this.name=name
        this.cnpj=cnpj
    }
    getName():string{
        return this.name
    }
}
