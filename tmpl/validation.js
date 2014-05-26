(function($) {

    $(document).ready(function() {

        function validate_passowrd_confirm() {

            if ($('#jform_password2').val() === "") {
                $('#jform_password2_errs').remove();
                $('<div id="jform_password2_errs" class="invalid_username"><p>Debe ingresar una contraseña</p></div>').insertAfter('#jform_password2');
                return false;
            }

            else if ($('#jform_password1').val() === $('#jform_password2').val()) {
                $('#jform_password2_errs').remove();
                return true;
            }
            else {
                $('#jform_password2_errs').remove();
                $('<div id="jform_password2_errs" class="invalid_username"><p>Las contraseñas no coinciden</p></div>').insertAfter('#jform_password2');
                return false;
            }

        }

        function validate_email_confirm()
        {
            $('#jform_email2_err').remove();
            $('#jform_email2-lbl, #jform_email2').removeClass('email_confirm');
            if ($('#jform_email1').val() === $('#jform_email2').val()) {
                $('#jform_email2-lbl, #jform_email2').removeClass('email_confirm');
                return true;
            }
            else {
                $('#jform_email2_err').remove();
                $('<div id="jform_email2_err" class="email_confirm"><p>Correo electrónico no coinciden</p></div>').insertAfter('#jform_email2');
                return false;
            }
        }



        function validate_username(value) {
            var return_value = true;
            username = $('#jform_username').val();

            if (username === "") {
                $('#jform_username_err').remove();
                $('#jform_username-lbl, #jform_username').removeClass('valid_username');
                $('#jform_username-lbl, #jform_username').removeClass('invalid_username');
                $('<div id="jform_username_err" class="invalid_username"><p>Debe ingresar un nombre de usuario</p></div>').insertAfter('#jform_username');
                return false;
            }

            else if (username.length < 4) {
                $('#jform_username_err').remove();
                $('<div id="jform_username_err" class="invalid_username"><p>Nombre de usuario debe ser mayor a 4 caracteres</p></div>').insertAfter('#jform_username');
                return false;
            }
            
            else if (username.length > 12) {
                $('#jform_username_err').remove();
                $('<div id="jform_username_err" class="invalid_username"><p>Nombre de usuario no debe ser mayor a 12 caracteres</p></div>').insertAfter('#jform_username');
                return false;
            }
            else {

                $.ajax({
                    type: 'POST',
                    async: false,
                    url: "index.php?plg=registration_validation&task=validate_username",
                    data: {username: value},
                }).done(function(data) {
                    data = $.parseJSON(data);

                    if (data.error === false) {
                        $('#jform_username_err').remove();
                        $('#jform_username-lbl, #jform_username').removeClass('invalid_username');
                        $('<div id="jform_username_err" class="invalid_username"><p>' + data.msg + '</p></div>').insertAfter('#jform_username');
                        return true;
                    }
                    else {
                        $('#jform_username_err').remove();
                        $('#jform_username-lbl, #jform_username').removeClass('valid_username');
                        $('<div id="jform_username_err" class="valid_username"><p>' + data.msg + '</p></div>').insertAfter('#jform_username');
                        return_value = false;
                    }

                });

            }
            return return_value;
        }


        function validate_email(value) {
            var return_value = true;
             email = $('#jform_email1').val();
            var emailReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

            if (email === "") {
                $('#jform_email1_err').remove();
                $('<div id="jform_email1_err" class="invalid_username"><p>Debe ingresar un correo electrónico</p></div>').insertAfter('#jform_email1');
                return false;
            }

            if (email.length < 5) {
                $('#jform_email1_err').remove();
                $('<div id="jform_email1_err" class="invalid_username"><p>Correo electrónico debe ser mayor a 4 caracteres</p></div>').insertAfter('#jform_email1');
                return false;
            }
            if (!emailReg.test(email)) {
                $('#jform_email1_err').remove();
                $('<div id="jform_email1_err" class="invalid_username"><p>Debe ingresar un correo electrónico válido</p></div>').insertAfter('#jform_email1');
                return false;
            }
            else {
                $.ajax({
                    type: 'POST',
                    async: false,
                    url: "index.php?plg=registration_validation&task=validate_email",
                    data: {email: value},
                }).done(function(data) {
                    data = $.parseJSON(data);

                    if (data.error === true) {
                        $('#jform_email1_err').remove();
                        $('#jform_email-lbl, #jform_email1_err').removeClass('valid_username');
                        $('<div id="jform_email1_err" class="valid_username"><p>' + data.msg + '</p></div>').insertAfter('#jform_email1');
                        return_value = false;

                    }
                    else {
                        $('#jform_email1_err').remove();
                        $('#jform_email-lbl, #jform_email1_err').removeClass('invalid_username');
                        $('<div id="jform_email1_err" class="invalid_username"><p>' + data.msg + '</p></div>').insertAfter('#jform_email1');
                        return true;
                    }

                });
                return return_value;
            }
        }


        function validate_cedula(value) {
            var return_value = true;
             cedula = $('#jform_cedula').val();

            if (cedula === "") {
                $('#jform_cedula_err').remove();
                $('<div id="jform_cedula_err" class="invalid_username"><p>Debe ingresar un número de Cédula</p></div>').insertAfter('#jform_cedula');
                return false;
            }
            else if (cedula.length < 5) {
                $('#jform_cedula_err').remove();
                $('<div id="jform_cedula_err" class="invalid_username"><p>Debe ingresar un número de Cédula mayor a 5 dígitos</p></div>').insertAfter('#jform_cedula');
                return false;
            }
            else {
                $.ajax({
                    type: 'POST',
                    async: false,
                    url: "index.php?plg=registration_validation&task=validate_cedula",
                    data: {cedula: value},
                }).done(function(data) {
                    data = $.parseJSON(data);

                    if (data.error === true) {
                        $('#jform_cedula_err').remove();
                        $('#jform_cedula-lbl, #jform_cedula_err').removeClass('valid_username');
                        $('<div id="jform_cedula_err" class="valid_username"><p>' + data.msg + '</p></div>').insertAfter('#jform_cedula');
                        return_value = false;

                    }
                    else {
                        $('#jform_cedula_err').remove();
                        $('#jform_cedula-lbl, #jform_cedula_err').removeClass('invalid_username');
                        $('<div id="jform_cedula_err" class="invalid_username"><p>' + data.msg + '</p></div>').insertAfter('#jform_cedula');
                        return true;
                    }

                });
                return return_value;
            }
        }

        function validate_name() {
            var name = $('#jform_name').val();

            if (name === "") {
                $('#jform_name_err').remove();
                $('<div id="jform_name_err" class="invalid_username"><p>Debe ingresar un nombre</p></div>').insertAfter('#jform_name');
                return false;
            }

            else if (name.length <= 3) {
                $('#jform_name_err').remove();
                $('<div id="jform_name_err" class="invalid_username"><p>Nombre debe ser mayor o igual a 3 caracteres</p></div>').insertAfter('#jform_name');
                return false;
            }

            else {
                $('#jform_name_err').remove();
                return true;
            }
        }

        function validate_apellido() {
            var apellido = $('#jform_apellido').val();

            if (apellido === "") {
                $('#jform_apellido_err').remove();
                $('<div id="jform_apellido_err" class="invalid_username"><p>Debe ingresar un apellido</p></div>').insertAfter('#jform_apellido');
                return false;
            }

            else if (apellido.length <= 2) {
                $('#jform_apellido_err').remove();
                $('<div id="jform_apellido_err" class="invalid_username"><p>Apellido debe ser mayor o igual a 2 caracteres</p></div>').insertAfter('#jform_apellido');
                return false;
            }

            else {
                $('#jform_apellido_err').remove();
                return true;
            }
        }




        function nivel_password() {
            $('#password_requerido,#password_debil,#password_aceptable, #password_seguro,#password_fuerte,#password_minimo').remove();
            var usuario = $('#jform_username').val();
            claveActual = $('#jform_password1').val();
            var fortalezaActual = true;


            if (claveActual === "") {
                $('#password_requerido,#password_debil,#password_aceptable, #password_seguro,#password_fuerte,#password_minimo').remove();
                fortalezaActual = $('<div id="password_requerido" class="invalid_username"><p>Debe ingresar una contraseña</p></div>').insertAfter('#jform_password1');
                return false;
            }

            if (claveActual.length < 0) {
                $('#password_requerido,#password_debil,#password_aceptable, #password_seguro,#password_fuerte,#password_minimo').remove();
                fortalezaActual = $('<div id="password_requerido" class="invalid_username"><p>Debe ingresar una contraseña</p></div>').insertAfter('#jform_password1');
                return false;
            }
            if (claveActual === usuario) {
                $('#password_requerido,#password_debil,#password_aceptable, #password_seguro,#password_fuerte,#password_minimo').remove();
                fortalezaActual = $('<div id="password_requerido" class="password_requerido"><p>La Contraseña no debe contener el mismo nombre de usuario</p></div>').insertAfter('#jform_password2');
                return false;
            }


            else if (claveActual.length < 4) {
                $('#password_requerido,#password_debil,#password_aceptable, #password_seguro,#password_fuerte,#password_minimo').remove();
                fortalezaActual = $('<div id="password_minimo" class="password_requerido"><p>Debe ingresar al menos 4 caracteres</p></div>').insertAfter('#jform_password2');
                return false;
            }
            else if (/^((?=.*[a-zA-Z]).{0,5})$/.test(claveActual) || /^((?=.+\d).{0,5})$/.test(claveActual)) {
                $('#password_requerido,#password_debil,#password_aceptable, #password_seguro,#password_fuerte,#password_minimo').remove();
                fortalezaActual = $('<div id="password_debil" class="password_debil"><p>Contraseña debil</p></div>').insertAfter('#jform_password1');
                return false;
            }
            else if (/^((?=.*\d)(?=.*[a-zA-Z]).{0,7})$/.test(claveActual) || /^((?=.+\d)(?=.+[a-zA-Z]).{0,8})$/.test(claveActual) || /^((?=.+\d).{0,8})$/.test(claveActual) || /^((?=.+[a-zA-Z]).{0,8})$/.test(claveActual)) {
                $('#password_requerido,#password_debil,#password_aceptable, #password_seguro,#password_fuerte,#password_minimo').remove();
                fortalezaActual = $('<div id="password_aceptable" class="password_aceptable"><p>Contraseña Aceptable</p></div>').insertAfter('#jform_password1');
                return true;
            }
            else if (/^((?=.*[\])(?=.\W)(?=.*[a-zA-Z]).{0,8})$/.test(claveActual) || /^((?=.+\d)(?=.+[a-zA-Z]).{0,10})$/.test(claveActual) || /^((?=.+\d).{0,10})$/.test(claveActual)) {
                $('#password_requerido,#password_debil,#password_aceptable, #password_seguro,#password_fuerte,#password_minimo').remove();
                fortalezaActual = $('<div id="password_seguro" class="password_seguro"><p>Contraseña Segura</p></div>').insertAfter('#jform_password1');
                return true;
            }
            else if (/^((?=.*[\])(?=.\W)(?=.*[a-zA-Z]).{0,100})$/.test(claveActual) || /^((?=.+\d)(?=.+[\]).{0,100})$/.test(claveActual) || /^((?=.+\D).{0,100})$/.test(claveActual) || /^((?=.+[a-zA-Z0-9]).{0,100})$/.test(claveActual)) {
                $('#password_requerido,#password_debil,#password_aceptable, #password_seguro,#password_fuerte,#password_minimo').remove();
                fortalezaActual = $('<div id="password_fuerte" class="password_fuerte"><p>Contraseña Fuerte</p></div>').insertAfter('#jform_password1');
                return true;
            }

            else {
                $('#password_requerido,#password_debil,#password_aceptable, #password_seguro,#password_fuerte,#password_minimo').remove();
                fortalezaActual = $('<div id="password_requerido" class="password_requerido"><p>Contraseña muy insegura</p></div>').insertAfter('#jform_password1');
                return false;
            }

            return fortalezaActual;
        }

        function fecha_nacimiento() {
            var fecha_actual = $('#jform_fecnac').val();
            var fecha_nacimiento = true;
            fecha = new Date(fecha_actual);
            hoy = new Date();
            edad = parseInt((hoy - fecha) / 365 / 24 / 60 / 60 / 1000);
            if (fecha_actual === "") {
                $('#jform_fecna_lbl').remove();
                fecha_nacimiento = $('<div id="jform_fecna_lbl" class="requerido"><p>Debe ingresar una fecha de nacimiento</p></div>').insertAfter('#jform_fecnac');
                return false;
            }

            if (edad < 18) {
                $('#jform_fecna_lbl').remove();
                fecha_nacimiento = $('<div id="jform_fecna_lbl" class="requerido"><p>Estimado(a) cliente debe ser mayor de 18 años para participar en nuestra plataforma.</p></div>').insertAfter('#jform_fecnac');
                return false;
            }
            else {
                $('#jform_fecna_lbl').remove();
                $('#jform_fecna_lbl').removeClass('requerido');
                return fecha_nacimiento;
            }
            return fecha_nacimiento;
        }
        
        function terminos(){
          var termino = true;
          $('#jform_terminos_lbl').remove();
          if($("#jform_terminos").is(':checked')){
             $('#jform_terminos_lbl').remove();
                $('#jform_terminos_lbl').remove();
                $('#jform_terminos_lbl').removeClass('requerido');
                return termino;
          }
          else {
               termino = $('<div id="jform_terminos_lbl" class="requerido"><p>Debe aceptar los terminos y condiciones.</p></div>').insertAfter('#terminos2_errs');
                return false;
          }
          return termino;
        }

        $("#jform_password1").keyup(function() {
            nivel_password($(this).val());
        });

        $("#jform_password1").blur(function() {
            nivel_password($(this).val());
        });

        $("#jform_name").keyup(function() {
            validate_name($(this).val());
        });

        $("#jform_apellido").keyup(function() {
            validate_apellido($(this).val());
        });

        $("#jform_name").blur(function() {
            validate_name($(this).val());
        });

        $("#jform_apellido").blur(function() {
            validate_apellido($(this).val());
        });

        $("#jform_cedula").blur(function() {
            validate_cedula($(this).val());
        });

        $("#jform_cedula").keyup(function() {
            validate_cedula($(this).val());
        });

        $('#jform_password1').blur(function() {
            validate_password($(this).val());
        });

        $('#jform_password2').blur(function() {
            validate_passowrd_confirm();
        });

        $('#jform_password2').keyup(function() {
            validate_passowrd_confirm();
        });

        $('#jform_username').blur(function() {
            validate_username($(this).val());
        });

        $('#jform_username').keyup(function() {
            validate_username($(this).val());
        });

        $('#jform_email1').blur(function() {
            validate_email($(this).val());
        });

        $('#jform_email2').keyup(function() {
            validate_email_confirm();
        });

        $('#jform_email2').blur(function() {
            validate_email_confirm();
        });

        $("#jform_fecnac").blur(function() {
            fecha_nacimiento($(this).val());
        });

        $("#jform_fecnacs").hover(function() {
            fecha_nacimiento($(this).val());
        });
       
         $("#jform_terminos").hover(function() {
            terminos($(this).val());
        });


        $('#jform_username').keyup(function() {
            var $th = $(this);
            var texto = $('#jform_username').val();
            var numeros = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
            if (numeros.test(texto)) {
                $th.val($th.val().replace(/[^a-zA-Z]/g, function(str) {
                    return '';
                }));
            }
        });

        $("#jform_username,#jform_password1,#jform_password2,#jform_email1,#jform_email2").keypress(function(e) {
            key = e.keyCode ? e.keyCode : e.which;
            if (key === 17) {
                return false;
            }
            if (key === 32) {
                return false;
            }
        });

        $('#jform_username, #jform_password1, #jform_password2, #jform_cedula,#jform_email1, #jform_email2,#jform_name,#jform_apellido, #jform_telefono').on("cut copy paste", function(e) {
            return false;
        });


        $("#jform_username").keyup(function() {
            if ($(this).val().length > 12) {
                $(this).val($(this).val().substr(0, 12));
            }
        });


        $("#jform_cedula").keyup(function() {
            if ($(this).val().length > 10) {
                $(this).val($(this).val().substr(0, 10));
            }
        });


        $("#jform_username").keyup(function() {
            tecla = (document.all) ? e.keyCode : e.which;
            if (tecla === 8)
                return true;
            if (tecla === 13)
                return true;
            patron = /^\s*[a-zA-Z0-9\s]+\s*$/;
            te = String.fromCharCode(tecla);
            return patron.test(te);
        });



        $("#jform_password2, jform_password1").keyup(function() {
            if ($(this).val().length > 20) {
                $(this).val($(this).val().substr(0, 21));
            }
        });

        $('#jform_username').keypress(function(e) {
            tecla = (document.all) ? e.keyCode : e.which;
            if (tecla === 8)
                return true;
            if (tecla === 13)
                return true;
            patron = /^\s*[a-zA-Z0-9\s]+\s*$/;
            te = String.fromCharCode(tecla);
            return patron.test(te);

        });

        $("#jform_name,#jform_apellido").keypress(function(e) {
            tecla = (document.all) ? e.keyCode : e.which;
            patron = /^[a-zA-ZäáàëéèíìöóòúùñçÁÉÍÓÚÜ\s]*$/;
            te = String.fromCharCode(tecla);
            return patron.test(te);
        });


        $("#jform_cedula, #jform_telefono").keypress(function(e) {
            tecla = (document.all) ? e.keyCode : e.which;
            if (tecla === 8)
                return true;
            if (tecla === 13)
                return true;
            patron = /[0-9]/;
            te = String.fromCharCode(tecla);
            return patron.test(te);
        });
        
        $('<div id="terminos2_errs" ><p>Declaro haber leído y estar de acuerdo con el <a target="_blank" href="https://www.juegaenlinea.com/condiciones-generales.html">reglamento</a> establecido para el uso del sitio así como ser mayor de 18 años.</p></div>').insertAfter('#jform_terminos');   
         

         $('#jform_fecnac').datetimepicker({
            lang: 'es',
            i18n: {
                es: {
                    months: [
                        'Enero', 'Febrero', 'Marzo', 'Abril',
                        'Mayo', 'Junio', 'Julio', 'Agosto',
                        'Septiembre', 'Octubre', 'Nobiembre', 'Diciembre',
                    ],
                    dayOfWeek: [
                        "DO.", "Lu", "Ma", "Mi",
                        "Ju", "Vi", "Sa.",
                    ]
                }
            },
            timepicker: false,
            format: 'Y-m-d',
            maxDate:'1996-12-31'
        });

        $('button.validate').click(function() {
            var return_value = true;

            if (fecha_nacimiento($('#jform_fecnac').val()) === false) {
                return_value = false;
            }
            if (validate_username($('#jform_username').val()) === false) {
                return_value = false;
            }

            if (validate_name($('#jform_name').val()) === false) {
                return_value = false;
            }

            if (validate_apellido($('#jform_apellido').val()) === false) {
                return_value = false;
            }

            if (validate_cedula($('#jform_cedula').val()) === false) {
                return_value = false;
            }

            if (nivel_password($('#jform_password1').val()) === false) {
                return_value = false;
            }

            if (validate_passowrd_confirm($('#jform_password2').val()) === false) {
                return_value = false;
            }


            if (validate_email($('#jform_email2').val()) === false) {
                return_value = false;
            }

            if (validate_email($('#jform_email1').val()) === false) {
                return_value = false;
            }
      
            if (validate_email_confirm() === false) {
                return_value = false;
            }
            
            if (terminos($('input[type="checkbox"]').is('checked' === false))) {
                alert(algo); 
                return_value = false;  
            }
            return return_value;
        });
    });

})(jQuery);
