#  PROJECT TITLE  
##  Case Study

This project is a responsive Next.js application that displays a list of users.  
Users can:

- Search by first name, last name, or email
- Filter by Active / Inactive status
- View a detailed profile page for each user

Live Demo:
https://casestudy-gold.vercel.app/

---

#  TECH STACK

- Next.js (App Router)
- React
- Tailwind CSS
- React Icons

---

# INSTALLATION PROCESS

## 1 Creating the Project

npx create-next-app@latest .

During setup:
- Chose App Router
- Chose JavaScript
- Default configuration

This automatically:
- Installed React
- Installed Next.js
- Created project structure
- Enabled file-based routing

---

## 2️ Installing Tailwind CSS

npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

Then:

- Updated tailwind.config.js/postcss content paths
- Added Tailwind directives inside globals.css:

@tailwind base;
@tailwind components;
@tailwind utilities;



---

#  PROJECT STRUCTURE
```
app/
├── layout.js              
├── page.js                
├── user/
│   └── [id]/page.js       

src/
├── components/
│   ├── Header.js          
│   └── UserList.js        

data/
└── sample_data.json     
```
---

#  BASIC LOGIC EXPLANATION

##  Routing Logic (App Router)

Because App Router was selected, routing works based on folders.

Example:

app/page.js                =>  /
app/user/[id]/page.js      =>  /user/1

---

## Dynamic Routing

Folder:
app/user/[id]/page.js

[id] means this part of the URL is dynamic.

If the user visits:

/user/1

Next.js automatically provides:

params = { id: "1" }

We extract it:

const userId = params.id

Then find the correct user:

const user = data.find(u => u.id === Number(userId)) (URL sends us as string thats why we need to convert it to the integer)

This loads the selected user’s profile.

---

# Home Page Logic (app/page.js)

This page:
- Imports user data
- Imports Header component
- Imports UserList component

### Step 1 — State Management

const [search, setSearch] = useState("")
const [statusOption, setStatusOption] = useState("All")

These states control:
- Search input ( what we can search ? name adn email )
- Active / Inactive filter

---

### Step 2 — Filtering Logic

First filter by status:

if (statusOption === "active") return user.active === true
if (statusOption === "inactive") return user.active === false
return true (this means "All")

**Then filter by search text:**

fullName.includes(searchText) ||
email.includes(searchText)

Logic flow:

All Users
   ↓
Filter by Status
   ↓
Filter by Search
   ↓
Display Result

---

# Component Logic

## Header Component

Contains:
- Search input
- Filter buttons

Receives props:

search
setSearch
statusOption
setStatusOption

It does not contain data.
It only updates state.

---


Navigation is handled using:

<Link href={`/user/${user.id}`}>

This enables client-side navigation.

---

# RESPONSIVE DESIGN


Tailwind responsive utilities used:
- hidden md:table
- md:hidden

---



# What I have used in this project ?

- File-based routing
- Dynamic routing 
- State management
- Filtering logic
- Component reusability
- Responsive design
- Clean folder structure
- Navigation using Next.js Link
