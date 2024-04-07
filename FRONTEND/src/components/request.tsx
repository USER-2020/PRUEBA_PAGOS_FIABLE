
import JsonView from '@uiw/react-json-view';
import { useEffect } from 'react';

// @ts-ignore
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
