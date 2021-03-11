import React from 'react'
import "./index.css"
const ShowInformation = (props) =>{
    const projects=props.p

    return(
        <div>
            <div>
                <div>
                    {
                        projects.map((p)=>{
                            return(
                                <>
                                <div className="projectBlock">
                                    <div className="projectName">{p.projectName}</div>
                                    <section className="skillsetProject">
                                        {
                                            p.reqSkill.map((s)=>{
                                                return(<div key={s} className="tag">{s}</div>)
                                            })
                                        }
                                    </section>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default ShowInformation