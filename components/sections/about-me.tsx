import Image from "next/image"

export function AboutMe() {
  return (
    <section className="py-20 relative">
      <Image 
        src="./images/643191e711af0d5ee2944774_background.svg"
        alt="Background"
        fill
        className="object-cover opacity-10"
        priority
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Journey</h2>
          <p className="text-neutral-400">Key milestones</p>
        </div>

        <div className="space-y-16">
          {/* Platform Launch */}
          <div className="relative flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
              <span className="text-white">1</span>
            </div>
            <div className="ml-8 bg-neutral-900 p-6 rounded-lg max-w-lg">
              <div className="text-sm text-neutral-400 mb-2">2023</div>
              <h3 className="text-xl font-semibold mb-2">Platform Launch</h3>
              <p className="text-neutral-400">LearnOnchain begins its journey to revolutionize blockchain education.</p>
            </div>
          </div>

          {/* Community Growth */}
          <div className="relative flex items-center justify-end">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center z-10">
              <span className="text-white">2</span>
            </div>
            <div className="ml-8 bg-neutral-900 p-6 rounded-lg max-w-lg">
              <div className="text-sm text-neutral-400 mb-2">2024</div>
              <h3 className="text-xl font-semibold mb-2">Community Growth</h3>
              <p className="text-neutral-400">Reached 50,000+ active learners and launched advanced courses.</p>
            </div>
          </div>

          {/* Global Recognition */}
          <div className="relative flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center z-10">
              <span className="text-white">3</span>
            </div>
            <div className="ml-8 bg-neutral-900 p-6 rounded-lg max-w-lg">
              <div className="text-sm text-neutral-400 mb-2">2025</div>
              <h3 className="text-xl font-semibold mb-2">Global Recognition</h3>
              <p className="text-neutral-400">Accredited as the leading blockchain education platform.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
