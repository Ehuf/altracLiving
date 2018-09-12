$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '8467360673',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '8467360673.1677ed0.13b4c93e11b84c37b1d724fc2c08eb15',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }
    });

});