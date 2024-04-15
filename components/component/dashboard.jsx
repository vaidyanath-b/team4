/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/OJTVzzoIS0L
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export function Dashboard() {
  return (
    (<div
      className="grid min-h-screen bg-gray-100 lg:grid-cols-[250px_1fr] dark:bg-gray-900">
      <div
        className="flex flex-col w-full border-b border-r border-gray-200 min-h-screen lg:border-0 lg:max-h-[calc(100vh_-_48px)]">
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between p-4">
            <Link className="flex items-center space-x-2 text-2xl font-bold" href="#">
              <HomeIcon className="w-6 h-6" />
              <span className="text-xl font-bold">Admission</span>
            </Link>
            <button
              className="p-2 rounded-md hover:bg-gray-100 focus-visible:outline-none dark:hover:bg-gray-800">
              <SettingsIcon className="w-6 h-6" />
              <span className="sr-only">Settings</span>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <div className="px-2 space-y-2">
              <Link
                className="flex items-center w-full py-2.5 text-sm font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#">
                <HomeIcon className="mr-4 h-5 w-5" />
                Home
              </Link>
              <Link
                className="flex items-center w-full py-2.5 text-sm font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#">
                <UserIcon className="mr-4 h-5 w-5" />
                Profile
              </Link>
              <Link
                className="flex items-center w-full py-2.5 text-sm font-semibold rounded-md bg-gray-100 dark:bg-gray-800"
                href="#">
                <CalendarIcon className="mr-4 h-5 w-5" />
                Calendar
              </Link>
              <Link
                className="flex items-center w-full py-2.5 text-sm font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#">
                <BookIcon className="mr-4 h-5 w-5" />
                Courses
              </Link>
              <Link
                className="flex items-center w-full py-2.5 text-sm font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#">
                <FileIcon className="mr-4 h-5 w-5" />
                Applications
              </Link>
              <Link
                className="flex items-center w-full py-2.5 text-sm font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#">
                <DollarSignIcon className="mr-4 h-5 w-5" />
                Payments
              </Link>
              <Link
                className="flex items-center w-full py-2.5 text-sm font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                href="#">
                <MessageSquareIcon className="mr-4 h-5 w-5" />
                Messages
              </Link>
            </div>
          </nav>
        </div>
        <div
          className="flex items-center justify-center h-12 border-t border-gray-200">
          <button
            className="p-2 rounded-md hover:bg-gray-100 focus-visible:outline-none dark:hover:bg-gray-800">
            <LogOutIcon className="w-5 h-5" />
            <span className="sr-only">Log out</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center h-14 px-4 border-b border-gray-200 lg:px-6">
          <Button size="icon" variant="icon">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="flex-1 min-w-0 flex items-center gap-4 lg:gap-6">
            <div className="hidden font-semibold text-base lg:block">Admission Management</div>
            <Button className="rounded-full ml-auto" size="icon" variant="outline">
              <SearchIcon className="w-4 h-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32" />
              <span className="sr-only">User</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <div
            className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center space-y-2">
                <BellIcon className="w-8 h-8" />
                <h3 className="text-lg font-bold">Notifications</h3>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Manage</h4>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center space-y-2">
                <MessageSquareIcon className="w-8 h-8" />
                <h3 className="text-lg font-bold">Queries</h3>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Answer</h4>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center space-y-2">
                <XCircleIcon className="w-8 h-8" />
                <h3 className="text-lg font-bold">Cancellations</h3>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Process</h4>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>)
  );
}

function BellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}


function BookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>)
  );
}


function DollarSignIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>)
  );
}


function FileIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function LogOutIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function MessageSquareIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function XCircleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>)
  );
}