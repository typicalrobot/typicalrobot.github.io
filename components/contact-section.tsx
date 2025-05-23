import { Mail, MapPin, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 w-full overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Get In Touch</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities? Here's how you can reach me.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card className="card-hover-effect rounded-2xl w-full">
            <CardContent className="p-6 flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="min-w-0 w-full">
                <h3 className="font-medium mb-1 text-foreground">Email</h3>
                <Link href="mailto:anushree.m.work@gmail.com" className="text-primary hover:underline break-all">
                  anushree.m.work@gmail.com
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover-effect rounded-2xl w-full">
            <CardContent className="p-6 flex items-start gap-4">
              <Linkedin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="min-w-0 w-full">
                <h3 className="font-medium mb-1 text-foreground">LinkedIn</h3>
                <Link
                  href="https://www.linkedin.com/in/anushreemisra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  linkedin.com/in/anushreemisra
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover-effect rounded-2xl w-full">
            <CardContent className="p-6 flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1 text-foreground">Location</h3>
                <p className="text-muted-foreground">Arizona</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently available for full-time positions. Feel free to reach out if you have any questions or would
            like to connect!
          </p>
        </div>
      </div>
    </section>
  )
}
