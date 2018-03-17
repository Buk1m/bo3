$('.papa').masonry({
    // options...
    itemSelector: '.papa-item',
    columnWidth: 300,
    isFitWidth: true
});

var $grid = $('.papa').imagesLoaded( function() {
    // init Masonry after all images have loaded
    $('.papa-img').fadeIn("slow");
    $grid.masonry({
        // options...
        itemSelector: '.papa-item',
        columnWidth: 300,
        isFitWidth: true
    });
});

