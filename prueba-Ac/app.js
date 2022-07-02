var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });

    let products = [
       
      {
        "img": "/image/gallery-1.png",
        "nombre": "EL Mejor servicio",
        "antiguedad": "12",
    }, 
    {
        "img": "/image/cards1.jpg",
        "nombre": "Rodeate de energia",
        "edad": "12",
    },
    {
        "img": "/image/cards3.jpeg",
        "nombre": "Logra tus metas",
        "edad": "12",
    },
    {
        "img": "/image/cards4.jpg",
        "nombre": "Vive y disfrtua",
        "edad": "12",
    },
    {
      "img": "/image/cards6.jpg",
      "nombre": "Comparte",
      "edad": "12",
  },
  {
      "img": "/image/gallery-2.jpg",
      "nombre": "Sonrie siempre",
      "edad": "12",
  }
    ]
    
    function createProducts(){
    contentProducts = document.querySelector('.swiper-wrapper')

        for( let i of products){
           let tarjeta =`
           <div class="swiper-slide">
              <img src="${i.img}" alt="">
              <p class="nombre-cards-1">${i.nombre}</p>
       </div>
           `
           contentProducts.innerHTML += tarjeta
        }
        
    }
    createProducts()

  
  iconoMenu = document.querySelector('.icon'),
  menu = document.querySelector('.nav-tabs');

  iconoMenu.addEventListener('click', (e) => {

  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');

  const rutaActual = e.target.getAttribute('src');

  if(rutaActual == 'img/open-menu.png'){
      e.target.setAttribute('src','img/open-menu2.png');
  }else{
      e.target.setAttribute('src','img/open-menu.png');
  }
});

var button = document.querySelector('.btn-compra')
button.addEventListener('click', () => {compras()
})
 function compras() {
  Swal.fire(
    'Tu Producto se registro exitosamente!',
    'Presiona para salir!',
    'success'
  )
}



