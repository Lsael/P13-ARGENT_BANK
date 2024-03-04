import { postLogin } from "./fetch";

export const submitLoginData = async(datas) => {
    const response = await postLogin(datas)
    
    if(response.status === 200) {

    }
};
