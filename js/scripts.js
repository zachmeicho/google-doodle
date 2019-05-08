console.log('OK');


// first puck
$('.puck1').click( function(){
  
    $('.puck1').toggleClass('slide-top')
    
} );


$('.puck1').click( function(){
 
    $('.puck1').toggleClass('flip-scale-up-hor')
      
});



// second puck 
  $('.puck2').click( function(){
  
    $('.puck2').toggleClass('slide-bottom')
    
  } );

$('.puck2').click( function(){
  
    $('.puck2').toggleClass('flip-scale-up-hor')
    
  } );


  //background
  $('div div').click( function(){
  
    $('div div').addClass('fade-in')
    
  } );

  $('.logo').click( function(){
  
    $('.logo').toggleClass('logo')
    
  } );
