import 'bootstrap/dist/css/bootstrap.css'

function Image ({pic, profile_url}) {
    return (
        <a href={profile_url} target="_blank" >
            <img  src={pic} className="mx-auto d-block" style={{width: '10vw', borderRadius: '50%'}}/>
        </a>
        )
}

export default Image