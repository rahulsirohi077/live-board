"use client"

import { useRenameModal } from '@/store/use-rename-modal'
import React, { FormEventHandler, SubmitEventHandler, useEffect, useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';

const RenameModal = () => {
    const {mutate,pending} = useApiMutation(api.board.update);

    const {
        isOpen,
        onClose,
        onOpen,
        initialValues
    } = useRenameModal();

    const [title,setTitle] = useState(initialValues.title);

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTitle(initialValues.title);
    },[initialValues.title])

    const onSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        mutate({
            id:initialValues.id,
            title:title
        })
        .then(()=> {
            toast.success("Board Renamed");
            onClose()
        })
        .catch(()=> toast.error("Failed to rename Board"))
    }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Edit Board Title
                </DialogTitle>
            </DialogHeader>
            <DialogDescription>
                Enter a New Title for Board
            </DialogDescription>
            <form onSubmit={onSubmit} className='space-y-4'>
                <Input
                    disabled={pending}
                    required
                    maxLength={60}
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder='Board Title'
                />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type='button' variant={'outline'}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button disabled={pending} type='submit'>
                        Save
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default RenameModal