type Props = {
    name:string
    link?:string
}
export const Btn = ({name, link} : Props) => {
    return (
        <div>
            <button className="bg-foreground text-black p-2 rounded-md"><a href={link}>{name}</a></button>
        </div>
    )
}