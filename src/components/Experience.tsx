export function Experience() {
  return (
    <div className="mt-3 grid grid-cols-1 gap-3 lg:mt-2 lg:grid-cols-12">
      <div className="col-span-1 lg:col-span-6">
        <div className="flex flex-col rounded-md border border-white/5 p-3 shadow-sm dark:bg-white/3">
          <div className="flex items-center justify-between">
            <p className="font-rubik text-lg font-bold">Experience</p>
            <a href="#" className="text-sm font-medium transition-transform hover:-translate-y-0.5">
              More Info &rarr;
            </a>
          </div>

          {/* Experience here */}
          <div className="mt-4 flex flex-col">
            {/* Current Position */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="animate-blink z-10 mt-1 h-2 w-2 shrink-0 bg-black dark:bg-white"></div>
                <div className="my-1 w-px flex-1 bg-black/10 dark:bg-white/10"></div>
              </div>
              <div className="flex-1 pb-4">
                <p className="font-rubik leading-none font-medium">Associate Software Engineer</p>
                <div className="mt-1 flex items-center justify-between text-xs opacity-80">
                  <p>Qstrike Innovations Phils., OPC</p>
                  <p>July 2025 - Present</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed opacity-70">
                  Builds high-performance R&D projects and dynamic logo customization systems using
                  React, Vue, and NestJS. Developed real-time rendering features, optimized PDF
                  processing workflows, and significantly reduced load times through advanced
                  frontend optimizations.
                </p>
              </div>
            </div>

            {/* Past Position */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="z-10 mt-1 h-2 w-2 shrink-0 border border-black dark:border-white"></div>
              </div>
              <div className="flex-1">
                <p className="font-rubik leading-none font-medium">Software Engineer Intern</p>
                <div className="mt-1 flex items-center justify-between text-xs opacity-80">
                  <p>Qstrike Innovations Phils., OPC</p>
                  <p>Mar 2025 - Jun 2025</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed opacity-70">
                  Resolved production-critical bugs and refactored legacy templates in Laravel/PHP
                  applications to improve maintainability. Actively collaborated in Agile workflows
                  using Git and Jira for efficient project delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-6">
        <div className="flex flex-col rounded-md border border-white/5 p-3 shadow-sm dark:bg-white/3">
          <div className="flex items-center justify-between">
            <p className="font-rubik text-lg font-bold">Projects</p>
            <a href="#" className="text-sm font-medium transition-transform hover:-translate-y-0.5">
              View All &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
