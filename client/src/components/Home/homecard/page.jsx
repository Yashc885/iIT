import React from 'react'

export default function page(props){
  return (
    <div key={props.id} className="my-[1rem]">
        <div className="font-semibold border-b-4 border-grey"><p>{props.title}</p></div>
        <p className="text-grey-700">{props.date}</p>
        <br />
        <p className="">{props.data}</p>
    </div>
  )
};