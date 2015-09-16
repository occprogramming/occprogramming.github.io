/*
    Functions that toggle the resource divs for sring and fall of 2015

*/

jQuery(document).ready(function() {

   $('#spring-2015-resources').hide();
   $('#fall-2015-resources-link').css('font-weight', 'bold');
    
   /*
        Function to toggle the spring 2015 resources div
   */
   $("#spring-2015-resources-link" ).click(function() {
       
        if ($('#fall-2015-resources').is(":visible")) //Checks if div is visible, if true the div will slideup
                $('#fall-2015-resources').slideUp('slow');
       
            if ($('#spring-2015-resources').is(":visible")) //Checks to see if div is visible, it true sets the font weight back to normal
                $('#spring-2015-resources-link').css('font-weight', 'normal');
            
            else   //Else if the font-weight is normal sets it to bold
                $('#spring-2015-resources-link').css('font-weight', 'bold');
       
        $('#fall-2015-resources-link').css('font-weight', 'normal'); 
        $('#spring-2015-resources').slideToggle('slow');
   });
    
    /*
        Function to toggle the fall 2015 resources div
   */
   $("#fall-2015-resources-link" ).click(function() {

            if ($('#spring-2015-resources').is(":visible"))
                $('#spring-2015-resources').slideUp('slow');
       
            if ($('#fall-2015-resources').is(":visible"))//Checks to see if div is visible, it true sets the font weight back to normal
                $('#fall-2015-resources-link').css('font-weight', 'normal');
            
            else    //Else if the font-weight is normal sets it to bold
                $('#fall-2015-resources-link').css('font-weight', 'bold');
       
       $('#spring-2015-resources-link').css('font-weight', 'normal');
       $('#fall-2015-resources').slideToggle('slow');
       
   });
   
});






