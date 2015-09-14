/*
    Functions that toggle the resource divs for sring and fall of 2015

*/

jQuery(document).ready(function() {

   $('#spring-2015-resources').hide();

   $("#spring-2015-resources-link" ).click(function() {
        $('#spring-2015-resources').slideToggle('slow');   
   });
    
   $("#fall-2015-resources-link" ).click(function() {
        $('#fall-2015-resources').slideToggle('slow');
   });
   
});






