import 'bootstrap/dist/css/bootstrap.css'
import '../fontFolder/font.css'

function Error ({err}) {
    return (
        <>
            <p className='font-link' style={{ borderRadius: '10px', marginTop: '20px', padding: '5px', color: 'red'}}>{err}</p>
        </>
        )
}

export default Error