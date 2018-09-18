(function () {
	$.datepicker.regional['zh-cn'] = {
		dateFormat: 'yy-mm-dd',//日期格式  
		yearSuffix: '年', //年的后缀  
		showMonthAfterYear:true,//是否把月放在年的后面 
		monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],  
		dayNamesMin: ['周日','周一','周二','周三','周四','周五','周六']
	}

	$.datepicker.regional['zh-zh'] = {
		dateFormat: 'yy-mm-dd',//日期格式  
		yearSuffix: '年', //年的后缀  
		showMonthAfterYear:true,//是否把月放在年的后面 
		monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],   
		dayNamesMin: ['週日','週一','週二','週三','週四','週五','週六']
	}

	$.datepicker.regional['en-us'] = {
		dateFormat: 'mm-dd-yy',  
		showMonthAfterYear:false, 
		monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],   
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa']
	}

	$.datepicker.regional['de-de'] = {
		dateFormat: 'dd-mm-yy',  
		showMonthAfterYear:false, 
		monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','Nobember','Dezember'],   
		dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa']
	}

	$.datepicker.regional['fr-fr'] = {
		dateFormat: 'dd-mm-yy',//日期格式  
		showMonthAfterYear:false,//是否把月放在年的后面 
		monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],   
		dayNamesMin: ['Di.','Lu.','Ma.','Me.','Je.','Ve.','Sa.']
	}

	$.datepicker.regional['es-es'] = {
		dateFormat: 'dd-mm-yy',  
		showMonthAfterYear:false, 
		monthNames: ['enero','febrero','marzo','abril','Mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],   
		dayNamesMin: ['do.','lu.','ma.','mi.','ju.','vi.','sá.']
	}

	$.datepicker.regional['pt-pt'] = {
		dateFormat: 'dd-mm-yy',  
		showMonthAfterYear:false, 
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],   
		dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
	}

	$.datepicker.regional['ru-ru'] = {
		dateFormat: 'dd-mm-yy',  
		showMonthAfterYear:false, 
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],   
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
	}

	$.datepicker.regional['tr-tr'] = {
		dateFormat: 'dd-mm-yy',  
		showMonthAfterYear:false, 
		monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],   
		dayNamesMin: ['Pzr','Pzt','Salı','Çarş','Perş','Cuma','Cmt']
	}

	$.datepicker.regional['ar-ar'] = {
		dateFormat: 'dd-mm-yy',  
		showMonthAfterYear:false, 
		monthNames: ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','اكتوبر','نوفمبر','ديسمبر'],   
		dayNamesMin: ['أحد','إثن','ثلاث','أرب','خمس','جمع','سبت']
	}

	$.datepicker.regional['id-id'] = {
		dateFormat: 'dd-mm-yy',  
		showMonthAfterYear:false, 
		monthNames: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],   
		dayNamesMin: ['Mg','Sn','Sl','Rb','Km','Jm','Sb']
	}

	$.datepicker.regional['it-it'] = {
		dateFormat: 'mm-dd-yy',  
		showMonthAfterYear:false, 
		monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],   
		dayNamesMin: ['Do','Lu','Ma','Me','Gi','Ve','Sa']
	}

	$.datepicker.regional['pl-pl'] = {
		dateFormat: 'dd-mm-yy',  
		showMonthAfterYear:false, 
		monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],   
		dayNamesMin: ['Niedz','Pon','Wt','Śr','Czw','Pt','Sob']
	}

	$.datepicker.regional['th-th'] = {
		dateFormat: 'mm-dd-yy', 
		showMonthAfterYear:false, 
		monthNames: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],   
		dayNamesMin: ['อา','จ','อ','พ','พฤ','ศ','ส']
	}

	$.datepicker.regional['vi-vn'] = {
		dateFormat: 'mm-dd-yy', 
		showMonthAfterYear:false, 
		monthNames: ['Tháng giêng','Tháng hai','Tháng ba','Tháng tư','Tháng năm','Tháng sáu','Tháng bảy','Tháng tám','Tháng chín','Tháng mười','Tháng mười một','Tháng mười hai'],   
		dayNamesMin: ['CN','T2','T3','T4','T5','T6','T7']
	}

	$.datepicker.setDateToDom = function (o) {
		o.dateLang = o.dateLang ? o.dateLang : 'en-us'
		var now = new Date()
		var startTime = o.startValue ? o.startValue : new Date().getTime()
		var endTime = o.endValue ? o.endValue : new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime()

		$(o.startTimes).val(timestampToDate(o.dateLang, startTime));
		$(o.endTimes).val(timestampToDate(o.dateLang, endTime));
	}

	function timestampToDate (lang, timestamp) {
		var nowdate = new Date(timestamp),
		yy = nowdate.getFullYear(),
		mm = nowdate.getMonth()+1,
		dd = nowdate.getDate();
		mm = mm < 10 ? '0' + mm : mm
		dd = dd < 10 ? '0' + dd : dd

		return dateFormat(lang, yy, mm, dd)
	}

	function dateFormat (lang, yy, mm, dd) {  
		switch(lang){
				case 'zh-zh':
						format = yy+'-'+mm+'-'+dd;
					break;
				case 'zh-cn':
						format = yy+'-'+mm+'-'+dd;
						break;
				case 'en-us':
						format = mm+'-'+dd+'-'+yy;
						break;
				case 'it-it':
						format = mm+'-'+dd+'-'+yy;
						break;
				case 'th-th':
						format = mm+'-'+dd+'-'+yy;
						break;
				case 'vi-vn':
						format = mm+'.'+dd+'.'+yy;
						break;
				default: 
						format = dd+'-'+mm+'-'+yy;
						break;
		}
		return format
	}
}())