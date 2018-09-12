$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        clientId: '2539d431668a493888014d07f2fb616d',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '8467360673.1677ed0.13b4c93e11b84c37b1d724fc2c08eb15',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});