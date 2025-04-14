'use client'
import { useRouter } from 'next/navigation'
import { Ghost } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <Ghost className="h-12 w-12 text-gray-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button onClick={() => router.push('/')}>
          Go Back Home
        </Button>
      </div>
    </div>
  )
}

