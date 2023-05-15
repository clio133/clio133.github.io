$( function() {
    var languages = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "C",
        "C++",
        "Go",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby"
    ];

    $( "#languages" ).autocomplete({
        source: languages
    });

    $( "#birthday" ).datepicker();

    $("input:not(#birthday)").blur(function() {
        $(this).addClass("touched");
    });
} );
