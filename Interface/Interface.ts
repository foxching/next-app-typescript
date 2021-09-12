//types
export type geo = {
    lat: number;
    lang: number
}

export type addr = {
    street: string,
    suite: string,
    city: string,
    zipcode: number;
    geo: geo
}

export type comp = {
    name: string,
    catchPhrase: string;
    bs: string
}

//interfaces
export interface ITodoModel {
    id: number;
    text: string;
    done: boolean;
}

export interface IUserModel {
    id: number;
    name: string,
    username: string;
    email: string;
    address: addr;
    phone: number;
    website: number;
    company: comp
}