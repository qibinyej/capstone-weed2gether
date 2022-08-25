import {React, useState, useEffect} from 'react'

function Resources({bills, laws}) {
//bills dated back to 2010 in nys senate


  return (
    <div>
      <div>
        <h1 className="mt-10 text-center text-xl font-semibold">New York State Cannabis Legislation</h1>
        <h6 className="mt-1 text-center text-sm">(sorted by session year and  status)</h6>
      {
        bills.map((bill)=>{
          return (<div key={bill.id} className='mt-8 px-10 max-w-md mx-auto bg-white rounded-lg shadow-md md:max-w-2xl px-4 py-3'>
            <h1 className='text-base '><strong>{bill.result.title}</strong></h1>
            <h6><strong>Bill No.:</strong> {bill.result.basePrintNo}</h6>
            <h6><strong>Session:</strong> {bill.result.session}</h6>
            <p><strong>Status:</strong> {bill.result.status.statusDesc}</p>
            <p className='overflow-auto hover:overflow-scroll h-32'><strong>Summary:</strong> 
            <br />
            {bill.result.summary}</p>
          </div>
          )}
          )
        }
      </div>

      {/* <div>
        <h1>Law in Effect</h1> */}
        {/* {
          laws.map((law)=>{
            return (<div>
                <h1 className='text-base '>{law.result.title}</h1>
            <span className='justify'>Bill No.: {law.result.basePrintNo}</span>
            <span>Session: {law.result.session}</span>
            <p>{law.result.chamber}</p>
            <p>Status: {law.result.status.statusDesc}</p>
            <p>Summary: {law.result.text}</p>

              </div>
              )
          }) */}

        {/* }
      </div> */}
    </div>
  )
}

export default Resources