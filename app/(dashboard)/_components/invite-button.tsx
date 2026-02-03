import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const InviteButton = () => {
    const handleOpenChange = (open: boolean) => {
        if (!open) {
            // Remove hash from URL when dialog closes
            window.history.replaceState(null, '', window.location.pathname);
        }
    };


    return (
        <Dialog onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button variant={'outline'}>
                    <Plus className="h-4 w-4 mr-2" />
                    Invite Members
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-220 min-w-fit min-h-fit">
                <VisuallyHidden>
                    <DialogTitle>Invite Members</DialogTitle>
                </VisuallyHidden>
                <OrganizationProfile
                    routing="hash"
                />
            </DialogContent>
        </Dialog>
    )
}