import {React, useState, useEffect} from 'react'

function Resources({bills}) {
//bills dated back to 2010 in nys senate


  return (
    <div>
      {
        bills.map((bill)=>{
          return (<div>
            <h1>{bill.result.title}</h1>
            <h3>{bill.basePrintNo}</h3>
            <h3>{bill.session}</h3>
            <p>{bill.chamber}</p>
            <p>{bill.status}</p>
            <p>{bill.summary}</p>
          </div>
          )}
        )
      }
    </div>
  )
}

export default Resources