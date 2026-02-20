## PROJECT TITLE = CASE STUDY

This project asked me to able to use responsive Next.js application to display a list of users also filter them by their name also email, and view detailed user profiles


## STACK 
This project built with Nextjs React Tailwind and React-Icons

## STRUCTURE

app/
├── layout.js              
├── page.js                # Home page (UserList + Header importedhere)
├── user/
│   └── [id]/page.js       # Dynamic route for user detail page
src/
├── components/
│   ├── Header.js          # Search input + status filter buttons
│   └── UserList.js        # Desktop table + mobile cards
data/
└── sample_data.json     
https://casestudy-gold.vercel.app/

## DESCRIPTION

**Installing Next.js**

- npx create-next-app@latest .

I have chosen App Router, JavaScript


-  Installing Tailwind

npm install -D tailwindcss@3 postcss autoprefixer 
npx tailwindcss init -p 

config files updated according to the folders I am using.
globals.css has been updated as well


- App Router routing

As I chosen App router next js so I was eligible to use folders as routes, this helps as not to create more folders as we do in react without next js

**app/user/[id]/page.js => /user/1**

-  dynamic routing [id]
 with navigation logic I have directly used Link next js to navigate my pages

