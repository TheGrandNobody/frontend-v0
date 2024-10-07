'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, Cpu, BookOpen, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Our Mission', href: '#mission' },
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Our Product', href: '#our-product' },
  { name: 'Progress', href: '#progress' },
  { name: 'Team', href: '#team' },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-primary min-h-screen text-white">
      {/* Header and navigation */}
      <header className="fixed inset-x-0 top-0 z-50 bg-primary">
        {/* ... (header content remains unchanged) ... */}
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* ... (hero content remains unchanged) ... */}
        </div>

        {/* Mission section */}
        <section id="mission" className="bg-[#55286f] py-24 sm:py-32">
          {/* ... (mission content remains unchanged) ... */}
        </section>

        {/* What We Do section */}
        <section id="what-we-do" className="py-24 sm:py-32">
          {/* ... (what we do content remains unchanged) ... */}
        </section>

        {/* Our Product section */}
        <section id="our-product" className="bg-[#55286f] py-24 sm:py-32">
          {/* ... (our product content remains unchanged) ... */}
        </section>

        {/* Progress section */}
        <section id="progress" className="py-24 sm:py-32">
          {/* ... (progress content remains unchanged) ... */}
        </section>

        {/* Team section */}
        <section id="team" className="bg-[#55286f] py-24 sm:py-32">
          {/* ... (team content remains unchanged) ... */}
        </section>

        {/* New Affiliates section */}
        <section id="affiliates" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Affiliates</h2>
              <p className="mt-6 text-lg leading-8 text-[#d8b4e2]">
                We're proud to work with these outstanding organizations.
              </p>
            </div>
            <div className="mt-16 flex flex-wrap justify-center items-center gap-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venturelab-north-logo-qMlz5z1ER8xwbYsjuMFahlcWckmBqi.svg"
                alt="VentureLab North Logo"
                width={273}
                height={82}
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eurc-logo-jxbUzKkYcKuIo6Arjis7P38bogGkUc.svg"
                alt="EURC Logo"
                width={130}
                height={82}
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snn-logo-EZ8EW4TSKsU7uipTCNb1N00vdv6FQb.svg"
                alt="SNN Logo"
                width={152}
                height={88}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#210b2c] py-12">
        {/* ... (footer content remains unchanged) ... */}
      </footer>
    </div>
  )
}