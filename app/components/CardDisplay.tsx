import React from 'react'
import CardDynamicEnd from './CardDynamicEnd'
import CardDynamicStart from './CardDynamicStart'
import CardImgTitle from './CardImgTitle'
import CardDarkText from './CardDarkText'

const CardDisplay = () => {
  return (
<div>


      <CardDynamicEnd
            title={"iPhone 16 Pro"}
            text={"Hello, Apple Intelligence."}
            bg="/vertical/pro.jpeg"
            btnLeft="Learn more"
            btnRight="Buy"  
       
      />
      <CardDynamicStart
       title={"iPhone 16 Pro"}
       text={"Hello, Apple Intelligence."}
       bg="/vertical/bluePhone.jpeg"
       btnLeft="Learn more"
       btnRight="Buy" 
      />

      <CardImgTitle
          title={"/titles/ipad.png"}
          text={"Two sizes. Faster chip. Does it all."}
          bg="/vertical/ipad.jpeg"
          btnLeft="Learn more"
          btnRight="Buy" 
      />
      <CardImgTitle
          title={"/titles/watch.png"}
          text={"Thinstant classic."}
          bg="/vertical/watches.jpeg"
          btnLeft="Learn more"
          btnRight="Buy" 
      />
         <CardDarkText 
       title={"MacBook Air"}
       text={"Lean. Mean. M3 machine."} 
       bg="/vertical/mac.jpeg"
       btnLeft="Learn more"
       btnRight="Buy" 
       
      />
        <CardImgTitle
          title={"/titles/trade.png"}
          text={"Get $180-$650 in credit when you trade in iPhone 12 or higher"}
          bg="/vertical/trade.jpeg"
          btnLeft="Get your estimate"
          btnRight="Buy" 
      />
        <CardImgTitle
          title={"/titles/card.png"}
          text={"Get up to 3% Daily Cash back with every purchase."}
          bg="/vertical/card.jpeg"
          btnLeft="Learn more"
          btnRight="Apply now" 
      />
     
</div>
)
}

export default CardDisplay