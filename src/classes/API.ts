import { BasicUserData } from "../interfaces/BasicUserData";
import { LoginResponse } from "../interfaces/LoginResponse";
import { Product } from "../interfaces/Product";
import { RegisterResponse } from "../interfaces/RegisterResponse";

export class API{
    private _baseURL = 'http://localhost:3000/api/v1/';

    private _createHeaders(json?: string){
        const token = API.getToken();
        const headers =  new Headers();

        if(json){
            headers.append('Content-Type', 'application/json');
            headers.append('Content-Length', json.length.toString());
        }
        
        if(typeof token === 'string'){
            headers.append(
                'Authorization', 
                `JWT ${token}`
            );
        }
        return headers;
    }

    private _generateURL(
        slugs: string[], 
        query?: {
            [key: string]: string;
    }): URL {
        const path = slugs.join('/');
        const url = new URL(`${this._baseURL}${path}`);

        if(query) {
            for(const key in query) {
                url.searchParams.set(key, query[key]);
            }
        }

        return url;
    }
    
    async login(formData: FormData): Promise<LoginResponse> {
        const url = this._generateURL(['login']);

        
        
        if(!formData.has('email')) {
            throw new Error('No email address');
        } else if(!formData.has('password')) {
            throw new Error('No password');
        }
        
        const json = API.generateJSONfromFormData(formData);
        const headers = this._createHeaders(json);
        
        const request = await fetch(url, {
            method: 'POST',
            headers,
            body: json,
        });

        if(request.status !== 200) {
            const errorResponse = await request.text();
            throw new Error(`Request failed with status ${request.status}: ${errorResponse}`);
        }

        const response = await request.json() as LoginResponse;

        return response;
    }

    async register(formData: FormData) {
        const url = this._generateURL(['register']);
        
        if(!formData.has('email')) {
            throw new Error('No email address');
        } else if(!formData.has('password')) {
            throw new Error('No password');
        } else if(!formData.has('username')) {
            throw new Error('No username');
        }
        
        const json = API.generateJSONfromFormData(formData);
        const headers = this._createHeaders(json);

        const request = await fetch(url, {
            method: 'POST',
            headers,
            body: json,
        });

        if(request.status !== 200) {
            const errorResponse = await request.text();
            throw new Error(`Request failed with status ${request.status}: ${errorResponse}`);
        }

        const response = await request.json() as RegisterResponse;

        return response;
    }

    public async fullfillOrder(order: number[]){
        const url = this._generateURL(['order']);
        const json = JSON.stringify({
            laptopIds: order,
        });

        const headers = this._createHeaders(json);
        const request = await fetch(url, {
            method: 'POST',
            redirect: 'follow',
            headers,
            body: json
        });

        if(request.status !== 200) {
            const errorResponse = await request.text();
            throw new Error(`Request failed with status ${request.status}: ${errorResponse}`);
        }

        const response = await request.json();
        return JSON.parse(response);
    }

    public async getUserOrders() {
        const url = this._generateURL(['order']);
        const headers = this._createHeaders();
        const request = await fetch(url, {
            method: 'GET',
            redirect: 'follow',
            headers
        });

        if(request.status !== 200) {
            const errorResponse = await request.text();
            throw new Error(`Request failed with status ${request.status}: ${errorResponse}`);
        }

        const response = await request.json();
        return response;
    }

    public async getLaptops() {
        const url = this._generateURL(['laptop']);
        const user = API.getUser();
        const json = JSON.stringify(user);
        const headers = this._createHeaders(json);

        const request = await fetch(url,{
            method: 'GET',
            redirect: 'follow',
            headers
        });
          
        const response = await request.json();
        return JSON.parse(response) as Product[];
    }


    public static getToken(): string | null {
        const ls = window.localStorage;
        const user = ls.getItem('user');
        if(typeof user === 'string'){
            const parsed = JSON.parse(user) as LoginResponse;
            const token = parsed.accessToken;
            return token;
        }
        return null;
    }

    public static getUser(): BasicUserData | null {
        const ls = window.localStorage;
        const user = ls.getItem('user');
        if(typeof user === 'string'){
            const parsed = JSON.parse(user) as LoginResponse;
            const userData = parsed.user;
            return userData;
        }
        return null;
    }

    private static generateJSONfromFormData(formData: FormData): string {
        type ObjectType = {
            [key: string]: string;
        };

        const object: ObjectType = {};
        formData.forEach((value, key) => {
            Object.assign(object, {
                [key]: value,
            })
        });
        const json = JSON.stringify(object);
        return json;
    }
}
