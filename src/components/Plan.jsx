import arcade from "../assets/icon-arcade.svg"
import advanced from "../assets/icon-advanced.svg"
import pro from "../assets/icon-pro.svg"
import { useEffect, useState } from "react"

export default function Plan({isToggle, plan,  handleChange}) {

    return(
        <div className="text-justify">
            <h2 className="text-2xl text-marine_blue font-bold pt-6">Select your plan</h2>
            <p className="my-4 text-cool_gray text-lg">You have the option of monthly or yearly biling.</p>
            <section className="flex flex-col gap-2 *:rounded-md *:ring-1 *:p-2 *:cursor-pointer *:w-full *:flex *:h-[5em] mt-4 *:items-center *:ring-light_gray md:flex-row md:h-56 md:*:h-full md:*:grid">
                <label htmlFor="arcade" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="radio" className="hidden" id="arcade" name="plan" value={`arcade-${isToggle?"90/yr":"9/mo"}`} checked={plan==`arcade-${isToggle?"90/yr":"9/mo"}`} onChange={handleChange}/>
                    <img src={arcade} alt="arcade"/>
                    <legend className="pl-2 leading-ti  ght">
                        <h3 className="text-marine_blue font-bold">Arcade</h3>
                        <span className="text-cool_gray">$9{isToggle?"0/yr":"/mo"}</span>
                        <p className="text-marine_blue font-medium">{isToggle?"2 months free":""}</p>
                    </legend>
                </label>

                <label htmlFor="advanced" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="radio" className="hidden" id="advanced" name="plan" value={`advanced-${isToggle?"120/yr":"12/mo"}`} checked={plan == `advanced-${isToggle?"120/yr":"12/mo"}`} onChange={handleChange}/>
                    <img src={advanced} alt="advanced" />
                    <legend className="pl-2 leading-tight">
                        <h3 className="text-marine_blue font-bold">Advanced</h3>
                        <span className="text-cool_gray">$12{isToggle?"0/yr":"/mo"}</span>
                        <p className="text-marine_blue font-medium">{isToggle?"2 months free":""}</p>
                    </legend>
                </label>

                <label htmlFor="pro" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="radio" className="hidden" id="pro" name="plan" value={`pro-${isToggle?"150/yr":"15/mo"}`} checked={plan == `pro-${isToggle?"150/yr":"15/mo"}`} onChange={handleChange}/>
                    <img src={pro} alt="pro" />
                    <legend className="pl-2 leading-tight">
                        <h3 className="text-marine_blue font-bold">Pro</h3>
                        <span className="text-cool_gray">$15{isToggle?"0/yr":"/mo"}</span>
                        <p className="text-marine_blue font-medium">{isToggle?"2 months free":""}</p>
                    </legend>
                </label>
            </section>
              
            <section className="bg-magnolia flex items-center justify-center my-4 h-12 rounded-md gap-2">
                <legend className="text-marine_blue font-medium">Monthly</legend>
                <label htmlFor="toggle" className="flex cursor-pointer bg-marine_blue w-8 h-fit rounded-[9px]">
                    <input type="checkbox" name="isToggle" id="toggle" checked={isToggle} className="hidden peer" onChange={handleChange}/>
                    <div className="w-4 h-4 rounded-full bg-white peer-checked:translate-x-full  transition-transform duration-500 ease-in-out"></div>
                </label>
                <legend className="text-cool_gray font-medium">Yearly</legend>
            </section>
            
            
        </div>
    )
}