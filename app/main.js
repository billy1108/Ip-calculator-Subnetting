/**
	IP Subnet Calculator
	Billy Caballero
*/

window.addEventListener("load", main);

function main() {
	var inputIp = document.getElementById('ip');
	var inputSubRed = document.getElementById('subred');	
	var buttonCalcular = document.getElementById('calcular');

	var subRedVal;
	var ipDigits;
	var direccionRed;
	var direccionBroadCast;

	buttonCalcular.addEventListener('click', show);

	function show(e) {
		e.preventDefault();
		subRedVal = parseInt(inputSubRed.value.trim());
		ipDigits = inputIp.value.trim().split('.');
		
		showSubRed();
		showIp();
		showDireccionRed();
		showDireccionBroadCast();
		showFirstDireccion();
		showLastDireccion();
		showHost();
	}

	function showSubRed() {
		var vt_subred = document.getElementById("vt-subred");
		var vt_subred_ip = document.getElementById("vt-subred-ip");
		var vt_subred_bin = document.getElementById("vt-subred-bin");
		
		var subred = SubRed().findSR(subRedVal);
		vt_subred.innerHTML = "/" + subred.sub_red;
		vt_subred_ip.innerHTML = subred.ip;
		vt_subred_bin.innerHTML = Util().ipBinFormat(subred.bin, subred.sub_red);;
	}

	function showIp(){
		var vt_ip = document.getElementById("vt-ip");
		var vt_ip_bin = document.getElementById("vt-ip-bin");

		vt_ip.innerHTML = ipDigits.join(".");
		vt_ip_bin.innerHTML = SubRed().ipToBin(ipDigits, subRedVal);
	}

	function showDireccionRed(){
		var vt_red_ip = document.getElementById("vt-red-ip");
		var vt_red_bin = document.getElementById("vt-red-bin");

		var dir_red = SubRed().getDireccionRed(ipDigits, subRedVal);
		direccionRed = dir_red.direccion_red;
		vt_red_ip.innerHTML = dir_red.direccion_red;
		vt_red_bin.innerHTML = dir_red.direccion_red_bin;
	}

	function showDireccionBroadCast(){
		var vt_dir_ip_bc = document.getElementById("vt-dir-ip-bc");
		var vt_dir_bin_bc = document.getElementById("vt-dir-bin-bc");

		var dir_broad_cast = SubRed().getDireccionBroadCast(ipDigits, subRedVal);
		direccionBroadCast = dir_broad_cast.direccion_broad_cast;
		vt_dir_ip_bc.innerHTML = dir_broad_cast.direccion_broad_cast;
		vt_dir_bin_bc.innerHTML = dir_broad_cast.direccion_broad_cast_bin;
	}

	function showFirstDireccion(){
		var vt_dir_ip_1 = document.getElementById("vt-dir-ip-1");
		var vt_dir_bin_1 = document.getElementById("vt-dir-bin-1");

		var firstDirecction = SubRed().getFirstDirecction(direccionRed);
		vt_dir_ip_1.innerHTML = firstDirecction;
		vt_dir_bin_1.innerHTML = SubRed().ipToBin(firstDirecction.split("."), subRedVal)
	}

	function showLastDireccion(){
		var vt_dir_ip_ul = document.getElementById("vt-dir-ip-ul");
		var vt_dir_bin_ul = document.getElementById("vt-dir-bin-ul");

		var lastDirecction = SubRed().getLastDirecction(direccionBroadCast);
		vt_dir_ip_ul.innerHTML = lastDirecction;
		vt_dir_bin_ul.innerHTML = SubRed().ipToBin(lastDirecction.split("."), subRedVal)
	}

	function showHost(){
		var ht_exponente = document.getElementById("ht-exponente");
		var ht_result = document.getElementById("ht-result");
		var hu_exponente = document.getElementById("hu-exponente");
		var hu_result = document.getElementById("hu-result");

		var hostInfo = SubRed().getHost(subRedVal);

		ht_exponente.innerHTML = "2^" + (32 - parseInt(subRedVal));
		ht_result.innerHTML = hostInfo.host_totales + " Host totales";

		hu_exponente.innerHTML = "2^" + (32 - parseInt(subRedVal)) + "2";
		hu_result.innerHTML = hostInfo.host_utiles + " Host Útiles";

	}

};