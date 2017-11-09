// JavaScript Document
$(function() {
	$('.error').hide();
	$("#enviar").click(function() {
		$('.error').hide();
		
		//hago las distintas comprobaciones para nombre y apellido
	   var firstNameLast = $("#nombreApellido");
		if (firstNameLast.val() == "") {
			$('#nombreApellido_error').html("Nombre y Apellido es un campo obligatorio");
			$("#nombreApellido_error").fadeIn('fast');
			$("#nombreApellido").focus();
			return false;
		} else if (!firstNameLast.val().match(/^[a-zA-Z Áa Éé Íí Óó Úú Üü]+$/))
		{
			$('#nombreApellido_error').html("El Nombre o Apellido no puede contener numeros");
			$("#nombreApellido_error").fadeIn('fast');
			$("#nombreApellido").focus();
			return false;
		} else if (firstNameLast.val().length < 3){
			$('#nombreApellido_error').html("Formato de Nombre o Apellido muy corto");
			$("#nombreApellido_error").fadeIn('fast');
			$("#nombreApellido").focus();
			return false;
		}
		
		//asigno la variable nombreApellido
		var nombreApellido = $("#nombreApellido").val();

		//asigno la variable localidad
		var localidad = $("#localidad").val();
				
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

	   //hago las comprobaciones para que elijan una hora de contacto
	   var hora1 = $("#horaDesde").val ();
	   var hora2 = $("#horaHasta").val ();
	   
	   //alert (hora1 + " a " + hora2);
	   if (hora1 == "") {
			$('#horaDesde_error').html("Debes elegir desde que hora te podemos contactar");
			$("#horaDesde_error").fadeIn('fast');
			$("#horaDesde").focus();
			return false;
		} else if (hora1 < "09:00") {
	   		$('#horaDesde_error').html("Debes elegir un horario superior a las 09:00 de la mañana");
			$("#horaDesde_error").fadeIn('fast');
			$("#horaDesde").focus();
			return false;
	   } else if (hora1 > "17:40") {
	   		$('#horaDesde_error').html("El horario no debe superar las 17:40, porque trabajamos hasta las 18");
			$("#horaDesde_error").fadeIn('fast');
			$("#horaDesde").focus();
			return false;
	   } else if (hora2 == "") {
			$('#horaDesde_error').html("Debes elegir hasta que hora te podemos contactar");
			$("#horaDesde_error").fadeIn('fast');
			$("#horaHasta").focus();
			return false;
		} else if (hora1 == hora2) {
			$('#horaDesde_error').html("Con el horario que elegiste no nos das margen de contacto");
			$("#horaDesde_error").fadeIn('fast');
			$("#horaHasta").focus();
			return false;
		} else if (hora2 < hora1) {
	   		$('#horaDesde_error').html("Debes elegir un horario superior a las " + hora1);
			$("#horaDesde_error").fadeIn('fast');
			$("#horaHasta").focus();
			return false;
	   } else if (hora2 < "09:06") {
	   		$('#horaDesde_error').html("Debes elegir un horario superior a las 09:05 de la mañana");
			$("#horaDesde_error").fadeIn('fast');
			$("#horaHasta").focus();
			return false;
	   } else if (hora2 > "18:00") {
	   		$('#horaDesde_error').html("Debes elegir un horario que no supere las 18:00, porque trabajamos sólo hasta las 18");
			$("#horaDesde_error").fadeIn('fast');
			$("#horaHasta").focus();
			return false;
		};

		//asigno las variables para la hora de contacto
		var horaDesde = $("#horaDesde").val ();
		var horaHasta = $("#horaHasta").val ();

		//hago las distintas comprobaciones para mensaje
		var message = $("#mensaje");
		if (message.val() == "") {
			$('#mensaje_error').html("El Mensaje es un campo obligatorio");
			$("#mensaje_error").fadeIn('fast');
			$("#mensaje").focus();
			return false;
		} else if (message.val().length < 4){
			$('#mensaje_error').html("Tu Mensaje debe contener mas texto");
			$("#mensaje_error").fadeIn('fast');
			$("#mensaje").focus();
			return false;
		}
		
		//asigno la variable mensaje
		var mensaje = $("#mensaje").val();
		
		
		//se crean las variables con los datos a enviar al mail, y se limpian los campos del formulario
		var dataString = '&nombreApellido=' + nombreApellido +'&localidad=' + localidad + '&email=' + email 
		+ '&telefono=' + telefono + '&horaDesde=' + horaDesde + '&horaHasta=' + horaHasta + '&mensaje=' + mensaje;
		$.ajax({
			
			success: function() {
				$('#contactResponse').html("Gracias, voy a tratar de responderte a la brevedad.");
				$("#nombreApellido").val('');
				$("#localidad").val('');
				$("#email").val('');
				$("#telefono").val('');
				$("#mensaje").val('');
				$('#contactResponse').delay(4500).fadeOut('fast');
			},

			error: function(){
				$('#contactResponse').html("Error, intenta de nuevo mas tarde");
				$("#nombreApellido").val('');
				$("#localidad").val('');
				$("#email").val('');
				$("#telefono").val('');
				$("#mensaje").val('');
				$('#contactResponse').delay(4500).fadeOut('fast');
			}

		});
		return false;		
	});
});
