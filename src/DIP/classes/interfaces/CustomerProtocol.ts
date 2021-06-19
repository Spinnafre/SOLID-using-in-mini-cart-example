export interface Customer{
    getName():string
}

export interface CustomerProtocol extends Customer{
    firstName:string,
    lastName:string,
    cpf:string,
}
export interface EnterpriseProtocol extends Customer{
    name:string,
    cnpj:string
}
