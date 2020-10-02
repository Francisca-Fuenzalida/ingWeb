var imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var fotos = document.getElementById('fotos');
for (var _i = 0, imagenes_1 = imagenes; _i < imagenes_1.length; _i++) {
    imagen = imagenes_1[_i];
    fotos.innerHTML += "\n\n                <div class=\"card\">\n            <a href=\"\" data-toggle=\"modal\" data-target=\"#id" + imagen + "\">\n              <img src=\"imagenes2/" + imagen + ".jpeg\" alt=\"\" class=\"card-img-top\">\n            </a>\n            </div>\n\n            <div class=\"modal fade\" id=\"id" + imagen + "\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg modal-dialog-centered\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <img src=\"imagenes2/" + imagen + ".jpeg\" class=\"img-fluid rounded\">\n              </div>\n            </div>\n\n              ";
}
