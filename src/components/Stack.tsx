import '@/app/styles/stack.css'
export const Stack = () => {
    return (
        <div className='stack'>
            <h1 className='title-stack'>My Technology Stack</h1>
            <ul className="stack-container">
                <li><img className="stack-icon" src="./stackIcons/react.png" /></li>
                <li><img className="stack-icon" src="./stackIcons/typescript.png" /></li>
                <li><img className="stack-icon" src="./stackIcons/js.png" /></li>
                <li><img className="stack-icon" src="./stackIcons/sass.png" /></li>
                <li><img className="stack-icon" src="./stackIcons/html.png" /></li>
                <li><img className="stack-icon" src="./stackIcons/css.png" /></li>
                <li><img className="stack-icon" src="./stackIcons/tailwind.png" /></li>
                <li><img className="stack-icon" src="./stackIcons/dotnet.png" /></li>
                <li><img className="stack-icon" src="./stackIcons/csharp.png" /></li>
            </ul>
        </div>
    )
}