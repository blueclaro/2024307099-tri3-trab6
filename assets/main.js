document.querySelectorAll("[data-folder]").forEach(el => {
	const total = el.dataset.total
	const folder = el.dataset.folder
	let html = ''
	for (let i = 1; i <= total; i++) {
		html += `
			<div>
				<img src="assets/${folder}/${folder} (${i}).jpg">
			</div>    
		`
	}
	el.innerHTML = html
})

const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryContent = galleryImageModal.querySelector('.content')
const imgs = document.querySelectorAll('.gallery img')
const btClose = galleryImageModal.querySelector('.bt-close')
const btProx = galleryImageModal.querySelector('.bt-next')
const btAnt = galleryImageModal.querySelector('.bt-prev')

let nextimg, previmg = null

btClose.addEventListener('click', () => {
	galleryImageModal.close()
})

imgs.forEach((img) => {
	img.addEventListener('click', () => {
		galleryContent.innerHTML = `<img src="${img.src}">`
		galleryImageModal.showModal()
	})
})

btProx.addEventListener('click', () => {
	galleryImageModal.close()
	nextimg.click()
})

btAnt.addEventListener('click', () => {
	galleryImageModal.close()
	previmg.click()
})

function nextImg(img) {
  if (img.parentNode.nextElementSibling) {
    return img.parentNode.nextElementSibling.querySelector('img')
  } else {
    return imgs[0]
  }
}

function prevImg(img) {
  if (img.parentNode.previousElementSibling) {
    return img.parentNode.previousElementSibling.querySelector('img')
  } else {
    return imgs[imgs.length - 1]
  }
}

imgs.forEach(img => {
	img.addEventListener('click', () => {
		nextimg = nextImg(img)
		previmg = prevImg(img)
		conteudoModal.innerHTML = `<img src="assets/${folder}/${img.src}">`
		galleryImageModal.showModal()
	})
})