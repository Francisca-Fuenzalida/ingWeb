Vue.component('like', {
  template: `
  <div class="row" >
      <div class="col-lg-4 col-md-6 col-sm-12 " >
        <img src="imagenes/foto1.jpeg" alt="Explorar practica">
        <div class="alert alert-light" role="alert" @click="contador++">
          <p>Valparaíso, Chile.</p><br> <br> <button class="btn btn-outline-dark mr-2"><i class="far fa-heart " style="color: black"></i>   Dar me gusta {{contador}} </button></div>
        </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="imagenes/foto2.jpeg" alt="Explorar practica">
        <div class="alert alert-light" role="alert" @click="contador2++">
          <p>Cielo rosa, Chile.</p><br> <br> <button class="btn btn-outline-dark mr-2"><i class="far fa-heart " style="color: black"></i>   Dar me gusta {{contador2}}</button>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="imagenes/foto3.jpeg" alt="Explorar practica">
        <div class="alert alert-light" role="alert" @click="contador3++">
          <p>El Bolsón, Parque Inglés.</p><br> <br> <button class="btn btn-outline-dark mr-2"><i class="far fa-heart " style="color: black"></i>   Dar me gusta {{contador3}}</button>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="imagenes/foto4.jpeg" alt="Explorar practica">
        <div class="alert alert-light" role="alert" @click="contador4++">
          <p>Mi hermana.</p><br> <br> <button class="btn btn-outline-dark mr-2"><i class="far fa-heart " style="color: black"></i>   Dar me gusta {{contador4}}</button>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="imagenes/foto5.jpeg" alt="Explorar practica">
        <div class="alert alert-light" role="alert" @click="contador5++">
          <p>Bruselas' Sunset.</p><br> <br> <button class="btn btn-outline-dark mr-2"><i class="far fa-heart " style="color: black"></i>   Dar me gusta {{contador5}}</button>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="imagenes/foto6.jpeg" alt="Explorar practica">
        <div class="alert alert-light" role="alert" @click="contador6++">
          <p>El mar desde Valparaíso.</p><br> <br> <button class="btn btn-outline-dark mr-2"><i class="far fa-heart " style="color: black"></i>   Dar me gusta {{contador6}}</button></div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="imagenes/7.jpeg" alt="Explorar practica " >
        <div class="alert alert-light" role="alert" >
          <p>Calles de Brujas, Bélgica.</p><br> <br> <button class="btn btn-outline-dark mr-2"><i class="far fa-heart " style="color: black" @click="contador7++"></i>   Dar me gusta {{contador7}}</button>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="imagenes/foto8.jpeg" alt="Explorar practica">
        <div class="alert alert-light" role="alert" @click="contador8++">
          <p>Arc de Triomphe.</p><br> <br> <button class="btn btn-outline-dark mr-2"><i class="far fa-heart " style="color: black"></i>   Dar me gusta {{contador8}}</button>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="imagenes/foto9.jpeg" alt="Explorar practica">
        <div class="alert alert-light" role="alert" @click="contador9++">
          <p>Vista desde la Torre Eiffel, Paris.</p>><br> <br> <button class="btn btn-outline-dark mr-2"><i class="far fa-heart " style="color: black"></i>   Dar me gusta {{contador9}}</button>
          </div>
      </div>
    </div>
  `,
  data() {
    return {
      contador: 0,
      contador2: 0,
      contador3: 0,
      contador4: 0,
      contador5: 0,
      contador6: 0,
      contador7: 0,
      contador8: 0,
      contador9: 0,
    }
  }
})



const app = new Vue({
  el: '#app',
  
  
})