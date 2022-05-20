import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

export default function HoldCards(props) {
  const people = useSelector((state) => state.Contacts);
  // let NoOfProple = peoples.length();

  return (
    <div class="scroll-bar">
      {
        people.map((e) => (
          // console.log("hiii", e.name);
          <Card ShowName={e.name} ShowEmail={e.email} ShowPhone={e.phone} CardID={e.id} setFlag = {props.setFlag} flagy = {props.flagy}/>
        ))
      }
    </div>
  )
}
