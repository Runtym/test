export class User {
    name:string;
    age:number;
    address:string;
    id:string;
    pwd:string;
    email:string;
    joinDate:string;
    etc:string;
    constructor(values:Object={}){
        Object.assign(this,values);
    }
    toString():string{
        return "name:"+this.name + ",age:"+this.age+",etc:" + this.etc;
    }
}
