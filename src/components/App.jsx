import React from "react"

import Navbar from './Navbar'
import Voyage from './Voyage'
import {travelList} from '../datas/travelList'

export default function App(){
   const travelItem = travelList.map(item => {
    return (
    <Voyage 
        key={item.id}
        item={item}
    />
)}
)
    return(
        <>
            <Navbar />
            {travelItem}
        </>
    );
}