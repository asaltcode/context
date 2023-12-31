import React, {useState,useContext, useEffect, useRef} from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Purchase from "./Purchase";
import { CardContext } from "../utils/CardContextComponent";
import { PurchaseContext } from "../utils/PurchaseContextComponent";

const AddToCard = () => {
  
  let {product, setProduct} = useContext(PurchaseContext)
  let [value, setValue] = useState(1)
  let total = 0
  let navigation = useNavigate();
  let totalPrice = 1;
  let summa = product.map((e)=>  e.price)

   let [temp, setTemp] = useState(product.map((e)=>  e.price))
   let [hoolTotal, setHoolTotal] = useState(temp.reduce((p, c) => {return p = p + c}, 0))
  
  // scrool

  const scrollContainerRef = useRef(null);
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTop = container.scrollHeight - container.clientHeight;
    }
  };

  // handleDelete

  let handleDelete = (id)=>{
    let index;
    let newArray = [...product];
    for(let i = 0; i < product.length; i++){
        if(product[i].id === id){
           index = i
           break
        }
    }
newArray.splice(index, 1)
setProduct(newArray);
}


// Total values
let handleTotalPrice = (value, id) =>{
  let index
  for(let i =0; i< product.length; i++){
    if(product[i].id === id){
      console.log(value, id)
      index = i
      break
    }
  }
  console.log(index)
   
}
  
  return (
    <>
      <div className="container-fulid pb-5   addToCart">
        <div
          className="btn btn-outline-danger m-4"
          onClick={() => navigation("/shop-content")}
        >
          Back
        </div>
        <div className="container">
          <div className="row row-cols-2 row-cols-sm-1 row-cols-md-2">
           

    {product.map((e, i) =>{
      return <Purchase product={product} data={e} temp={temp[i]} tempArray = {temp} setTemp={setTemp} setHoolTotal={setHoolTotal}  setProduct={setProduct} values={value} setValue={setValue}  key={i} /> 
    })}
   
          </div>
        </div>

        <div className="container">
          <div className="total-amount">
            <div className="subTotal">
              <p className="text-muted">SUBTOTSL :</p>
              <p>$200.00</p>
            </div>
            <div className="shipping">
              <p className="text-muted">SHIPPING :</p>
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
