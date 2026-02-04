import React from 'react'
import { CreateOrganization } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const EmptyOrg = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-semibold mt-6'>
            Welcome to Live Board
        </h2>
        <p className='text-muted-foreground text-sm mt-2'>
            Create an Organization to get started
        </p>
        <div className='mt-6'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size={'lg'}>
                        Create an Organization
                    </Button>
                </DialogTrigger>
                <DialogContent className='p-0 bg-transparent border-none max-w-120 w-fit'>
                    <VisuallyHidden>
                    <DialogTitle>Invite Members</DialogTitle>
                </VisuallyHidden>
                    <CreateOrganization />
                </DialogContent>
            </Dialog>
        </div>
    </div>
  )
}

export default EmptyOrg