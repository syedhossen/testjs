function textChange(){
  document.getElementById('p').innerHTML="Journey with JS";
}

$( function() {
    $( "#draggable" ).draggable();

  } );

$( function() {
    $( "#selectable" ).selectable();
  } );
$( function() {
    $( "#sortable" ).sortable();
  } );
//Accordion
$( function() {
    $( "#accordion" ).accordion();
  } );

//AutoComplete

$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


  //checkradiobox
  $( function() {
    $( "input" ).checkboxradio();
  } );


  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( "#menu" ).menu();
  } );


  $( function() {
    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
  } );