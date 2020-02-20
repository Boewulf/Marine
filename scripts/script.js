    let width = 390; 
    let count = 1;
    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');
    let position = 0;

    carousel.querySelector('.prev').onclick = function() {
      position += width * count;
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };

    window.onload= function() {
        document.getElementById('show_form').onclick = function() {
            openbox('form', this);
            return false;
        };
    };
    function openbox(id, show_form) {
        var div = document.getElementById(id);
        if(div.style.display == 'block') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
        }
    }


    var count_btns = document.body.querySelectorAll('.count');

    for (var i = 0; i < count_btns.length; i++) {
        count_btns[i].id = 'a' + i;
        count_btns[i].appendChild(document.createElement('span'));
        count_btns[i].onclick = handler;
    }

    function handler(event) {
        var span = event.target.querySelector('span');
        if (!span) span = event.target;
        var count = parseInt(span.innerText);
        span.innerText = Number.isNaN(count) ? 1 : ++count;
    };
