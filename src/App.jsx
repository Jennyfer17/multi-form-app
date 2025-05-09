import { useState } from 'react'
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
    if (type == "checkbox" && counter==2) {
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
const navigationLabel = ["your info", "select plan", "add-ons", "summary"]
const [counter,setCounter] = useState(0)

const stepComponent = numberOfSteps.map(
  (item, index)=>{
    const isChecked = counter == index ? true : false
    return (
      <div className='md:flex md:space-x-6 md:items-center'>
      <Button step={item} isChecked={isChecked} key={index}/>
      <label className='hidden md:grid md:w-40 *:uppercase'>
        <span className='font-thin text-light_gray'>{`step ${index+1}`}</span>
        <span className='font-semibold text-white'>{navigationLabel.at(index)}</span>
      </label>
      </div>    )
  }
)

  function handleClickNext() {
    setCounter(i=>i+1)    
}

function handleClickBack() {
  setCounter(i=>i-1)
}

  return (
    <div className='flex w-full h-full md:py-16 md:px-48'>
      <div className='h-full w-full relative md:grid md:grid-cols-2 md:bg-white md:w-11/12 md:p-6 md:rounded-[10px]'>
        <section className='flex w-full bg-cover bg-no-repeat justify-center gap-7 p-6 bg-mobile h-40 md:bg-desktop md:flex md:flex-col md:w-64 md:h-full md:rounded-[10px]'>
          {stepComponent}
        </section>
        <main className='bg-white p-4 rounded-md w-[22em] left-0 right-0 mx-auto top-[7em] absolute md:top-0 md:w-[34em] md:left-64'>
          {counter == 0 && <PersonalInfo name={form.name} email={form.email} phone={form.phone_number} handleChange={handleChange}/>}
          {counter == 1 && <Plan isToggle={form.isToggle} plan={form.plan} handleChange={handleChange}/>}
          {counter == 2 && <AddOns add_ons_list={form.add_ons} handleChange={handleChange} isToggle={form.isToggle}/>}
          {counter == 3 && <Finishing plan={form.plan} isYearly={form.isToggle} add_ons={form.add_ons}/>}
          {counter == 4 && <Thanks/>}
        </main>
      {counter!=4 && <section className='absolute bottom-0 w-full bg-white h-[5em] md:bg-transparent'>
          <div className='relative px-4 items-center h-full w-full'>
          {counter!=0 && <button className='text-cool_gray font-medium hover:text-marine_blue absolute left-0 my-7 mx-5 md:left-[19em]' onClick={handleClickBack}>Go Back</button>}
          <button className={`px-4 py-3 rounded-md text-white absolute right-0 m-5 ${counter==3?'bg-purplish_blue':'bg-marine_blue md:right-[2.5em]'}`} onClick={handleClickNext}>{counter==3?"Confirm":"Next Step"}</button>
          </div>
        </section>}
      </div>
    </div>
  )
}

export default App
