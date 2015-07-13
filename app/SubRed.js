function SubRed () { 
  	var subRedes = [
		{ "ip" : "255.255.255.255" , "bin" : "11111111.11111111.11111111.11111111" , "sub_red" : 32,  "host_utiles": "-" },
		{ "ip" : "255.255.255.254" , "bin" : "11111111.11111111.11111111.11111110" , "sub_red" : 31,  "host_utiles" : "-"},
		{ "ip" : "255.255.255.252" , "bin" : "11111111.11111111.11111111.11111100" , "sub_red" : 30, "host_utiles" : "2" },
		{ "ip" : "255.255.255.248" , "bin" : "11111111.11111111.11111111.11111000" , "sub_red" : 29, "host_utiles" : "6" },
		{ "ip" : "255.255.255.240" , "bin" : "11111111.11111111.11111111.11110000" , "sub_red" : 28, "host_utiles" : "14" },
		{ "ip" : "255.255.255.224" , "bin" : "11111111.11111111.11111111.11100000" , "sub_red" : 27, "host_utiles" : "30" },
		{ "ip" : "255.255.255.192" , "bin" : "11111111.11111111.11111111.11000000" , "sub_red" : 26, "host_utiles" : "62" },
		{ "ip" : "255.255.255.128" , "bin" : "11111111.11111111.11111111.10000000" , "sub_red" : 25, "host_utiles" : "126" },
		{ "ip" : "255.255.255.0" , "bin" : "11111111.11111111.11111111.00000000" , "sub_red" : 24, "host_utiles" : "254" },
		{ "ip" : "255.255.254.0" , "bin" : "11111111.11111111.11111110.00000000" , "sub_red" : 23, "host_utiles" : "510" },
		{ "ip" : "255.255.252.0" , "bin" : "11111111.11111111.11111100.00000000" , "sub_red" : 22, "host_utiles" : "1022" },
		{ "ip" : "255.255.248.0" , "bin" : "11111111.11111111.11111000.00000000" , "sub_red" : 21, "host_utiles" : "2046" },
		{ "ip" : "255.255.240.0" , "bin" : "11111111.11111111.11110000.00000000" , "sub_red" : 20, "host_utiles" : "4094" },
		{ "ip" : "255.255.224.0" , "bin" : "11111111.11111111.11100000.00000000" , "sub_red" : 19, "host_utiles" : "8190" },
		{ "ip" : "255.255.192.0" , "bin" : "11111111.11111111.11000000.00000000" , "sub_red" : 18, "host_utiles" : "16382" },
		{ "ip" : "255.255.128.0" , "bin" : "11111111.11111111.10000000.00000000" , "sub_red" : 17, "host_utiles" : "32766" },
		{ "ip" : "255.255.0.0" , "bin" : "11111111.11111111.00000000.00000000" , "sub_red" : 16, "host_utiles" : "65534" },
		{ "ip" : "255.254.0.0" , "bin" : "11111111.11111110.00000000.00000000" , "sub_red" : 15, "host_utiles" : "131070" },
		{ "ip" : "255.252.0.0" , "bin" : "11111111.11111100.00000000.00000000" , "sub_red" : 14, "host_utiles" : "262142" },
		{ "ip" : "255.248.0.0" , "bin" : "11111111.11111000.00000000.00000000" , "sub_red" : 13, "host_utiles" : "524286" },
		{ "ip" : "255.240.0.0" , "bin" : "11111111.11110000.00000000.00000000" , "sub_red" : 12, "host_utiles" : "1048574" },
		{ "ip" : "255.224.0.0" , "bin" : "11111111.11100000.00000000.00000000" , "sub_red" : 11, "host_utiles" : "2097150" },
		{ "ip" : "255.192.0.0" , "bin" : "11111111.11000000.00000000.00000000" , "sub_red" : 10, "host_utiles" : "4194302" },
		{ "ip" : "255.128.0.0" , "bin" : "11111111.10000000.00000000.00000000" , "sub_red" : 9, "host_utiles" : "8388606" },
		{ "ip" : "255.0.0.0" , "bin" : "11111111.00000000.00000000.00000000" , "sub_red" : 8, "host_utiles" : "16777214" },
		{ "ip" : "254.0.0.0" , "bin" : "11111110.00000000.00000000.00000000" , "sub_red" : 7, "host_utiles" : "33554430" },
		{ "ip" : "252.0.0.0" , "bin" : "11111100.00000000.00000000.00000000" , "sub_red" : 6, "host_utiles" : "67108862" },
		{ "ip" : "248.0.0.0" , "bin" : "11111000.00000000.00000000.00000000" , "sub_red" : 5, "host_utiles" : "134217726" },
		{ "ip" : "240.0.0.0" , "bin" : "11110000.00000000.00000000.00000000" , "sub_red" : 4, "host_utiles" : "268435454" },
		{ "ip" : "224.0.0.0" , "bin" : "11100000.00000000.00000000.00000000" , "sub_red" : 3, "host_utiles" : "536870910" },
		{ "ip" : "192.0.0.0" , "bin" : "11000000.00000000.00000000.00000000" , "sub_red" : 2, "host_utiles" : "1073741822" },
		{ "ip" : "128.0.0.0" , "bin" : "10000000.00000000.00000000.00000000" , "sub_red" : 1, "host_utiles" : "2147483646" },
		{ "ip" : "0.0.0.0" , "bin" : "00000000.00000000.00000000.00000000" , "sub_red" : 0, "host_utiles" : "4294967294" }
	];

	function getRedBinFormat(ip_digits, sub_red){
		var redBin = "";
		var index = 1;
		for(var digit of ip_digits){
			redBin += Util().deciToBin(digit);
			if (sub_red <= index ) { break; };
			redBin += ".";
			index += 8;
		}
		return redBin;
	}

	return {

		findSR: function(sub_red){
			var red;
			for(var index in subRedes){
				var red_index = subRedes[index];
				if ( red_index.sub_red == sub_red){
					red = red_index;
					break;
				}
			}
			return red;
		},

		ipToBin: function(ip_digits, sub_red) {
			var redBin = getRedBinFormat(ip_digits, sub_red);
			return Util().ipBinFormat(redBin, sub_red);
		},

		getDireccionRed: function(ip_digits, sub_red){
			var redBin = getRedBinFormat(ip_digits, sub_red);
			var fisrtPart = redBin.substring(0,sub_red + sub_red/8);
			var secondPart = redBin.substring(sub_red + sub_red/8, 33 + sub_red/8 ).replace(/1/g,"0");
			var direccionRedBin = fisrtPart + secondPart;
			return{
				"direccion_red" : Util().binFormatToIp(direccionRedBin),
				"direccion_red_bin": Util().ipBinFormat(direccionRedBin, sub_red)
			}
		},

		getDireccionBroadCast: function(ip_digits, sub_red){
			var redBin = getRedBinFormat(ip_digits, sub_red);
			var fisrtPart = redBin.substring(0,sub_red + sub_red/8);
			var secondPart = redBin.substring(sub_red + sub_red/8, 33 + sub_red/8 ).replace(/0/g,"1");
			var direccionRedBin = fisrtPart + secondPart;
			return{
				"direccion_broad_cast" : Util().binFormatToIp(direccionRedBin),
				"direccion_broad_cast_bin": Util().ipBinFormat(direccionRedBin, sub_red)
			}
		},

		getFirstDirecction: function(direcction_red){
			var digits = direcction_red.split(".");
			digits[digits.length - 1] = 1;
			return digits.join(".");
		},

		getLastDirecction: function(direcction_broad_cast){
			var digits = direcction_broad_cast.split(".");
			digits[digits.length - 1] = 254;
			return digits.join("."); 
		},

		getHost: function(sub_red){
			if (parseInt(sub_red) == 32 || parseInt(sub_red) == 31)  {
				return{
					"host_totales" : "-",
					"host_utiles" : "-"
				}
			}else{
				var host_utiles = this.findSR(sub_red).host_utiles;
				return{
					"host_totales" : parseInt(host_utiles) + 2,
					"host_utiles" : host_utiles
				}
			}
			
		}
	};
};