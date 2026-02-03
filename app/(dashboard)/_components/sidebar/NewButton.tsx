"use client";

import React from 'react'
import { Plus } from "lucide-react";
import { CreateOrganization } from '@clerk/nextjs';

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Hint from '@/components/hint';

const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='aspect-square'>
                    <Hint label='create organization' side='right' align='start' sideOffset={18}>
                        <button className='bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition'>
                            <Plus className='text-white' />
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className='p-0 w-fit border-none max-w-120'>
                <VisuallyHidden>
                    <DialogTitle>Create Organization</DialogTitle>
                </VisuallyHidden>
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
}

export default NewButton