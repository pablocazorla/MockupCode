var caap = {  
  title: 'Agregar CAAP',
  height: 920,
  list:`Nombre - text *
Razón Social - text *
Imagen - file *
Pertenece a - select,3
Sector - select *,3
CIF - text,3
VAT - text,3
Etiquetas - textarea,12
Dirección - text,6
Dirección de facturación - text,6
Contacto de facturación - text,6
Método de pago - select,6
Email - email,6
Términos y condiciones de pago - select,6
Teléfono - phone,6
Método de cobro - select,6
Impuestos - select,6
Términos y condiciones de cobro - select,6
Redes sociales - textarea,12`
};

var users = {  
  title: 'Agregar usuario',
  height: 400,
  list:`Nombre y apellidos - text *,7
Imagen - file,5
Email - email *,7
Password - text *,5
Manager - select
Compañías - textarea,8`
};

var sectors = {  
  title: 'Agregar sector',
  height: 290,
  list:`Nombre - text *,7
Descripción - select,7`
};
var origins = {  
  title: 'Agregar origen',
  height: 290,
  list:`Nombre - text *,7
  Descripción - select,7`
};
var paymethod = {  
  title: 'Agregar método de pago',
  height: 290,
  list:`Nombre - text *,7
Descripción - select,7`
};
var buymethod = {  
  title: 'Agregar método de cobro',
  height: 290,
  list:`Nombre - text *,7
Descripción - select,7`
};
var tycpay = {  
  title: 'Agregar términos y condiciones de pago',
  height: 290,
  list:`Nombre - text *,7
Descripción - select,7`
};
var tycbuy = {  
  title: 'Agregar términos y condiciones de cobro',
  height: 290,
  list:`Nombre - text *,7
Días de vencimiento - number *,3
Descripción - select,7`
};
var taxes = {  
  title: 'Agregar impuesto',
  height: 290,
  list:`Nombre - text *,6
  Nombre a mostrar - text *,6
  Porcentaje -number *,2
Descripción - select,8`
};
var talents = {  
  title: 'Nuevo talento',
  height: 700,
  list:` Conecta con redes sociales - text *
  Nombre artístico - text *,5
  Nombre y apellido - text *,7
  Fecha de nacimiento - date *,3
  Género - select *,3
  Dónde resides - text *,6
  Email - email *,8
  Teléfono - phone *,4
  Sitio web - text *,12
  Datos biográficos - textarea *,12
  Categorías - textarea *,12`
};

var goals = {  
  title: 'Agregar objetivo',
  height: 200,
  list:`Mes/Año - date *,4
  Objetivo - money,6`
};

var campaigns = {  
  title: 'Agregar tipo de campaña',
  height: 290,
  list:`Nombre - text *,7
Descripción - select,7`
};
var products = {  
  title: 'Agregar producto',
  height: 290,
  list:`Campaña - select *,4
Nombre - text *,8
Descripción - select,7`
};
var prices = {  
  title: 'Agregar precio',
  height: 290,
  list:`Nombre - text *,6
Divisor - number *,2
Descripción - select,7`
};

var oportunities = {  
  title: 'Agregar oportunidad',
  height: 950,
  list:`Campaña - select *,8
  Origen - select *,4
  CAAP - select *
  Contacto cliente - text *,3
  Email - email *,5
  Archivos - file
  Comentario - textarea,8`
};
var oportunities2 = {  
  title: '----',
  height: 950,
  list:`+ Agregar - button,12`
};
var lines = {  
  title: 'Agregar línea',
  height: 950,
  list:`Tipo de línea - select *,3
  Producto - select *,3
  Segmentación - text *,6
  Fechas (inicio/fin) - date *,2
  Tipo de precio - select *,4
  Unidades - number *,2
  Precio - money *,2
  Total - money *,2
  Comentario - textarea,12
  Cancelar - buttonSec,3
  Agregar - button,3`
};
var login = {  
  title: 'Iniciar sesión',
  height: 290,
  width: 400,
  list:`Nombre de usuario - text *,12
  Contraseña - password *,12`
};
var account = {  
  title: 'Mi cuenta',
  height: 350,
 // width: 400,
  list:`Nombre - text *
  Apellidos - text *
  Nada - none
  Contraseña - text *
  Manager - select
  Nada - none  
  Compañias - text,8
  . - file`
};

var oportunities3 = {  
  title: 'Oportunidades',
  height: 990,
  list:`Buscar - text *,12
  Ganadas - text,3
  Perdidas - text,3
  Abiertas - text,3
  Forecast - text,3
  Oportunidades abiertas - text,12
  Oportunidades congeladas - text,12`
};

var order = {  
  title: 'Editar orden',
  height: 290,
  width: 400,
  list:`Nombre de usuario - text *,12
  Contraseña - password *,12`
};
var resumeOrder = {  
  title: 'Orden Carrefour nº 123456',
  height: 1500,
  width: 890,
  list:`Total Oportunidad - text,3
  Total Orden - text,3
  Total Facturado - text,3
  Total Costos - text,3
  Margen bruto - text,3
  Margen neto - text,3
  Total fidelidad - text,3
  Total margen - text,3
  Ingresos - text,12`
};
var orderEdit = {  
  title: 'Editar orden',
  height: 950,
  list:`Campaña - select *,8
  Origen - select *,4
  CAAP - select *
  Contacto cliente - text *,3
  Email - email *,5
  Comercial - text *,6
  Operaciones - select *,3
  Productor - select *,3
  Archivos - file,3
  Comentario - textarea,9`
};

/*
var pantalla = {  
  title: 'Pablo',
  height: 950,
  list:[
    ',Nombre y apellido',
    ',Nombre y apellido',
    ',Nombre y apellido,12',
    'checkbox,Nombre y apellido|otro mas|otro,6',
    'number,Nombre y apellido,2',
    ',Nombre y apellido',
    'textarea,Nombre y apellido,3',
    'text,Nombre y apellido An other way to save canvas data (into a PDF) is using the wkhtmltopdf Library',
    'select,Es unoo,3',
    'buttonSec,Cancelar,2',
    'button,Aceptar,2',
    'upload,sfdfsd',
    ',Nombre y apellido',
    'radio,Nombre y apellido|otro mas|otro',
    'phone,Phone,6',
    'email,Email,6',
  ]
};
*/