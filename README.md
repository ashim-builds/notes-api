# 📝 Notes API

A simple and clean REST API for managing notes, built with Node.js, Express, and MongoDB.

## 🚀 Features

- Create Note
- Get All Notes
- Get Single Note
- Update Note
- Delete Note

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose

## 📁 Project Structure

```
notes-api/
├── config/db.js
├── controllers/noteController.js
├── models/Note.js
├── routes/noteRoutes.js
├── .env
└── server.js
```

## ⚙️ Setup

```bash
git clone https://github.com/ashim-builds/notes-api.git
cd notes-api
npm install
```

Create `.env` file:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/notesapi
```

```bash
npm run dev
```

## 📮 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/notes` | Create new note |
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get single note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

## 🔑 Usage

### Create Note
```json
POST /api/notes
{
  "title": "My Note",
  "content": "This is my note content!"
}
```

### Update Note
```json
PUT /api/notes/:id
{
  "title": "Updated Title",
  "content": "Updated content!"
}
```

## 📄 License

MIT — feel free to use this in your projects!

---
Made with ❤️ by [Ashim Adhikari](https://github.com/ashim-builds)
