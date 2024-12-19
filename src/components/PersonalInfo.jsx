import {useEffect, useRef, useState} from "react";


export default function PersonalInfo({name,email,phone,handleChange}) {


    return (
        <form className="text-justify">
            <h2 className="text-2xl text-marine_blue font-bold pt-6">Personal info</h2>
            <p className="my-4 text-cool_gray text-lg">Please provide your name, email, address, and phone number.</p>

            <label htmlFor="name" className="text-marine_blue font-medium">Name</label><br/>
            <input className="mb-4 border-[1px] w-full h-10 p-3 focus:outline-none focus:border-purplish_blue" type="text" value={name} id="name" name="name" placeholder="e.g.Stephen King" onChange={handleChange}/> <br/>
            
            <label htmlFor="email" className="text-marine_blue font-medium">Email Address</label><br/>
            <input type="email" className="mb-4 border-[1px] w-full h-10 p-3 focus:outline-none focus:border-purplish_blue" id="email" name="email" value={email} placeholder="e.g.stephenking@lorem.com" onChange={handleChange}/> <br/>
            
            <label htmlFor="number" className="text-marine_blue font-medium">Phone Number</label><br/>
            <input type="number" className="mb-4 border-[1px] w-full h-10 p-3 focus:outline-none focus:border-purplish_blue" id="number" name="phone_number" value={phone} placeholder="e.g.+1 234 567 890" onChange={handleChange}/> <br/>
           
        </form>
    )
}