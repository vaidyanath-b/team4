/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/E2K0YHoXLGO
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function Uploadcsv() {
  return (
    (<main
      className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className="max-w-3xl w-full px-6 py-12 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">CSV File Viewer</h1>
          <p className="text-gray-600 dark:text-gray-400">Upload a CSV file and view its contents in a table.</p>
          <div className="flex justify-center">
            <label
              className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer dark:border-gray-800"
              htmlFor="file-upload">
              <UploadIcon className="h-5 w-5 mr-2" />
              Upload CSV
            </label>
            <input accept=".csv" className="sr-only" id="file-upload" type="file" />
          </div>
        </div>
        <div className="mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Column 1</TableHead>
                <TableHead>Column 2</TableHead>
                <TableHead>Column 3</TableHead>
                <TableHead>Column 4</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Data 1</TableCell>
                <TableCell>Data 2</TableCell>
                <TableCell>Data 3</TableCell>
                <TableCell>Data 4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Data 5</TableCell>
                <TableCell>Data 6</TableCell>
                <TableCell>Data 7</TableCell>
                <TableCell>Data 8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Data 9</TableCell>
                <TableCell>Data 10</TableCell>
                <TableCell>Data 11</TableCell>
                <TableCell>Data 12</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>)
  );
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>)
  );
}
