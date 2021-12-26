import { useState } from "react"
import GlobalHeader from "./GlobalHeader"
import Navbar from "./Navbar";
import StickyBanner from "./StickyBanner"

export default function Layout({ children }) {
  const [stickyBanner, showStickyBanner] = useState(true);

  return (
    <div className="relative w-screen h-screen overflow-x-hidden overflow-y-auto">
      <GlobalHeader />
      <div className="main-content pt-12">
        <Navbar />
        <div className="max-w-full">
          {children}
        </div>
      </div>
      {stickyBanner && <StickyBanner onClose={() => showStickyBanner(false)} />}
    </div>
  )
}
