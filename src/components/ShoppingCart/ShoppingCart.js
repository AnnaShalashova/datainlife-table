import "./ShoppingCart.css";
import { useDispatch } from "react-redux";


const ShoppingCart = ({ selected }) => {
   
    const dispatch = useDispatch();
    const arrSelectedProducts = Object.entries(selected);
    const orderSum = arrSelectedProducts.reduce((acc, cur) => acc + cur[1].totallSum, 0);
    const orderQuantity = arrSelectedProducts.reduce((acc, cur) => acc + cur[1].amount, 0);

    const handleSendOrder = () => {
        const formData = new FormData();

        arrSelectedProducts.forEach((p) => {
            formData.append(`product[${p[0]}]`, p[1].amount);
        });

        dispatch({type: "SEND_ORDER", payload: formData})

    }


    return (
        <section className="shoping_cart">
            <div className="total_quantity"> 
                <p>Количество товаров: {orderQuantity}</p>
            </div>
            <div className="total_sum"> 
                <p>Общая сумма: {orderSum ? `${orderSum} ₽` : orderSum} </p>
            </div>
            <div className="btn_cart">
                <button onClick={() => handleSendOrder()} type="button">Добавить в корзину</button>
            </div>
        </section>
    )
}

export default ShoppingCart;