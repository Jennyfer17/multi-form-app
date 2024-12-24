

export default function AddOns({add_ons_list, handleChange, isToggle}) {

    return (
        <div className="text-justify pb-20 relative">
            <h2 className="text-2xl text-marine_blue font-bold pt-6">Pick add-ons</h2>
            <p className="my-4 text-cool_gray text-lg">Add-ons help enhance your gaming experience</p>
            <section className=" flex flex-col *:flex *:ring-1 gap-3 mt-4 *:pl-2 *:gap-2 *:cursor-pointer *:ring-light_gray *:rounded-md *:h-[4em] *:items-center">
                <label htmlFor="online-service" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="checkbox" id="online-service" className="w-4" value={`online service-${isToggle?"10/yr":"1/mo"}`} checked={add_ons_list.includes(`online service-${isToggle?"10/yr":"1/mo"}`)} onChange={handleChange}/>
                    <legend>
                        <h3 className="text-marine_blue font-bold">Online service</h3>
                        <p className="text-cool_gray">Access to multiplayer games</p>
                    </legend>
                    <span className="absolute right-0 pr-1 text-purplish_blue">+$1{isToggle?"0/yr":"/mo"}</span>
                </label>
                <label htmlFor="larger-storage" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="checkbox" id="larger-storage" className="w-4" value={`larger storage-${isToggle?"20/yr":"2/mo"}`} checked={add_ons_list.includes(`larger storage-${isToggle?"20/yr":"2/mo"}`)} onChange={handleChange}/>
                    <legend>
                        <h3 className="text-marine_blue font-bold">Larger storage</h3>
                        <p className="text-cool_gray">Extra 1TB of cloud save</p>
                    </legend>
                    <span className="absolute right-0 pr-1 text-purplish_blue">+$2{isToggle?"0/yr":"/mo"}</span>
                </label>
                <label htmlFor="customizable-profile" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="checkbox" id="customizable-profile" className="w-4" value={`customizable profile-${isToggle?"20/yr":"2/mo"}`} checked={add_ons_list.includes(`customizable profile-${isToggle?"20/yr":"2/mo"}`)} onChange={handleChange}/>
                    <legend>
                        <h3 className="text-marine_blue font-bold">Customizable profile</h3>
                        <p className="text-cool_gray">Custom theme on your profile</p>
                    </legend>
                    <span className="absolute right-0 pr-1 text-purplish_blue">+$2{isToggle?"0/yr":"/mo"}</span>
                </label>
            </section>
        </div>
    )
}