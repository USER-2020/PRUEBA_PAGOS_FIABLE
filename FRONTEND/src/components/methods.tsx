import './method.css'

const Methods = () => {
    return (
        <div className='card mt-4 mb-4'>
            <ul className='bigContainer'>
                <li className='card method get'>
                    <div>
                        <h2 style={{ margin: '0 10px 0 0' }}>GET</h2>
                    </div>
                    <div>
                        <h6 style={{ margin: '0 10px' }}>Get all products</h6>
                        <p style={{ margin: '0 10px' }}>/products</p>
                    </div>
                    <div>
                        <span className='badge text-bg-success' style={{ margin: '0 0 0 10px' }}>working</span>
                    </div>
                </li>

                <li className='card method get'>
                    <div>
                        <h2 style={{ margin: '0 10px 0 0' }}>GET</h2>
                    </div>
                    <div>
                        <h6 style={{ margin: '0 10px' }}>Get all users</h6>
                        <p style={{ margin: '0 10px' }}>/users</p>
                    </div>
                    <div>
                        <span className='badge text-bg-success' style={{ margin: '0 0 0 10px' }}>working</span>
                    </div>
                </li>
                <li className='card method get'>
                    <div>
                        <h2 style={{ margin: '0 10px 0 0' }}>GET</h2>
                    </div>
                    <div>
                        <h6 style={{ margin: '0 10px' }}>Get all relationsSpecial between users and price's products</h6>
                        <p style={{ margin: '0 10px' }}>/specialPrices</p>
                    </div>
                    <div>
                        <span className='badge text-bg-success' style={{ margin: '0 0 0 10px' }}>working</span>
                    </div>
                </li>
                <li className='card method post'>
                    <div>
                        <h2 style={{ margin: '0 10px 0 0' }}>POST</h2>
                    </div>
                    <div>
                        <h6 style={{ margin: '0 10px' }}>Add new products</h6>
                        <p style={{ margin: '0 10px' }}>/products</p>
                        <span className="badge text-bg-secondary">required body</span>
                    </div>
                    <div>
                        <span className='badge text-bg-success' style={{ margin: '0 0 0 10px' }}>working</span>
                    </div>
                </li>
                <li className='card method post'>
                    <div>
                        <h2 style={{ margin: '0 10px 0 0' }}>POST</h2>
                    </div>
                    <div>
                        <h6 style={{ margin: '0 10px' }}>Add new users</h6>
                        <p style={{ margin: '0 10px' }}>/users</p>
                        <span className="badge text-bg-secondary">required body</span>
                    </div>
                    <div>
                        <span className='badge text-bg-success' style={{ margin: '0 0 0 10px' }}>working</span>
                    </div>
                </li>
                <li className='card method post'>
                    <div>
                        <h2 style={{ margin: '0 10px 0 0' }}>POST</h2>
                    </div>
                    <div>
                        <h6 style={{ margin: '0 10px' }}>Add new relation between user with price's products special</h6>
                        <p style={{ margin: '0 10px' }}>/specialPrices</p>
                        <span className="badge text-bg-secondary">required body</span>
                    </div>
                    <div>
                        <span className='badge text-bg-success' style={{ margin: '0 0 0 10px' }}>working</span>
                    </div>
                </li>
                <li className='card method delete'>
                    <div>
                        <h2 style={{ margin: '0 10px 0 0' }}>DELETE</h2>
                    </div>
                    <div>
                        <h6 style={{ margin: '0 10px' }}>Delete relation of collection specialPriceUser</h6>
                        <p style={{ margin: '0 10px' }}>/deleteRelationSpecial</p>
                    </div>
                    <div>
                        <span className='badge text-bg-success' style={{ margin: '0 0 0 10px' }}>working</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Methods
