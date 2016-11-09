(function () {
	var navbar = null;

	$(document).ready(function () {
		$('body').prepend($('#navbar-template').html());

		navbar = $('#navbar').find('.navbar-nav');
	});

	$(document).arrive("#gerrit_topmenu .topmenuMenuRight", function () {
		setTimeout(function () {
			var topMenu = $('#gerrit_topmenu');

			topMenu.find('.gwt-Label').each(function (indx) {
				var title = $(this).text();
				var target = $('<li class="dropdown">' +
					'	<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + title + ' <span class="caret"></span></a>' +
					'	<ul class="dropdown-menu"></ul>' +
					'</li>').appendTo(navbar);

				target = target.find('.dropdown-menu');

				topMenu.find('.gwt-TabPanelBottom').find('> div:eq(' + indx + ')').find('a').each(function () {
					var elem = $(this).appendTo(target);

					elem.wrap('<li>');
				});

			});

			//Search
			var searchPanel = topMenu.find('.searchPanel');

			searchPanel.appendTo('#navbar').addClass('navbar-form navbar-right').removeClass('searchPanel').find(':input').addClass('form-control');

			//User
			var topmenuMenuRightElem = $('.topmenuMenuRight');
			var li = $('<li>').appendTo(navbar);
			var menuItems = topmenuMenuRightElem.find('.menuItem');

			if (menuItems.length) {
				li.append(menuItems);
			}
			else if (topmenuMenuRightElem.find('.menuBarUserNameFocusPanel').length) {
				li.append(topmenuMenuRightElem.find('.menuBarUserNameFocusPanel'));
			}
		}, 250);
	});

	$(document).arrive('.navbar .gwt-InlineLabel', function () {
		$(this).html('');
	});

	$(document).arrive("#gerrit_body table.changeTable", function () {
		// the content has arrived, manipulate it to add bootstrap styling
		$('table.changeTable').addClass('table table-striped')
	});
})();