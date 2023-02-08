import "./TableRow.css";
import { useDispatch, useSelector } from "react-redux";

const TableRow = ({ product }) => {

    const dispatch = useDispatch();
    const { gid, gname, gprice } = product;

    const selected = useSelector(s => s.selected);
    const amount = selected[gid]?.amount || 0;
    const sum = +amount * +gprice;

    const handleSetQuentity = ({amount, id, price}) => {
        if (amount === 0) {
            dispatch({ type: "DELETE_POSITION", payload: { amount, id, price } });
            return;
        }
        
        dispatch({ type: "ADD_POSITION", payload: { amount, id, price } });
    }

    return (
        <tr className="table_row">
            <td>{gid}</td>
            <td>{gname}</td>   
            <td>{gprice} ₽</td>
            <td className="quantity"><input type="number"
                min="0" onInput={(e) => handleSetQuentity({
                    amount: Number(e.target.value),
                    id: gid,
                    price: Number(gprice),
                  })} value={amount}></input></td>    
            <td name="sum">{sum} ₽</td>                   
        </tr>
    )
}

export default TableRow;