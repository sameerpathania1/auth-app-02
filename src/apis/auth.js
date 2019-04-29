import { apipost } from "../utils"

export function LoginApi(data) {
    return apipost("/users/login", data);
}
export function SignupApi(data) {
    return apipost("/users/signup", data);
}