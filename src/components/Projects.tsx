import "@/app/styles/projects.css"
import { icons } from "@/data/icons"

type Props = {
    urlImage: string,
    nameProject: string,
    descriptionProject: string,
    urlProject: string,
    tools: string[] //cria o array para adicionar na classe page
}

export const Projects = ({ urlImage, nameProject, descriptionProject, tools, urlProject }:
    Props) => {

    return (
        <div>
            <div className="projects-area">
                <div className="card-projects">
                    <a href={urlProject} target="blank"><img className="project-image" src={urlImage} alt={nameProject} /></a>
                    <li className="project-text">
                        <h2 className="project-title">{nameProject}</h2>
                        <p className="project-description" >{descriptionProject}</p>
                    </li>
                    <ul className="tools-list">
                        {tools.map(tool => {
                            const icon = icons.find(item => item.name === tool); //aqui ele faz a busca dos itens pelo nome, referenciado que o nome do item virará o tool
                            return icon ? (
                                <li key={tool}>
                                    <img className="icon-tools" src={icon.urlImage} alt={tool} />
                                </li>
                            ) : null;
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}