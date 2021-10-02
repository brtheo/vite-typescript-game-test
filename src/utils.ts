export function drawTile(ctx: CanvasRenderingContext2D,tileset: HTMLImageElement, posX: number, posY: number, tileSize: number, tilesetRow: number, tileIndex: number, unit: number, scaleFactor: number[] = [1,1]): void {
  const 
    [scaleX, scaleY] = scaleFactor,
    scaledXTileSize = tileSize *scaleX,
    scaledYTileSize = tileSize *scaleY,
    tileX = tileIndex*scaledXTileSize  < tileset.width  ? tileIndex*scaledXTileSize  : tileset.width - scaledXTileSize,
    tileY = tilesetRow*scaledYTileSize < tileset.height ? tilesetRow*scaledYTileSize : tileset.height - scaledYTileSize
  ctx.drawImage(tileset, tileX, tileY, tileSize*scaleX, tileSize*scaleY, posX, posY, unit*scaleX, unit*scaleY)
}

export function drawMap(ctx: CanvasRenderingContext2D, map: Tilemap, tileset: HTMLImageElement, tileSize: number, unit: number): void {
  const {layers} = map
  layers.forEach((layer: Layer) => {
    layer.forEach((range: DrawRange) => {
      const 
        [fromX, fromY] = range.from,
        [toX, toY] = range.to,
        {tileRow, tileIndex, scale} = range
        for(let y = fromY; y <= toY; y += unit) {
          for(let x = fromX; x <= toX; x += unit) {
            if(scale === undefined) {
              drawTile(ctx, tileset, x, y, tileSize, tileRow, tileIndex, unit)
            } else {
              drawTile(ctx, tileset, x, y, tileSize, tileRow, tileIndex, unit, scale)
              return
            }
          }
        }
    })
  })

}
export function debugLine(ctx: CanvasRenderingContext2D, width, height, unit ): void {

  ctx.strokeStyle = "pink"
  ctx.lineWidth = 2
  for(let y = 0; y <= height; y += unit) {
    for(let x = 0; x <= width; x += unit) {
      ctx.strokeRect(x,y,unit,unit)
    }
  }
}