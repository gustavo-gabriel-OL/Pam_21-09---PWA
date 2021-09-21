// Leitura do documento html
$(document).ready(function(){

  $('a').click(function(e){
    e.preventDefault()

   // Variavel local que recebe o atributo href do link
    let page = $(this).attr('href')

    $('.modal-title').empty()
    $('.modal-body').empty()

    switch(page){

    case 'info': 
      $('.modal-title').append('Informações')
      $('.modal-body').append(` 

      <div class="container"> 
        <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-md-10">
                <h4 class="text-center text-danger " > Olá Visitante</h4>
                <p>
                    Nesse site você poderá encontrar algumas informações sobres as séries recem lançadas da Marvel Studios.
                    <br><br>
                    Então, espero que se divirta!
                </p>
            </div>
      
      `)
      $('#modal-info').modal('show')
    break

    case 'wanda': 
      $('.modal-title').append('WandaVision')
      $('.modal-body').append(` 

      <div class="container"> 
        <div class="row">
            <div class="col-12 col-sm-4 col-md-2">
                <img src="img/Wanda_cartaz.jpg" alt="wv" title="WandaVision" class="img-fluid">
            </div>
            <div class="col-12 col-sm-8 col-md-10">
                <h4 class="text-center text-danger " > WandaVision </h4>
                <p>
                    Três semanas após os eventos de Vingadores Ultimato, Wanda Maximoff e Visão estão vivendo uma vida suburbana idílica na cidade de Westview, no estado de New Jersey, tentando esconder suas verdadeiras identidades. À medida que começam a entrar nas novas décadas, o casal suspeita que as coisas não são o que parecem.

                    <br><br>
                    Número de episódios - 9 episódios
                    <br>
                    série finalizada - disponível no Disney+
                </p>

                <h4>Trailer</h4>
                <iframe width="460" height="315" src="https://www.youtube.com/embed/p__jH6NkowU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      
      `)
      $('#modal-info').modal('show')
    break

    case 'falcon': 
      $('.modal-title').append('Falcão e o Soldado Invernal')
      $('.modal-body').append(`
      <div class="container"> 
        <div class="row">
          <div class="col-12 col-sm-4 col-md-2">
                <img src="img/falcon_cartaz.jpg" alt="fs" title="Falcão e o Soldado Invernal" class="img-fluid">
            </div>
            <div class="col-12 col-sm-8 col-md-10">
                <h4 class="text-center text-secondary" >Falcão e o Soldado Invernal</h4>
                <p>
                    6 meses depois de receber o manto de Capitão América no final de Vingadores Ultimato, Sam Wilson se junta a Bucky Barnes em uma aventura mundial que testa suas habilidades e sua paciência.
                    
                    <br><br>

                    Número de episódios - 6 episódios
                    <BR>

                    série finalizada - disponível no Disney+
                </p>

                <h4>Trailer</h4>
                <iframe width="460" height="315" src="https://www.youtube.com/embed/ZHaokMTWgdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      `)
      $('#modal-info').modal('show')
    break

    case 'loki': 
      $('.modal-title').append('Loki')
      $('.modal-body').append(`
      <div class="container"> 
        <div class="row">
         <div class="col-12 col-sm-4 col-md-2">
                <img src="img/loki_cartaz.jpg" alt="loki vacinado" title="Loki" class="img-fluid">
            </div>
            <div class="col-12 col-sm-8 col-md-10">
                <h4 class="text-center text-success " > Loki </h4>
                <p>
                    Depois de roubar o Tesseract durante os eventos de Vingadores Ultimato, uma versão alternativa de Loki é trazida para a misteriosa Autoridade de Variância Temporal (AVT), uma organização burocrática que existe fora do tempo e do espaço, e monitora a linha do tempo. Eles dão a Loki uma escolha: ser apagado da existência por ser uma "variante do tempo" ou ajudar a consertar a linha do tempo e impedir uma ameaça maior. Loki acaba preso em seu próprio thriller policial, viajando no tempo e alterando a história da humanidade.

                  <br><br>
                  Número de episódios - 6 episódios
                  <br>
                  série finalizada - disponível no Disney+
                </p>

                <h4>Trailer</h4>
                <iframe width="460" height="315" src="https://www.youtube.com/embed/xdBWrkcmMwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      `)
      $('#modal-info').modal('show')
    break

    case 'wi': 
      $('.modal-title').append('What If...?')
      $('.modal-body').append(`
      <div class="container"> 
        <div class="row">
          <div class="col-12 col-sm-4 col-md-2">
                <img src="img/what_cartaz.jpeg" alt="serie de fumado" title="What If...?" class="img-fluid">
            </div>
            <div class="col-12 col-sm-8 col-md-10">
                <h4 class="text-center text-primary " > What If...? </h4>
                <p>
                    Após a criação do multiverso no final da primeira temporada de Loki, What If ...? explora as várias linhas do tempo alternativas do multiverso em que os principais momentos dos filmes do Universo Cinematográfico Marvel ocorrem de forma diferente.

                  <br><br>
                  Número de episódios - 1 episódio
                  <br>
                  série em lançamento, todas as quartas-feiras - disponível no Disney+
                </p>

                <h4>Trailer</h4>
                <iframe width="460" height="315" src="https://www.youtube.com/embed/zq-dKITdTsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      `)
      $('#modal-info').modal('show')
    break

    default:
    alert('Link invalido')
    }
    
  })
})