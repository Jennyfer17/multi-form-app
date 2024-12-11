import { useEffect, useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import Plan from './components/Plan'
import AddOns from './components/AddOns'
import Finishing from './components/Finishing'
import Thanks from './components/Thanks'
import Button from './components/Button'

function App() {

const [pageList,setPageList] = useState(
  [
    <Thanks/>,
    <Finishing/>,
    <AddOns/>,
    <Plan/>,
  ]
)
const [currentPage,setCurrentPage] = useState(<PersonalInfo/>);

const numberOfSteps = [1,2,3,4]
const [counter,setCounter] = useState(0)

const stepComponent = numberOfSteps.map(
  (item, index)=>{
    const isChecked = counter==index?true:false
    return <Button step={item} isChecked={isChecked} key={index}/>
  }
)

const [oldPage, setOldPage] = useState([])

  function handleClickNext() {
    setCounter(i=>i+1)
    let temp1;
    setPageList((oldData)=>{
      let temp2 = [...oldData]
      temp1 = temp2.pop()
      setCurrentPage(temp1)
      return temp2
    }
  )
    setOldPage((oldData)=>[...oldData, currentPage])      
}

function handleClickBack() {
  setCounter(i=>i-1)
  let temp1
  setOldPage((oldData)=>{
    let temp2 = [...oldData]
    temp1 = temp2.pop()
    setCurrentPage(temp1)
    return temp2;
  })
  setPageList((oldData)=>[...oldData,currentPage])
}
 
  return (
    <div className='h-full w-full relative'>
      <section className='flex w-full bg-cover h-[10em] bg-no-repeat justify-center gap-7 bg-mobile p-6'>
        {stepComponent}
      </section>
      <main className='bg-white p-4 rounded-md w-[22em] left-0 right-0 mx-auto top-[7em] absolute'>
        {currentPage}
      </main> 
      <section className='absolute bottom-0 w-full bg-white h-[5em]'>
        <div className='flex justify-between px-4 items-center h-full w-full'>
        <button className='' onClick={handleClickBack}>Back</button>

        <button className=' bg-marine_blue px-4 py-3 rounded-md text-white' onClick={handleClickNext}>Next Step</button>
        </div>

      </section>
    </div>
  )
}

export default App
