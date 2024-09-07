import ProjectCard from "../../components/project-card"
import { MdToday } from "react-icons/md"
import { GrGallery } from "react-icons/gr"

export const metadata = {
  title: "Project",
  description: "My Projects",
}

export default function Projects() {
  const items01 = [
    {
      id: 0,
      icon: MdToday,
      slug: "#0",
      title: "Today Planner",
      excerpt: "Solutions for adding events to today.",
      tag: "Tool",
    },
  ]

  const items02 = [
    {
      id: 0,
      icon: GrGallery,
      slug: "#0",
      title: "Gallery",
      excerpt: "Solutions for showing photos.",
      tag: "Daily",
    },
  ]

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">Nice stuff I'm working on</h1>
            {/* Page content */}
            <div className="space-y-10">
              {/* Project group 1 */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">Utility</h2>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                  {items01.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>

              {/* Project group 1 */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">Daily</h2>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                  {items02.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
