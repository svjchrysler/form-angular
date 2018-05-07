export class Person {

    private id: number;
    private name: string;
    private lastName: string;
    private birthday: string;
    private address: string;
    private phone: string;
    private email: string;


    constructor(name:string, lastName: string, birthday: string, address: string, phone: string, email: string) {
        this.name = name;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
        this.phone = phone;
        this.email = email;
    } 

    public setId(id:number) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }




}
