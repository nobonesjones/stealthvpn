'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function MotionDiv({ children, ...props }: { children: ReactNode, [key: string]: any }) {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  )
}

export function MotionPath({ ...props }: { [key: string]: any }) {
  return <motion.path {...props} />
}
