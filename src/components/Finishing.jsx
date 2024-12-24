import { useState } from "react"

export default function Finishing({plan, isYearly, add_ons}) {

    const plan_name = plan.slice(0, plan.indexOf('-'))
    const plan_price_f = parseFloat(plan.slice(plan.indexOf('-') + 1, plan.indexOf('/')))

    const adds = add_ons.map(
        (item, index)=>{
            const add_name = item.slice(0, item.indexOf('-'))
            return (<><span className="text-cool_gray" key={index}>{add_name}</span><br/></>)
        }
    )

    console.log(plan_name)
    console.log(plan_price_f)

    const prices = add_ons.map(
        (item, index)=>{
            const add_name = parseFloat(item.slice(item.indexOf('-')+1, item.indexOf("/")))
            return add_name
        })
 
    const acc = prices.reduce((accumulator, currentValue) => accumulator + currentValue,0) + plan_price_f

    console.log(acc)

    const adds_price = add_ons.map(
        (item, index)=>{
            const add_price = item.slice(item.indexOf('-')+1,item.length)
            return (<><span className="text-marine_blue font-medium" key={index}>+${add_price}</span><br/></>)
        }
    )

    return(
        <div>
            <h2 className="text-2xl text-marine_blue font-bold pt-6">Finishing up</h2>
            <p className="my-4 text-cool_gray text-lg">Double-check everything looks OK before confirming.</p>

            <section className="bg-magnolia rounded-sm p-4">
                <div className="flex items-center justify-between w-full">
                    <div className="w-full">
                        <h3 className="text-marine_blue font-medium">{plan_name} ({isYearly?"Yearly":"Monthly"})</h3>
                        <link rel="stylesheet" href=""/>
                    </div>
                    <span className="text-marine_blue font-bold">${plan_price_f}/{isYearly?"yr":"mo"}</span>
                </div>
                <hr className="m-2"/>
                <div className="flex justify-between">
                    <div>
                        {adds}
                    </div>
                    <div>
                        {adds_price}
                    </div>
                </div>           
            </section>
            <div className="flex justify-between pr-2 my-6">
                <span className="text-cool_gray">Total ({isYearly?"per year":"per month"})</span>
                <span className="text-purplish_blue font-bold">+${acc}/{isYearly?"yr":"mo"}</span>
            </div>
        </div>
    )
}