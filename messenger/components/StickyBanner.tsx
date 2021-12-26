import Image from 'next/image'
import messengerInstagramIcon from '../assets/icons/messenger_instagram.png'

interface StickyBannerProps {
  onClose: () => void;
}

export default function StickyBanner(props: StickyBannerProps) {
  const { onClose } = props

  return (
    <div className="fixed left-0 right-0 bottom-0 flex flex-wrap justify-center items-center meta-gradient p-5 text-center text-white z-10">
      <div className="absolute top-3 right-3 cursor-pointer" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <div className="mr-4 flex justify-center align-middle">
        <Image src={messengerInstagramIcon} alt="Messenger + Instagram" height={36} width={120} />
      </div>
      <p className="text-lg">Coming soon! Message your Instagram friends right from Messenger. Learn more.</p>
    </div>
  )
}
