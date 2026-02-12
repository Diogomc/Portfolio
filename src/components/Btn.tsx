type Props = {
    name:string
    link?:string
    target?:string
}
export const Btn = ({name, link,target} : Props) => {
    return (
        <div>
            <button className="bg-blue-700 text-white p-2 rounded-md m-2 hover:bg-blue-500 transition"><a href={link} target={target}>{name}</a></button>
        </div>
    )
}