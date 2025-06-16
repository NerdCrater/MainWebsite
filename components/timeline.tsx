export default function Timeline() {
  const timelineEvents = [
    {
      year: "2025",
      title: "NerdCrater Founded",
      description: "Started as a small web development agency with just 3 team members.",
    },
    {
      year: "2025",
      title: "Expanded Services",
      description: "Added mobile app development and UI/UX design to our service offerings.",
    },
    // {
    //   year: "2018",
    //   title: "First Major Client",
    //   description: "Secured our first enterprise client and expanded the team to 10 members.",
    // },
    // {
    //   year: "2020",
    //   title: "AI Integration",
    //   description: "Began offering AI and machine learning solutions to clients.",
    // },
    // {
    //   year: "2022",
    //   title: "International Expansion",
    //   description: "Opened our first international office and expanded to a team of 25.",
    // },
    // {
    //   year: "2024",
    //   title: "Today",
    //   description: "Continuing to innovate and deliver exceptional IT solutions to clients worldwide.",
    // },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-muted -translate-x-1/2"></div>

      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Circle on the timeline */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full -translate-x-1/2 z-10 flex items-center justify-center">
              <div className="w-4 h-4 bg-background rounded-full"></div>
            </div>

            {/* Content */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="text-primary font-bold text-xl mb-2">{event.year}</div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
