import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../services/product.service';

const Request = ({requestBody}) => {
  useEffect(() => {
    console.log(requestBody);
  }, []);
  return (
    <div>
      Tipo de request example
    </div>
  )
}

export default Request
