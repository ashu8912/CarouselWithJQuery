$(document).ready(()=>{
    $('.carousel :first').addClass('active');
    $('.slide').hide();
    $('.active').show();
    
$('#next').click(nextSlide)
$('#prev').click(()=>{
    $('.active').removeClass("active").addClass('oldActive')
    if($('.oldActive').is(':first-child'))
    {
        $('.slide').last().addClass('active');
        
    }
    else {
        $('.oldActive').prev().addClass('active');
        
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(700);
    $('.active').fadeIn(700);
}) 
setInterval(nextSlide,5000)
function nextSlide(){
    $('.active').removeClass("active").addClass('oldActive')
    if($('.oldActive').is(':last-child'))
    {
        $('.slide').first().addClass('active');
        
    }
    else {
        $('.oldActive').next().addClass('active');
        
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(700);
    $('.active').fadeIn(700);
}
})
//  $('.carousel :first').addClass('active');
// //  $('.carousel').hide();
//  $('.active').show();