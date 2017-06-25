$(document).ready(function() {

	var test = 256

	for (i=0; i < test; i++) {
	$('.container').append('<div class="grid"></div>');
	};

	$('.grid').hover(function(){
		$('.grid:hover').removeClass().addClass('hover');
	});



	$('.resetbutton').click(function () {
		var reset = prompt('Select a number between 1 and 100', '16');
		$('.hover').removeClass().addClass('grid');
		$('.grid').remove()

		for (i=0; i < reset * reset; i++) {
		$('.container').append('<div class="grid"></div>');
		};
		$('.grid').css('height', 320/reset);
		$('.grid').css('width', 320/reset);

		$('.grid').hover(function(){
		$('.grid:hover').removeClass().addClass('hover');
		});
	});

	$('.colorbutton').click(function() {
		function rg(m, n) {
    		return Math.floor( Math.random() * (n - m + 1) ) + m;
		}

		function hex(i) {
    		return i.toString(16);
		}

		function randColor() {
    		return '#' + hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15)) +
        hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15));
		}

		$('.hover').on('mouseenter', function() {
			$(this).css('background-color', randColor());
		});
		$('.grid').on('mouseenter', function() {
			$(this).css('background-color', randColor());
		});
	});

	$('.greybutton').click(function() {
		$('.hover').on('mouseenter', function() {
			$(this).css('background-color', '#292929');
		});
		$('.grid').on('mouseenter', function() {
			$(this).css('background-color', '#292929');
		});
	});
});
