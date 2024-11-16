import {buy_book} from './BookTypes'
import { sell_book } from './BookTypes'
export const purchase_book = ()=>{
    return{
        type: buy_book,
        payload: 10
    }
}
export const seller_book = ()=>{
    return{
        type: sell_book
    }
}
