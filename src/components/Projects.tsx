export function Projects() {
  const projects = [
    {
      imgUrl: '/img/ortask.png',
      title: 'OrTask',
      description:
        'A task management system for small businesses and organizations. Built with React and Node.js.',
      techstacks: [
        'React',
        'Express.js',
        'Node.Js',
        'MongoDB',
        'Tailwind CSS',
        'Typescript',
        'Javascript'
      ],
      link: 'https://ortask.afordonez.com'
    },
    {
      imgUrl: '/img/trail.png',
      title: 'Trail',
      description:
        'A reddit clone for programmers and non-programmers to share their projects and ideas.',
      techstacks: ['Angular', 'ASP.NET', 'PostgreSQL', 'Tailwind CSS', 'Typescript', 'Javascript'],
      link: 'https://trail.afordonez.com'
    },
    {
      imgUrl: '/img/portfolio.png',
      title: 'Portfolio V1',
      description:
        'My very own personal portfolio website first version. Built with React, Tailwind CSS, and Motion.',
      techstacks: ['React', 'Tailwind CSS', 'Typescript', 'Javascript'],
      link: 'https://portfolio.afordonez.com'
    }
  ]

  return (
    <div className="flex h-full flex-col rounded-md border border-white/5 p-3 shadow-sm dark:bg-white/3">
      <div className="flex items-center justify-between">
        <p className="font-rubik text-lg font-bold">Projects</p>
        <a href="#" className="text-sm font-medium transition-transform hover:-translate-y-0.5">
          View All &rarr;
        </a>
      </div>

      {/* Projects here */}
      <div className="mt-4 flex flex-1 flex-col gap-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-1 gap-4 rounded-lg border border-black/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg dark:border-white/10 dark:bg-white/3"
          >
            <div className="aspect-video w-32 shrink-0 overflow-hidden rounded-md bg-white/5">
              <img
                src={project.imgUrl}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between py-0.5">
              <div>
                <p className="font-rubik text-sm leading-none font-medium">{project.title}</p>
                <p className="mt-1.5 line-clamp-2 text-[11px] opacity-70 lg:line-clamp-3">
                  {project.description}
                </p>
              </div>
              <p className="text-[10px] font-medium tracking-wider uppercase opacity-50 transition-opacity group-hover:opacity-100">
                {project.link.replace('https://', '')}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
