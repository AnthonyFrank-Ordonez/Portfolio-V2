export function Profile() {
  return (
    <div className="mt-2 flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4 lg:rounded-md lg:border lg:p-3 lg:dark:border-white/5 lg:dark:bg-white/5">
      <div className="shrink-0 lg:w-full">
        <img
          src="img/me.JPG"
          alt="me"
          className="h-30 w-28 object-cover object-top md:h-33 md:w-32 lg:h-auto lg:w-full lg:rounded-md"
        />
      </div>

      <div className="flex flex-1 flex-col gap-0.5 md:gap-1">
        {/* Name */}
        <p className="font-rubik font-extrabold md:text-lg lg:text-center lg:text-xl">
          Anthony Frank Ordoñez
        </p>

        {/* Location */}
        <div className="flex items-center gap-0.5 text-sm font-medium md:text-sm lg:justify-center lg:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
          </svg>
          <p>Pampanga, Philippines</p>
        </div>

        {/* Job Title */}
        <p className="text-xs font-medium md:text-sm lg:text-center lg:text-sm lg:font-semibold">
          Software Engineer / Frontend Developer / Full Stack Developer
        </p>

        {/* Buttons */}
        <div className="mt-2 flex items-center gap-1 md:gap-2 lg:flex-col">
          <button className="w-full flex-1 rounded-md border border-black bg-black px-2 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-black/80 hover:text-white md:text-sm dark:border-black dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black">
            Contact Me
          </button>

          <a
            href="/cv/Anthonyfrankordonez_Resume.pdf"
            download
            target="_blank"
            className="flex w-full flex-1"
          >
            <button className="w-full rounded-md border border-black bg-black px-2 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-black/80 hover:text-white md:text-sm dark:border-black dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
