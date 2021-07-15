import React, { useEffect, useRef } from 'react'

type UseUpdateProps = typeof useEffect

const useUpdate: UseUpdateProps = (effect, deps) => {

  const isMounted = useRef(true)

  useEffect(() => {
    if(isMounted.current) {
      isMounted.current = false
    } else {
      return effect()
    }
  }, deps)
}

export default useUpdate
