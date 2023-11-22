'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'
import { wrap } from '@motionone/utils'

interface ParallaxProps {
  baseVelocity: number
  images: {
    company: string
    src: string
  }[]
}

const logoWidth = 120

const all = [
  { company: 'ALPHA', src: '/logos/ALPHA.jpg' },
  { company: 'ARMAZEM', src: '/logos/ARMAZEM.jpg' },
  { company: 'AUTOESCOLA ANDREIA', src: '/logos/AUTOESCOLA_ANDREIA.jpg' },
  { company: 'AUTOMOTIVA TEIXEIRA', src: '/logos/AUTOMOTIVA_TEIXEIRA.jpg' },
  { company: 'BICIPECAS', src: '/logos/BICIPECAS.svg' },
  { company: 'CARLOS_MOVEIS', src: '/logos/CARLOS_MOVEIS.svg' },
  { company: 'CASA_HELLEN', src: '/logos/CASA_HELLEN.svg' },
  { company: 'CENTER_CASA', src: '/logos/CENTER_CASA.jpg' },
  { company: 'COMPRE_CERTO', src: '/logos/COMPRE_CERTO.jpg' },
  { company: 'CRISFA_SUPERMERCADO', src: '/logos/CRISFA_SUPERMERCADO.jpg' },
  { company: 'DROGARIA_POUPEJA', src: '/logos/DROGARIA_POUPEJA.svg' },
  { company: 'DROGARIA_UNYMINAS', src: '/logos/DROGARIA_UNYMINAS.svg' },
  {
    company: 'EXTRA_BOM_SUPERMERCADO',
    src: '/logos/EXTRA_BOM_SUPERMERCADO.svg',
  },
  { company: 'FARMACIA_DOS_ANIMAIS', src: '/logos/FARMACIA_DOS_ANIMAIS.svg' },
  { company: 'GAMA', src: '/logos/GAMA.svg' },
  { company: 'HIDRO_PORT', src: '/logos/HIDRO_PORT.svg' },
  { company: 'JAMES_MOTO_SHOP', src: '/logos/JAMES_MOTO_SHOP.svg' },
  { company: 'FERRAGISTA', src: '/logos/FERRAGISTA.jpg' },
  { company: 'FLOR_DE_LIS', src: '/logos/FLOR_DE_LIS.jpg' },
  { company: 'GAS_PORT', src: '/logos/GAS_PORT.jpg' },
  { company: 'JACOB_IMPORTS', src: '/logos/JACOB_IMPORTS.jpg' },
  { company: 'LOURENCO', src: '/logos/LOURENCO.jpg' },
  { company: 'LABORATORIO_IPAC', src: '/logos/LABORATORIO_IPAC.svg' },
  { company: 'LODY_MOVEIS', src: '/logos/LODY_MOVEIS.svg' },
  { company: 'MADEPORT', src: '/logos/MADEPORT.svg' },
  { company: 'MARTINS_SUPERMERCADO', src: '/logos/MARTINS_SUPERMERCADO.svg' },
  { company: 'MEGABOM_SUPERMERCADO', src: '/logos/MEGABOM_SUPERMERCADO.svg' },
  { company: 'MALHARIA_XAVIER', src: '/logos/MALHARIA_XAVIER.jpg' },
  { company: 'MEGA_CONSTRUCAO', src: '/logos/MEGA_CONSTRUCAO.jpg' },
  { company: 'MERCADINHO_MR', src: '/logos/MERCADINHO_MR.jpg' },
  { company: 'POPULAR_FARMA', src: '/logos/POPULAR_FARMA.jpg' },
  { company: 'REDE_INOVA', src: '/logos/REDE_INOVA.jpg' },
  { company: 'SUPERMERCADO_MULUNGU', src: '/logos/SUPERMERCADO_MULUNGU.jpg' },
  { company: 'OTICA_ISIS', src: '/logos/OTICA_ISIS.svg' },
  { company: 'PADARIA_PAO_DE_MEL', src: '/logos/PADARIA_PAO_DE_MEL.svg' },
  { company: 'PORTAL_MAGAZINE', src: '/logos/PORTAL_MAGAZINE.svg' },
  { company: 'SUPER_SIL', src: '/logos/SUPER_SIL.svg' },
  { company: 'SUPERMERCADO_MAIS', src: '/logos/SUPERMERCADO_MAIS.svg' },
  { company: 'SUPERMERCADO_UNIAO', src: '/logos/SUPERMERCADO_UNIAO.svg' },
  { company: 'ZICASA', src: '/logos/ZICASA.svg' },
  { company: 'ZIZA_MODAS', src: '/logos/ZIZA_MODAS.svg' },
  { company: 'TECPORT', src: '/logos/TECPORT.jpg' },
  { company: 'TOP_CALCADOS', src: '/logos/TOP_CALCADOS.jpg' },
  { company: 'UNILAR', src: '/logos/UNILAR.jpg' },
]

const part1 = [
  { company: 'ALPHA', src: '/logos/ALPHA.jpg' },
  { company: 'ARMAZEM', src: '/logos/ARMAZEM.jpg' },
  { company: 'AUTOESCOLA ANDREIA', src: '/logos/AUTOESCOLA_ANDREIA.jpg' },
  { company: 'AUTOMOTIVA TEIXEIRA', src: '/logos/AUTOMOTIVA_TEIXEIRA.jpg' },
  { company: 'BICIPECAS', src: '/logos/BICIPECAS.svg' },
  { company: 'CARLOS_MOVEIS', src: '/logos/CARLOS_MOVEIS.svg' },
  { company: 'CASA_HELLEN', src: '/logos/CASA_HELLEN.svg' },
  { company: 'CENTER_CASA', src: '/logos/CENTER_CASA.jpg' },
  { company: 'COMPRE_CERTO', src: '/logos/COMPRE_CERTO.jpg' },
  { company: 'CRISFA_SUPERMERCADO', src: '/logos/CRISFA_SUPERMERCADO.jpg' },
  { company: 'DROGARIA_POUPEJA', src: '/logos/DROGARIA_POUPEJA.svg' },
]

const part2 = [
  { company: 'DROGARIA_UNYMINAS', src: '/logos/DROGARIA_UNYMINAS.svg' },
  {
    company: 'EXTRA_BOM_SUPERMERCADO',
    src: '/logos/EXTRA_BOM_SUPERMERCADO.svg',
  },
  { company: 'FARMACIA_DOS_ANIMAIS', src: '/logos/FARMACIA_DOS_ANIMAIS.svg' },
  { company: 'GAMA', src: '/logos/GAMA.svg' },
  { company: 'HIDRO_PORT', src: '/logos/HIDRO_PORT.svg' },
  { company: 'JAMES_MOTO_SHOP', src: '/logos/JAMES_MOTO_SHOP.svg' },
  { company: 'FERRAGISTA', src: '/logos/FERRAGISTA.jpg' },
  { company: 'FLOR_DE_LIS', src: '/logos/FLOR_DE_LIS.jpg' },
  { company: 'GAS_PORT', src: '/logos/GAS_PORT.jpg' },
  { company: 'JACOB_IMPORTS', src: '/logos/JACOB_IMPORTS.jpg' },
  { company: 'LOURENCO', src: '/logos/LOURENCO.jpg' },
]

const part3 = [
  { company: 'LABORATORIO_IPAC', src: '/logos/LABORATORIO_IPAC.svg' },
  { company: 'LODY_MOVEIS', src: '/logos/LODY_MOVEIS.svg' },
  { company: 'MADEPORT', src: '/logos/MADEPORT.svg' },
  { company: 'MARTINS_SUPERMERCADO', src: '/logos/MARTINS_SUPERMERCADO.svg' },
  { company: 'MEGABOM_SUPERMERCADO', src: '/logos/MEGABOM_SUPERMERCADO.svg' },
  { company: 'MALHARIA_XAVIER', src: '/logos/MALHARIA_XAVIER.jpg' },
  { company: 'MEGA_CONSTRUCAO', src: '/logos/MEGA_CONSTRUCAO.jpg' },
  { company: 'MERCADINHO_MR', src: '/logos/MERCADINHO_MR.jpg' },
  { company: 'POPULAR_FARMA', src: '/logos/POPULAR_FARMA.jpg' },
  { company: 'REDE_INOVA', src: '/logos/REDE_INOVA.jpg' },
  { company: 'SUPERMERCADO_MULUNGU', src: '/logos/SUPERMERCADO_MULUNGU.jpg' },
]

const part4 = [
  { company: 'OTICA_ISIS', src: '/logos/OTICA_ISIS.svg' },
  { company: 'PADARIA_PAO_DE_MEL', src: '/logos/PADARIA_PAO_DE_MEL.svg' },
  { company: 'PORTAL_MAGAZINE', src: '/logos/PORTAL_MAGAZINE.svg' },
  { company: 'SUPER_SIL', src: '/logos/SUPER_SIL.svg' },
  { company: 'SUPERMERCADO_MAIS', src: '/logos/SUPERMERCADO_MAIS.svg' },
  { company: 'SUPERMERCADO_UNIAO', src: '/logos/SUPERMERCADO_UNIAO.svg' },
  { company: 'ZICASA', src: '/logos/ZICASA.svg' },
  { company: 'ZIZA_MODAS', src: '/logos/ZIZA_MODAS.svg' },
  { company: 'TECPORT', src: '/logos/TECPORT.jpg' },
  { company: 'TOP_CALCADOS', src: '/logos/TOP_CALCADOS.jpg' },
  { company: 'UNILAR', src: '/logos/UNILAR.jpg' },
]

function ParallaxText({ images, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-230, 0, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className='parallax'>
      <motion.div className='scroller' style={{ x }}>
        {images.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            width={logoWidth}
            height={logoWidth}
            alt={logo.company}
            className='mr-[12px] transition-transform duration-300 rounded-lg w-[100px] md:w-[120px] lg:w-[120]'
          />
        ))}
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <section className='flex flex-col gap-4 bg-transparent'>
      <ParallaxText baseVelocity={-4} images={part1} />
      <ParallaxText baseVelocity={6} images={part2} />
      <ParallaxText baseVelocity={-6} images={part3} />
      <ParallaxText baseVelocity={4} images={part4} />
    </section>
  )
}
