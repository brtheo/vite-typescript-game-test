import {WIDTH, HEIGHT, UNIT} from './const'
import {loadSprite} from './loaders'
import {drawTile, drawMap, debugLine} from './utils'


import TILESET from '../sprites/home/home.tileset.yml'
import stage1 from '../maps/stage1.map.yml'

(async function() {
  const game: HTMLCanvasElement = document.createElement("canvas")
  document.body.appendChild(game)
  game.height = HEIGHT
  game.width = WIDTH
  const ctx: CanvasRenderingContext2D = game.getContext('2d')
  const tile = await loadSprite(TILESET)
  const {tileSize} = TILESET
  
  function draw() {
    ctx.fillStyle = '#000000'
    ctx.fillRect(0,0,WIDTH, HEIGHT)
    drawMap(ctx, stage1, tile, tileSize, UNIT)
    //debugLine(ctx, WIDTH, HEIGHT, UNIT)
  }

  function update() {
    draw()
  }

  requestAnimationFrame(update)
  
})()
