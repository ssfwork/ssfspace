import Image from "next/image"
import GallagherLogo from "@/public/images/gallagher_security_logo.jpg"
import UxtrataLogo from "@/public/images/uxtrata_logo.jpg"

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Work Experience</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={GallagherLogo} alt="Gallagher Logo" width={55} height={55} className="object-cover rounded-full" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                Oct 2023 <span className="text-slate-400 dark:text-slate-600">·</span> Present
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Software Engineer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Gallagher</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                In my role as a Full Stack Software Engineer, I am responsible for for the end-to-end development process,from designing and implementing backend solutions using
                .Net, to creating efficient and secure databases with PostgreSQL. On the frontend, I use React and TypeScript to build user-friendly interfaces. I also involves
                working with various AWS services to develop and maintain microservices that drive our applications. In addition, I write comprehensive unit tests and automation
                tests to ensure the robustness and reliability.
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={GallagherLogo} alt="Gallagher Logo" width={55} height={55} className="object-cover rounded-full" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                Mar 2022 <span className="text-slate-400 dark:text-slate-600">·</span> Sep 2023
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Junior Software Engineer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Gallagher</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                In my role as a Junior Software Engineer, I contribute to the full-stack development of a Next.js web application. My responsibilities include designing and
                implementing new pages, developing and integrating APIs with a .NET backend, and writing unit tests to ensure high code quality. I collaborate closely with UI
                designers to enhance the user experience by refining the interface and ensuring a seamless design-to-development workflow.
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={UxtrataLogo} alt="Uxtrata Logo" width={100} height={100} className="object-cover rounded-full" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                Jan 2017 <span className="text-slate-400 dark:text-slate-600">·</span> Apr 2017
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">C# Developer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Uxtrata</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                In my role as a developer, I am responsible for maintaining existing web application (.Net, WebForms, MySql) and add new features to meet customer requirements.
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
