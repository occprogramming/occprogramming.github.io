/*
    Set of methods that manage the effects of the resources boxes
    in resources.html
*/

// CONFIGURATION
/* WHEN ADDING NEW RESOURCES BOXES, UPDATE THESE TWO ARRAYS
   NOTE: THEY HAVE TO BE IN ORDER AND FOLLOW THE SAME FORMAT
***********************************************************/
var resourcesBoxList = [ 
  $('#spring-2015-resources'), 
  $('#fall-2015-resources'),
  $('#spring-2016-resources')
];

var resourcesLinkList = [
  $('#spring-2015-resources-link'), 
  $('#fall-2015-resources-link'),
  $('#spring-2016-resources-link')
];
/**********************************************************/

jQuery(document).ready(function() {

  // SET UP
  for(var i = 0; i < resourcesBoxList.length; i++) {
    resourcesBoxList[i].hide();
  }

  var currentSemesterResourcesBox = resourcesBoxList[ resourcesBoxList.length - 1 ];

  toggleResourcesBox( currentSemesterResourcesBox );
  
  // CLICK EVENTS
  $(resourcesLinkList).each(function() {
    $(this).on('click', function() {
      toggleResourcesBox( getResourcesBox( $(this) ) );
    });
  });
   
});

// HELPER FUNCTIONS
function toggleResourcesBox(resourcesBox) {
  var resourcesLink = getResourcesLink( resourcesBox );

  function activateBox() {
    resourcesBox.slideDown('slow');
    resourcesLink.css('font-weight', 'bold');
  }

  function deactivateBox() {
    resourcesBox.slideUp('slow');
    resourcesLink.css('font-weight', 'normal');
  }

  // Function body:

  if (resourcesBox.is(':visible')) {
    // Current resources box is the one active.
    deactivateBox();
  } else {
    var activeResourcesBox = getActiveResourcesBox();
    
    if (activeResourcesBox != null) {
      // Another resource box is active.
      //console.log(activeResourcesBox);

      activeResourcesBox.slideUp('slow', function() {
        // Slide up completed...
        activateBox();
      });

      var activeResourcesLink = getResourcesLink( activeResourcesBox );
      activeResourcesLink.css('font-weight', 'normal');
    } else {
      // No resources box is active.
      activateBox();
    }
  }
}

function getActiveResourcesBox() {
  var activeResourcesBox = null;

  for (var i = 0; i < resourcesBoxList.length; i++) {
    var resourcesBox = resourcesBoxList[ i ];
    if (resourcesBox.is(':visible')) {
      activeResourcesBox = resourcesBox;
      break;
    }
  }

  return activeResourcesBox;
}

function getResourcesLink(resourcesBox) {
  var boxId = resourcesBox.attr('id');
  var linkId = boxId + '-link';
  return $('#' + linkId);
}

function getResourcesBox(resourcesLink) {
  var linkId = resourcesLink.attr('id');
  var boxId = linkId.substring(0, linkId.length - 5);
  return $('#' + boxId);
}
