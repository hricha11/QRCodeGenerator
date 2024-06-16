import QRCode from 'qrcode'
import {useState} from 'react'
function App() {
  const[url, setUrl]= useState('')
  const[qrcode, setQrcode]= useState()

  const GenrateQRCode=()=>{
    QRCode.toDataURL(url, (err,url)=>{
      if (err) return console.error(err)
      console.log(url)
      setQrcode(url)
    })
  }

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };
  return (
    <div className="content">
      <h1>QR Code Genrator</h1>
      <input type="text" placeholder="eg:http://www.google.com" value={url} onChange={handleInputChange} ></input>
      <button onClick={GenrateQRCode} >Genrate</button>  
      <img src={qrcode}></img><br/>
      <a href={qrcode} download="qrcode.png">Download</a>
    </div>
  )
}

export default App
