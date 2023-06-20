$(document).ready(function() {  
    var countDownDate = new Date("Jul 1, 2023 00:00:00").getTime();
    
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      $("#demo").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
      
      if (distance < 0) {
        clearInterval(x);
        $("#demo").html("EXPIRED");
      }
    }, 1000);
  });
  

  $(document).ready(function() {
    var form1 = $('#frm1');
    var form2 = $('#frm2');
  
    const subForm = function(e) {
      e.preventDefault();
  
      if ($(this).attr('id') === 'frm1') {
        var name1 = form1.find('input[name="name"]').val();
        console.log(name1 + ' ' + form1.find('input[name="tel"]').val());
        alert('Thank you ' + name1 + ' for filling the form, we will call you soon!');
      } else if ($(this).attr('id') === 'frm2') {
        var name2 = form2.find('input[name="name"]').val();
        console.log(name2 + ' ' + form2.find('input[name="tel"]').val());
        alert('Thank you ' + name2 + ' for filling the form, we will call you soon!');
      }
    };
  
    form1.on('submit', subForm);
    form2.on('submit', subForm);
  });
  