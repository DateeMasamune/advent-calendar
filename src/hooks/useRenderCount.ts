import { useRef } from "react"

export const useRenderCount = (componentName: string) => {
    const count = useRef(0)

    const activeCount = () => {
        count.current++
        console.info(`${componentName}-render-${count.current}`)
    }

    return {
        activeCount
    }
}