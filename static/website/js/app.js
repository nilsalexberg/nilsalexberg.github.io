if (document.getElementsByClassName("hours").length) {
  // Set the date we're counting down to
  if (!window.countDownDate) {
    var countDownDate = new Date("Feb 12, 2021 23:59:59").getTime();
  }

  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    var d = document.getElementsByClassName("days");
    var h = document.getElementsByClassName("hours"); 
    var m = document.getElementsByClassName("minutes");
    var s = document.getElementsByClassName("seconds");

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours;
    if (d.length) {
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    } else {
      hours = Math.floor(distance / (1000 * 60 * 60));
    }
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
    // Display the result in the element with id="demo"
    if (d.length) {
      for (let key in d) {
        d[key].innerHTML = `${days}`.length < 2 ? `0${days}` : days;
      }
    }
    if (h.length !== 0) {
        for (let key in h) {
          h[key].innerHTML = `${hours}`.length < 2 ? `0${hours}` : hours;
      }
    }
    
    if (m.length !== 0) {
      for (let key in m) {
        m[key].innerHTML = `${minutes}`.length < 2 ? `0${minutes}` : minutes;
      }
    }
    
    if (s.length !== 0) {
      for (let key in s) {
        s[key].innerHTML = `${seconds}`.length < 2 ? `0${seconds}` : seconds;
      }
    }
  }, 1000);
}

function goToWhatsApp(target) {
  var ID_CONVERSAO = '787118214';
  var ROTULO_CONVERSAO = '-lQ9COLM1PQBEIbxqfcC';

  gtag('event', 'conversion', {
    'send_to': `AW-${ID_CONVERSAO}/${ROTULO_CONVERSAO}`
  });

  window.open("https://joinzap.app/msd30", target);
}

function goToVipWhatsApp(target) {
  var ID_CONVERSAO = '787118214';
  var ROTULO_CONVERSAO = 'gyPPCJyujfUBEIbxqfcC';

  gtag('event', 'conversion', {
    'send_to': `AW-${ID_CONVERSAO}/${ROTULO_CONVERSAO}`
  });

  window.open("https://leadzap.me/10035/chegadequase", target);
}

function goToYoutube(url) {
  var ID_CONVERSAO = '787118214';
  var ROTULO_CONVERSAO = 'dyjsCJX1x_QBEIbxqfcC';

  gtag('event', 'conversion', {
    'send_to': `AW-${ID_CONVERSAO}/${ROTULO_CONVERSAO}`
  });

  window.open(url, "_blank");
}
console.log("%cO CORPO EXPLICA ABRIR O CONSOLE PARA DEBUGAR","color: red; font-size: 20px; text-shadow: 1px 1px 0 rgb(217,31,38) , 2px 2px 0 rgb(226,91,14) , 3px 3px 0 rgb(245,221,8) , 5px 5px 0 rgb(5,148,68) , 6px 6px 0 rgb(2,135,206) , 7px 7px 0 rgb(4,77,145) , 8px 8px 0 rgb(42,21,113)");
function getUrlVars() {
  var vars = {}, hash;
  var query_string = window.location.search;

  if (query_string) {
    var hashes = query_string.slice(1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars[hash[0]] = hash[1];
    }

    return vars;
  } else {
    return {};
  }
}

$(document).ready(function() {
  $("#buy-form-modal form").submit(function(event) {
    event.preventDefault();

    setLoading(true);

    $("#buy-form-modal .text-danger").html('');

    var params = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val().replace(/\D/g,''),
      data: getUrlVars()
    };

    if ($("#utm_source")) {
      params.data.utm_source = $("#utm_source").val();
    }
    if ($("#src")) {
      params.data.src = $("#src").val();
    }

    $.ajax({
      type: 'POST',
      url: 'https://lead.ocorpoexplica.com.br/add',
      data: JSON.stringify(params),
      contentType: "application/json",
      dataType: 'json'
    })
      .done(function() {
        swal("Sucesso", "Você está na lista de espera", "success");
        setLoading(false);
        // goToHotmart(params);
      })
      .fail(function(error) {
        for (var i in error.responseJSON) {
          $(`#${i}_error`).html(error.responseJSON[i][0]);
        }
        console.log(error.responseJSON);
        setLoading(false);
      })

    return false;
  });
  
  function goToHotmart(params) {
    var finalparams = getUrlVars();
    finalparams.name = params.name;
    finalparams.email = params.email;
    finalparams.phoneac = params.phone.slice(0,2);
    finalparams.phonenumber = params.phone.slice(2,11);
    finalparams.utm_source = params.data.utm_source;
    finalparams.src = params.data.src;
    var query = $.param(finalparams);
    document.location.href = `https://pay.hotmart.com/O47173927M?${query}`;
  }

  function setLoading(isLoading) {
    if (isLoading) {
      $("#buy-form-modal button").html('<div class="spinner-border text-light" role="status"></div>')
    } else {
      $("#buy-form-modal button").html('Garantir minha vaga')
    }
  }
});
