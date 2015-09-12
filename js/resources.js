/*
    Functions that toggle the resource divs for sring and fall of 2015

*/

jQuery(document).ready(function() {

   $('#spring-2015-resources').hide();
   $( "#spring-2015-resources-btn" ).click(function() {
       
       if ($('#fall-2015-resources').is(":visible"))
           $('#fall-2015-resources').fadeOut('slow');
       
        $('#spring-2015-resources').fadeToggle('slow');
       
       
   });
    
   $('#fall-2015-resources').hide();
   $( "#fall-2015-resources-btn" ).click(function() {
       
        if ($('#spring-2015-resources').is(":visible"))
            $('#spring-2015-resources').fadeOut('slow');
       
        $('#fall-2015-resources').fadeToggle('slow');
        
   });
});






