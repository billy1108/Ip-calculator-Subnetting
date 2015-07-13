function Util(){
	return {
		isNum: function(args){
			args = args.toString();
			if (args.length == 0)
				return false;
			for (var i = 0;i<args.length;i++){
				if (args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9"){
					return false;
				}
			}
			return true;
		},

		binToDeci: function(bin){
			return parseInt(bin ,2);
		},

		deciToBin: function(arg){
			res1 = 999;
			args = arg;
			while(args>1){
				arg1 = parseInt(args/2);
				arg2 = args%2;
				args = arg1;
				if(res1 == 999){
					res1 = arg2.toString();
				}else{
					res1 = arg2.toString()+res1.toString();
				}
			}
			if(args == 1 && res1 != 999){
				res1 = args.toString()+res1.toString();
			}else if(args == 0 && res1 == 999){
				res1 = 0;
			}else if(res1 == 999){
				res1 = 1;
			}
			var ll = res1.length;
			while(ll%4 != 0){
				res1 = "0"+res1;
				ll = res1.length;
			}

			if (arg < 16) {
				return "0000" + res1;
			};

			return res1;
		},

		binFormatToIp: function(binFormat){
			var digits = binFormat.split(".");
			var ip = "";
			for(var digit of digits){
				ip += this.binToDeci(digit) + '.';
			}
			return ip.substring(0, ip.length-1);
		},

		ipBinFormat: function(ipBin, colorNumber){
			stringRedColor = ipBin.substring(0,colorNumber + colorNumber/8);
			stringNormalColor = ipBin.substring(colorNumber + colorNumber/8, 33 + colorNumber/8 );
			return "<div class='red-color'>" + stringRedColor + "</div>" + "<div class='white-color'>" + stringNormalColor + "</div>";  
		}
	}
};
