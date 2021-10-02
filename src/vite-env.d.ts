/// <reference types="vite/client" />


type Tileset = {
  name: string
  tileSize: number
  src: string
}
declare module '*.tileset.yml' {
  const data: Tileset
  export default data
}
type xPosition = number
type yPosition = number

type DrawRange = {
  from: [xPosition, yPosition]
  to: [xPosition, yPosition]
  tileRow: number 
  tileIndex: number 
  scale? :number[]
}
type Layer = DrawRange[]
type Tilemap = {
  tilset: Tileset["name"]
  layers: Layer[]
}
declare module '*.map.yml' {
  const data: Tilemap
  export default data
}