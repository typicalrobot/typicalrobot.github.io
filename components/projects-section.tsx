import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    description:
      "A comprehensive inventory management application built with Next.js. Features real-time inventory tracking, product management, and analytics dashboard for efficient warehouse and stock management.",
    image: "/inventory-system.png",
    tags: ["Next.js", "React", "Inventory Management", "Dashboard", "TypeScript"],
    liveUrl: "https://github.com/typicalrobot/inventory.io",
    githubUrl: "https://github.com/typicalrobot/inventory.io",
  },
  {
    id: 2,
    title: "Arizona Water Quality Analysis",
    description:
      "Interactive Tableau dashboard analyzing 20 years of water quality data in Arizona. Tracks E. coli levels, pH values, and metal concentrations across different water usage categories including domestic, agricultural, and wildlife.",
    image: "/tableau-visualization.png",
    tags: ["Data Visualization", "Tableau", "Environmental Analysis", "Time Series"],
    liveUrl: "https://public.tableau.com/app/profile/anushree.misra/viz/TestingMyWaters-Arizona/Main",
    githubUrl: null,
  },
  {
    id: 3,
    title: "Football Management System",
    description:
      "A comprehensive database system for tracking football teams, players, matches, and leagues. Features entity relationships for players, managers, stadiums, and more with complete data modeling.",
    image: "/football-inventory.png",
    tags: ["Database Design", "Entity-Relationship", "Sports Management", "ORM"],
    liveUrl: "https://github.com/typicalrobot/footballinventory",
    githubUrl: "https://github.com/typicalrobot/footballinventory",
  },
  {
    id: 4,
    title: "Pixel Art Maker",
    description:
      "An interactive web application that allows users to create pixel art on a customizable grid. Features include color selection, eraser tool, grid clearing, and the ability to download the finished artwork.",
    image: "/pixel-art-maker.png",
    tags: ["JavaScript", "HTML5", "CSS3", "Interactive Design", "Web Development"],
    liveUrl: "https://github.com/typicalrobot/pixelartmaker",
    githubUrl: "https://github.com/typicalrobot/pixelartmaker",
  },
  {
    id: 5,
    title: "Pokemon Proposal App",
    description:
      "A creative, interactive web application with a Pokemon theme designed to ask someone out on a date. Features bouncing Pokeball animations, a multi-stage flow, and a persistent 'No' button that becomes increasingly difficult to click.",
    image: "/pokemon-proposal.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://github.com/typicalrobot/askingsomeoneout",
    githubUrl: "https://github.com/typicalrobot/askingsomeoneout",
  },
  {
    id: 6,
    title: "Intrusion Detection System",
    description:
      "A hardware-based security system built with Raspberry Pi that detects unauthorized physical access using sensors and provides real-time alerts.",
    image: "/intrusion-detection.png",
    tags: ["Raspberry Pi", "IoT", "Hardware", "Security"],
    liveUrl: "https://github.com/typicalrobot/intrusiondetection",
    githubUrl: "https://github.com/typicalrobot/intrusiondetection",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 w-full overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">My Projects</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one presented unique challenges and opportunities to learn and grow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group border border-border card-hover-effect rounded-2xl w-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full boba-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="rounded-full btn-boba" asChild>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                  <Button size="sm" className="rounded-full btn-boba" asChild>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground"
                    >
                      {project.id === 2 ? (
                        <BarChart className="mr-2 h-4 w-4" />
                      ) : (
                        <ExternalLink className="mr-2 h-4 w-4" />
                      )}
                      {project.id === 2 ? "View Dashboard" : "View Project"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="section-divider mt-16"></div>
      </div>
    </section>
  )
}
