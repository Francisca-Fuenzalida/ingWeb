var app = new Vue({
    el: '#app',
    data: {
        nombre: '',
        edad: 18,
        apellido: '',
        contra: '',
        correo: '',
        errorNombre: '',
        errorEdad: '',
        errorApellido: '',
        errorCorreo: ''
    },
    methods: {
        validarCorreo: function () {
            var expresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (this.correo === '' || !(expresion.test(this.correo))) {
                this.errorCorreo = 'Ingrese un correo valido, ejemplo (ejemplo@mail.com)';
            }
            else
                this.errorCorreo = '';
        },
        validarContra: function () {
            if (this.contra.length < 6 || this.contra.length > 12) {
                this.errorContra = 'Contraseña invalida (Debe tener entre 6 y 12 caracteres)';
            }
            else {
                this.errorContra = '';
            }
        },
        validarNombre: function () {
            if (this.nombre === '') {
                this.errorNombre = 'Campo obligatorio';
            }
            else
                this.errorNombre = '';
        },
        validarEdad: function () {
            if (this.edad < 18) {
                this.errorEdad = 'Debes ser mayor de 18 para registrarte';
            }
            else
                this.errorEdad = '';
        },
        validarApellido: function () {
            if (this.apellido === '') {
                this.errorApellido = 'Campo obligatorio';
            }
            else
                this.errorApellido = '';
        },
        validarReg: function () {
            this.validarNombre();
            this.validarApellido();
            this.validarEdad();
            this.validarCorreo();
            this.validarContra();
        }
    }
});
