export abstract class Discounts{
    protected _percent=0
    calculateDiscount(value:number):number{
        return value - value * this._percent
    }
    get percent():number{
        return this._percent
    }
}
// NO DRY - Nã repetir um procedimento várias vezes
export class FiftyPercentDiscount extends Discounts{
    protected _percent=0.5
}
export class TenPercentDiscount extends Discounts{
    protected _percent=0.1
}
export class SixtyPercentDiscount extends Discounts{
    protected _percent=0.6
}
