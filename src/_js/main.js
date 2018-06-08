var storeForms = new storeForms();

$( "#continue" ).click(function() {
    var value = $("input:radio[name=radio-inline-group]:checked").val();
    location.href = value;
});

var j;


j(document).ready(function() {
    function e(e, s) {
        return new RegExp(" " + s + " ").test(" " + e.className + " ");
    }

    function s(s, a) {
        var n = " " + s.className.replace(/[\t\r\n]/g, " ") + " ";
        if (e(s, a)) {
            for (; n.indexOf(" " + a + " ") >= 0;) {
                n = n.replace(" " + a + " ", " ");
                s.className = n.replace(/^\s+|\s+$/g, "");
            }
        } else s.className += " " + a;
    }

    j("html").attr("lang", "en");
    j(".toggle").hide();

    if (j('#navHead .toggle-view li > ul').length > 0) {  // if there are any submenus in the left hand nav
        j('#navHead .toggle-view li > ul').wrap('<div class="navsub"></div>');
        j( '#navHead .toggle-view > li > div' ).append( '<div class="close-content-sub"></div>' );
        j(".close-content-sub").append('<div class="open-me"></div>');

        if (j('.navsub > ul .current').length > 0 ) {
            j('.navsub > ul .current').parent().parent().children(".close-content-sub").html('<div class="close-me"></div>');
        }
    }


    j("#navigation").addClass("nav");
    j("#navigation ul").addClass("nav-list");
    j("#navigation ul li").addClass("nav-item");


    if(j(".nav-mobile").length > 0){
        var mobileNav = document.querySelector('.nav-primary');
        var toggle = document.querySelector('.nav-list');
        var accessBar = document.querySelector('#access_bar');
        var mobileLogo = document.querySelector('header .logo');
        var mobileBurger = document.querySelector('.nav-burger');
        mobileNav.onclick = function () {
            s(this, 'nav-mobile-open');
            s(toggle, 'nav-active');
            s(accessBar, 'nav-active');
            s(mobileLogo, 'mobile-menu-active');
            s(mobileBurger, 'mobile-menu-active');
        };
        j('.toggle').hide();
    }


    j('.resp-table').wrap('<div class="table-content"></div>').clone().appendTo('.table-content').addClass('table-mobile').each(function () {
        var list = j("<div class='tables' />");

        j(this).find("tr").each(function () {
            var p = j(this).children().map(function () {
                return "<li>" + j(this).html() + "</li>";
            });

            list.append("<ul>" + j.makeArray(p).join("") + "</ul>");
        });

        j(this).replaceWith(list);
    });


});