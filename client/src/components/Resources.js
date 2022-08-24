import {React, useState, useEffect} from 'react'

function Resources() {
//bills dated back to 2010 in nys senate
  const [bills, setBills] =useState([])

  useEffect(()=>{
    fetch("https://legislation.nysenate.gov/api/3/bills/search?term=%22cannabis%22?key=pGjH469dftJJ48ZY5UaonFP5782Jhsg6")
    .then(r=>r.json())
    .then(data=>{console.log(data)
      setBills(data.items)
    })
  },[])

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