export class Company {
    name:string;
    year:number;
    address:string;
    constructor(obj:Object={}){
        Object.assign(this,obj);
    }
}
