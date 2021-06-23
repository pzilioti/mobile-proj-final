import ecommerce from '../../services/ecommerce';


export async function doLogin(login: string, password: string) {
    try {
        const response = await ecommerce.post('/user/login', {"login":login, "password":password})
        console.log(response)
        return response.data    
    } catch (error) {
        console.log(error)
    }
    return null
    
}

export function validateData(login: string, password: string){
    if((login === '' || login === null) || (password === '' || password === null)){
        return false
    }
    return true
}
