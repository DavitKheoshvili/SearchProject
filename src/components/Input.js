import 'bootstrap/dist/css/bootstrap.css'


function Input ({handleChangeInput, handleSearch}) {
    return (
        <div className='input-group' style={{padding: '10vh 10vw 10vh 10vw'}} >
            <input type="text" className='form-control' onChange={handleChangeInput} style={{borderRadius: '10px'}} placeholder="Type username here"></input>
            <button type="button" className='btn btn-outline-secondary' onClick={handleSearch} style={{borderRadius: '10px', backgroundColor: 'white', color: 'gray'}}><strong>Search</strong></button>  
        </div>
        )
}

export default Input