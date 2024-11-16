import {useSelector,useDispatch} from 'react-redux';
import {purchase_book ,seller_book}from './BookAction';
function BookContainer(){
    const noOfBooks = useSelector(state=>state.NumberOfBooks)
    const dispatch = useDispatch()
return (
        <>
 <div>Book Container</div>
 <h2>No of Books - {noOfBooks}</h2> 

 <button onClick={()=>{dispatch(purchase_book())}}>Buy Book</button>
 <button onClick={()=>{dispatch(seller_book())}}>sell Book</button>
        </>
    )
}

export default BookContainer;
