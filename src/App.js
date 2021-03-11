import React,{useEffect, useState} from 'react';
import './index.css';
import DisplayEmployee from './DisplayEmployee.js'
import Data from "./EmployeeData.json"
import projects from "./ProjectDescription.json"
import ShowInformation from "./DisplayDetails"

//Variables
const Employees = Data
const Projects = projects
//Check for key press
function useKey(key){

  const[pressed,setPressed] = useState(false);
  
  useEffect(()=>{

    const match = event => key.toLowerCase() === event.key.toLowerCase();

    const onDown = event => {
      if(match(event)) setPressed(true)
    } 

    const onUp = event => {
      if(match(event)) setPressed(false)
    }

    window.addEventListener("keydown",onDown);
    window.addEventListener("keyup", onUp);
    return()=>{
      window.removeEventListener("keydown",onDown);
      window.removeEventListener("keyup",onUp);
    }
  },[key])

  return pressed
}

function App(){

  //Function to find user
  const findUser = (event) => {
    const filtered = Employees.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.toLowerCase().includes(event.target.value.toLowerCase())));
    setUsers(filtered)
  }


  //Display Data Related to Employee
  const DisplayInfo = (event) =>{
    const em = JSON.parse(event.currentTarget.dataset.value)
    const filterProject = Projects.filter(project => project.reqSkill.some(skill => em.skillset.includes(skill)))
    //console.log(em.skillset)
    //console.log(filterProject)
    setProjects(filterProject)
    setEmployee(em)
    setDisplay(true)
  }

  //state to store user data
  const [users, setUsers] = useState(Employees);
  const [employee,setEmployee] = useState(Projects)
  const [projects,setProjects] = useState(Projects)
  const [display,setDisplay] = useState(false)
  const space = useKey('control');


  //Return the view
  return(
    <div>
      <div className="wholeSite">

        <div className="topHalf">
          
          <div className="search">
            <div className="label">Search Employees</div>
            <input className="searchBar" type="text" name="searchValue" onChange={findUser}/>
          </div>

          <section className="allEmployeeSection">
            <div className="allEmployees">
              {
                //Displaying each blocks of employees
                users.map(
                  (Employee) => {
                    return( <div key={JSON.stringify(Employee)} data-value={JSON.stringify(Employee)} onClick={DisplayInfo}><DisplayEmployee e={Employee} space={space} /></div>)
                  }
                )
              }
            </div>
          </section>
        </div>

        <div className="bottomHalf">
          {display && (
                <>
                <ShowInformation e={employee} p={projects}/>
                </> 
            )}
        </div>

      </div>
    </div>
  )
}

export default App;
