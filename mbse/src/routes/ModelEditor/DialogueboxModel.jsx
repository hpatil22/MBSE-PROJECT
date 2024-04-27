import React, { useState } from 'react'
import './dialouge.css'

const DialogueboxModel = (props) => {
  const [uploadFile, setUploadFile]= useState();
 

    const fileHandler =(event)=>{
        const file = event.target.files[0]
        setUploadFile(file)
    }
    const handleClose = () => {
        props.setOpenPopup(false);
      };
   
    console.log(uploadFile)
    return (
        <>
    <div className='maindiv'>
        <div style={{display:'flex', justifyContent:"center"}}>
            <h2>Debug Configuration</h2>
        </div>
        <div className='config'>
            <div>
        <label>Name :</label>

        <input type="text" id="myText" value="New_Configuration" style={{width:'85%', height:'25px'}}></input>
            </div>
        </div>
        <div style={{padding:"20px", backgroundColor:"lightgray", width:"90%", }}>
            <div>
              <label>UML Model</label>
               <div style={{display:'flex'}}>

                <div style={{width:'95%', border:"1px solid black", height:"25px",position:'relative',backgroundColor:"white"}}>
                  {uploadFile && <h5 style={{ padding: 0 , margin: 0}}> {uploadFile.name}</h5>}
                </div>
                <button type='button' > 
               Browse
                <input type='file' onChange={fileHandler} id='input'/>

                </button>
               </div>
          

            </div>
            <div style={{display: "flex" , flexDirection:"column", marginTop:"20px"}}>
                <label> Element to be Executed</label>
                <select>
                    
                </select>
            </div>
            <div style={{display: "flex" , flexDirection:"column",marginTop:"20px"  }}>
                <label> Execution Engine</label>
                <select>
                    
                </select>
            </div>
            
        </div>
        <div style={{display:"flex", justifyContent:"flex-end", marginRight:"30px"}}>

<button onClick={handleClose}> Debug</button>
<button> close</button>
        </div>

    </div>
    {/* <Button onClick={openHandler}>hello popup</Button>
    <Popup  openPopup = {openPopup}
        setOpenPopup ={setOpenPopup}>
       
    </Popup> */}
   
        </>
  )
}

export default DialogueboxModel