"use client";
import React from 'react'
import EmptySearch from './empty-search';
import EmptyFavorites from './empty-favorites';
import EmptyBoard from './empty-boards';

interface BoardListProps {
    orgId: string;
    query: {
        search?: string | null;
        favorites?: string | null;
    }
}

const BoardList = ({
    orgId,
    query
}:BoardListProps) => {
    const data = [];
    if(!data?.length && query.search){
        return(
            <EmptySearch/>
        )
    }

    if(!data?.length && query.favorites){
        return(
            <EmptyFavorites/>
        )
    }

    if(!data?.length) {
        return (
            <EmptyBoard/>
        )
    }

  return (
    <div>
        {JSON.stringify(query)}
    </div>
  )
}

export default BoardList