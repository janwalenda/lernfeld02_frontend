import { BasicUserData } from "./BasicUserData"

export interface LoginResponse {
    user: BasicUserData,
    message: string,
    accessToken: string
}