import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#55286f] via-[#ae759f] to-[#210b2c] animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22%3E%3Ccircle cx=%2240%22 cy=%2240%22 r=%2236%22 fill=%22%23d8b4e2%22 fill-opacity=%22.05%22%2F%3E%3C%2Fsvg%3E')] bg-repeat animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <main className="flex-grow flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 animate-fade-in-up">
              Pricing
            </h1>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 animate-fade-in-up animation-delay-300">
                <h2 className="text-2xl font-semibold mb-4">Subscription Tiers</h2>
                <p className="text-lg text-[#e8d2ee]">Our flexible subscription plans are designed to grow with your needs.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 animate-fade-in-up animation-delay-600">
                <h2 className="text-2xl font-semibold mb-4">Pay-per-use (Credit) Tiers</h2>
                <p className="text-lg text-[#e8d2ee]">Only pay for what you use with our credit-based system.</p>
              </div>
            </div>
            <div className="inline-block bg-[#210b2c] text-white px-6 py-3 rounded-full text-xl font-semibold animate-fade-in-up animation-delay-900">
              Coming Soon
            </div>
            <p className="mt-8 text-lg text-[#e8d2ee] animate-fade-in-up animation-delay-1200">
              We're finalizing our pricing structure to ensure we offer the best value for educators and institutions. 
              Stay tuned for updates!
            </p>
            <Link href="/" className="inline-flex items-center mt-12 text-lg font-semibold text-white hover:text-[#d8b4e2] transition-colors duration-300 animate-fade-in-up animation-delay-1500">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}