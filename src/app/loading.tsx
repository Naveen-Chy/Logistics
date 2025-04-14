'use client'
import { Loader2 } from 'lucide-react'
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <p className="text-sm text-gray-600">Loading, please wait...</p>
      </div>
    </div>
  )
}
