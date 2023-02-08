import "./Table.css";
import TableRow from "../TableRow";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";

const Table = () => {

    const productSections = useSelector(state => state.products);
    const selected = useSelector(s => s.selected);
    const { idSection } = useParams();
    

    const sectionName = idSection ? productSections.map((section) => {
        if (section.rid === idSection) {
            return section.rname;
        }
       
    }) : "Все товары";

    const sortedProducts = idSection ? (
        productSections.filter(section => section.rid === idSection)
    ) : productSections;

    return (
        <section className="table_cart_container">
            <div className="table_container">
                <table className="table">
                    <caption className="section_name"><h1>{sectionName}</h1></caption>
                    <thead className="table_header table_row">
                        <tr className="product_info">
                            <th>Id</th>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Сумма</th>
                        </tr>
                    </thead>
                    <tbody>
                    { !productSections.length ? (
                        <tr className="loader_container">
                            <td><span className="loader"></span></td>
                        </tr>) : (
                        sortedProducts.map((section) => {
                            return section.goods.map((product, i) => <TableRow key={i} product={product} />)
                        }))
                    }
                    </tbody>
                </table>
            </div>
            <ShoppingCart selected={selected}/>
        </section>
    )
}

export default Table;