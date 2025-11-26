import { useState } from 'react'
import './App.css'
import { useCallback} from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numallowed, setnumallowed] = useState(false)
  const [spcharallowed, setspcharallowed] = useState(false)
  const [password, setpassword] = useState("")

  const passref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUYWXYZabcdefghijklmnopqustuvwxyz"
  
    if (numallowed) str += "1234567890"
  
    if (spcharallowed) str += "!@#$%^&*()-=_+[]{}<>,.:;'~"
  
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    
    setpassword(pass)
  }, [numallowed, spcharallowed, setpassword, length])

  let copypass = useCallback (()=>{
      passref.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])

  useEffect(()=>{
    passwordgenerator()
  },[length, numallowed, spcharallowed, passwordgenerator])

  return (
    <>
      <div className='text'>
        <h1>Password generator</h1>

        <input className='passfield' type="text" value={password} readOnly ref={passref} placeholder='Password' />

        <button onClick={copypass}>copy</button>

        <div className="elements">
        
          <input className="range" type="range" value={length} min={8} max={100} onChange={(e) => { setLength(e.target.value) }} />
          
          <label >length: {length}</label>

          <input type="checkbox" defaultChecked={numallowed} id="numinput" onChange={()=> setnumallowed(prev => !prev)} />

          <label htmlFor="numinput">Numbers</label>

          <input type="checkbox" defaultChecked={spcharallowed} id="spcharinput" onChange={()=> setspcharallowed(prev => !prev)} />

          <label htmlFor="spcharinput">Special Characters</label>

        </div>
      </div>
    </>
  )
}

export default App
