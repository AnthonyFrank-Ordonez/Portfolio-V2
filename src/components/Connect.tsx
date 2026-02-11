export function Connect() {
  return (
    <div className="flex h-auto flex-col rounded-md border border-white/5 p-3 shadow-sm dark:bg-white/3">
      <div className="flex items-center">
        <p className="font-rubik text-lg font-bold">Connect with me</p>
      </div>

      {/* Connect with me here */}
      <div className="flex flex-col gap-3">
        <p className="font-rubik text-xs font-light">
          I'm always open to new opportunities and collaborations. Feel free to reach out if you
          have any questions or would like to work together.
        </p>

        <a
          href="mailto:anthonyfrankaordonez@gmail.com"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center gap-3 rounded-md border border-black/5 p-1 transition-transform hover:-translate-y-0.5 dark:border-white/5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
            <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
          </svg>
          <div className="flex flex-col">
            <p className="text-sm font-medium">Email</p>
            <p className="text-xs font-light">anthonyfrankaordonez@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  )
}
