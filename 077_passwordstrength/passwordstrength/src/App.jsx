import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordStrengthChecker from '../components/passwordstength'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
        style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
      />
      <p>Password Strength: <strong>{strength}</strong></p>
    </div>
  );
}

export default PasswordStrengthChecker;