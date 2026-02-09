export function Techstack() {
  const frontEnd = ['Typescript', 'Javascript', 'React', 'Vue.Js', 'Angular', 'Tailwind CSS']
  const backEnd = ['Node.js', 'Express.js', 'ASP.NET', 'PostgreSQL', 'MongoDB']
  const tools = ['Git', 'Docker', 'Coolify', 'Github Actions', 'Postman']

  return (
    <div className="mt-3 flex flex-col rounded-md border border-white/5 p-3 shadow-sm lg:mt-2 dark:bg-white/3">
      <div className="flex items-center justify-between">
        <p className="font-rubik text-lg font-bold">Techstack</p>
        <a href="#" className="text-sm font-medium transition-transform hover:-translate-y-0.5">
          View All &rarr;
        </a>
      </div>
      <div className="flex flex-col items-start gap-2 text-sm md:text-base lg:text-base">
        <div className="mt-3 lg:mt-2">
          <p className="text-base font-bold">Frontend</p>
          <div className="mt-1 flex flex-wrap gap-1.5 px-1 text-sm font-medium">
            {frontEnd.map((item, index) => (
              <p className="rounded-md border border-white/1 px-2 py-1 shadow-sm" key={index}>
                {item}
              </p>
            ))}
          </div>

          <p className="mt-3 text-base font-bold">Backend</p>
          <div className="mt-1 flex flex-wrap gap-1.5 px-1 text-sm font-medium">
            {backEnd.map((item, index) => (
              <p className="rounded-md border border-white/1 px-2 py-1 shadow-sm" key={index}>
                {item}
              </p>
            ))}
          </div>

          <p className="mt-3 text-base font-bold">Tools</p>
          <div className="mt-1 flex flex-wrap gap-1.5 px-1 text-sm font-medium">
            {tools.map((item, index) => (
              <p className="rounded-md border border-white/1 px-2 py-1 shadow-sm" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
