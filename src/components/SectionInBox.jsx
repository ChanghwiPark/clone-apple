import React from 'react'
import { Link } from 'react-router-dom'
import './SectionInBox.css'

export default function SectionInBox() {
  return (
    <div className='m-sectionInBox'>
      <h2>What is in the box?</h2>
      <ul>
        <li className='a-sectionInBox__listImg -iphone13'>
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-green-witb-202203?wid=328&hei=784&fmt=jpeg&qlt=90&.v=1644964732550" alt="" />
          <div className='a-sectionInBox__captionImg -iphone13'>iPhone 13</div>
        </li>
        <li className='a-sectionInBox__listImg -cable'>
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-cable-witb-202203?wid=204&hei=784&fmt=jpeg&qlt=90&.v=1644964732134" alt="" />
          <div className='a-sectionInBox__captionImg -cable'>USB-C to Lightning Cable</div>
        </li>
      </ul>
      <p className='m-containerEnvironment'>
        <strong>Our environmental goals.</strong><br /><br />
        As part of our efforts to reach <Link to='/environment'> carbon neutrality by 2030</Link>, iPhone 13 and iPhone 13 mini do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.<br /><br />We encourage you to re‑use your current USB‑A to Lightning cables, power adapters, and headphones, which are compatible with these iPhone models. But if you need any new Apple power adapters or headphones, they are available for purchase.
      </p>
    </div>
  )
}
