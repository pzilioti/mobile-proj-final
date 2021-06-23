import ecommerce from '../../services/ecommerce';


export async function doAdd(address: string, age: number, email: string, name: string, password: string) {
    try {
        const response = await ecommerce.post('/user/customer/add', {"address": address, "age": age, "email": email, "name": name, "userPassword": password})
        console.log(response)
        return response    
    } catch (error) {
        console.log(error)
        return error
    }
}

export function validateData(address: string, age: number, email: string, name: string, password: string){
    if((address === '' || address === null) 
    || (password === '' || password === null)
    || (email === '' || email === null)
    || (name === '' || name === null)
    || (age === 0 || age === null)
    ){
        return false
    }
    return true
}

export function validateAge(age: number){
    if(age <18){
        return false
    }else{
        return true
    }
}
