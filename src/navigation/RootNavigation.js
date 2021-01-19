import { createRef } from 'react'

export const isReadyRef = createRef()
export const navigationRef = createRef()

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params)
  } else {
    console.error('ref not mounted')
  }
}
