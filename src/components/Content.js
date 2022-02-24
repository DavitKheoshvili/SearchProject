import Image from "./Image"
import UserName from "./UserName"
import Id from "./Id"
import Error  from "./Error";
import 'bootstrap/dist/css/bootstrap.css'

function Content ({login, id, html_url, avatar, err}){

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="card" style={{ display: 'flex', flexDirection: 'row', borderRadius: '20px', padding: '20px 40px 20px 20px'}}>
                <Image pic={avatar} profile_url={html_url}/>
                <div style={{marginLeft: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <UserName username={login}/>
                    <Id id={id}/>
                </div>
            </div>
            <Error err={err}/>
        </div>
        
    )
}

export default Content;