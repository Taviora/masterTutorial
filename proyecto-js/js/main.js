$(document).ready(function(){

    //SLIDER
    //esta condicion es para verificar que solo se cargue en la pagina correcta
    //es decir en donde se utiliza ese JS
    if(window.location.href.indexOf('index') > -1){

        $(function(){
            $('.galeria').bxSlider({
              mode: 'fade',
              captions: true,
              slideWidth: 1200,
              responsive: true,
              auto: true
            });
        });

    }
    

    //POSTS
    if(window.location.href.indexOf('index') > -1){
        
        var posts = [
            {
                title: 'Prueba de titulo #1',
                date: 'Publicado el dia ' + moment().date()+ ' de ' +moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc tincidunt felis turpis, non finibus dolor volutpat a.Integer tincidunt ipsum at bibendum placerat. In ac felis sitamet augue tincidunt efficitur. Nam sagittis, urna vel gravida '
            },
            {
                title: 'Prueba de titulo #2',
                date: 'Publicado el dia ' + moment().date()+ ' de ' +moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc tincidunt felis turpis, non finibus dolor volutpat a.Integer tincidunt ipsum at bibendum placerat. In ac felis sitamet augue tincidunt efficitur. Nam sagittis, urna vel gravida '},
            {
                title: 'Prueba de titulo #3',
                date: 'Publicado el dia ' + moment().date()+ ' de ' +moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc tincidunt felis turpis, non finibus dolor volutpat a.Integer tincidunt ipsum at bibendum placerat. In ac felis sitamet augue tincidunt efficitur. Nam sagittis, urna vel gravida '
            },
            {
                title: 'Prueba de titulo #4',
                date: 'Publicado el dia ' + moment().date()+ ' de ' +moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc tincidunt felis turpis, non finibus dolor volutpat a.Integer tincidunt ipsum at bibendum placerat. In ac felis sitamet augue tincidunt efficitur. Nam sagittis, urna vel gravida '
            },
            {
                title: 'Prueba de titulo #5',
                date:'Publicado el dia ' + moment().date()+ ' de ' +moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc tincidunt felis turpis, non finibus dolor volutpat a.Integer tincidunt ipsum at bibendum placerat. In ac felis sitamet augue tincidunt efficitur. Nam sagittis, urna vel gravida '
            },
            {
                title: 'Prueba de titulo #6',
                date:'Publicado el dia ' + moment().date()+ ' de ' +moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc tincidunt felis turpis, non finibus dolor volutpat a.Integer tincidunt ipsum at bibendum placerat. In ac felis sitamet augue tincidunt efficitur. Nam sagittis, urna vel gravida '
            }
        ]
    
        //recorro el arreglo de json con un forEach
        posts.forEach((item, index) => {

            var  post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                    ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>`
                ;
            
            $('#posts').append(post);

        });
    } 
        
    //Selector de tema
    var theme = $('#theme');
    $('#to-green').click(function(){
        theme.attr("href","css/green.css");
    });

    $('#to-red').click(function(){
        theme.attr("href","css/red.css");
    });

    $('#to-blue').click(function(){
        theme.attr("href","css/blue.css");
    });

     

    //Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);

        return false;
    });

    //Login falso

    $('#login form').submit(function(){

    var form_name = $('#form-name').val();
 
    //lo guardamos en local storage
    localStorage.setItem("form-name", form_name);

    });

    var form_name = localStorage.getItem("form-name");

    if(form_name != null && form_name != 'undefined'){
        
        var about_parrafo = $('#about p');
        about_parrafo.html("<br><strong>Bienvenid@, "+form_name+"</strong>  ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");
        $('#login').hide();
       
        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon

    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();

    }

    //Reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        },1000);      

    }

    //Validacion
    if(window.location.href.indexOf('contacto') > -1){

        $('form input[name=date]').datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition:'top',
            scrollToTopOnError: true

        });
    }
});