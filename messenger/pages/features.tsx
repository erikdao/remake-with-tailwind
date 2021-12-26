import Head from 'next/head'
import Image from 'next/image'
import featuresHero from '../assets/images/features-hero.png'
import metaApps from '../assets/images/meta-apps.png'

export function FeaturePage() {
  return (
    <>
      <Head>
        <title>Messenger features</title>
      </Head>

      <div className="p-10">
        <div id="messenger-features" className="py-10 overflow-hidden">
          <div className="flex flex-wrap items-center lg:container lg:mx-auto">
            <div className="w-1/2 justify-start">
              <div className="max-w-2xl lg:w-3/5 sm:w-4/5">
                <h1 className="hero-title meta-gradient bg-clip-text text-transparent font-semibold text-left mb-0 pb-2 inline-block break-words">
                  More ways
                  <br />
                  to stay connected
                </h1>

                <div className="mt-6 text-gray-600 font-medium text-lg mb-10">
                  Messenger makes it easy and fun to stay close to your favourite people.
                </div>
              </div>
            </div>

            <div className="w-1/2 justify-start">
              <Image src={featuresHero} alt="Features" layout='responsive' />
            </div>
          </div>
        </div>

        <div className="pb-10 overflow-hidden">
          <div className="lg:container mx-auto max-w-lg">
            <div className="w-3/4 sm:w-1/2 mx-auto block mb-4">
              <h3 className="text-center uppercase text-slate-500">Cross-app communication</h3>
            </div>

            <div className="w-3/4 sm:w-1/2 mx-auto block">
              <h2 className="text-center text-6xl font-semibold">Hang with your favourite people on your favourite apps and devices</h2>
            </div>

            <div className="w-1/2 sm:w-1/3 mx-auto block mt-10">
              <div className="text-slate-500 font-medium text-lg text-center">
                Messenger powers conversations with Facebook, Instagram, Portal, and Oculus (coming soon).
              </div>
            </div>

            <div className="w-1/3 mx-auto block py-10 max-w-screen-sm">
              <Image src={metaApps} alt="Cross-app communication" layout="responsive" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturePage
