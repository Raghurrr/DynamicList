import React , {useState} from 'react';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
function ColorList() {

    const[color,setColor] = useState(["Black"])
    function AddColor()
    {
        let col=document.getElementById("inp").value;
        
        if(col!='')
        {
            setColor([...color, col])
            document.getElementById("inp").value="";

        }
        else{
            alert("Can't add Empty to list")
        }
        


    }
    function DelColor()
    {
   
    if(color!=0)
    {
    setColor(color.slice(0,-1))
    const item=color.at(-1)

    var msg=document.getElementById("msg");
    msg.innerHTML="You just Deleted The   "+item+"  From the List";
    
    }
    else{
        alert("list is Empty")
    }
   
      
     }
     
     
    
  return (
    <div>
      <center>
        <input type="text" id="inp"></input>
        <br />
        <button  onClick={AddColor}>Add Color</button>
        <br />
        <button  onClick={DelColor}>Del Color</button>
        {color.map(x=> <li>{x}</li>)}
        <p id="msg"></p>
      </center>
    </div>
  )
}

export default ColorList
