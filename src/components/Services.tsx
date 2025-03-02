import '@/app/styles/services.css'
export const Services = () => {
    return (
        <div>
            <h1 className="text-center text-black text-5xl mt-80" id='services'>Services</h1>
                <div className="container-cards">
                    <div className='cards'>
                        <h1 className="title-services">{`<Website Crafting>`}</h1>
                        <p className='description-services'>I transform your need in a professional webstite, with responsiveness, usability and clean interface.</p>
                    </div>
                    <div className="cards">
                        <h1 className="title-services">API connection/manipulation</h1>
                        <p className='description-services'>I integrate and manipulate APIs, with advanced functionalities in order to generate a dynamic and interactive experience for users.</p>
                    </div>
                    <div className="cards">
                        <h1 className="title-services">Landing Page Crafting</h1>
                        <p className='description-services'>I craft a landing pages to show the services or products, with a best expierence for users, in order to turn visitors into new custumers.</p>
                    </div>
                    <div className="cards">
                        <h1 className="title-services">{`<APIs Crafting/>`}</h1>
                        <p className='description-services'>I craft APIs with .net and C#</p>
                    </div>
                </div>
            </div>
    )
}