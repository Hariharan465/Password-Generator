import react, { useState } from 'react'

const PasswordGenerator = () => {

  const[length, setLength] = useState(8)
  const[includeUpperCase, setIncludeUpperCase] = useState(true)
  const[includeLowerCase, setIncludeLowerCase] = useState(true)
  const[includeNumbers, setIncludeNumbers] = useState(true)
  const[includeSymbols, setIncludeSymbols] = useState(true)
  const[password, setPassword] = useState("")

  const generatePassword = () => {
    let charset = ""
    if (includeUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()-_=+";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      generatedPassword += charset[randomIndex]
    }
    setPassword(generatedPassword)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    alert("Password Copied")
  }

  return (
    <div className="password-generator">
      <h2>Strong Password Generator</h2>
      <div className="input-group">
        <label htmlFor='num'>Password Length : </label>
        <input type='number' id='num' value={length} onChange={(e) => setLength(parseInt(e.target.value))}></input>
      </div>
      
      <div className="checkbox-group">
        <input type="checkbox" id='upper' checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(parseInt(e.target.checked))} />
        <label htmlFor="upper">Include Uppercase</label>
      </div> 

      <div className="checkbox-group">
        <input type="checkbox" id='lower' checked ={includeLowerCase} onChange={(e) => setIncludeLowerCase(parseInt(e.target.checked))} />
        <label htmlFor="lower">Include Lowercase</label>
      </div> 

      <div className="checkbox-group">
        <input type="checkbox" id='numbers' checked={includeNumbers} onChange={(e) => setIncludeNumbers(parseInt(e.target.checked))} />
        <label htmlFor="numbers">Include Numbers</label>
      </div> 

      <div className="checkbox-group">
        <input type="checkbox" id='symbol' checked={includeSymbols} onChange={(e) => setIncludeSymbols(parseInt(e.target.checked))} />
        <label htmlFor="symbol">Include Symbols</label>
      </div> 

      <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
      <div className="generated-password">
        <input type="text" readOnly value={password}/>
        <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
      </div>
    </div>
  )
}

export default PasswordGenerator