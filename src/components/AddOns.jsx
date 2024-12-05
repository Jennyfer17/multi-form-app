

export default function AddOns() {

    return (
        <div className="text-justify pb-20">
            <h2>Pick add-ons</h2>
            <p>Add-ons help enhance your gaming experience</p>
            <section className=" flex flex-col *:flex *:ring-1 gap-3 mt-4 *:pl-2 *:gap-2 *:cursor-pointer *:ring-light_gray *:rounded-md *:h-[4em] *:items-center">
                <label htmlFor="online-service" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="checkbox" id="online-service" className="w-4"/>
                    <legend>
                        <h3>Online service</h3>
                        <p>Access to multiplayer games</p>
                    </legend>
                    <span className="absolute right-0 pr-6">+$1/mo</span>
                </label>
                <label htmlFor="larger-storage" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="checkbox" id="larger-storage" className="w-4"/>
                    <legend>
                        <h3>Larger storage</h3>
                        <p>Extra 1TB of cloud save</p>
                    </legend>
                    <span className="absolute right-0 pr-6">+$2/mo</span>
                </label>
                <label htmlFor="customizable-profile" className="has-[:checked]:bg-magnolia has-[:checked]:ring-purplish_blue">
                    <input type="checkbox" id="customizable-profile" className="w-4"/>
                    <legend>
                        <h3>Customizable profile</h3>
                        <p>Custom theme on your profile</p>
                    </legend>
                    <span className="absolute right-0 pr-6">+$2/mo</span>
                </label>
            </section>
        </div>
    )
}