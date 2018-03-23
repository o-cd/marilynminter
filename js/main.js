$(function() {
  var counter1 = 0,
      counter2 = 0;
  
  $('article:nth-of-type(1) div').click(function() {
    ++counter1;
    if (counter1 % 2 == 0) {
      $(this).css({
        margin: '0 auto',
        width: '2.5rem',
        height: '2.5rem',
        background: '#616161',
        opacity: '.15'
      });
      $('header').css({
        display: 'none'
      });
    } else {
      $(this).css({
        margin: '0 auto',
        marginTop: $('header').height(),
        width: '2.5rem',
        height: '2.5rem',
        background: '#616161',
        opacity: '.15'
      });
      $('header').css({
        position: 'fixed',
        width: '100vw',
        background: '#F5F5F5',
        display: 'block',
        opacity: '.75'
      });
    }
    if (counter1 == 2) counter1 = 0;
  });
  $('article:nth-of-type(2) div').click(function() {
    ++counter2;
    if (counter2 % 2 == 0) {
      $(this).css({
        margin: '0 auto',
        width: '2.5rem',
        height: '2.5rem',
        background: '#616161',
        opacity: '.15'
      });
      $('footer').css({
        display: 'none'
      });
    } else {
      $(this).css({
        margin: '0 auto',
        marginBottom: $('footer').height(),
        width: '2.5rem',
        height: '2.5rem',
        background: '#616161',
        opacity: '.15'
      });
      $('footer').css({
        position: 'fixed',
        bottom: '0',
        background: '#F5F5F5',
        display: 'block',
        opacity: '.75'
      });
    }
    if (counter2 == 2) counter2 = 0;
  });
});
