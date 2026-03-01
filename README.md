# 🚀 Live Board

A real-time collaborative whiteboard built with **Next.js, Clerk, Convex, and Liveblocks**, deployed on **Vercel**.

Live Board allows multiple authenticated users to draw, edit, and interact on a shared canvas in real time.

---

## 🌐 Live Demo

🔗 https://live-board-flame.vercel.app/

---

## ✨ Features

- 🔐 Secure authentication with **Clerk**
- ⚡ Real-time multi-user collaboration with **Liveblocks**
- 🎨 Freehand drawing (pressure-sensitive)
- 🟦 Rectangle & Ellipse shapes
- 📝 Text & Sticky Notes
- 👆 Live cursors & user presence
- 🧭 Layer selection, resizing & translation
- ↩️ Undo / Redo history
- 💾 Persistent storage with **Convex**
- 🚀 Deployed on **Vercel**

---

## 🏗️ Tech Stack

### Frontend
- **Next.js (App Router)**
- **React 19**
- **TypeScript**
- Tailwind CSS

### Backend
- **Convex** (Reactive database & server functions)

### Real-time Collaboration
- **Liveblocks**
  - Presence (cursor, selection, drawing draft)
  - Storage (LiveMap, LiveList, LiveObject)
  - useMutation for synchronized updates

### Authentication
- **Clerk**
  - JWT-based authentication
  - Integrated with Convex using `ConvexProviderWithClerk`

### Deployment
- **Vercel**

---

## 🧠 How It Works

### 1️⃣ Authentication Flow

- Users authenticate via **Clerk**
- Clerk issues a JWT
- Convex verifies the JWT using configured Clerk issuer
- Authenticated users can access boards

---

### 2️⃣ Real-Time Architecture (Liveblocks)

Liveblocks is used in two layers:

#### 🔹 Presence (Ephemeral Per-User State)

Used for:
- Cursor position
- Selected layers
- Active drawing draft
- Pen color

Presence is real-time but not persisted.

#### 🔹 Storage (Shared Persistent State)

Canvas data is stored using:

- `LiveMap<string, LiveObject<Layer>>` → stores all layers
- `LiveList<string>` → maintains layer order

All updates to shared state happen through `useMutation`, ensuring consistent synchronization across users.

---

### 3️⃣ Canvas Architecture

Each canvas layer can be:

- Rectangle
- Ellipse
- Path (Freehand)
- Text
- Note

Layers support:
- Translation
- Resizing
- Selection
- Color updates

Undo/Redo is implemented using Liveblocks history.
