import { useState } from "react"
import AboutUs from "../database/aboutUs"
import Project from "../database/project"
export default function Homepage() {
    const [aboutUs, setAboutUs] = useState(AboutUs)
    const [project, setProject] = useState(Project)

    return (

        <div className="container">

            <div className="info">
                <div className="city">Milan, Italy</div>
                <div className="date">
                    <div className="Hour">16.30</div>
                    <div className="day">Lunedì 27 Gennaio</div>
                </div>
                <div className="switch">switch day / Night</div>
                <div className="double">
                    <div className="meteo">
                        <span>meteo</span>
                    </div>
                    <div className="party">
                        <span>party</span>
                    </div>
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

    )
}