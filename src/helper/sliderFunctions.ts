export function slideRight(slides: { image: string }[]) {
  let slider = document.getElementById('slider')
  slider!.scrollLeft = slider!.scrollLeft + slider!.scrollWidth / slides.length
}
export function slideLeft(slides: { image: string }[]) {
  let slider = document.getElementById('slider')
  slider!.scrollLeft = slider!.scrollLeft - slider!.scrollWidth / slides.length
}
