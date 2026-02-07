"use client";
import { LiveblocksProvider } from '@liveblocks/react';
import React, { ReactNode } from 'react'

const LiveProvider = ({children}:{children:ReactNode}) => {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_vF6fCt3XZvrFl3SqwFDG3LVXg3ydtjEOTqTZmAdwQlMqj2dK9vtZ9moEpBzqtbip"}>
        {children}
    </LiveblocksProvider>
  )
}

export default LiveProvider