import React, {useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import Purchase from "./Purchase";
import { PurchaseContext } from "../utils/PurchaseContextComponent";

const AddToCard = () => {
  
  let {product, setProduct} = useContext(PurchaseContext)
  let [value, setValue] = useState(1)
  let navigation = useNavigate();
  let [temp, setTemp] = useState(product.map((e)=>  e.price))
  let [hoolTotal, setHoolTotal] = useState(temp.reduce((p, c) => {return p = p + c}, 0))
  
  
  return (
    <>
      <div className="container-fulid pb-5 mt-5  addToCart">
        <div className="btn btn-outline-light m-4" onClick={()=> navigation("/shop-content")}
            >
            Back
        </div>
        <div className="container">
            <div className="row row-cols-2 row-cols-sm-1 row-cols-md-2">
                {product.map((e, i) =>{
                return                <Purchase product={product} data={e} temp={temp[i]} tempArray={temp} setTemp={setTemp}
                    setHoolTotal={setHoolTotal} setProduct={setProduct} values={value} setValue={setValue} key={i} />
                })}

            </div>
        </div>

        <div className="container">
            <div className="total-amount">
                <div className="subTotal">
                    <p className="text-light">SUBTOTSL :</p>
                    <p>$.{hoolTotal}</p>
                </div>
                <div className="shipping">
                    <p className="text-light">SHIPPING :</p>
                    <p>FREE</p>
                </div>
                <hr />
                <div className="total">
                    <p className="fw-bold">TOTAL : </p>
                    <p>$.{hoolTotal}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default AddToCard;
