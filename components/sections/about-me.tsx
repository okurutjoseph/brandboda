import Image from "next/image"

export function AboutMe() {
  return (
    <section className="border-t border-neutral-800 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-12">
          {/* Profile column */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <div className="absolute top-0 left-0 p-4">
                <h1 className="text-2xl font-bold text-white">Your friendly<br />neighborhood Webflow<br />expert</h1>
              </div>
              <Image
                src="images/me.webp"
                alt="Joseph Okurut"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Joseph Okurut</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-neutral-400">Available for Hire</p>
              </div>
              <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                Free estimate
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Certifications column */}
          <div className="space-y-12">
            {/* Finsweet Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center">
                  F
                </div>
                <h3 className="text-xl font-semibold">Finsweet+ Member</h3>
              </div>
              <p className="text-neutral-400 pl-12">
                Finsweet Client-first learning convention certified developer with expertise in implementing best practices.
              </p>
            </div>

            {/* TRICKS Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center">
                  T
                </div>
                <h3 className="text-xl font-semibold">TRICKS Wizardry</h3>
              </div>
              <p className="text-neutral-400 pl-12">
                Master of TRICKS framework library. Creating dynamic interactions and complex functionalities with ease.
              </p>
            </div>

            {/* Webflow Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center">
                  W
                </div>
                <h3 className="text-xl font-semibold">Webflow Pro</h3>
              </div>
              <p className="text-neutral-400 pl-12">
                Certified Webflow Professional with extensive experience in creating responsive, dynamic websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
