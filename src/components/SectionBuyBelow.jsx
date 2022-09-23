import React from 'react'
import './SectionBuyBelow.css'
import BlockHelp from './BlockHelp'
import BlockInput from './BlockInput'

export default function SectionBuyBelow() {
    return (
        <div className='m-sectionBuyBelow'>
            <h2 className='a-sectionBuy__titleScroll'>Apple Trade In. <span>Get $40-$720 credit toward your new iPhone.Footnote◊◊</span></h2>
            <div className='m-sectionBuyBelow__containerContent'>
                <div  className='m-sectionBuyBelow__containerBuy'>
                    <BlockInput
                        title='Select a smartphone'
                        display='Answer a few questions to get your estimate.'
                        tradeIn=''
                    />
                    <BlockInput
                        title='No trade-in'
                        tradeIn=''
                    />
                    <div className='m-sectionBuyBelow__containerCarrierDeals'>
                        <div>Or get up to $999 for your trade-in when you finance with select carrier deals at Apple.</div>
                        <div>
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-att-202207?wid=63&hei=63&fmt=png-alpha&.v=1658249613151" alt="" />
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-sprint-202207?wid=123&hei=63&fmt=png-alpha&.v=1658249613203" alt="" />
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-tmobile-202207?wid=54&hei=63&fmt=png-alpha&.v=1658249613148" alt="" />
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-verizon-202207?wid=54&hei=63&fmt=png-alpha&.v=1658249613009" alt="" />
                        </div>
                    </div>
                </div>
                <BlockHelp 
                    img='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-trade-in-pre-purchase-thumbnail?wid=1152&hei=648&fmt=p-jpg&qlt=95&.v=1659472070884'
                    title='How does trade-in work?'
                    text="We'll walk you through the step-by-step process."
                />
            </div>
        </div>
    )
}
