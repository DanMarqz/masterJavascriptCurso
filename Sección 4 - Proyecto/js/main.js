$(document).ready(function(){

  // Slider
  if(window.location.href.indexOf('index') > -1){
    $('.gallery').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      responsive: true,
      pager: false
    });
  }

  //Posts
  if(window.location.href.indexOf('index') > -1){
    var posts = [
      {
        title: 'Prueba de titulo 1',
        date: 'Publicado el: ' + moment().date() + ' de ' + moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae labore sequi rerum illum nobis? Obcaecati quae fuga aliquid tempora animi numquam rem debitis. Error molestias facilis ab atque pariatur quasi laboriosam voluptas quos dolorum, veniam fugit rerum! Aperiam perspiciatis totam in. Dolores, adipisci! Nihil magni quod harum aliquid culpa cupiditate aliquam facere, autem dolorem esse eligendi vel beatae nobis. Obcaecati minima magnam vitae, laudantium non nulla quis, dolores nam, cumque beatae vel at deleniti doloribus eos iste sit labore quo inventore quia? Modi eos tempore atque quo quaerat amet vitae asperiores distinctio dolorum! Blanditiis magni veniam illo quasi, praesentium modi vitae recusandae quaerat, iure quod corrupti sapiente temporibus autem eos, amet iusto delectus. Quaerat, soluta maiores architecto voluptas dolor provident?'
      },
      {
        title: 'Prueba de titulo 2',
        date: 'Publicado el: ' + moment().date() + ' de ' + moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae labore sequi rerum illum nobis? Obcaecati quae fuga aliquid tempora animi numquam rem debitis. Error molestias facilis ab atque pariatur quasi laboriosam voluptas quos dolorum, veniam fugit rerum! Aperiam perspiciatis totam in. Dolores, adipisci! Nihil magni quod harum aliquid culpa cupiditate aliquam facere, autem dolorem esse eligendi vel beatae nobis. Obcaecati minima magnam vitae, laudantium non nulla quis, dolores nam, cumque beatae vel at deleniti doloribus eos iste sit labore quo inventore quia? Modi eos tempore atque quo quaerat amet vitae asperiores distinctio dolorum! Blanditiis magni veniam illo quasi, praesentium modi vitae recusandae quaerat, iure quod corrupti sapiente temporibus autem eos, amet iusto delectus. Quaerat, soluta maiores architecto voluptas dolor provident?'
      },
      {
        title: 'Prueba de titulo 3',
        date: 'Publicado el: ' + moment().date() + ' de ' + moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae labore sequi rerum illum nobis? Obcaecati quae fuga aliquid tempora animi numquam rem debitis. Error molestias facilis ab atque pariatur quasi laboriosam voluptas quos dolorum, veniam fugit rerum! Aperiam perspiciatis totam in. Dolores, adipisci! Nihil magni quod harum aliquid culpa cupiditate aliquam facere, autem dolorem esse eligendi vel beatae nobis. Obcaecati minima magnam vitae, laudantium non nulla quis, dolores nam, cumque beatae vel at deleniti doloribus eos iste sit labore quo inventore quia? Modi eos tempore atque quo quaerat amet vitae asperiores distinctio dolorum! Blanditiis magni veniam illo quasi, praesentium modi vitae recusandae quaerat, iure quod corrupti sapiente temporibus autem eos, amet iusto delectus. Quaerat, soluta maiores architecto voluptas dolor provident?'
      },
      {
        title: 'Prueba de titulo 4',
        date: 'Publicado el: ' + moment().date() + ' de ' + moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae labore sequi rerum illum nobis? Obcaecati quae fuga aliquid tempora animi numquam rem debitis. Error molestias facilis ab atque pariatur quasi laboriosam voluptas quos dolorum, veniam fugit rerum! Aperiam perspiciatis totam in. Dolores, adipisci! Nihil magni quod harum aliquid culpa cupiditate aliquam facere, autem dolorem esse eligendi vel beatae nobis. Obcaecati minima magnam vitae, laudantium non nulla quis, dolores nam, cumque beatae vel at deleniti doloribus eos iste sit labore quo inventore quia? Modi eos tempore atque quo quaerat amet vitae asperiores distinctio dolorum! Blanditiis magni veniam illo quasi, praesentium modi vitae recusandae quaerat, iure quod corrupti sapiente temporibus autem eos, amet iusto delectus. Quaerat, soluta maiores architecto voluptas dolor provident?'
      },
      {
        title: 'Prueba de titulo 5',
        date: 'Publicado el: ' + moment().date() + ' de ' + moment().format("MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae labore sequi rerum illum nobis? Obcaecati quae fuga aliquid tempora animi numquam rem debitis. Error molestias facilis ab atque pariatur quasi laboriosam voluptas quos dolorum, veniam fugit rerum! Aperiam perspiciatis totam in. Dolores, adipisci! Nihil magni quod harum aliquid culpa cupiditate aliquam facere, autem dolorem esse eligendi vel beatae nobis. Obcaecati minima magnam vitae, laudantium non nulla quis, dolores nam, cumque beatae vel at deleniti doloribus eos iste sit labore quo inventore quia? Modi eos tempore atque quo quaerat amet vitae asperiores distinctio dolorum! Blanditiis magni veniam illo quasi, praesentium modi vitae recusandae quaerat, iure quod corrupti sapiente temporibus autem eos, amet iusto delectus. Quaerat, soluta maiores architecto voluptas dolor provident?'
      },
    ];

    posts.forEach((item, index) => {
      var post = `
        <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>${item.content}</p>
          <a href="#" class="button-more">Leer más</a>
        </article>
      `;

    $('#posts').append(post);
    });
}

  // Selector de tema
  var theme = $("#theme");
  $("#to-aqua").click(function(){
    theme.attr("href","css/aqua.css")
  });

  $("#to-blue").click(function(){
    theme.attr("href","css/blue.css")
  });

  $("#to-pink").click(function(){
    theme.attr("href","css/pink.css")
  });

  //Scroll arriba
  $('.subir').click(function(e){
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

    // Login falso
    $('#login form').submit(function(){
      var form_name = $('#form_name').val();
      localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem('form_name');

    if(form_name != null && form_name !='undefined'){
      var about_parrafo = $("#about p");
      about_parrafo.html('<br>Bienvenido, ' +form_name);
      about_parrafo.append('<br><a href="#" id="logout">Cerrar sesión</a>');
      $('#login').hide();

      $('#logout').click(function(){
        localStorage.clear();
        location.reload();
      });

    }

    if(window.location.href.indexOf('about') > -1){
      $('#acordeon').accordion();
    };

    if(window.location.href.indexOf('reloj') > -1){
      setInterval(function(){
        var reloj = moment().format('hh:mm:ss');
        $('#reloj').html(reloj);
      },1000)      
    }

    // Validación
    if(window.location.href.indexOf('contact') > -1){
      
      $('form input[name="date"]').datepicker({
        dateFormat: 'dd-mm-yy'
      });

      $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
      });

    }
});