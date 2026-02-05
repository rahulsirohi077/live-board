"use client";

import { DropdownMenu as dm } from "radix-ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

interface ActionsProps {
    children: React.ReactNode,
    side?: dm.DropdownMenuContentProps["side"]
    sideOffset?: dm.DropdownMenuContentProps["sideOffset"]
    id: string;
    title: string;
}

export const Actions = ({
    children,
    side,
    sideOffset,
    id,
    title
}:ActionsProps)=>{

    const onCopyLink = () =>{
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`,
        )
        .then(()=> toast.success("Link Copied"))
        .catch(()=> toast.error("Failed to Copy Link"))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onClick={(e)=>{
                    e.stopPropagation();
                }}
                side={side}
                sideOffset={sideOffset}
                className="w-60"
            >
                <DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopyLink}>
                    <Link2 className="h-4 w-4 mr-2"/>
                    Copy Board Link
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}