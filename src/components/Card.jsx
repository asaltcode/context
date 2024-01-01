import React, { useState, useContext } from "react";
import { CardContext } from "../utils/CardContextComponent";
import StarRating from "./StarRating";
import { PurchaseContext } from "../utils/PurchaseContextComponent";

const Card = ({ data }) => {
  let {count, setCount} = useContext(CardContext)
  let [btnText, setBtnText] = useState("Add to Cart");
  let {product, setProduct} =useContext(PurchaseContext)
  
  let handleAdd = (id) =>{
     console.log(id)
  }
  let handleRemove = (id) =>{
     console.log(id)
  }
  
 

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
            {data.sales ? (
            <>
                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem" , right: "0.5rem" }}>
                    Sale
                </div>
            </>
            ) : (
            ""
            )}
            <img style={{objectFit: "fill" }} className="card-img-top" src={data.thumbnail} alt="..." height="150px" />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{data.title}</h5>
                    <div className="d-flex justify-content-center small mb-2">
                        {data.review ? (
                        <>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </>
                        ) : (
                        ""
                        )}
                        <StarRating r={data.rating} />
                    </div>
                    <span className={ data.countisSalePrice ? "" : "text-muted text-decoration-line-through" }>
                        {data.salePrice}
                    </span>
                    $ {data.price}
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <button className="btn btn-outline-dark mt-auto" onClick={()=> {btnText === "Add to Cart"? `${setBtnText("Remove from Cart")} ${setCount(count + 1)} ${handleAdd(data.id)} `: `${setBtnText("Add to Cart")} ${setCount(count - 1)} ${handleRemove(data.id)}`}}>{btnText}</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Card;
