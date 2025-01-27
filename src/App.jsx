import { useState } from 'react'
import AboutUs from './database/aboutUs'
import Project from './database/project'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [aboutUs, setAboutUs] = useState(AboutUs)
  const [project, setProject] = useState(Project)

  return (
    <>
      <AppHeader />
      <NavBar />
      <main>
        <div className="container">

          <div className="info">
            <div className="city">city</div>
            <div className="date">date</div>
            <div className="switch">switch</div>
            <div className="double">
              <div className="meteo">meteo</div>
              <div className="party">party</div>
            </div>
          </div>
          <div className="otherInfo">
            {aboutUs.map((item, index) =>
              <div key={index} className="card">
                <div className="bodyCard">
                  <p className='preTitle'>{item.name}</p>
                  <h4>{item.title}</h4>
                  <p className='description'>{item.description}</p>
                </div>
              </div>
            )}
            {project.map((item, index) =>
              <div key={index} className="card">
                <div className="bodyCard">
                  <div className="card-header">
                    <div className='preTitle'>{item.name}</div>
                    <div className="category">{item.title}</div>
                  </div>
                  <div className="card-body">
                    <div className="card-img">
                      <img src={item.imgage} alt={item.title} />
                    </div>
                    <div className="card-info">
                      <h4>{item.title}</h4>
                      <p className='description'>{item.descriptio}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="show">
            show all content
          </div>
        </div>
      </main>
    </>
  )
}

export default App
