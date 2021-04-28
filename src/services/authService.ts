import AuthAPI from "../api/authApi";
import SignupRequestData from "../models/signupRequestData";
import SigninRequestData from "../models/signinRequestData";
import { setUserInfoAC } from "../scripts/redux/authReducer";
import store from "../scripts/redux/store";

const authApi: AuthAPI = new AuthAPI();

export async function signup(data: SignupRequestData): Promise<void> {
    await authApi.signup(data);
}

export async function signin(data: SigninRequestData): Promise<void> {
    await authApi.signin(data);

    const user = await authApi.getUser();
    const userInfo = setUserInfoAC(user);
    store.dispatch(userInfo);
}
