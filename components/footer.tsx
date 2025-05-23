import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 w-full overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center">
          <Link href="/" className="font-bold text-xl text-primary mb-4">
            Portfolio
          </Link>
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Anushree Misra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
