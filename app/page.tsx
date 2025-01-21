import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TypewriterEffect } from '@/components/typewriter-effect'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const words = [
    {
      text: "Alexandre",
    },
    {
      text: "CLAIR",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="flex-1 max-w-3xl text-center md:text-left md:pr-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2B3467] dark:text-white mb-6">
            Bonjour, je suis
            <br />
            <TypewriterEffect words={words} />
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 mb-8">
            "Simplifier l'informatique pour améliorer le quotidien de chacun."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-[#2B3467] hover:bg-[#2B3467]/90">
              <Link href="/projects">
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Me contacter
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 mt-12 md:mt-0 max-w-md">
          <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-[#2B3467] shadow-xl">
            <Image
              src="/profile.webp"
              alt="Portrait professionnel d'Alexandre Clair"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  )
}