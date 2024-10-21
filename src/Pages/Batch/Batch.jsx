import React from 'react'
import './batch.css'
import BatchComponet from '../../Componet/BatchComponet/BatchComponet'

function Batch() {
  return (
    <>
      <div className="container mt-5 mb-5">
          <div className="inner-container">
              <BatchComponet />
              <BatchComponet />
          </div>
      </div>

    </>
  )
}

export default Batch