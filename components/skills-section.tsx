import { Code, Database, Globe, Layout, Server, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces",
    icon: <Layout className="h-8 w-8 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Building robust server-side applications",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ["Node.js", "Express", "Python", "RESTful APIs"],
  },
  {
    id: 3,
    title: "Database Management",
    description: "Designing and optimizing database systems",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["PostgreSQL", "MySQL", "Firebase"],
  },
  {
    id: 4,
    title: "DevOps & Deployment",
    description: "Automating and optimizing deployment workflows",
    icon: <Globe className="h-8 w-8 text-primary" />,
    skills: ["Git", "GitHub Actions", "Docker", "AWS"],
  },
  {
    id: 5,
    title: "Programming Languages",
    description: "Proficient in multiple programming languages",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C++"],
  },
  {
    id: 6,
    title: "Data Visualization",
    description: "Transforming complex data into insightful visual representations",
    icon: <BarChart className="h-8 w-8 text-primary" />,
    skills: ["Tableau", "Looker", "Power BI"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50 w-full overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">My Skills</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I've developed a diverse set of skills throughout my career. Here's what I bring to the table.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="border border-border card-hover-effect rounded-2xl w-full">
              <CardHeader className="pb-2">
                <div className="mb-2">{category.icon}</div>
                <CardTitle className="text-foreground">{category.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-background border rounded-full text-sm text-foreground boba-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
