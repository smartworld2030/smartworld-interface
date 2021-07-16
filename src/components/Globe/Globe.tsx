//@ts-nocheck
import React, { useState, useEffect, useRef } from 'react'
import Globe from 'react-globe.gl'
import * as d3 from 'd3'
import earth from '../../assets/earth.jpg'
import background from '../../assets/background.png'
import clouds from '../../assets/clouds.png'
import SmartWorldAddress from '../Wallet/Main/SmartWorldAddress'
import ListTokens from '../Wallet/Main/ListTokens'

interface GlobeProps {
  height: number
  width: number
}

const ReactGlobe: React.FC<GlobeProps> = ({ height, width }) => {
  const globeEl = useRef()
  const [popData, setPopData] = useState([])

  useEffect(() => {
    fetch('/assets/world_population.csv')
      .then((res) => res.text())
      .then((csv) =>
        d3.csvParse(csv, ({ lat, lng, pop }) => ({
          lat: +lat,
          lng: +lng,
          pop: +pop,
        }))
      )
      .then(setPopData)
  }, []) // [] mean

  useEffect(() => {
    // Auto-rotate
    if (globeEl?.current) {
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = 0.3
      globeEl.current.camera().setViewOffset(100, 100, 0, -18, 100, 100)
    }
  }, [])

  const weightColor = d3
    .scaleSequentialSqrt(d3.interpolateYlOrRd)
    .domain([0, 1e7])

  return (
    <div style={{ position: 'relative' }}>
      <Globe
        ref={globeEl}
        height={height}
        width={width}
        globeImageUrl={earth}
        bumpImageUrl={clouds}
        backgroundImageUrl={background}
        hexBinPointsData={popData}
        hexBinPointWeight="pop"
        hexAltitude={(d) => d.sumWeight * 6e-8}
        hexBinResolution={4}
        hexTopColor={(d) => weightColor(d.sumWeight)}
        hexSideColor={(d) => weightColor(d.sumWeight)}
        hexBinMerge={true}
        enablePointerInteraction={false}
      />
      <div style={{ position: 'absolute', bottom: 5, left: 5 }}>
        <SmartWorldAddress />
      </div>
      <div
        style={{
          position: 'absolute',
          zIndex: 100,
          bottom: 5,
          right: 5,
        }}
      >
        <ListTokens />
      </div>
    </div>
  )
}

export default ReactGlobe
