'use client'

import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-3xl font-semibold mb-2">404 — Page Not Found</h1>
      <p className="text-gray-500 mb-6">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        Go back home
      </Link>
    </main>
  )
}
