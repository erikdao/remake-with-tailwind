import Image from 'next/image'
import Link from 'next/link'
import icon from '../assets/icons/messenger.png'

export default function Navbar() {
  return (
    <header className="w-100 z-auto border-b">
      <div className="lg:container mx-auto flex items-center justify-between h-24 px-10">
        <div>
          <Link href="/">
            <a>
              <Image src={icon} width={40} height={40} alt="Messenger" />
            </a>
          </Link>
        </div>

        <ul className="list-none p-0 m-0 text-sm font-medium">
          <li className="inline-block">
            <Link href="/features">
              <a className="ml-0">Features</a>
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/desktop">
              <a className="ml-5">Desktop App</a>
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/privacy">
              <a className="ml-5">Privacy &amp; Safety</a>
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/privacy">
              <a className="ml-5">For Developers</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
