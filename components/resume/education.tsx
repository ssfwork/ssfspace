import Image from "next/image"
import UniLogo from "@/public/images/the_university_of_auckland_logo.jpg"

export default function Education() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Education</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={UniLogo} width={55} height={55} alt="Auckland University" className="object-cover rounded-full" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                2019 <span className="text-slate-400 dark:text-slate-600">·</span>2020
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Master of Computer Science</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">The University of Auckland</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Serverless Computing, Face Recognition, Recommender System.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={UniLogo} width={55} height={55} alt="Auckland University" className="object-cover rounded-full" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                2018 <span className="text-slate-400 dark:text-slate-600">·</span>2019
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Postgraduate Diploma in Computer Science</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">The University of Auckland</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Programming Techniques, Algorithms and Data Structures, Computer Graphics and Image Processing, Datamining and Machine Learning, Statistics, etc.
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
