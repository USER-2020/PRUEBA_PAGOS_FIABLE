import JsonView from '@uiw/react-json-view'

// @ts-ignore
const Response = ({ responseBody }) => {
    return (
        <>
            <h6>Response:</h6>
            <div className='card' style={{ height: '400px', overflowY: 'scroll', borderRadius: 32 }}>
                <JsonView value={responseBody} />
            </div>
        </>
    )
}

export default Response
