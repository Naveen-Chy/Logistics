'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter()

  useEffect(() => {
    console.error('Error caught in error.tsx:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <div className="flex flex-col items-center gap-4">
          <AlertTriangle className="text-red-500 w-10 h-10" />
          <h2 className="text-xl font-semibold text-gray-800">Something went wrong</h2>
          <p className="text-gray-600 text-sm">
            {error?.message || 'An unexpected error occurred.'}
          </p>

          <div className="mt-4 flex gap-2">
            <Button variant="outline" onClick={() => router.push('/')}>
              Go Home
            </Button>
            <Button onClick={() => reset()}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
