# Registration App (React + Vite + TypeScript)

A minimal registration app with client-side validation and localStorage persistence.

## Features
- Full name, email, password, and confirm password inputs
- Basic validation (required fields, email format, password length, match check)
- Duplicate email prevention (in-memory/localStorage)
- Success message with user info

## Prerequisites
- Node.js 18+
- npm 9+

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```
   Then open the printed URL (typically `http://localhost:5173`).

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure
```
src/
  components/
    RegistrationForm.tsx   # UI + validation + submission
  utils/
    storage.ts             # localStorage helpers
  types/
    User.ts                # Type definitions
  App.tsx                  # Renders the form
  main.tsx                 # Entry point
```

## How it works
- On submit, the app validates inputs. If valid, a `RegisteredUser` is created and saved to `localStorage`.
- If the email already exists, registration is blocked with an inline error.
- On success, a message shows the registered user's name and email.

## Customization
- Replace `localStorage` with a real API by editing `src/utils/storage.ts` and calling your backend in `RegistrationForm.tsx`.
- Add fields by extending `RegisteredUser` in `src/types/User.ts` and the form UI.

## Scripts
- `npm run dev`: start dev server with HMR
- `npm run build`: build for production
- `npm run preview`: preview the build locally

---
Built with Vite, React, and TypeScript.
