// JavaScript Document

//funcion para contar caracteres y mostrarlo en el textarea
// $(function cuenta(){
// 			var textoArea = $("#cartaPresentacion").val();
// 			var numeroDeCaracteres = textoArea.length;
   
    	
// 		document.getElementById("caracteres").value = "  " + numeroDeCaracteres;
	
//   });
$(function() {
	$('.error').hide();
	$("#enviar").click(function() {
		$('.error').hide();

		//voy a contar los caracteres
	// 	var textoArea = $("#cartaPresentacion").val();
	// 	var numeroDeCaracteres = textoArea.length;

		//voy crear variables para contar las palabras quitando los blancos
	// 	var numeroPalabras
	// 	var textoAreaDividido
	// 	var inicioBlanco = /^ /;
	// 	var finBlanco = / $/;
	// 	var variosBlancos = /[ ]+/g;
	// 	if (numeroDeCaracteres == 0) {
	// 		numeroPalabras = 0;
	// 	} else {
	// 	textoArea = textoArea.replace(inicioBlanco,"");
	// 	textoArea = textoArea.replace(finBlanco,"");
	// 	textoArea = textoArea.replace(variosBlancos," ");
	// 	textoAreaDividido = textoArea.split(" ");
	// 	numeroPalabras = textoAreaDividido.length;
	// };
   		//muestro la cantidad de caracteres y palabras en el textarea
	// 	document.getElementById("caracteres").value = "  " + numeroDeCaracteres;
	// 	document.getElementById("palabras").value = "   " + numeroPalabras;
				
		//hago las distintas comprobaciones para nombre y apellido
	   var firstName = $("#nombre");
	   var lastName = $("#apellido");
		if (firstName.val() == "") {
			$('#nombre_error').html("Nombre es un campo obligatorio");
			$("#nombre_error").fadeIn('fast');
			$("#nombre").focus();
			return false;
		} else if (!firstName.val().match(/^[a-zA-Z Áa Éé Íí Óó Úú Üü]+$/))
		{
			$('#nombre_error').html("El Nombre no puede contener numeros");
			$("#nombre_error").fadeIn('fast');
			$("#nombre").focus();
			return false;
		} else if (firstName.val().length < 3){
			$('#nombre_error').html("Formato de Nombre muy corto");
			$("#nombre_error").fadeIn('fast');
			$("#nombre").focus();
			return false;
		}
		if (lastName.val() == "") {
			$('#nombre_error').html("Apellido es un campo obligatorio");
			$("#nombre_error").fadeIn('fast');
			$("#apellido").focus();
			return false;
		} else if (!lastName.val().match(/^[a-zA-Z Áa Éé Íí Óó Úú Üü]+$/))
		{
			$('#nombre_error').html("El Apellido no puede contener numeros");
			$("#nombre_error").fadeIn('fast');
			$("#apellido").focus();
			return false;
		} else if (lastName.val().length < 2){
			$('#nombre_error').html("Formato de Apellido muy corto");
			$("#nombre_error").fadeIn('fast');
			$("#apellido").focus();
			return false;
		}
		
		//asigno la variable nombre y apellido
		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();

		//asigno la variable dia
		var dia = $("#dia").val();
		var diaPrueba = $("#dia").val();

		//asigno la variable mes
		var mes = $("#mes").val();
		var mesPrueba = $("#mes").val();

		//asigno la variable año
		var anio = $("#anio").val();
		var anioPrueba = $("#anio").val();

		//tomo la fecha actual y la separo en variables
		var f = new Date ();
		var diaActual = f.getDate();
		var mesActual = (f.getMonth() + 1);
		var anioActual = f.getFullYear();

		//comparo que el año en curso con el año ingresado den para que sea mayor de 18 años
		if ((anioActual - anioPrueba) < 18){
			$("#fecha_error").html("El año no corresponde");
			$("#fecha_error").fadeIn('fast');
			$("#anio").focus();
			return false;
		}

		//comparo el mes en curso con el mes ingresado para que sea mayor de 18 años
		else if (mesActual < mesPrueba){
			$("#fecha_error").html("El mes no corresponde");
			$("#fecha_error").fadeIn('fast');
			$("#mes").focus();
			return false;
		}

		//comparo el dia en curso con el dia ingresado para que sea mayor de 18 años
		else if (diaActual < diaPrueba){
			$("#fecha_error").html("El dia no corresponde");
			$("#fecha_error").fadeIn('fast');
			$("#dia").focus();
			return false;
		}

		//asigno la variable calle
		var calle = $("#calle").val();

		//asigno la variable número
		var numeroCalle = $("#numeroCalle").val();

		//asigno la variable piso
		var piso = $("#piso").val();

		//asigno la variable departamento
		var departamento = $("#departamento").val();

		//asigno la variable localidad
		var localidad = $("#localidad").val();

		//asigno la variable provincia
		var provincia = $("#provincia").val();
				
		//hago las distintas comprobaciones para el mail y asigno la variable email
		var email = $("#email").val();
		if (email == "") {
			$('#email_error').html("Email es un campo obligatorio");
			$("#email_error").fadeIn('fast');
			$("#email").focus();
			return false;
		}

		var Xemail = $("#email").val();
		var atpos = Xemail.indexOf("@");
		var dotpos = Xemail.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=Xemail.length) {
			$('#email_error').html("El Email no es valido");
			$("#email_error").fadeIn('fast');
			$("#email").focus();
			return false;
	   }
	   
	   //asigno la variable telefono
	   var telefono = $("#telefono").val();
	   
	   //hago una funcion para recorrer el radio button y tomar su valor
		function getRadioButtonSelectedValue(ctrl)
{
    for(i=0;i<ctrl.length;i++)
        if(ctrl[i].checked) return ctrl[i].value;
}
		//asigno el valor tomado del radio button a la variable sexo
		var sexo = getRadioButtonSelectedValue(document.cv.sexo);

		//asigno la variable para el estudio cursado
		var estudio = $("#estudio").val();

		//asigno el valor tomado del radio button a la variable estudioCursado
		var estudioCursado = getRadioButtonSelectedValue(document.cv.estudioCursado);
		
		//asigno el valor tomado del checkbox a la variable puestoPretendido
		var puestoPretendido = "";
		$(document.cv.puestoPretendido).ready(function() {
       
        $("input:checkbox:checked").each(function() {
             if (this.checked) {
             	puestoPretendido += $(this).val() + ", ";
             };
        });
       
      });

		//compruebo que haya seleccionado por lo menos un checkbox
		if (puestoPretendido == "") {
				$('#puesto_error').html("Seleciona por lo menos un puesto");
				$("#puesto_error").fadeIn('fast');
				$("#puestoPretendido").focus();
				return false;
			};
		
		//hago las distintas comprobaciones para experiencia
		var experience = $("#experiencia");
		if (experience.val() == "") {
			$('#experiencia_error').html("Si no tienes experiencia previa, detalla tus aptitudes");
			$("#experiencia_error").fadeIn('fast');
			$("#experiencia").focus();
			return false;
		} else if (experience.val().length < 5){
			$('#experiencia_error').html("Tu Mensaje debe contener mas texto");
			$("#experiencia_error").fadeIn('fast');
			$("#experiencia").focus();
			return false;
		}
		
		//asigno la variable experiencia
		var experiencia = $("#experiencia").val();
		
		//hago las distintas comprobaciones para la carta de presentacion
		var carta = $("#cartaPresentacion");
		if (carta.val() == "") {
			$('#carta_error').html("La carta de presentacion no puede estar vacia");
			$("#carta_error").fadeIn('fast');
			$("#cartaPresentacion").focus();
			return false;
		} else if (carta.val().length < 10){
			$('#carta_error').html("Tu Mensaje debe contener mas texto");
			$("#carta_error").fadeIn('fast');
			$("#cartaPresentacion").focus();
			return false;
		} else if (carta.val().length > 500){
			$('#carta_error').html("Tu Carta de Presentacion no puede superar los 500 caracteres");
			$("#carta_error").fadeIn('fast');
			$("#cartaPresentacion").focus();
			return false;
		}


		
		//asigno la variable cartaPresentacion
		var cartaPresentacion = $("#cartaPresentacion").val();
		
		//se crean las variables con los datos a enviar al mail, y se limpian los campos del formulario
		var dataString = '&nombre=' + nombre + '&apellido=' + apellido 
		+ 'dia=' + dia + '&mes=' + mes + '&anio=' + anio + '&calle=' + calle 
		+ '&numeroCalle=' + numeroCalle + '&piso=' + piso + '&departamento=' + departamento 
		+ '&localidad=' + localidad + '&provincia=' + provincia + '&email=' + email 
		+ '&telefono=' + telefono + '&sexo=' + sexo + '&estudio=' + estudio 
		+ '&estudioCursado=' + estudioCursado + '&puestoPretendido=' + puestoPretendido 
		+ '&experiencia=' + experiencia + '&cartaPresentacion=' + cartaPresentacion;
		$.ajax({
			
			success: function() {
				$('#contactResponse').html("Gracias por completar el Currículum");
				$("#nombre").val('');
				$("#apellido").val('');
				$("#dia").val('');
				$("#mes").val('');
				$("#anio").val('');
				$("#calle").val('');
				$("#numeroCalle").val('');
				$("#piso").val('');
				$("#departamento").val('');
				$("#localidad").val('');
				$("#provincia").val('');
				$("#email").val('');
				$("#telefono").val('');
				$("#sexo").val('');
				$("#estudio").val('');
				$("#estudioCursado").val('');
				$("#experiencia").val('');
				$("#cartaPresentacion").val('');
				$('#contactResponse').delay(4500).fadeOut('fast');
			},

			error: function(){
				$('#contactResponse').html("Error, intenta de nuevo mas tarde");
				$("#nombre").val('');
				$("#apellido").val('');
				$("#dia").val('');
				$("#mes").val('');
				$("#anio").val('');
				$("#calle").val('');
				$("#numeroCalle").val('');
				$("#piso").val('');
				$("#departamento").val('');
				$("#localidad").val('');
				$("#provincia").val('');
				$("#email").val('');
				$("#telefono").val('');
				$("#sexo").val('');
				$("#estudio").val('');
				$("#estudioCursado").val('');
				$("#puestoPretendido").val('');
				$("#experiencia").val('');
				$("#cartaPresentacion").val('');
				$('#contactResponse').delay(4500).fadeOut('fast');
			}

		});
		return false;		
	});
});
