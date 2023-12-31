import React, {useContext} from 'react'
import Card from './Card';
import { CardContext } from '../utils/CardContextComponent';

const ShopContent = () => {
    // let {shopDetail} = useContext(CardContext)
    let {products} = useContext(CardContext)
  return (
    <>
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((e, i) => {
              return (          
                <Card data={e}  key={e.id} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopContent