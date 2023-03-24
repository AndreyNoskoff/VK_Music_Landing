// $('section.awSlider').carousel({
//     pause: "hover",
//     interval: 3000
// });

const startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
    const bscn = $(this).find('.item.active > img').attr('src');
    $('section.awSlider > img').attr('src', bscn);
});