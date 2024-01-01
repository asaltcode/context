import React, {useState, useContext} from 'react'
import { CardContext } from './CardContextComponent'

export const PurchaseContext = React.createContext()

const PurchaseContextComponent = ({children}) => {
let {products} = useContext(CardContext)
let content = [...products]
let [product, setProduct] = useState(content)

  return (
    <PurchaseContext.Provider value={{product, setProduct}}>
        {children}
    </PurchaseContext.Provider>
  )
}

export default PurchaseContextComponent