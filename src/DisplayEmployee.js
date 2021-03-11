import React from 'react'
import './index.css';

const DisplayEmployee = (props) =>{
    const employee = props.e
    return(
        <div>
            
            <div className="employeeBlock">
            {props.space && (
                <>
                <button className="delete">x</button>
                </>
            )}
                
                <div>
                    <div className="employeeName">{employee.name}</div>
                        <div className="description">
                            <div name="occupation">Occupation:{employee.title}</div><br/>
                            Skillsets:<br/>
                            <section className="skillset">
                                {
                                    employee.skillset.map(
                                        (skill) => {
                                            return(<div key={skill} className="tag">{skill}</div>)
                                        }
                                        )
                                }
                            </section>

                        </div>
                    </div>
                </div>
        </div>
    )
}

export default DisplayEmployee