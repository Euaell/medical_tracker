'use client'

import Button from '@/components/Button'
import {useState, useEffect, act} from 'react';

// @ts-ignore

export default function  Pagination({pageSize,offset} : {pageSize:any, offset:any}){
    const [activePage, setActivePage] = useState(1)
    const newArray = [];
    for (let i = 1; i < pageSize; i++) {
        newArray.push(i)
    }



    return (
        <div className="flex mt-2 justify-end">
            {newArray.map((item) =>{
                return <Button content={item} key={item}  setActive={setActivePage} activePage={activePage}   />
            })}
            <select name="" id="">
                <option value="volvo">10</option>
                <option value="saab">25</option>
                <option value="opel">50</option>
                <option value="audi">100</option>
            </select>
        </div>
    )
}