import '@/app/styles/littleabout.css'

export const LittleAbout = () => {
    return (
        <div className='flex justify-around bg-foreground text-background p-4 max-md:flex-col items-center'>

            <div className='w-1/3 border border-background p-4 rounded-md m-2 hover:border-sky-700 max-md:w-full'>
                <h1 className='text-2xl font-bold text-sky-700 py-1'>Hi there I'm Diogo</h1>
                <p className='text-lg'>I like to craft a solid and usable websites, with React. But, my dream is to be a Software Engineer working with .NET and React.</p>
            </div>
            <div className='w-1/3 border border-background p-4 rounded-md m-2 hover:border-sky-700 max-md:w-full'>
                <h2 className='text-sm'>2025 - PRESENT</h2>
                <h2 className='font-bold'>Software Engineering</h2>
                <p className='text-lg'>I started my second graduation in this area (this is my dreams graduation)</p>
            </div>
            <div className='w-1/3 border border-background p-4 rounded-md m-2 hover:border-sky-700 max-md:w-full'>
                <h2>2023 - 2025</h2>
                <h2 className='font-bold'>Systems Analysis and Development</h2>
                <p className='text-lg'>I graduated in my first course</p>
            </div>

        </div>
    )
}