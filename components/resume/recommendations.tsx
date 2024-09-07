import Image from "next/image"
import DKPhoto from "@/public/images/daniel_king.jpg"
import AMPhoto from "@/public/images/alison_marshall.jpg"
import RNPhoto from "@/public/images/radu_nicolescu.png"

export default function Recommendations() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Recommendations</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image className="rounded-full" src={DKPhoto} width={56} height={56} alt="Testimonial 03" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Daniel King</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">ARW Team Leader at Gallagher</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                “ Steven has made a significant impact on the team, consistently contributing valuable ideas and solutions during design meetings and team discussions. He is a
                diligent worker, capable of delivering high-quality code independently. As a strong team player, Steven is always open to feedback, eager to learn, and actively
                supports his teammates by collaborating on bug fixes and other challenges.
                <br />
                The areas Steven is focusing on for growth are essential for becoming a well-rounded software developer, particularly in developing strong communication skills.
                This is critical for engineers, as clear and concise communication with both technical and non-technical stakeholders fosters collaboration and accelerates
                problem-solving. Steven's willingness to continuously improve and his positive attitude make him an invaluable member of the team. ”
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image className="rounded-full" src={AMPhoto} width={56} height={56} alt="Testimonial 04" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Alison Marshall</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">ARW Value Owner at Gallagher</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                “ Throughout the design, build, testing and issue identification phases of building our clients' workflows, we can rely on Steven to think creatively identify
                potential solutions, and successfully implement them. As a result,we have significantly saved time in delivering releases to our clients for review. ”
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image className="rounded-full" src={RNPhoto} width={56} height={56} alt="Testimonial 04" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Radu Nicolescu</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Honorary Academic at University of Auckland </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                “ Steven consistently excelled in his MSc studies, handling challenging assignments and mastering difficult topics like functional programming for distributed
                processing, earning top marks in a demanding course. His independent MSc project on serverless clouds earned first-class honors, and he even contributed solutions
                to AWS-related problems that benefited his supervisor.
                <br />
                Known for his deep understanding of theoretical issues and ability to develop flawless applications, Steven stands out for his initiative and problem-solving
                skills. He communicates well with colleagues and supervisors, presenting his views clearly and respectfully. ”
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
