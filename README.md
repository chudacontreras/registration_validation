registration_validation
=======================

Plugin para Registro y validacion de usuarios en joomla.

Este plugin es Una bifurcación del plugin de function90 (http://www.function90.com/products/registration-validation.html), adaptado a las necesidades venezolanas por Mario Fernandez (ceeck65)(https://github.com/ceeck65).

Modificado por mi para una adaptacion, muy particular.

Se necesitaba que cuando el usuario se fuese a registrar.

Se validara el nombre, que no contuviese números y que fuese mayor a 4 caracteres.

En el campo cédula o DNI aceptaría solo caracteres numéricos y fuese mayor a 5 caracteres.

Que el nombre de usuario o nick, fuese mayor a 4 caracteres y que no estuviera registrado previamente (sin nombre de usuarios iguales).

Que validara la fortaleza de la contraseña y que la repetición de la misma sea igual.

Que el correo electrónico sea correcto según parámetros y que no este registrado previamente.

Que al repetir el correo electrónico sea el mismo introducido previamente.
 
que validara el numero de teléfono (solo números).

Que la fecha de nacimiento fuese mayor o igual a 18 años.

Que se acepten las condiciones del servicio.

¿Que hace el plugin?

Añade soporte a la validacion de registro de usuarios de joomla, con ajax, valida el correo electronico y la contraseña (por lo menos de 4 caracteres), en el registro por defecto de Joomla el usuario es alertado, luego del registro de los errores, al instalar este plugin se verán los errores al instante.

los errores que valida el plugin asta ahora son:

1.- Que debe ingresar un nombre mayor o igual a 3 caracteres.

2.- En  los campos nombre y apellido no deja ingresar caracteres numéricos.

3.- Que el número de Cédula o DNI sea mayor o igual a 5 caracteres y no acepta caracteres alfabeticos son solo numeros.

4.- Valida que el nombre de usuario sea mayor o igual a 4 caracteres y que no este registrado previamente.

5.- Valida la fuerza de la contraseña.

6.- Valida que al repetir la contraseña sean iguales antes de registrarse.

7.- Valida el correo electrónico y que no este registrado previamente.

8.- Valida que que al repetir al correo electrónico este sea igual al proporcionado anteriormente.

9.- Valida que se ingrese el número de teléfono fijo o móvil, solo números no acepta caracteres alfabeticos.

10.- Valida que la fecha de nacimiento sea mayor a 18 años.

11.- Valida que acepten las condiciones del servicio.


Licencia GPL2
