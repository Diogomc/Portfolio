import '@/app/styles/littleabout.css'

export const LittleAbout = () => {
    return (
        <div className='little-container'>
            <div className='card-little'>
                <h1 className='title-hi'>Hi there I'm Diogo</h1>
                <p className='text-date'>I like to craft a solid and usable websites, with React. But, my dream is to be a Software Engineer working with .NET and React.</p>
            </div>
            <div className='card-little'>
                <h2 className='title-date'>2025 - PRESENT</h2>
                <h2 className='sub-date'>Software Engineering</h2>
                <p className='text-date'>I started my second graduation in this area (this is my dreams graduation)</p>
            </div>
            <div className='card-little'>
                <h2 className='title-date'>2023 - 2025</h2>
                <h2 className='sub-date'>Systems Analysis and Development</h2>
                <p className='text-date'>I graduated in my first course</p>
            </div>
            
        </div>
    )
}