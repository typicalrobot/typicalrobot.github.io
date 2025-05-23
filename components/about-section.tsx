import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50 w-full overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/profile-image.jpeg" alt="Anushree Misra" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground">
              I'm a developer and data enthusiast curating digital experiences that users love.
            </p>
            <p className="text-lg text-foreground">
              My journey in coding started when I built my first website using HTML in class 4. Since then, I've worked
              with startups and established companies to create solutions that solve real problems.
            </p>
            <p className="text-lg text-foreground">
              When I'm not coding, you can find me hiking, photographing or experimenting with new technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="card-hover-effect rounded-2xl">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl font-bold text-primary mb-1">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="card-hover-effect rounded-2xl">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
