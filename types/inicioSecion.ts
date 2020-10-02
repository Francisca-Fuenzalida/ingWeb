const app = new Vue({
  el: '#app',
  data: {
    contra: '',
    correo: '',
    errorCorreo: '',
    errorContra:''
    
  },
  methods: {
    validarCorreo() {
      let expresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (this.correo === '' || !(expresion.test(this.correo)) ) {
        this.errorCorreo = 'Ingrese un correo valido, ejemplo (ejemplo@mail.com)';
      }
      else
        this.errorCorreo = '';

    },
    validarContra() {
      if (this.contra.length < 6 || this.contra.length > 12) {
        this.errorContra = 'Contraseña invalida (Debe tener entre 6 y 12 caracteres)';
      }
      else {
        this.errorContra = '';
      }
    },
    validarLog() {
      this.validarCorreo();
      this.validarContra();
    }
  }
})