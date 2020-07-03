$(document).ready(function(){
	const items = document.querySelectorAll(".accordion a");

	function toggleAccordion(){
	  this.classList.toggle('actives');
	  this.nextElementSibling.classList.toggle('actives');
	}

	items.forEach(item => item.addEventListener('click', toggleAccordion));


// Back To Top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
// End Back To Top

$('.click').on('click',function(){
	$('div').removeClass('active-box');
	$(this).addClass('active-box');
	Swal.mixin({
	  confirmButtonText: 'Next &rarr;',
	  showCancelButton: true,
	  progressSteps: ['1', '2', '3'],
	  inputAttributes: {
	    autocapitalize: 'off',
	    required: 'on'
	  },
	  customClass: {
	  	input: 'form-control'
	  }
	}).queue([
	  {
	    title: 'Nama Anda',
	    input: 'text',
	  },
	  {
	    title: 'Nomer Rekening',
	    input: 'text',
	  },
	  {
	    title: 'CTW',
	    input: 'number',
	  },
	]).then((result) => {
	  if (result.value) {
		Swal.fire({
		    title: 'Checking Bank',
		    text: 'Tunggu Sebentar Kami Sedang Mengecek Bank Anda...',
		    allowEscapeKey: false,
		    allowOutsideClick: false,
		    timer: 5000,
		    onOpen: () => {
		      Swal.showLoading();
		    }
	  	}).then((result) => {
	  		Swal.fire('success','Bank Berhasil Ditemukan Dan Bisa Digunakan','success')
	  	})

	  }

	})
})

$('.check2').on('click',function (){
	$('div').removeClass('active-box');
	$(this).addClass('active-box');
	Swal.fire('Success','Anda Berhasil Pilih Yang Anda Pilih','success')
})

$('.pending-item').on('click', function() {
	Swal.fire({
		title: 'Apakah Kamu Yakin Terima Laundry?',
		// text: "You won't be able to revert this!",
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Ya, Terima Itu!'
	}).then((result) => {
		if (result.value) {
			Swal.fire(
			'Laundry Diterima!',
			'Tunggu Kurir kami.',
			'success'
			)
		}
	})
})

$('#myForm').submit(function(e) {
	Swal.fire({
	title: 'Checking',
	text: 'Tunggu Sebentar...',
	allowEscapeKey: false,
	allowOutsideClick: false,
	timer: 4000,
	onOpen: () => {
	  Swal.showLoading();
	}
	}).then((result) => {
	  Swal.fire('success','Bank Berhasil Ditemukan Dan Bisa Digunakan','success')
	  setTimeout(() => {
		window.location.replace('profil.html#tab3')
	  }, 1200);
	})
})

})

// Counter Up

var a = 0;
$(window).scroll(function() {

var oTop = $('#counter').offset().top - window.innerHeight;
if (a == 0 && $(window).scrollTop() > oTop) {
	$('.counter-value').each(function() {
	var $this = $(this),
		countTo = $this.attr('data-count');
	$({
		countNum: $this.text()
	}).animate({
		countNum: countTo
		},

		{

		duration: 5000,
		easing: 'swing',
		step: function() {
			$this.text(Math.floor(this.countNum));
		},
		complete: function() {
			$this.text(this.countNum);
			//alert('finished');
		}

		});
	});
	a = 1;
}

});
window.onload = function(){
	var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
	$('.cdp_i').on('click', function(){
	  var go = $(this).attr('href').replace('#!', '');
	  if (go === '+1') {
		paginationPage++;
	  } else if (go === '-1') {
		paginationPage--;
	  }else{
		paginationPage = parseInt(go, 10);
	  }
	  $('.cdp').attr('actpage', paginationPage);
	});
  };