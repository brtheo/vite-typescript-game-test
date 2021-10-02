export const loadSprite = async function(sprite: Tileset) {
  const img = new Image()
  img.decoding = "async"
  img.src = `/sprites/${sprite.name}/${sprite.src}`
  await img.decode()
  return img
}