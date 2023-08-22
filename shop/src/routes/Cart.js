import {Table} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { increase } from '../store/userSlice';
import {changeCount, plus} from '../store'

function Cart(){
    let data = useSelector((state)=>{return state})
    let dispatch = useDispatch();
    console.log(data.cart)
    return(
        <div>
            <div>{data.user.name} {data.user.age}의 장바구니</div>
            <button onClick={()=>{dispatch(increase(data.user.age))}}>버튼</button>
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
               {
                data.cart.map((a, i)=>{
                    return(
                        <tr>
                        <td>{i}</td>
                        <td>{a.name}</td>
                          <td>{a.count}</td>
                        <td><button onClick={()=>{dispatch(changeCount(i))}}>변경하기</button></td>
                        </tr>
                    )

                })
               } 
               <button onClick={()=>{dispatch(plus())}}>추가</button>
            </tbody>
            </Table> 
        </div>
    )
}

export default Cart;