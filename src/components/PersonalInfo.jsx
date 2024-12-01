import {useState} from "react";


export default function PersonalInfo() {

    const [name, setName] = useState("");
    const [email, setEMail] = useState("");
    const [number, setNumber] = useState(0);
   
    return (
        <form className="w-fit bg-white p-4 rounded-md text-justify">
            <h2 className="text-2xl text-marine_blue font-bold pt-6">Personal info</h2>
            <p className="my-4 text-cool_gray text-lg">Please provide your name, email, address, and phone number.</p>

            <label htmlFor="name" className="text-marine_blue font-medium">Name</label><br/>
            <input className="mb-4 border-[1px] w-full h-10 p-3 focus:outline-none focus:border-purplish_blue" type="text" id="name" name="name" placeholder="e.g.Stephen King" onChange={e => setName(e.target.value)}/> <br/>
            
            <label htmlFor="email" className="text-marine_blue font-medium">Email Address</label><br/>
            <input type="email" className="mb-4 border-[1px] w-full h-10 p-3 focus:outline-none focus:border-purplish_blue" id="email" name="email" placeholder="e.g.stephenking@lorem.com" onChange={e=>setEMail(e.target.value)}/> <br/>
            
            <label htmlFor="number" className="text-marine_blue font-medium">Phone Number</label><br/>
            <input type="number" className="mb-4 border-[1px] w-full h-10 p-3 focus:outline-none focus:border-purplish_blue" id="number" name="number" placeholder="e.g.+1 234 567 890" onChange={e=>setNumber(e.target.value)}/> <br/>
           
        </form>
    )
}