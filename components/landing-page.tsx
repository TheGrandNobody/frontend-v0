'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Cpu, BookOpen, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const navigation = [
  { name: 'Our Mission', href: '#mission' },
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Our Product', href: '#our-product' },
  { name: 'Progress', href: '#progress' },
  { name: 'Team', href: '#team' },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#55286f] via-[#ae759f] to-[#210b2c] animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22%3E%3Ccircle cx=%2240%22 cy=%2240%22 r=%2236%22 fill=%22%23d8b4e2%22 fill-opacity=%22.05%22%2F%3E%3C%2Fsvg%3E')] bg-repeat animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#210b2c] bg-opacity-90 shadow-lg' : ''}`}>
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Edion</span>
                <Image className="h-12 w-auto" src="/logo3.svg" alt="Edion Logo" width={2000} height={2000} />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-[#d8b4e2] transition-colors duration-300">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-[#d8b4e2] transition-colors duration-300">
                Join Us <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <div className="fixed inset-0 z-50" />
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#210b2c] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Edion</span>
                    <Image className="h-16 w-auto" src="/logo.svg" alt="Edion Logo" width={256} height={256} />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-[#55286f]">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#55286f] transition-colors duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#55286f] transition-colors duration-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Join Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="flex-grow">
          <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex flex-col justify-center">
            <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 flex-grow flex flex-col justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4 animate-fade-in-up">
                  Elevating Educators,<br />Inspiring Learners
                </h1>
                <p className="mt-6 text-lg leading-8 text-[#e8d2ee] animate-fade-in-up animation-delay-300">
                  Educational tools that empower teachers and students
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up animation-delay-600">
                  <a
                    href="#"
                    className="rounded-md bg-[#210b2c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#bc96e6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b4e2] transition-all duration-300"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-[#d8b4e2] transition-colors duration-300">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

          <section id="mission" className="bg-[#55286f] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Mission</h2>
                <p className="mt-6 text-lg leading-8 text-[#e8d2ee]">
                  We're here to ease the burden on teachers' shoulders, put their time back in their hands, and help them enjoy the work they love.
                </p>
              </div>
            </div>
          </section>

          <section id="what-we-do" className="bg-[#210b2c] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What We Do</h2>
                <p className="mt-6 text-lg leading-8 text-[#d8b4e2]">
                  We designed an essential suite of tools ready to accompany teachers every step of the way, any time of the day.
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                  {[
                    {
                      name: 'cApps',
                      description: 'Lifelike applications that understand anyone and that anyone can understand. Effortlessly.',
                      icon: Cpu,
                    },
                    {
                      name: 'Slate',
                      description: 'The educator\'s workstation revolutionizing the way teachers handle administrative tasks.',
                      icon: BookOpen,
                    },
                    {
                      name: 'Graphite',
                      description: 'Personalized learning experiences that adapt to each student\'s needs and pace.',
                      icon: GraduationCap,
                    },
                  ].map((feature) => (
                    <div key={feature.name} className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                        <feature.icon className="h-5 w-5 flex-none text-[#ae759f]" aria-hidden="true" />
                        {feature.name}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#d8b4e2]">
                        <p className="flex-auto">{feature.description}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section id="our-product" className="bg-[#55286f] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Product</h2>
                <p className="mt-6 text-lg leading-8 text-[#e8d2ee]">
                  Discover how our AI-powered solutions are transforming the educational landscape.
                </p>
              </div>
              <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="w-full lg:w-1/2">
                  <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
                    <DialogTrigger asChild>
                      <button className="w-full focus:outline-none focus:ring-2 focus:ring-[#ae759f] focus:ring-offset-2 focus:ring-offset-[#55286f] rounded-lg overflow-hidden">
                        <Image 
                          src="/demo.gif" 
                          alt="Product Demo" 
                          className="rounded-lg shadow-xl w-full h-auto transition-transform duration-300 transform hover:scale-105" 
                          width={2000} 
                          height={2000} 
                        />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full bg-[#55286f] border-none">
                      <Image 
                        src="/demo.gif" 
                        alt="Product Demo" 
                        className="w-full h-auto" 
                        width={2000} 
                        height={2000} 
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-white">Slate: The Educator's Workbench</h3>
                  <p className="text-[#e8d2ee]">Slate streamlines administrative tasks, freeing up valuable time for educators to focus on what matters most - teaching and connecting with students.</p>
                  <ul className="list-disc list-inside text-[#e8d2ee] space-y-2">
                    <li>Automated grading and report generation</li>
                    <li>Personalized content creation</li>
                    <li>Student progress tracking</li>
                    <li>Intuitive, conversational interface</li>
                  </ul>
                  <a href="#" className="inline-block mt-4 px-4 py-2 bg-[#ae759f] text-white rounded-md hover:bg-[#bc96e6] transition-colors">
                    Learn More About Slate
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="progress" className="bg-[#210b2c] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Progress and Innovation</h2>
                <p className="mt-6 text-lg leading-8 text-[#d8b4e2]">
                  From feasibility studies to prototype development, we're making strides in educational technology.
                </p>
              </div>
            </div>
          </section>

          <section id="team" className="bg-[#55286f] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet the Team</h2>
                <p className="mt-6 text-lg leading-8 text-[#e8d2ee]">
                  Our diverse team brings expertise in AI, seasoned entrepreneurship, business accumen and real-world applications.
                </p>
              </div>
              <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {[
                  {
                    name: 'Ark Deliev',
                    role: 'Co-founder, CEO',
                    imageUrl: '/ark.png',
                  },
                  {
                    name: 'Olivia Monné',
                    role: 'Co-founder, CTO',
                    imageUrl: '/olivia.png',
                  },
                  {
                    name: 'Liam McGillycuddy',
                    role: 'Business & Outreach Coordinator',
                    imageUrl: '/liam.png',
                  },
                  {
                    name: 'Dingkang Pang',
                    role: 'Machine Learning Engineer',
                    imageUrl: '/dk.png',
                  },
                  {
                    name: 'Linus Bach',
                    role: 'Machine Learning Engineer',
                    imageUrl: '/linus.png',
                  },
                  {
                    name: 'Ondrej Horváth',
                    role: 'Business Development Analyst',
                    imageUrl: '/ondrej.png',
                  },
                  {
                    name: 'Matej Illáš',
                    role: 'Business Development Analyst',
                    imageUrl: '/matej.png',
                  },
                ].map((person) => (
                  <li key={person.name} className="text-center">
                    <Image 
                      className="mx-auto h-24 w-24 rounded-full aspect-square object-cover" 
                      src={person.imageUrl} 
                      alt="" 
                      width={96}
                      height={96}
                    />
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm leading-6 text-[#e8d2ee]">{person.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

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

        <footer className="bg-[#210b2c] py-12 relative z-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
              </div>
              <p className="text-sm text-[#d8b4e2]">
                © 2024 Edion Management Systems. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}