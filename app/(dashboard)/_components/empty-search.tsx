import Image from 'next/image'
import React from 'react'

const EmptySearch = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <Image
        src={'/Empty-Search.jpg'}
        alt='Empty Search'
        height={200}
        width={200}
      />
      <h2 className='text-2xl font-semibold mt-6'>
        No Results Found
      </h2>
      <p className='text-muted-foreground text-sm mt-2'>
        Try Searching for something else
      </p>
    </div>
  )
}

export default EmptySearch