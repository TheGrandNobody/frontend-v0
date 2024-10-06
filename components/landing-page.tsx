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
      <header className="fixed inset-x-0 top-0 z-50 bg-primary">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Edion</span>
              <Image className="h-8 w-auto" src="/logo.png" alt="Edion Logo" width={32} height={32} />
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
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-highlight">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-highlight">
              Join Us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Edion</span>
                  <Image className="h-8 w-auto" src="/placeholder.svg" alt="Edion Logo" />
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
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-secondary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-secondary"
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

      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Empowering Educators, Inspiring Learners
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#d8b4e2]">
                Edion is revolutionizing education with AI-powered solutions that reduce administrative burdens and enhance learning experiences.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#ae759f] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#bc96e6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc96e6]"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section id="mission" className="bg-[#55286f] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Mission</h2>
              <p className="mt-6 text-lg leading-8 text-[#d8b4e2]">
                We're here to ease the burden on teachers' shoulders, put their time back in their hands, and help them enjoy the work they love.
              </p>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What We Do</h2>
              <p className="mt-6 text-lg leading-8 text-[#d8b4e2]">
                Edion focuses on transforming education through our Teaching Assistant and Intelligent Tutoring System.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {[
                  {
                    name: 'Talk To Your cApp',
                    description: 'Lifelike applications designed to meet educators\' needs through a speech-first interface.',
                    icon: Cpu,
                  },
                  {
                    name: 'Unity',
                    description: 'The educator\'s workbench, revolutionizing administrative tasks and content creation.',
                    icon: BookOpen,
                  },
                  {
                    name: 'Intelligent Tutoring System',
                    description: 'Personalized learning pathways adapting to individual student needs.',
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
              <p className="mt-6 text-lg leading-8 text-[#d8b4e2]">
                Discover how our AI-powered solutions are transforming the educational landscape.
              </p>
            </div>
            <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="w-full lg:w-1/2">
                <Image src="/placeholder.svg" alt="Product Screenshot" className="rounded-lg shadow-xl" width={600} height={400} />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-white">Unity: The Educator's Workbench</h3>
                <p className="text-[#d8b4e2]">Unity streamlines administrative tasks, freeing up valuable time for educators to focus on what matters most - teaching and connecting with students.</p>
                <ul className="list-disc list-inside text-[#d8b4e2] space-y-2">
                  <li>Automated grading and report generation</li>
                  <li>Personalized content creation</li>
                  <li>Student progress tracking</li>
                  <li>Intuitive, conversational interface</li>
                </ul>
                <a href="#" className="inline-block mt-4 px-4 py-2 bg-[#ae759f] text-white rounded-md hover:bg-[#bc96e6] transition-colors">
                  Learn More About Unity
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="progress" className="py-24 sm:py-32">
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
              <p className="mt-6 text-lg leading-8 text-[#d8b4e2]">
                Our diverse team brings expertise in AI, urban and economic geography, and real-world applications.
              </p>
            </div>
            <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Ark Deliev',
                  role: 'Co-founder, CEO',
                  imageUrl: '/placeholder.svg',
                },
                {
                  name: 'Olivia Monné',
                  role: 'Co-founder, CTO',
                  imageUrl: '/placeholder.svg',
                },
                {
                  name: 'Liam McGillycuddy',
                  role: 'Business & Outreach Coordinator',
                  imageUrl: '/placeholder.svg',
                },
                {
                  name: 'Ding Kang Pang',
                  role: 'Machine Learning Engineer',
                  imageUrl: '/dk.png',
                },
                {
                  name: 'Linus Bach',
                  role: 'Machine Learning Engineer',
                  imageUrl: '/linus.png',
                },
                {
                  name: 'Ondrej Horvath',
                  role: 'Business Development Analyst',
                  imageUrl: '/ondrej.png',
                },
                {
                  name: 'Matej Illas',
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
                  <p className="text-sm leading-6 text-[#d8b4e2]">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-[#210b2c] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="http://www.softwarefreedom.org/">
                <Image src="http://www.softwarefreedom.org/img/support-sflc.png" alt="Support SFLC" height={31} width={88} />
              </a>
              <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                <Image alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" width={88} height={31} />
              </a>
            </div>
            <p className="text-sm text-[#d8b4e2]">
              © 2024 Edion Management Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}