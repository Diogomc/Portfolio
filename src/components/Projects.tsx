import "@/app/styles/projects.css"

type Props = {
    urlImage: string,
    nameProject: string,
    descriptionProject: string,
    urlProject:string,
    tools?: string
}

export const Projects = ({ urlImage, nameProject, descriptionProject, tools, urlProject }:
    Props) => {

    return (
        <div>
            <div className="projects-area">
                <div className="card-projects">
                    <a href={urlProject} target="blank"><img className="project-image" src={urlImage} alt={nameProject} /></a>
                    <h2 className="project-title">{nameProject}</h2>
                    <p className="project-description" >{descriptionProject}</p>
                </div>
            </div>
        </div>
    )
}