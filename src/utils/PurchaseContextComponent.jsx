import React, {useState, useContext, useEffect} from 'react'
import { CardContext } from './CardContextComponent'

export const PurchaseContext = React.createContext()

const PurchaseContextComponent = ({children}) => {
let {products} = useContext(CardContext)
let [product, setProduct] = useState(products)

  return (
    <PurchaseContext.Provider value={{product, setProduct}}>
        {children}
    </PurchaseContext.Provider>
  )
}

export default PurchaseContextComponent