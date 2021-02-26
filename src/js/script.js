$(document).ready(function(){
// handlebars

var lastDay = {
    "users": [
        {
            "class": "facebook",
            "social": "Facebook",
            "number": "1,701",
            "text": "followers", 
            "place": "+4",
            "rotate": "up",
            "arrow": "arrow",
            "image_url": "img/icon1.jpg",
            "mail": "@abhisek.daas" 
        },
        {
            "class": "twitter",
            "social": "Twitter",
            "number": "1,567",
            "text": "followers",
            "place": "-3",
            "rotate": "down",
            "arrow": "arrow",
            "image_url": "img/icon2.jpg",
            "mail": "@wholetthedasout" 
        },
        {
            "class": "instagram",
            "social": "Instagram",
            "number": "1,139",
            "text": "followers",
            "place": "+11",
            "rotate": "up",
            "arrow": "arrow",
            "image_url": "img/icon3.jpg",
            "mail": "@wholetthedasout" 
        },
        {
            "class": "linked",
            "social": "LinkedIn",
            "number": "2,016",
            "text": "followers",
            "place": "+39",
            "rotate": "up",
            "arrow": "arrow",
            "image_url": "img/icon4.jpg",
            "mail": "@abhisekd" 
        },
        {
            "class": "youtube",
            "social": "YouTube",
            "number": "3,190",
            "text": "followers",
            "place": "+22",
            "rotate": "up",
            "arrow": "arrow",
            "image_url": "img/icon5.jpg",
            "mail": "@TheAbhisekD" 
        },
        {
            "class": "snap",
            "social": "Snapchat",
            "number": "8,754",
            "text": "snap score",
            "place": "",
            "rotate": "",
            "arrow": "",
            "image_url": "img/icon2.jpg",
            "mail": "@abhisekd" 
        },
        {
            "class": "google",
            "social": "googlePlus",
            "number": "1,033",
            "text": "followers",
            "place": "",
            "rotate": "",
            "arrow": "",
            "image_url": "img/icon3.jpg",
            "mail": "@+AbhisekDas" 
        },
        {
            "class": "vine",
            "social": "Vine",
            "number": "1,033",
            "text": "loops",
            "place": "",
            "rotate": "",
            "arrow": "",
            "image_url": "img/icon6.jpg",
            "mail": "@12352178912" 
        }
    ]
};

    var dayTemplate = $('#dayTemplate').html();

    var complatedDayTemplate = Handlebars.compile(dayTemplate);
    $('#js-dashboard').html(complatedDayTemplate(lastDay));

//popup 

    $('.js-btn').on('click', function () {
        $('.js-popup').addClass('show');
    });

    $('.js-close-btn').on('click', function () {
       $('.js-popup').removeClass('show'); 
    });       
});

