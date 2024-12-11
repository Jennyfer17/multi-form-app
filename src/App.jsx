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
const numberOfSteps = [1,2,3,4]
const stepComponent = numberOfSteps.map(
  (item, index)=>{
    return <Button step={item} key={index}/>
  }
)

const [currentPage,setCurrentPage] = useState(<PersonalInfo/>);

const [oldPage, setOldPage] = useState([])

  function handleClickNext() {
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
    <div className='h-full bg-slate-500 relative'>
      <section className='flex w-full h-[5em] justify-between bg-mobile'>
        {stepComponent}
      </section>
      <main className=' bg-white p-4 rounded-md w-[20em] m-auto'>
        {currentPage}
      </main>
      <section className='absolute bottom-0 w-full bg-white h-[5em]'>
        <div className='flex justify-between px-2 items-center h-full w-full'>
        <button className='' onClick={handleClickBack}>Back</button>

        <button className=' bg-marine_blue px-4 py-3 rounded-md text-white' onClick={handleClickNext}>Next Step</button>
        </div>

      </section>
    </div>
  )
}

export default App
