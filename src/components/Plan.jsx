import arcade from "../assets/icon-arcade.svg"
import advanced from "../assets/icon-advanced.svg"
import pro from "../assets/icon-pro.svg"
import { useState } from "react"

export default function Plan() {

    const [plan, setPlan] = useState("")
    function handleChange(e){
        e.preventDefault()
        setPlan(e.target.value)
    }
    const [isYearly, setIsYearly] = useState(false)

    return(
        <div className="text-justify">
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly biling.</p>
            <section className="flex flex-col gap-2 *:rounded-md *:ring-1 *:p-2 *:cursor-pointer *:w-full *:flex *:h-[5em] mt-4 *:items-center *:ring-light_gray">
                <label htmlFor="arcade" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="radio" className="hidden" id="arcade" name="plan" value="arcade" checked={plan == "arcade"} onChange={handleChange}/>
                    <img src={arcade} alt="arcade"/>
                    <legend className="pl-2 leading-tight">
                        <h3>Arcade</h3>
                        <span>$9/mo</span>
                        <p>{isYearly?"2 months free":""}</p>
                    </legend>
                </label>

                <label htmlFor="advanced" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="radio" className="hidden" id="advanced" name="plan" value="advanced" checked={plan == "advanced"} onChange={handleChange}/>
                    <img src={advanced} alt="advanced" />
                    <legend className="pl-2 leading-tight">
                        <h3>Advanced</h3>
                        <span>$12/mo</span>
                        <p>{isYearly?"2 months free":""}</p>
                    </legend>
                </label>

                <label htmlFor="pro" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="radio" className="hidden" id="pro" name="plan" value="pro" checked={plan == "pro"} onChange={handleChange}/>
                    <img src={pro} alt="pro" />
                    <legend className="pl-2 leading-tight">
                        <h3>Pro</h3>
                        <span>$15/mo</span>
                        <p>{isYearly?"2 months free":""}</p>
                    </legend>
                </label>
            </section>
              
            <section className="bg-magnolia flex items-center justify-center my-4 h-12 rounded-md gap-2">
                <legend>Monthly</legend>
                <label htmlFor="toggle" className="flex cursor-pointer bg-marine_blue w-8 h-fit rounded-[9px]">
                    <input type="checkbox" id="toggle" className="hidden peer" onChange={(e)=>e.target.checked?setIsYearly(true):setIsYearly(false)}/>
                    <div className="w-4 h-4 rounded-full bg-white peer-checked:translate-x-full  transition-transform duration-500 ease-in-out"></div>
                </label>
                <legend>Yearly</legend>
            </section>
            
            
        </div>
    )
}