var $ = window.$;

// //////////////////////////////////
//     CALENDAR WINDOW CONTROLS    //
// //////////////////////////////////

// Click the triangle
$('.calendarhide').click(function () {
    // Remove focus
    $('.calendarhide').blur();
    // slide the calendar up
    $('#calendar').animate({ marginTop: '-95px' }, 1000, 'easeInOutCubic');
    // have the link in the header appear
    $('.calendarLink').switchClass('calendarLinkSmall', 'calendarLinkLarge', 1000, 'easeInOutCubic');
});

// Click the link in the header
$('.calendarLink').click(function () {
    // Remove focus
    $('.calendarLink a').blur();
    // slide calendar down
    $('#calendar').animate({ marginTop: '32px' }, 1000, 'easeInOutCubic');
    // hide the calendar link in the header
    $('.calendarLink').switchClass('calendarLinkLarge', 'calendarLinkSmall', 1000, 'easeInOutCubic');
});


// //////////////////////////////////
//      PULSE WINDOW CONTROLS      //
// //////////////////////////////////

// When you click the minimize button on the window control of Pulse widget, collapse the widget
$('.pulseminimize').click(function () {
    // Remove focus
    $('.pulseminimize a').blur();
    // Fade out the content first
    $('.widgetContent').fadeOut('fast', function () {
        // After content is gone collapse the pulseContainer and pulse divs
        $('#pulse').switchClass('pulseExpand', 'pulseCollapse', 1000, 'easeOutBounce');
        $('#pulseContainer').switchClass('pulseExpand', 'pulseCollapse', 1000, 'easeOutBounce');
    });
});

// When you click the maximize button on the window control of Pulse widget, expand the widget
$('.pulsemaximize').click(function () {
    // Remove focus
    $('.pulsemaximize a').blur();
    // expand pulse container back to full size
    $('#pulseContainer').switchClass('pulseCollapse', 'pulseExpand', 1000, 'easeInOutCubic');
    // expand pulse content, fade in after expand finishes
    $('#pulse').switchClass('pulseCollapse', 'pulseExpand', 1000, 'easeInOutCubic', function () {
        // after divs have expanded, fade in content
        $('.widgetContent').fadeIn('fast');
    });
});

// When you click the close button on the window control of Pulse widget, hide the widget and add a link in the header
$('.pulseclose').click(function () {
    // Remove focus
    $('.pulseclose').blur();
    // Fade out the pulse widget
    $('#pulseContainer').fadeOut('slow');
    // Add the 'Pulse' link to the header
    $('.pulseLink').switchClass('pulseLinkSmall', 'pulseLinkLarge', 1000, 'easeInOutCubic');
});

// When you click the link in the header, show the pulse widget and hide the link
$('.pulseLink').click(function () {
    // Remove focus
    $('.pulseLink a').blur();
    // Fade Pulse widget in
    $('#pulseContainer').fadeIn('slow');
    // hide pulse link in header
    $('.pulseLink').switchClass('pulseLinkLarge', 'pulseLinkSmall', 1000, 'easeInOutCubic');
});


// ///////////////////////////
//        HELP MODAL        //
// ///////////////////////////

// When you click Help in the header display a modal
$('.help').click(function () {
    // Clear out div
    $('#help-modal div').html(' ');
    // Pull in JSON info and plug it into the modal
    $.ajax({
        dataType: 'json',
        url: 'data/help.json',
        success: function (helpData) {
            $.each(helpData.help, function (i, site) {
                $('#help-modal div').append('<p><a href="' + site.URL + '">' + site.title + '</a></p>');
            });
        }
    });
    // Fade modal in
    $('#help-modal').fadeIn('slow');
    $('#help-modal').dialog({
        modal: true,
        width: 540,
        buttons: {
            Ok: function () {
                $(this).dialog('close');
            }
        }
    });
});






// ////////////////////////////
//        PULSE ITEMS        //
// ////////////////////////////

// Create an array of the text from any set of elements (lower case, no spaces)
function selectedElementsToArray (elem) {
    var items = [];
    for (var i = 0; i < elem.length; i++) {
        items.push(elem[i].innerText);
    }
    var lowerCaseItems = $.map(items, function (n) {
        return n.toLowerCase().replace(' ', '');
    });

    return lowerCaseItems;
}


$('#pulse .pulseItem').click(function () {

    // Set "pulseItems" to an array of all Pulse Item Titles (lower case, no spaces)
    var pulseItems = selectedElementsToArray($('#pulse .pulseItem .pulseItemTitle').toArray());

    // Hide all medium versions
    for (var i = 0; i < pulseItems.length; i++) {
        // Hide all Mediums, show all small (except hidden), remove selected class from pagination
        $('.' + pulseItems[i] + '.medium').hide();
        $('.' + pulseItems[i] + '.small').css('display', 'inline-block');
        $('.' + pulseItems[i] + '.hidden').hide();
        $('#pagination .' + pulseItems[i]).removeClass('selected');

        // Hide clicked
        $(this).hide();

        // Show medium version of clicked and select correct dot in pagination
        if (this.classList[1] == pulseItems[i]) {
            $('.' + pulseItems[i] + '.medium').css('display', 'inline-block');
            $('#pagination .' + pulseItems[i]).addClass('selected');
        }
    }

});





// /////////////////////////////////////
//             PAGINATION             //
// /////////////////////////////////////

$('#pagination .firstPage').click(function () {

    // Set "pulseItems" to an array of all Pulse Item Titles (lower case, no spaces)
    var pulseItems = selectedElementsToArray($('#pulse .pulseItem .pulseItemTitle').toArray());

    for (var i = 0; i < pulseItems.length; i++) {
        // Unhide all .hidden Pulse Items
        $('.' + pulseItems[i] + '.hidden').removeClass('hidden');
        // Hide all Mediums
        $('.' + pulseItems[i] + '.medium').hide();
        // show all small (except hidden)
        $('.' + pulseItems[i] + '.small').css('display', 'inline-block');
        // remove selected class from pagination
        $('#pagination .' + pulseItems[i]).removeClass('selected');
    }

    // Hide first two Pulse Items
    $('.' + pulseItems[0] + '.small').addClass('hidden');
    $('.' + pulseItems[1] + '.small').addClass('hidden');
    $('.hidden').hide();

    // Hide firstPage, Show secondPage
    $('.firstPage').hide();
    $('.secondPage').show();

});

$('#pagination .secondPage').click(function () {

    // Set "pulseItems" to an array of all Pulse Item Titles (lower case, no spaces)
    var pulseItems = selectedElementsToArray($('#pulse .pulseItem .pulseItemTitle').toArray());

    for (var i = 0; i < pulseItems.length; i++) {
        // Unhide all .hidden Pulse Items
        $('.' + pulseItems[i] + '.hidden').removeClass('hidden');
        // Hide all Mediums
        $('.' + pulseItems[i] + '.medium').hide();
        // show all small (except hidden)
        $('.' + pulseItems[i] + '.small').css('display', 'inline-block');
        // remove selected class from pagination
        $('#pagination .' + pulseItems[i]).removeClass('selected');

    }

    // Hide last two Pulse Items
    $('.' + pulseItems[pulseItems.length - 1] + '.small').addClass('hidden');
    $('.' + pulseItems[pulseItems.length - 2] + '.small').addClass('hidden');
    $('.hidden').hide();

    // Hide secondPage, Show firstPage
    $('.secondPage').hide();
    $('.firstPage').show();

});
