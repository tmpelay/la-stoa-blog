import { useState } from "react"
import InfoCard from "../InfoCard/InfoCard"

function HomeBanner() {
  const [virtue, setVirtue] = useState("Prudence")

  return (
    <div className="hb-container">
      <InfoCard virtue={virtue} />
      <div>
        <ul className="hb-nav">
          <li><a onClick={() => setVirtue("Prudence")}>Prudence</a></li>
          <li><a onClick={() => setVirtue("Temperance")}>Temperance</a></li>
          <li><a onClick={() => setVirtue("Justice")}>Justice</a></li>
          <li><a onClick={() => setVirtue("Courage")}>Courage</a></li>
        </ul>
      </div>
    </div >
  )
}

export default HomeBanner
