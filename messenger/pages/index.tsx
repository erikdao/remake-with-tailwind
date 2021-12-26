import Link from 'next/link'
import Image from 'next/image'
import messengerHero from '../assets/images/messenger-hero.png'
import appleStoreBtn from '../assets/icons/download-apple-store.svg'
import msStoreBtn from '../assets/icons/download-ms-store.svg'

function IndexPage() {
  return (
    <div className="p-10">
      {/* Big columns */}
      <div className="flex flex-wrap items-center lg:container lg:mx-auto">
        <div className="w-1/2 justify-start">
          <div className="max-w-2xl lg:w-3/5 sm:w-4/5">
            <h1 className="hero-title meta-gradient bg-clip-text text-transparent font-semibold text-left mb-0 pb-2 inline-block break-words">
              Hangout
              <br />
              anytime, anywhere
            </h1>

            <div className="mt-6 text-gray-600 font-medium text-lg mb-10">
              Messenger makes it easy and fun to stay close to your favourite people.
            </div>

            <div className="w-100 space-y-6">
              <div>
                <form action="#" id="login_form" method="POST" className="space-y-3">
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email or phone number" className="block w-full rounded-lg text-md py-2 px-4 bg-zinc-50 focus:ring-blue-500 focus:border-blue-500 border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="block w-full rounded-lg text-md py-2 px-4 bg-zinc-50 focus:ring-blue-500 focus:border-blue-500 border-transparent" />
                  </div>

                  <div className="flex flex-wrap items-center pt-4">
                    <button type="submit" className="text-sm font-bold text-white bg-blue-500 hover:bg-indigo-600 transition-colors px-5 py-3 rounded-full">Log in</button>
                    <a href="" className="ml-6 text-blue-500 underline text-sm font-medium">Forgot your password?</a>
                  </div>

                  <div className="relative flex items-start pt-4">
                    <div className="flex items-center h-5">
                      <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="comments" className="text-sm text-gray-600">Keep me signed in</label>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <Link href="https://apps.apple.com/us/app/messenger/id1480068668?mt=12">
                  <a className="mr-2" target="_blank" rel="noopener nofollow">
                  <Image src={appleStoreBtn} alt="Download from Apple Store" height={40} width={120} />
                  </a>
                </Link>
                <Link href="https://www.microsoft.com/en-us/p/messenger/9wzdncrf0083?activetab=pivot:overviewtab">
                  <a target="_blank" rel="noopener nofollow">
                    <Image src={msStoreBtn} alt="Download from Microsoft Store" height={40} width={120} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 justify-start">
          <Image src={messengerHero} alt="Messenger" layout='responsive' />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
