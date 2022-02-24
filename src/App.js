import react, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Content from "./components/Content";
import Input from "./components/Input";



function App() {
//Here are decleared all my useState hooks.
  const [input, setInput] = useState('') //saves user input value in state.
  const [login, setLogin] = useState('') //username of user 
  const [id, setId] = useState('') //ID of user
  const [html_url, setHtml_url] = useState('') //profile ulr of user
  const [avatar, setAvatar] = useState('') //profile picture of user
  const [err, setErr] = useState('') // saves err message text in case of response have 404 status code

//when page loads, this part of code send get request to github and gets example user
  useEffect(() => {
    fetch("https://api.github.com/users/example")
  .then(response => response.json())
  .then(data => setData(data))
  }, [])
//This function will take json as parametre. destucture some values from it. 
//and put those values into react hooks individualy
  const setData = ({login, id, html_url, avatar_url}) => {
    setLogin(login)
    setId(id)
    setHtml_url(html_url)
    setAvatar(avatar_url)
  }
  //this function will be called when onchange event occuars in input tag. 
  //and puts user input text into input useState hook
  const handleChangeInput = (e) => {
    setInput(e.target.value)
  }
  //This function will be called when search button is clicked.
  //Get request will be sent into url with specifiec username(which user will input)
  const handleSearch = () => {
    setErr("")
    fetch(`https://api.github.com/users/${input}`)
  .then(response => response.json())
  .then(data => {
    if(data.message == "Not Found"){
      setErr("User " + data.message  + ". Please, search valid user.")
      setData({login: 'example', id: '57936', profile_url: '', avatar_url: 'https://avatars.githubusercontent.com/u/57936?v=4'})
    } else {
      setData(data)
    }
  })
  }
 
  return (
    <div className="App container font-link" style={{padding: '2%'} }>
      <Input handleChangeInput={handleChangeInput} handleSearch={handleSearch}/>
      <Content login={login} id={id} html_url={html_url} avatar={avatar} err={err}/>
    </div>
  );
}


export default App;
