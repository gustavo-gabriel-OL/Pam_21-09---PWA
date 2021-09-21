$(document).ready(function(){

$('.btn-warning').click(function(original){
  original.preventDefault()
  
  $('.jumbotron').removeClass('bg-lk')
  $('.jumbotron').removeClass('bg-fs')
  $('.jumbotron').removeClass('bg-wanda')
  $('.jumbotron').addClass('bg-ori')
  
  $('.rodp').removeClass('text-black')
  $('.rodp').addClass('text-white')

})

$('.btn-danger').click(function(wanda){
  wanda.preventDefault()
  
  $('.jumbotron').removeClass('bg-lk')
  $('.jumbotron').removeClass('bg-fs')
  $('.jumbotron').removeClass('bg-ori')
  $('.jumbotron').addClass('bg-wanda')
  
  $('.rodp').removeClass('text-black')
  $('.rodp').addClass('text-white')

})

$('.btn-dark').click(function(falcon){
  falcon.preventDefault()

  $('.jumbotron').removeClass('bg-lk')
  $('.jumbotron').removeClass('bg-wanda')
  $('.jumbotron').removeClass('bg-ori')
  $('.jumbotron').addClass('bg-fs')
  
  $('.rodp').removeClass('text-dark')
  $('.rodp').addClass('text-white')

})

$('.btn-success').click(function(loki){
  loki.preventDefault()
  
  $('.jumbotron').removeClass('bg-wanda')
  $('.jumbotron').removeClass('bg-fs')
  $('.jumbotron').removeClass('bg-ori')
  $('.jumbotron').addClass('bg-lk')
  
  $('.rodp').removeClass('text-dark')
  $('.rodp').addClass('text-white')

})

})