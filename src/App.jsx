import { useEffect, useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import Plan from './components/Plan'
import AddOns from './components/AddOns'
import Finishing from './components/Finishing'
import Thanks from './components/Thanks'


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
    <div className='h-full relative mt-4'>
      <section>
        
      </section>
      <main className=' bg-white p-4 rounded-md w-fit'>
        {currentPage}
      </main>
      <section>
        <button className='absolute bottom-0 left-0' onClick={handleClickBack}>Back</button>
        <button className='absolute bottom-0 right-0 bg-marine_blue px-4 py-3 rounded-md text-white' onClick={handleClickNext}>Next Step</button>
      </section>
    </div>
  )
}

export default App
