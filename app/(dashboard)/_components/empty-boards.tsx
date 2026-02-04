"use client";

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

import { api } from '@/convex/_generated/api';
import { useOrganization } from '@clerk/nextjs';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { toast } from 'sonner';

const EmptyBoard = () => {
    const { organization } = useOrganization();
    const { mutate,pending } = useApiMutation(api.board.create);

    const onClick = ()=> {

        if(!organization) return;

        mutate({
            orgId: organization?.id,
            title: "Untitled"
        })
            .then((id)=>{
                toast.success("Board Created")
                // TODO: Redirect to board/{id}
            })
            .catch(()=> toast.error("Failed To Create Board"))
    }

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <Image
        src={'/note.jpg'}
        alt='Empty'
        height={200}
        width={200}
      />
      <h2 className='text-2xl font-semibold mt-6'>
        Create your first board!
      </h2>
      <p className='text-muted-foreground text-sm mt-2'>
        Start by creating a board for your Organization
      </p>
      <div className='mt-6'>
        <Button disabled={pending} size={'lg'} onClick={onClick}>
            Create Board
        </Button>

      </div>
    </div>
  )
}

export default EmptyBoard