# User Management Dashboard

## Overview

User Management Dashboard is a React.js web application built for managing user records in a clean and responsive dashboard interface. The project supports user authentication, protected routing, user listing, searching, filtering, sorting, pagination, adding users, editing users, deleting users, and logout confirmation.

The project uses the JSONPlaceholder REST API for initial user data. Because JSONPlaceholder is a mock API and does not permanently save changes, the application stores updated user data in Local Storage after create, update, and delete operations.

---

## Login Details

Use the following credentials to access the dashboard:

- Username: `Admin`
- Password: `admin@123`

If a user tries to open the dashboard directly without login, the application redirects to the login page. After successful login, the user is navigated to the home dashboard.

---

## Features

- Admin login page with username and password validation
- Protected home route using React Router
- Session-based login state using Session Storage
- Logout button in the dashboard header
- Logout confirmation popup with Yes and No actions
- View users in a responsive table
- Add new user details
- Edit existing user details
- Delete user details with confirmation popup
- Display serial numbers correctly after deleting users
- Search users by first name, last name, email, or department
- Filter users by first name, last name, email, and department
- Sort users by first name, last name, email, and department
- Pagination with multiple page size options
- Client-side form validation
- Duplicate email validation
- Loading and error states
- Local Storage support for persistent user changes
- Responsive UI for desktop, tablet, and mobile screens

---

## Technologies and Libraries Used

### Frontend

- React.js
- JavaScript
- HTML5
- Vite

### Styling

- Tailwind CSS
- Tailwind CSS utilities are used instead of separate normal CSS files
- Responsive design, gradients, shadows, hover effects, popups, and animations are implemented using Tailwind classes

### Libraries

- Axios
- React Router DOM
- React Hooks
- Tailwind CSS
- @tailwindcss/vite
- Oxlint

### API

- JSONPlaceholder REST API

API endpoint:

```text
https://jsonplaceholder.typicode.com/users
```

---

## Project Structure

```text
user_management
│
├── public
│
├── src
│   ├── api
│   │   └── userService.js
│   │
│   ├── assets
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components
│   │   ├── ConfirmDelete.jsx
│   │   ├── ConfirmLogout.jsx
│   │   ├── FilterPopup.jsx
│   │   ├── Header.jsx
│   │   ├── LoginPage.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── SearchBar.jsx
│   │   ├── UserForm.jsx
│   │   ├── UserRow.jsx
│   │   └── UserTable.jsx
│   │
│   ├── utils
│   │   └── validators.js
│   │
│   ├── App.jsx
│   ├── AppRouter.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Main Functionalities

### Authentication

The application has a login page with fixed admin credentials. React Router is used to protect the dashboard route. If the user is not logged in, the app redirects to the login page.

### User Management

The dashboard allows users to:

- View all users
- Add a new user
- Edit user details
- Delete user details

After a user is deleted, the displayed serial numbers are updated automatically so the table continues in proper order.

### Search

Search works in real time using:

- First Name
- Last Name
- Email
- Department

### Filtering

Users can be filtered using:

- First Name
- Last Name
- Email
- Department

### Sorting

Sorting is available for:

- First Name
- Last Name
- Email
- Department

Both ascending and descending order are supported.

### Pagination

Pagination is implemented with page size options such as:

- 10
- 25
- 50
- 100

### Form Validation

The user form validates:

- First name is required
- First name must contain at least 2 characters
- First name allows only alphabets and spaces
- Last name is required
- Last name must contain at least 2 characters
- Last name allows only alphabets and spaces
- Email is required
- Email must be in valid format
- Email must be unique
- Department must be selected

### Local Storage

Local Storage is used to keep user data available after page refresh.

The application updates Local Storage when a user is:

- Added
- Updated
- Deleted

On application startup, the dashboard first checks Local Storage. If data is available, it loads from Local Storage. If not, it fetches initial data from JSONPlaceholder.

### Logout

The dashboard includes a red Logout button at the top-right side of the header. When clicked, a confirmation popup is shown with:

- No button in red color
- Yes button in green color

If the user confirms logout, the session authentication value is removed and the user is redirected to the login page.

---

## Error Handling

The project handles errors in the following areas:

- Shows a loading message while user data is being fetched
- Shows a user-friendly error message if initial user loading fails
- Handles API add, update, and delete failures
- Saves changes locally when mock API operations cannot permanently persist data
- Shows validation messages for empty or invalid form fields
- Prevents duplicate email addresses
- Shows an invalid credentials message on failed login
- Uses confirmation dialogs before delete and logout actions

---

## UI and Styling

The project styling is implemented with Tailwind CSS instead of separate normal CSS styling files.

UI highlights include:

- Responsive dashboard layout
- Gradient header
- Modern login page
- Styled search and filter sections
- Responsive user table
- Add and edit user modal
- Delete confirmation modal
- Logout confirmation modal
- Button hover effects
- Smooth popup animations
- Mobile-friendly layout

---

## Assumptions

JSONPlaceholder provides user data in a different structure from this project form. Because of that:

- The full name from the API is split into first name and last name
- Departments are assigned manually from predefined department values
- Local Storage is used because JSONPlaceholder does not permanently store added, edited, or deleted records

Departments used in this project:

- IT
- HR
- Finance
- Sales
- Marketing

---

## Challenges and Solutions

### Challenge

JSONPlaceholder is a mock API, so user changes are not permanently saved on the server.

### Solution

The application stores the updated user list in Local Storage so changes remain available after refreshing the page.

### Challenge

Users should not access the dashboard without login.

### Solution

Protected routing was added using React Router and Session Storage authentication state.

### Challenge

After deleting a user, visible table numbers should remain continuous.

### Solution

The table displays calculated serial numbers based on the current page index instead of directly showing the original API user id.

---

## Future Enhancements

- Connect the project with a real backend API
- Add role-based access control
- Add password encryption and secure authentication
- Add dashboard statistics
- Add toast notifications
- Add dark mode
- Add user profile image upload
- Export users to Excel or PDF
- Import users using CSV
- Add unit testing and integration testing
- Add server-side search, filter, sorting, and pagination

---

## Deployment

The project can be built for production using the Vite build command and deployed on platforms such as:

- Vercel
- Netlify
- Render
- GitHub Pages

---

## Author

**Shiva Koppula**

B.Tech Computer Science Engineering

Siddhartha Institute of Technology and Sciences

Email: [shivakoppulagoud@gmail.com](mailto:shivakoppulagoud@gmail.com)

Location: Ranga Reddy, Telangana

---

## Thank You

Thank you for reviewing this User Management Dashboard project. This project demonstrates React.js fundamentals, protected routing, REST API integration, CRUD operations, Local Storage persistence, form validation, responsive Tailwind CSS styling, and modern frontend development practices.
