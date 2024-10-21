'use client'

import { useState, useRef, useEffect } from 'react'
import {Menu, X, Blocks, Cpu, Linkedin, Twitter, Github, Presentation} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { motion, useAnimation } from "framer-motion"

const navigation = [
  { name: 'Our Mission', href: '#mission' },
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Our Product', href: '#our-product' },
  { name: 'Progress', href: '#progress' },
  { name: 'Team', href: '#team' },
  { name: 'Pricing', href: '/pricing' },
]

const Feature = ({ icon: Icon, name, description }: { icon: React.ElementType; name: string; description: string }) => {
  const firstLetter = name.charAt(0);
  const restOfName = name.slice(1);
  const isUpperCase = firstLetter === firstLetter.toUpperCase();

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center mb-2">
        <Icon className="h-6 w-6 mr-3 text-[#ae759f]" />
        <h3 className="text-lg font-semibold text-white flex items-baseline">
          <span className={`relative arrow arrow-no-margin ${isUpperCase ? 'arrow-uppercase' : 'arrow-lowercase'}`}>
            {firstLetter}
          </span>
          <span className="ml-[-1px]">{restOfName}</span>
        </h3>
      </div>
      <p className="mt-2 text-sm text-[#d8b4e2]">{description}</p>
    </div>
  )
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

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
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#210b2c] bg-opacity-90 shadow-lg' : ''}`}>
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Edion</span>
                <Image className="h-12 w-auto" src="/logo3.svg" alt="Edion Logo" width={2000} height={2000}/>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true"/>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                  <Link key={item.name} href={item.href}
                        className="text-sm font-semibold leading-6 text-white hover:text-[#d8b4e2] transition-colors duration-300">
                    {item.name}
                  </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="mailto:omonne@edion.io"
                 className="text-sm font-semibold leading-6 text-white hover:text-[#d8b4e2] transition-colors duration-300">
                Contact Us <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          {mobileMenuOpen && (
              <div className="lg:hidden">
                <div className="fixed inset-0 z-50"/>
                <div
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#210b2c] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <Link href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Edion</span>
                      <Image className="h-16 w-auto" src="/logo.svg" alt="Edion Logo" width={256} height={256}/>
                    </Link>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true"/>
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
                  Elevating Educators,<br/>Inspiring Learners
                </h1>
                <p className="mt-6 text-lg leading-8 text-[#e8d2ee] animate-fade-in-up animation-delay-300">
                  Educational tools that empower teachers and students
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up animation-delay-600">
                  <a
                      href="#mission"
                      className="rounded-md bg-[#210b2c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#bc96e6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b4e2] transition-all duration-300"
                  >
                    Get started
                  </a>
                  <a href="#what-we-do"
                     className="text-sm font-semibold leading-6 text-white hover:text-[#d8b4e2] transition-colors duration-300">
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
                We're here to ease the burden on teachers' shoulders, put their time back in their hands, and help them
                enjoy the work they love.
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
            <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {[
                  {
                    name: 'cApps',
                    description: 'Lifelike applications that understand anyone and that anyone can understand. Effortlessly.',
                    icon: Cpu,
                  },
                  {
                    name: 'Chalk',
                    description: 'The educator\'s workstation revolutionizing the way teachers handle administrative tasks.',
                    icon: Presentation,
                  },
                  {
                    name: 'Pebbles',
                    description: 'Personalized learning experiences that adapt to each student\'s needs and pace.',
                    icon: Blocks,
                  },
                ].map((feature) => (
                  <Feature key={feature.name} {...feature} />
                ))}
              </div>
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
            <div className="mt-16 space-y-16" ref={ref}>
              {/* cApps subsection */}
              <motion.div 
                className="bg-[#210b2c] rounded-lg p-8 shadow-lg relative overflow-hidden"
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
              >
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3a1d4c] transform -skew-x-12"></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-baseline">
                      <span className="relative arrow arrow-no-margin arrow-lowercase">c</span>
                      <span className="ml-[-1px]">Apps: Talk to Your App</span>
                    </h3>
                    <p className="mt-3 text-lg text-[#e8d2ee]">
                      Conversational apps are speech-first applications designed to meet users' needs while gradually adapting to their preferred experiences.
                    </p>
                    <ul className="mt-4 list-disc list-inside text-[#e8d2ee] space-y-2">
                      <li>Adaptive interface that learns and changes based on user interactions</li>
                      <li>Ability to provide an explanation to AI reasoning and actions</li>
                      <li>Accessible to users of all technical skill levels</li>
                      <li>Enhanced user experience and efficiency</li>
                    </ul>
                    <Button
                      variant="secondary"
                      className="mt-4 bg-[#ae759f] text-white hover:bg-[#bc96e6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled
                    >
                      Explore cApps
                    </Button>
                  </div>
                  <div className="mt-8 lg:mt-0">
                    <Image
                      src="/front.png"
                      alt="cApps Illustration"
                      width={2000}
                      height={2000}
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Chalk subsection */}
              <motion.div 
                className="bg-[#210b2c] rounded-lg p-8 shadow-lg relative overflow-hidden"
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
              >
                <div className="absolute top-0 left-0 w-1/2 h-full bg-[#3a1d4c] transform skew-x-12"></div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative z-10">
                  <div className="w-full lg:w-1/2">
                    <Dialog>
                      <DialogTrigger>
                        <Image
                          src="/demo.gif"
                          alt="Chalk Demo"
                          className="rounded-lg shadow-xl w-full h-auto transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                          width={2000}
                          height={2000}
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <Image
                          src="/demo.gif"
                          alt="Chalk Demo"
                          className="w-full h-auto"
                          width={2000}
                          height={2000}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold text-white flex items-baseline">
                      <span className="relative arrow arrow-no-margin arrow-uppercase">C</span>
                      <span className="ml-[-1px]">halk: The Educator's Workbench</span>
                    </h3>
                    <p className="text-[#e8d2ee] mt-3 text-lg">
                      <span className="relative arrow arrow-no-margin arrow-uppercase">C</span>
                      <span className="ml-[-1px]">halk</span> helps streamline the most time-consuming administrative tasks, giving educators more time to focus on what truly matters.
                    </p>
                    <ul className="list-disc list-inside text-[#e8d2ee] space-y-2">
                      <li>Simplified grading with personalized feedback suggestions</li>
                      <li>Improved ease and speed of administrative tasks</li>
                      <li>Fully customizable content creation</li>
                      <li>Reduced manual effort</li>
                    </ul>
                    <div className="flex justify-end mt-4">
                      <Button
                        variant="secondary"
                        className="bg-[#ae759f] text-white hover:bg-[#bc96e6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                      >
                        Learn More About Chalk
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>


              {/* Updated Pebbles subsection */}
              <motion.div 
                className="bg-[#210b2c] rounded-lg p-8 shadow-lg relative overflow-hidden"
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
              >
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3a1d4c] transform -skew-x-12"></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center relative z-10">
                  <div className="mt-10 lg:mt-0">
                    <h3 className="text-2xl font-bold text-white flex items-baseline">
                      <span className="relative arrow arrow-no-margin arrow-uppercase">P</span>
                      <span className="ml-[-1px]">ebbles: An Intelligent Tutoring System</span>
                    </h3>
                    <p className="mt-3 text-lg text-[#e8d2ee]">
                      <span className="relative arrow arrow-no-margin arrow-uppercase">P</span>
                      <span className="ml-[-1px]">ebbles</span> generates personalized learning experiences on the fly, matching each student's unique learning style and environment.
                    </p>
                    <ul className="mt-4 list-disc list-inside text-[#e8d2ee] space-y-2">
                      <li>Differentiated learning pathways</li>
                      <li>Interactive and engaging content</li>
                      <li>Real-time feedback and explanations</li>
                      <li>Data-driven insights for educators</li>
                    </ul>
                    <Button
                      variant="secondary"
                      className="mt-4 bg-[#ae759f] text-white hover:bg-[#bc96e6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled
                    >
                      Discover Pebbles
                    </Button>
                  </div>
                  <div className="mt-8 lg:mt-0">
                    <div className="relative w-full h-0 pb-[56.25%] bg-gradient-to-br from-[#f4e2ff] to-[#ffb4fe] rounded-lg shadow-xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.p 
                            className="text-2xl font-bold text-white relative z-10"
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            Coming Soon
                          </motion.p>
                        </div>
                      </div>
                      <motion.div 
                        className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22%3E%3Ccircle cx=%2240%22 cy=%2240%22 r=%2236%22 fill=%22%23e2b4fe%22 fill-opacity=%22.1%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
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
                Our team blends strong technical expertise in AI with a mix of entrepreneurial, economic, and industry experience.
              </p>
            </div>
            <ul role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Ark Deliev',
                  role: 'Co-founder, CEO',
                  imageUrl: '/ark.png',
                  linkedin: 'https://www.linkedin.com/in/arkdeliev/',
                },
                {
                  name: 'Olivia Monné',
                  role: 'Co-founder, CTO',
                  imageUrl: '/olivia.png',
                  linkedin: 'https://www.linkedin.com/in/olivia-monne',
                },
                {
                  name: 'Liam McGillycuddy',
                  role: 'Business & Outreach Coordinator',
                  imageUrl: '/liam.png',
                  linkedin: 'https://www.linkedin.com/in/liam-mcgillycuddy-65b2a01ba/',
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
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white flex items-center justify-center">
                      {person.name}
                      {person.linkedin && (
                        <a 
                          href={person.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="ml-2 text-[#e8d2ee] hover:text-white transition-colors inline-flex items-center"
                        >
                          <Linkedin size={16} className="relative top-[-1px]" />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm leading-6 text-[#e8d2ee]">{person.role}</p>
                  </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="affiliates" className="py-24 sm:py-32 bg-[#210b2c] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ae759f] to-[#d8b4e2]"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22%3E%3Ccircle cx=%2240%22 cy=%2240%22 r=%2236%22 fill=%22%23d8b4e2%22 fill-opacity=%22.2%22%2F%3E%3C%2Fsvg%3E')] bg-repeat animate-pulse"></div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-3xl">Our Affiliates</h2>
            </div>
            <div className="mt-16 flex flex-wrap justify-center items-center gap-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/venturelab-north-logo-qMlz5z1ER8xwbYsjuMFahlcWckmBqi.svg"
                alt="VentureLab North Logo"
                width={163.8}
                height={49.2}
                className="transform hover:scale-110 transition-transform duration-300 filter brightness-100 hover:brightness-125 animate-fade-in"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eurc-logo-jxbUzKkYcKuIo6Arjis7P38bogGkUc.svg"
                alt="EURC Logo"
                width={78}
                height={49.2}
                className="transform hover:scale-110 transition-transform duration-300 filter brightness-100 hover:brightness-125 animate-fade-in animation-delay-200"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snn-logo-EZ8EW4TSKsU7uipTCNb1N00vdv6FQb.svg"
                alt="SNN Logo"
                width={91.2}
                height={52.8}
                className="transform hover:scale-110 transition-transform duration-300 filter brightness-100 hover:brightness-125 animate-fade-in animation-delay-400"
              />
            </div>
          </div>
        </section>

        <footer className="bg-[#210b2c] py-12 relative z-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/company/edion-io" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-[#d8b4e2] transition-colors">
                  <Linkedin size={24}/>
                </a>
                <a href="https://twitter.com/edion_io" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-[#d8b4e2] transition-colors">
                  <Twitter size={24}/>
                </a>
                <a href="https://github.com/edion-io" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-[#d8b4e2] transition-colors">
                  <Github size={24}/>
                </a>
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