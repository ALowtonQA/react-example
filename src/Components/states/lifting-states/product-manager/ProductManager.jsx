import { useState } from "react";
import AddProduct from "./AddProduct";
import DisplayProducts from "./DisplayProducts";

const ProductManager = () => {

    const [item, setItem] = useState("");
    const [basket, setBasket] = useState([]);

    const newItem = (e) => {
        setItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAdd = () => {
        setBasket([...basket, item]);
    }

    const handleDelete = (e) => {
        const ID = e.target.id;
        setBasket(basket.filter((value, index) => {
            if (index != ID) return value;
        }));
    }

    return (
        <>
            <AddProduct 
                addItem = {newItem}
                submitHandler = {handleSubmit}
                addHandler = {handleAdd}
            />
            <DisplayProducts basket={basket} deleteHandler={handleDelete}/>
        </>
    );

}

export default ProductManager;