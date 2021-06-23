import ecommerce from '../../services/ecommerce';


export async function getList(token: string) {
    const AuthStr = 'Bearer ' + token;

    try {
        const response = await ecommerce.get('/product/list', { 'headers': { 'Authorization': AuthStr } })
        console.log(response)
        return response.data    
    } catch (error) {
        console.log(error)
    }
    return null
}