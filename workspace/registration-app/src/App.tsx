import './App.css'
import RegistrationForm from './components/RegistrationForm'

function App() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    }}>
      <RegistrationForm />
    </div>
  )
}

export default App
