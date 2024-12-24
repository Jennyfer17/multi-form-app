import { useEffect, useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import Plan from './components/Plan'
import AddOns from './components/AddOns'
import Finishing from './components/Finishing'
import Thanks from './components/Thanks'
import Button from './components/Button'

function App() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    plan: "",
    add_ons: [],
    isToggle: false,
  })

  const handleChange=(event)=>{
    const {name, value, type, checked} = event.target
    setForm(
      prevForm=>{
        return {...prevForm,[name]: type=="checkbox"?checked:value}
      }
    )

    getAddOns(type, checked, value)  
  }

  function getAddOns(type, checked, value) {
    if (type=="checkbox" && counter==2) {
      setForm(
        prevForm=>{
          if (!form.add_ons.includes(value) && checked) {
            return {...prevForm, add_ons: [...prevForm.add_ons, value]}
          } else {
            if (form.add_ons.includes(value) && !checked) {
              return {...prevForm, add_ons: prevForm.add_ons.filter(item=>item!=value)}
            } else {
              return {...prevForm}
            }
          }
        }
      )
    }
  }
  
const numberOfSteps = [1,2,3,4]
const [counter,setCounter] = useState(0)

const stepComponent = numberOfSteps.map(
  (item, index)=>{
    const isChecked = counter==index?true:false
    return <Button step={item} isChecked={isChecked} key={index}/>
  }
)

  function handleClickNext() {
    setCounter(i=>i+1)    
}

function handleClickBack() {
  setCounter(i=>i-1)
}

  return (
    <div className='h-full w-full relative'>
      <section className='flex w-full bg-cover h-[10em] bg-no-repeat justify-center gap-7 bg-mobile p-6'>
        {stepComponent}
      </section>
      <main className='bg-white p-4 rounded-md w-[22em] left-0 right-0 mx-auto top-[7em] absolute'>
        {counter==0 && <PersonalInfo name={form.name} email={form.email} phone={form.phone_number} handleChange={handleChange}/>}
        {counter==1 && <Plan isToggle={form.isToggle} plan={form.plan} handleChange={handleChange}/>}
        {counter==2 && <AddOns add_ons_list={form.add_ons} handleChange={handleChange} isToggle={form.isToggle}/>}
        {counter==3 && <Finishing plan={form.plan} isYearly={form.isToggle} add_ons={form.add_ons}/>}
        {counter==4 && <Thanks/>}
      </main> 

    {counter!=4 && <section className='absolute bottom-0 w-full bg-white h-[5em]'>
        <div className='relative px-4 items-center h-full w-full'>
        {counter!=0 && <button className='text-cool_gray font-medium hover:text-marine_blue absolute left-0 my-7 mx-5' onClick={handleClickBack}>Go Back</button>}

        <button className={`px-4 py-3 rounded-md text-white absolute right-0 m-5 ${counter==3?'bg-purplish_blue':'bg-marine_blue'}`} onClick={handleClickNext}>{counter==3?"Confirm":"Next Step"}</button>
        </div>

      </section>}
    </div>
  )
}

export default App
