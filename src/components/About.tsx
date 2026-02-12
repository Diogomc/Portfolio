export const About = () => {
    const timeline = [
      {
        period: "2018 - 2020",
        title: "Hardware & Robotics",
        description: "Exploration and development of hardware systems and robotics projects."
      },
      {
        period: "2023 - 2025",
        title: "ADS Formation",
        description: "Academic formation in Analysis and Systems Development."
      },
      {
        period: "2025 - 2028",
        title: "Software Engineering",
        description: "Advanced studies and specialization in Software Engineering."
      }
    ];
  
    return (
      <div className="mt-28 px-6">
        <h1 className="text-center text-5xl mb-12">About Me</h1>
        <div className="max-w-3xl mx-auto relative border-l-4 border-blue-500">
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 ml-6 border-foreground border p-8">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border border-white"></div>
              <h3 className="text-xl font-semibold">{item.period}</h3>
              <p className="text-lg text-gray-700">{item.title}</p>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  