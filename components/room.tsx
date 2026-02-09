"use client";

import { ReactNode } from "react";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/node";
import { Layer } from "@/types/canvas";

interface RoomProps {
    children: ReactNode;
    roomId: string;
    fallback: NonNullable<ReactNode> | null;
}

export const Room = ({
    children,
    roomId,
    fallback
}: RoomProps) => {
    return (
        <RoomProvider 
            id={roomId} 
            initialPresence={{
                cursor: null,
                selection:[]
            }}
            initialStorage={{
                layers: new LiveMap<string,LiveObject<Layer>>(),
                layerIds: new LiveList([])
            }}
        >
            <ClientSideSuspense fallback={fallback}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    )
}