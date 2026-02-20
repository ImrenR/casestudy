
import './globals.css'
// layout.js is common place for all pages and components
//Server component other words=> you cant use here interactive state!!

export const metadata = {
  title: "Case Study",
  description: "Nextjs, React 19, Tailwind",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8 lg:p-16">

    
        <main>{children}</main>
      </body>
    </html>
  )
}