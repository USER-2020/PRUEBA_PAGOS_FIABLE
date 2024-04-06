import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../services/product.service';
import JsonView from '@uiw/react-json-view';

const Request = ({ requestBody }) => {
  useEffect(() => {
    console.log(requestBody);
  }, []);
  return (
    <>
      <h6>Request body:</h6>
      <div className='card' style={{ height: '100px', overflowY: 'scroll', borderRadius: 32 }}>
        <JsonView value={requestBody} />
      </div>
    </>
  )
}

export default Request