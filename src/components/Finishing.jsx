
export default function Finishing() {
    return(
        <div>
            <h2 className="text-2xl text-marine_blue font-bold pt-6">Finishing up</h2>
            <p className="my-4 text-cool_gray text-lg">Double-check everything looks OK before confirming.</p>

            <section className="bg-magnolia rounded-sm p-4">
                <div className="flex items-center justify-between w-full">
                    <div className="w-full">
                        <h3 className="text-marine_blue font-medium">Arcade (Monthly)</h3>
                        <link rel="stylesheet" href=""/>
                    </div>
                    <span className="text-marine_blue font-bold">$9/mo</span>
                </div>
                <hr className="m-2"/>
                <div className="flex justify-between">
                    <span className="text-cool_gray">Online service</span>
                    <span className="text-marine_blue font-medium">+$1/mo</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-cool_gray">Larger storage</span>
                    <span className="text-marine_blue font-medium">+$2/mo</span>
                </div>           
            </section>
            <div className="flex justify-between pr-2 my-6">
                <span className="text-cool_gray">Total (per month)</span>
                <span className="text-purplish_blue font-bold">+$12/mo</span>
            </div>
        </div>
    )
}