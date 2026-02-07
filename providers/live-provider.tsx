"use client";
import { LiveblocksProvider } from '@liveblocks/react';
import React, { ReactNode } from 'react'

const LiveProvider = ({children}:{children:ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        {children}
    </LiveblocksProvider>
  )
}

export default LiveProvider