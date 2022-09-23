import React, { useState, useEffect } from "react";
import "./SectionRetail.css"
import BlockH4 from "./BlockH4";
import BlockP from "./BlockP";

import { carrierDealDummy, takeActionsDummy } from './sectionRetailDummy.js'

export default function SectionRetail() {
    const [carrierDealArray, setCarrierDealArray] = useState([])
    const [takeActionsArray, setTakeActionsArray] = useState([])

    useEffect(() => {
        setCarrierDealArray(carrierDealDummy)
        setTakeActionsArray(takeActionsDummy)
    }, [])

    return(
        <section>
            <h2 className="a-sectionBigTitle">Ways to buy.</h2>
            <div className="m-containerCarrierDeals">
                <div>
                    <h3 className="a-subTitleCarrierDeals">Special carrier deals at Apple</h3>
                    <h4 className="a-blockH4__title -carrierDeals">Save up to $700 on iPhone 13 and <br/>iPhone 13 Pro after trade‑in.**</h4>
                    <div className="m-containerListCarrier">
                        {
                            carrierDealArray && carrierDealArray.map((item) => (
                                <BlockP 
                                    className="m-containerListCarrierItem"
                                    icon={item.icon}
                                    subText={item.subText}
                                />
                            ))
                        }
                    </div>
                    <p className="a-containerButtonBuy -sectionRetail"><a className="a-buttonBuy -sectionRetail" href="">Find your deal</a></p>
                    <p className="a-textSectionRetail"> Our Specialists can help you shop — online or in store. <a href="">Connect with an iPhone Specialist {'>'}</a></p>
                </div>
            </div>
            <section className="m-containerTakeActions">
                <div className="m-containerTakeActions__containerMain">
                    {
                        takeActionsArray && takeActionsArray.map((item) => (
                            <BlockH4 
                                className={item.className}
                                title={item.title}
                                description={item.description}
                                cta={[{ className: '-takeActions -learnMore', content: 'Learn more >' }]}
                            />
                        ))
                    }
                </div>
            </section>
        </section>
    );
}