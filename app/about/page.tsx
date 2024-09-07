import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/hero"
import AboutImage from "@/public/images/me_tongariro_02.jpg"

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <Hero />
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-5">Hi. I'm Shunfan (Steven) Shi 🤟</h1>

            {/* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Short Bio</h2>
                <p>
                  I'm an Intermediate Software Engineer with expertise in full-stack development, spanning backend solutions in .NET, PostgreSQL databases, and frontend development
                  using React and TypeScript. My recent work involves leveraging AWS services to build and maintain microservices, with a strong focus on delivering robust, tested
                  solutions.
                  <br />
                  <br />
                  Outside of work, I enjoy hiking and photography, finding inspiration in nature and capturing moments through the lens.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Career</h2>
                <p>
                  As an Intermediate Software Engineer, I manage the full development cycle, from designing scalable backend systems to creating intuitive user interfaces. My role
                  also includes collaborating with cross-functional teams to ensure seamless integration and optimal performance for our applications.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Let's Connect</h2>
                <p>
                  I'm excited to connect with others via <span className="font-medium text-sky-500">shishunfan+work@gmail.com</span> and{" "}
                  <a className="font-medium text-sky-500 hover:underline" href="https://www.linkedin.com/in/shunfan-shi-370b251b7/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>{" "}
                  to chat about projects and ideas. I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it's a good
                  fit.
                </p>
              </div>
            </div>
          </section>
        </div>
        <br />

        {/* About Image */}
        <Image className="w-full" src={AboutImage} width={692} height={390} alt="About" />
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
            <div className="font-aspekta font-[650] mb-3">Links</div>
            <ul className="space-y-3">
              <li>
                <div className="flex justify-between items-center space-x-2 group">
                  <Link href="/resume" className="grow flex items-center space-x-3 truncate">
                    <div className="truncate">
                      <div className="font-aspekta font-[650] text-sm truncate mb-1">My Resume</div>
                    </div>
                  </Link>
                  <div className="shrink-0 text-sky-500">
                    <svg className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                      <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  )
}
