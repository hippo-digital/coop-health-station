var storeForms = new storeForms();

$( "#continue" ).click(function() {
    var value = $("input:radio[name=radio-inline-group]:checked").val();
    location.href = value;
});