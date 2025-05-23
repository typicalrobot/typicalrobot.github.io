import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden w-full">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">
            Hi, I'm <span className="text-primary">Anushree Misra</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">dev trying to create</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-boba rounded-full" asChild>
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="btn-boba rounded-full" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Boba bubble decorations */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -z-10 top-[30%] right-[20%] w-16 h-16 rounded-full bg-primary/20 blur-sm" />
      <div className="absolute -z-10 bottom-[20%] left-[15%] w-12 h-12 rounded-full bg-primary/15 blur-sm" />
      <div className="absolute -z-10 top-[15%] left-[25%] w-8 h-8 rounded-full bg-primary/25 blur-sm" />
    </section>
  )
}
