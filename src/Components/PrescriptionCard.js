import React from 'react'

const PrescriptionCard = (props) => {
  return (
    <div className='presCard'>
      
        <div className="medications" style={{display:"flex", flexDirection:"column"}}>
          <h3 className='medH3'>Medications</h3>
          <div className="medicalsProvided presDiv" style={{display:"flex", flexDirection:"column"}}>
            {
              props.med.map((i)=>{
                return <div className='medicalsNamePrescription' style={{display:"flex", flexDirection:"column"}}>{i} </div>
              })
            }
          </div>

        </div>
        <hr style={{margin:"2%"}} />
        <div className="medicalInteraction presDiv" style={{padding:"1%"}}>
          <div className="AskedPrescription">Medical Interactions</div>{props.medInterac}
        </div>
        <div className="provCommMobile presDiv">
          <div className="AskedPrescription">Contact: </div>{props.provCommMobile}
        </div>
        <div className="provCommEmail presDiv">
          <div className="AskedPrescription">Email:   </div>{props.provCommEmail}
        </div>
    </div>
  )
}

export default PrescriptionCard