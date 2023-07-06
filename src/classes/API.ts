import { LoginResponse } from "../interfaces/LoginResponse";
import { RegisterResponse } from "../interfaces/RegisterResponse";

export class API{
    private _baseURL = 'http://localhost:3000/api/v1/';

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

        const headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        });

        const request = await fetch(url, {
            headers,
            body: formData,
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
        console.log(json);
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Content-Length': json.length.toString()
        });


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

    private static generateJSONfromFormData(formData: FormData): string {
        const object = {};
        formData.forEach((value, key) => {
            Object.defineProperty(object, key, value);
        });
        const json = JSON.stringify(object);
        return json;
    }
}
