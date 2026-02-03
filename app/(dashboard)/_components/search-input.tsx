import React from 'react'

import queryString from 'query-string'
import { Search } from 'lucide-react'
import { useDebounceValue } from 'usehooks-ts'
import { useRouter } from 'next/navigation'
import {
    ChangeEvent,
    useEffect,
    useState
} from "react"
import { Input } from '@/components/ui/input'



const SearchInput = () => {
    const router = useRouter();
    const [debouncedValue, setValue] = useDebounceValue("", 500)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value);
    };

    useEffect(()=>{
        const url = queryString.stringifyUrl({
            url:"/",
            query:{
                Search: debouncedValue
            }
        },{skipEmptyString:true,skipNull:true});

        router.push(url);

    },[debouncedValue, router])

  return (
    <div className='w-full relative'>
        <Search className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4'/>
        <Input 
            className='w-full max-w-129 pl-9'
            placeholder='Search Board'
            onChange={handleChange}
        />
    </div>
  )
}

export default SearchInput