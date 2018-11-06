$(document).ready(function() {


	$('.dealers-slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		nextArrow: '<div class="arrow arrow-next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
		prevArrow: '<div class="arrow arrow-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});

	
	$('.exp-slider').slick({
		fade: true,
		nextArrow: '<div class="arrow arrow-next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
		prevArrow: '<div class="arrow arrow-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
		dots: true,
		dotsClass: 'dots',
		asNavFor: '.slider-nav__list, .problem-list',
		responsive: [
			{
				breakpoint: 320,
				settings: {
					arrows: true,
					slidesToShow: 1
				}
			}
		]
	});
	$('.slider-nav__list').slick({
		slidesToShow: 4,
		vertical: true,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.exp-slider, .problem-list'
	});
	$('.problem-list').slick({
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.slider-nav__list, .exp-slider'
	});


	$('.dealership-clients__slider').slick({
		responsive: [
			{
				breakpoint: 320,
				settings: {
					arrows: true,
					nextArrow: '<div class="arrow arrow-next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
					prevArrow: '<div class="arrow arrow-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
					slidesToShow: 1
				}
			}
		]
	});
	

	/* модальные окна */
	$('.best-diller').magnificPopup();
	$('.free-consultation__link').magnificPopup();
	$('.popup-benefit__link').magnificPopup();
	$('.goods-item__link').magnificPopup();
	$('.popup-tender__link').magnificPopup();
	$('.popup-equipment__link').magnificPopup();
	$('.popup-get-catalog__link').magnificPopup({
		callbacks: {
			open: function() {
				$('.get-catalog__slider-list').slick({
					arrows: true,
					nextArrow: '<div class="arrow arrow-next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
					prevArrow: '<div class="arrow arrow-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true
				});
			}
		}
	});


	/* модальные окна */
	
}); /* end jquery */


function CatalogChange1(){
	document.querySelector('.catalog-change').innerHTML = "двухстоечных подъемников";
}
function CatalogChange2(){
	document.querySelector('.catalog-change').innerHTML = "чутырехстоечных подъемников";
}
function CatalogChange3(){
  document.querySelector('.catalog-change').innerHTML = "ножнечных подъемников";
}
function CatalogChange4(){
  document.querySelector('.catalog-change').innerHTML = "пневматических подъемников";
}

function benefitChange1(){
	document.querySelector('.benefitTitleChange').innerHTML = "лизинг";
	document.querySelector('.benefitChangeBtn').innerHTML = "лизинга";
}
function benefitChange2(){
	document.querySelector('.benefitTitleChange').innerHTML = "кредит";
	document.querySelector('.benefitChangeBtn').innerHTML = "кредита";
}
function goodsItemChange1(){
  document.querySelector('.goods-popup-title__change').innerHTML = "подходящее шиномонтажное оборудование";
}
function goodsItemChange2(){
  document.querySelector('.goods-popup-title__change').innerHTML = "подходящее гидравлическое оборудование";
}
function goodsItemChange3(){
  document.querySelector('.goods-popup-title__change').innerHTML = "подходящее гаражное оборудование";
}
function goodsItemChange4(){
  document.querySelector('.goods-popup-title__change').innerHTML = "подходящее диагностическое	оборудование";
}
function goodsItemChange5(){
  document.querySelector('.goods-popup-title__change').innerHTML = "подходящее оборудование для кузовного ремонта";
}
function goodsItemChange6(){
  document.querySelector('.goods-popup-title__change').innerHTML = "инструмент	и мебель";
}
function goodsItemChange7(){
  document.querySelector('.goods-popup-title__change').innerHTML = "подходящее	окрасочное оборудование";
}
function goodsItemChange8(){
  document.querySelector('.goods-popup-title__change').innerHTML = "стенды “Развал-схождение”";
}
function goodsItemChange9(){
  document.querySelector('.goods-popup-title__change').innerHTML = "компрессоры";
}
function goodsItemChange10(){
  document.querySelector('.goods-popup-title__change').innerHTML = "подходящее	грузовое оборудование";
}
function goodsItemChange11(){
  document.querySelector('.goods-popup-title__change').innerHTML = "подходящее	сварочное	оборудование";
}
function goodsItemChange12(){
  document.querySelector('.goods-popup-title__change').innerHTML = "подходящее	моечное	оборудование";
}
function goodsItemChange13(){
  document.querySelector('.goods-popup-title__change').innerHTML = "подходящие	электростанции";
}
