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
       
        if ($('#fall-2015-resources').is(":visible")) //Checks if div is visible, if true the div will fadeOut
                $('#fall-2015-resources').fadeOut('slow');
       
       var fontWeight = $(this).css('font-weight'); //Store font-weight in a var
            if (fontWeight == 'bold' || fontWeight == '700') { //If font-weight is bold sets set it to normal font weight
                $('#spring-2015-resources-link').css('font-weight', 'normal');
            }
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
                $('#spring-2015-resources').fadeOut('slow');
       
       var fontWeight = $(this).css('font-weight'); //Store font-weight in a var
            if (fontWeight == 'bold' || fontWeight == '700') { //If font-weight is bold sets set it to normal font weight
                $('#fall-2015-resources-link').css('font-weight', 'normal');
            }
            else         //Else if the font-weight is normal sets it to bold
                $('#fall-2015-resources-link').css('font-weight', 'bold');
       
       $('#spring-2015-resources-link').css('font-weight', 'normal');
       $('#fall-2015-resources').slideToggle('slow');
       
   });
   
});






