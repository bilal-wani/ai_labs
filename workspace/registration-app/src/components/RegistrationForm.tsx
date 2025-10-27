import { useMemo, useState } from 'react'
import { addUser, getStoredUsers } from '../utils/storage'
import type { RegisteredUser } from '../types/User'

function generateId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

function isValidEmail(email: string): boolean {
  return /.+@.+\..+/.test(email)
}

export default function RegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [successUser, setSuccessUser] = useState<RegisteredUser | null>(null)

  const existingEmails = useMemo(() => new Set(getStoredUsers().map(u => u.email.toLowerCase())), [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSuccessUser(null)

    if (!fullName.trim()) return setError('Full name is required')
    if (!email.trim()) return setError('Email is required')
    if (!isValidEmail(email)) return setError('Please enter a valid email')
    if (password.length < 6) return setError('Password must be at least 6 characters')
    if (password !== confirmPassword) return setError('Passwords do not match')
    if (existingEmails.has(email.toLowerCase())) return setError('Email is already registered')

    const newUser: RegisteredUser = {
      id: generateId(),
      fullName: fullName.trim(),
      email: email.trim(),
      createdAt: new Date().toISOString(),
    }

    addUser(newUser)
    setSuccessUser(newUser)
    setFullName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div style={{ maxWidth: 420, width: '100%' }}>
      <h2 style={{ marginBottom: 8 }}>Create your account</h2>
      <p style={{ marginTop: 0, color: '#888', marginBottom: 24 }}>A simple demo registration form.</p>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <label style={{ display: 'grid', gap: 6 }}>
          <span>Full name</span>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Ada Lovelace"
            required
          />
        </label>

        <label style={{ display: 'grid', gap: 6 }}>
          <span>Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ada@example.com"
            type="email"
            required
          />
        </label>

        <label style={{ display: 'grid', gap: 6 }}>
          <span>Password</span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            type="password"
            required
            minLength={6}
          />
        </label>

        <label style={{ display: 'grid', gap: 6 }}>
          <span>Confirm password</span>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            type="password"
            required
            minLength={6}
          />
        </label>

        {error && (
          <div style={{ color: '#f44336', fontSize: 14 }} role="alert" aria-live="polite">
            {error}
          </div>
        )}

        <button type="submit" style={{ marginTop: 8 }}>Register</button>
      </form>

      {successUser && (
        <div style={{
          marginTop: 16,
          padding: 12,
          border: '1px solid #2e7d32',
          background: '#1b5e20',
          color: 'white',
          borderRadius: 8,
        }}>
          <strong>Registration successful!</strong>
          <div style={{ fontSize: 14, marginTop: 6 }}>
            Welcome, {successUser.fullName} ({successUser.email})
          </div>
        </div>
      )}
    </div>
  )
}