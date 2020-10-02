Vue.component('fotos', {
  template: 
  `
  
  
  
  
  `

})

const app = new Vue({
  el: '#app',
  data: {
    
  }
})



var imagenes= [1, 2, 3, 4, 5, 6, 7, 8, 9];
var fotos = document.getElementById('fotos');
            for(imagen of imagenes){

              fotos.innerHTML += `

                <div class="card">
            <a href="" data-toggle="modal" data-target="#id${imagen}">
              <img src="imagenes2/${imagen}.jpeg" alt="" class="card-img-top">
            </a>
            </div>

            <div class="modal fade" id="id${imagen}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
              </button>
              <img src="imagenes2/${imagen}.jpeg" class="img-fluid rounded">
              </div>
            </div>

              `
            }

