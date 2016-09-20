
document.addEventListener("DOMContentLoaded", function() {
    
    //start foundation
    $(document).foundation();
    
    
    //slider settings
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        setWrapperSize: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 3,
        effect: "coverflow",
        
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
    
    //contact section
    

    
    var locationButtonClosed = document.getElementById('l-btn-closed');
    var emailButtonClosed = document.getElementById('e-btn-closed');
    var phoneButtonClosed = document.getElementById('p-btn-closed');
    
    var locationButtonOpen = document.getElementById('l-btn-open');
    var emailButtonOpen = document.getElementById('e-btn-open');
    var phoneButtonOpen = document.getElementById('p-btn-open');

    //make so icon images can't be dragged around when user clicks
    
    locationButtonClosed.ondragstart = function() { return false; };
    emailButtonClosed.ondragstart = function() { return false; };
    phoneButtonClosed.ondragstart = function() { return false; };
    
    locationButtonOpen.ondragstart = function() { return false; };
    emailButtonOpen.ondragstart = function() { return false; };
    phoneButtonOpen.ondragstart = function() { return false; };
    
    var locationRow = document.getElementById('location-row');
    var emailRow = document.getElementById('email-row');
    var callRow = document.getElementById('call-row');

   
    
    //contact section init

    locationButtonOpen.style.display="none";
    emailButtonOpen.style.display="none";
    phoneButtonOpen.style.display="none";
    
    locationRow.style.display="none";
    emailRow.style.display="none";
    callRow.style.display="none";
    
    //onclick
    
    locationButtonClosed.onclick = function(){
        locationButtonOpen.style.display="";
        locationButtonClosed.style.display="none";
        locationRow.style.display="";
        
        emailButtonOpen.style.display="none";
        phoneButtonOpen.style.display="none";
        emailButtonClosed.style.display="";
        phoneButtonClosed.style.display="";
        
        callRow.style.display="none";
        emailRow.style.display="none";
    };
    
    emailButtonClosed.onclick = function(){
        emailButtonOpen.style.display="";
        emailButtonClosed.style.display="none";
        emailRow.style.display="";
        
        locationButtonOpen.style.display="none";
        phoneButtonOpen.style.display="none";
        locationButtonClosed.style.display="";
        phoneButtonClosed.style.display="";
        
        locationRow.style.display="none";
        callRow.style.display="none";
    };
    
    phoneButtonClosed.onclick = function(){
        phoneButtonOpen.style.display="";
        phoneButtonClosed.style.display="none";
        callRow.style.display="";
        
        locationButtonOpen.style.display="none";
        emailButtonOpen.style.display="none";   
        locationButtonClosed.style.display="";
        emailButtonClosed.style.display="";
        
        locationRow.style.display="none";
        emailRow.style.display="none";
        
    };

});