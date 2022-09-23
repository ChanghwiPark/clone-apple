import React from 'react'
import './SectionBuyScrollRight.css'
import BlockInput from './BlockInput'
import BlockHelp from './BlockHelp'

export default function SectionBuyScrollRight() {
  return (
    <div className='m-sectionBuyScrollRight'>
      <div className='m-sectionBuyScrollRight__container -model'>
        <h3 className='a-sectionBuy__titleScroll'>Model. <span>Which is best for you?</span></h3>
        <div className='m-sectionBuyScrollRight__containerBlockInput'>
          <BlockInput 
            title='iPhone 13 mini'
            display='5.4-inch display'
            price='From $599'
            allotment='or $24.95/mo. for 24 mo.'
          />
          <BlockInput 
            title='iPhone 13'
            display='6.1-inch display'
            price='From $699'
            allotment='or $29.12/mo. for 24 mo.'
          />
        </div>
        <div className='m-sectionBuyScrollRight__containerHelp'>
          <div>Need help choosing a model?</div>
          <div>Explore the differences in screen size and battery life.</div>
        </div>
      </div>

      <div className='m-sectionBuyScrollRight__container -color'>
          <h2 className='a-sectionBuy__titleScroll'>Finish. <span>Pick your favorite.</span></h2>
          <div className='m-containerColorSelectionMain'>
            <div className='a-textColorSelection'>color</div>
            <ul className='m-listColorSelection'>
              <li><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-pink-202108?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1630016970000" alt="" /></li>
              <li><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-blue-202108?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1630016970000" alt="" /></li>
              <li><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-midnight-202108?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1630016969000" alt="" /></li>
              <li><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-starlight-202108?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1630016970000" alt="" /></li>
              <li><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-green-202203?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645218698057" alt="" /></li>
              <li className='a-listItemProductRed'>
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-product-red-202108?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1630016971000" alt="" />
                <span className='a-spanProductRed'></span>
              </li>
            </ul>
          </div>
          <div className='m-containerColorDonation'>Every iPhone 13 (PRODUCT)RED purchase now contributes directly to the Global Fund to combat COVID‑19.footnote◊◊◊</div>
      </div>

      <div className='m-sectionBuyScrollRight__container -storage'>
        <h2 className='a-sectionBuy__titleScroll'>Storage. <span>How much space do you need?</span></h2>
        <div className='m-sectionBuyScrollRight__containerBlockInput'>
          <BlockInput 
            title='128GB'
            price='From $599'
            allotment='or $24.95/mo. for 24 mo.'
          />
          <BlockInput 
            title='256GB'
            price='From $699'
            allotment='or $29.12/mo. for 24 mo.'
          />
          <BlockInput 
            title='512GB'
            price='From $899'
            allotment='or $37.45/mo. for 24 mo.'
          />
        </div>
        <BlockHelp 
          img='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-storage-thumbnail?wid=1152&hei=648&fmt=p-jpg&qlt=95&.v=1658766759271'
          title='
          Not sure how much storage to get?'
          text="Get a better understanding of how much space you'll need."
        />
      </div>
    </div>
  )
}
