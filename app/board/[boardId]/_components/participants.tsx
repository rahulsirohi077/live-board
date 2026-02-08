import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export const Participants = () => {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md'>
        List Of Users
    </div>
  )
}

export function ParticipantSkeleton() {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-25'>
        <Skeleton className='h-full w-full bg-muted'/>
    </div>
  )
}