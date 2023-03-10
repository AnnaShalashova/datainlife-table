import "./SectionList.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const SectionList = () => {
    const [active, setActive] = useState();
    const productSections = useSelector(state => state.products);

    if (!productSections.length) {
        return (
            <div className="section_list loader_container">
                <span className="loader"></span>
            </div>
        )
    }

    return (
        <ul className="section_list">
            <Link key="all_products" to="/"> 
                <li>Все товары</li>
            </Link>

            {productSections.map((section, i) => {
                return (
                    <Link key={i} to={`/${section.rid}`}>
                        <li onClick={() => setActive(section.rid)}
                            className={active === section.rid ? "active_section" : "section"}>
                            {section.rname}
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default SectionList;