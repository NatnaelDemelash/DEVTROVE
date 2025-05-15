# DevTrove

A web app for frontend developers to explore, save, and organize high-quality dev resources — videos, articles, tools, code snippets, and more. Features public browsing and personal saving with Supabase + Zustand + beautiful dynamic UI.

---

## 🧠 Why?

Built to:

- Learn **API integration**
- Practice **Zustand** for state management
- Use **Supabase** for lightweight backend (auth + database)
- Protect pages with **authentication**
- Build beautiful, interactive **dynamic UIs**

---

## 🚀 Core Features

### 📖 Public Explore Feed

- Fetch developer content from APIs (e.g., Dev.to)
- Show as cards (title, type, tags, links, description)
- Filter by type (video, blog, tool, tweet, etc.)
- Search by keyword

### 🔐 Auth (Supabase)

- Sign in with GitHub (OAuth)
- Protect personal pages (e.g., /library)
- Optional: Guest mode for demo

### 💾 My Library

- Save/bookmark resources to your own profile
- Add custom tags or notes
- Filter + Search saved content

### 🧠 Zustand State

- UI theme (dark/light)
- Modal, filters, and auth state

### 🌍 Mobile Responsive UI

- Fully mobile-ready experience
- Smooth animations and transitions

---

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** + **Shadcn UI**
- **TypeScript**
- **Zustand** for global state
- **Supabase** for Auth + DB
- **Dev.to API** (for articles)
- Optional: [GitHub API](https://docs.github.com/en/rest) or YouTube (if no auth required)

---

## 📅 Milestones

- ✅ Phase 1: Project Setup + Public Explore Feed
- 🔜 Phase 2: Auth + Save Functionality
- 🔜 Phase 3: My Library Page
- 🔜 Phase 4: Tags, Filtering, Animations, Polish

---

## 🧪 To Explore Later

- Infinite scroll / pagination
- Shareable saved items (public/private mode)
- Export saved items as markdown or JSON
