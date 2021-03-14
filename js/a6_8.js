let bar_width = 0;
$('.j-btn').click(function() {
bar_width=bar_width+1;
$("#my-progress-bar").width(bar_width+"%");
$(".progress-bar").text(bar_width+"%");
});

$('.j3-btn').click(function() {
bar_width=bar_width+3;
$("#my-progress-bar").width(bar_width+"%");
$(".progress-bar").text(bar_width+"%");
});

$('.j7-btn').click(function() {
bar_width=bar_width+7;
$("#my-progress-bar").width(bar_width+"%");
$(".progress-bar").text(bar_width+"%");
});


	