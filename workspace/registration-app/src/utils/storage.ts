import type { RegisteredUser } from '../types/User'

const STORAGE_KEY = 'registration_app_users'

export function getStoredUsers(): RegisteredUser[] {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) {
      return parsed as RegisteredUser[]
    }
    return []
  } catch {
    return []
  }
}

export function saveUsers(users: RegisteredUser[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
}

export function addUser(user: RegisteredUser): void {
  const users = getStoredUsers()
  users.push(user)
  saveUsers(users)
}