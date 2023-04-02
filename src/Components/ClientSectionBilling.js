import React from 'react'
import BillSectionCard from './BillSectionCard'
import "./Style/BillingCard.css"
import Footer from './Footer'

const ClientSectionBilling = () => {


    const billingsArr = [{
        CheckupCost: "200",
        totalMedicinesCost: "4000",
        medicines: [
            ["Probuphine", "300"],
            ["Rybelsus", "500"],
            ["secukinumab", "1000"],
            ["Sublocade", "1200"]
        ],
        TotalCost: "4200"

    },
    {
        CheckupCost: "500",
        totalMedicinesCost: "3000",
        medicines: [
            ["Amitriptyline", "300"],
            ["Amlodipine", "500"],
            ["Amoxicillin", "1000"],
            ["Ativan", "200"]
        ],
        TotalCost: "3500"

    },

    ]
    return (
        <>


            <div className='BillSection' style={{ backgroundColor: "#EDF1FD" }}>
                <h1 style={{ textAlign: "center", padding: "20% 0% 0% 0%", color: "#3c3b58" }}>Bill History</h1>
                {billingsArr.map((i) => {
                    return <BillSectionCard i={i} checkupCost={i.CheckupCost} totalMedCost={i.totalMedicinesCost}
                        allMed={i.medicines} totCost={i.TotalCost} />
                })}
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default ClientSectionBilling