# ReadSphere 📚

ReadSphere is a digital library management system built with React. It provides a responsive interface for browsing books, viewing book details, searching and filtering the collection, and simulating book borrowing and returning.

## Features

- 🏠 Landing/Home page
- 📚 Browse Books
- 🔎 Search books by title or author
- 🏷️ Category/genre filtering
- ↕️ Book sorting and browsing
- 📖 Featured Books
- 🔗 Book Details pages
- 🔄 Borrow/Return simulation
- 📋 Borrowed Books page
- 🗂️ Categories page
- ➕ Book CRUD management
- 🔐 Login, Signup and Forgot Password pages
- 📱 Responsive design for desktop, tablet and mobile
- 🧭 React Router navigation
- 🧩 Reusable React components
- 🦶 Footer across the main application pages

## Technologies Used

- React
- JavaScript (JSX)
- React Router
- CSS
- Vite
- React Icons
- Git & GitHub

## Main Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Landing page and featured books |
| `/browse` | Browse Books | Search, filter, sort and borrow/return books |
| `/books/:id` | Book Details | View information about a selected book |
| `/categories` | Categories | Browse books by category |
| `/borrowed` | Borrowed Books | View currently borrowed books |
| `/book-management` | Book Management | CRUD functionality |
| `/login` | Login | User login |
| `/signup` | Signup | User registration |
| `/forgot-password` | Forgot Password | Password recovery |

## Borrow / Return

Users can borrow an available book or return a borrowed book.

```text
Available ↔ Borrowed
```

The current implementation uses React state for the simulation. Persistent API synchronization will be added according to the API specification provided for the project.

## Search and Filtering

The application supports:

- Searching by book title
- Searching by author
- Filtering by category/genre
- Browsing the library collection

## CRUD

The Book Management section supports the four basic CRUD operations:

- **Create** a book
- **Read** book information
- **Update** book information
- **Delete** a book

## Responsive Design

ReadSphere is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

Responsive CSS media queries are used to adapt navigation, book layouts, controls and other interface elements to smaller screens.

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Monjolaoluwa-star/digital-library-management-system.git
```

### 2. Enter the project folder

```bash
cd digital-library-management-system
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide the local development URL in the terminal, normally:

```text
http://localhost:5173/
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── BookCard.jsx
│   ├── BookCRUD.jsx
│   ├── BookGrid.jsx
│   ├── BookSlider.jsx
│   ├── FeaturedBookCard.jsx
│   ├── FeaturedBooks.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
├── data/
│   └── books.js
├── pages/
│   ├── Home.jsx
│   ├── BrowseBooks.jsx
│   ├── BookDetails.jsx
│   ├── Categories.jsx
│   ├── BorrowedBooks.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── ForgotPassword.jsx
│   └── NotFound.jsx
├── App.jsx
└── main.jsx
```

## API Integration

The application is prepared for API integration. The final API implementation will follow the API documentation/specification provided for the project.

Depending on the provided API, it may handle:

- Book data
- Book details
- Availability
- Borrow/Return status
- CRUD operations

The API endpoints and implementation will be documented here once the official API guide is provided.

## Team Collaboration

The project is maintained using Git and GitHub.

Before starting work, pull the latest changes:

```bash
git pull origin main
```

After making changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

## Project Status

### Completed

- React frontend
- Routing and navigation
- Responsive interface
- Book browsing
- Search and filtering
- Book details
- Borrow/Return simulation
- Borrowed Books
- CRUD functionality
- Authentication pages
- GitHub collaboration

### Pending

- API integration based on the provided API specification

## Team

**ReadSphere Team**

---

© 2026 ReadSphere
