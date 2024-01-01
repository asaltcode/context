import React, {useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Purchase = ({ data, product, setProduct, temp, setTemp, tempArray, setHoolTotal}) => {
  
  let [value, setValue] = useState(1)

  let [title, setTitle] = useState("");   
  let [description, setDescription] = useState("");   
  let [price, setPrice] = useState("");   
  let [thumbnail, setThumbnail] = useState("");   


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
// let handleDelete = (id)=>{
//     let index;
//     let newArray = [...product];
//     for(let i = 0; i < product.length; i++){
//         if(product[i].id === id){
//            index = i
//            break
//         }
//     }
// newArray.splice(index, 1)
// setProduct(newArray);
// setTemp(newArray.map((e)=> e.price))
// setHoolTotal(newArray.reduce((p, c) => {return p = p + c.price}, 0))
// }
let handleDelete = (id)=>{
    let tempTo = [...tempArray]
    let index;
    let newArray = [...product];
    for(let i = 0; i < product.length; i++){
        if(product[i].id === id){
           index = i
           break
        }
    }
newArray.splice(index, 1)
tempTo.splice(index, 1)
setProduct(newArray);
setTemp(tempTo.map((e)=> e))
console.log("delete", tempArray)
setHoolTotal(tempTo.reduce((p, c) => {return p = p + c}, 0))
}

let handleTotal = (value, id)=>{
  let newArray = [...tempArray]
  let index
  for(let i =0 ; i < product.length; i++){
    if(product[i].id === id){
      index = i
      break
    }
  }
  let tempTotal = product[index].price * value
  let to = newArray.map(e => e)
  to.splice(index, 1, tempTotal)  
  console.log(to)
 setTemp(to.map(e => e))
 setHoolTotal(to.reduce((p, c) => c = p + c),0) 
  }


  return (
    <>
       <div className="col col-12 cart-container  col-md-8 mb-4">
        <div className="row  cart-content  dataCard">
            <div className="col col-sm-4  col-md-3 mt-3">
                <img src={data.thumbnail} alt="" />
            </div>
            <div className="col  text-content" ref={scrollContainerRef} style={{ height: "150px" ,overflowY: "scroll" , }}>
                <div className="arrow Top">
                    <span onClick={scrollToTop}>
                        <FaAngleDown />
                    </span>
                </div>
                <h5 className="">{data.title}</h5>
                <p>{data.description}</p>
                <div className="arrow Down">
                    <span onClick={scrollToBottom}>
                        <FaAngleDown />
                    </span>
                </div>
            </div>
        </div>
    </div>

      <div className="col col-12 col-md-4">
        <div className="quantity m-2">
          <select  onChange={(e)=>{setValue(e.target.value), handleTotal(e.target.value, data.id)}} className="form-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          
          <p>$ {data.price}</p>
        </div>
        <div className="totalQuantity">
          <p className="fw-bold">Total Price :</p>
          <p>$.{temp}</p>
        </div>
        <div className="removeCart" >
          <p onClick={()=> handleDelete(data.id)}>Remove</p>
        </div>
      </div>
      {/* <hr className="bg-danger col-md-12 mt-2" /> */}
    </>
  );
};



export default Purchase;
