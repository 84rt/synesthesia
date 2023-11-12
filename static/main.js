$(document).ready(function() {
    var colors = {};

    // Generate color picker
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        var colorPicker = $('<input>').attr({
            'type': 'color',
            'id': 'color-' + char,
            'value': '#000000'
        });
        var label = $('<label>').attr('for', 'color-' + char).text(char);
        $('#color-picker').append(label, colorPicker, ' ');
        colors[char] = '#000000';
    }

    // Update color when color picker changes
    $('input[type=color]').change(function() {
        var char = $(this).prev().text();
        var color = $(this).val();
        colors[char] = color;
    });

    // Generate colored text when submit button is clicked
    $('#submit-text').click(function() {
        var text = $('#input-text').val().toUpperCase();
        var output = '';
        var outputBg = '';
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            var color = colors[char] || '#FFFFFF';
            output += '<span style="color:' + color + '">' + char + '</span>';
            outputBg += '<span style="background-color:' + color + '; color:' + color + '">' + char + '</span>';
        }
            // Set the text color of each span element to the same color as the background color
        $('span').each(function() {
            var bgColor = $(this).css('background-color');
            $(this).css('color', bgColor);
        });

        // Hide the output-area-bg by default
        $('#output-area-bg').hide();

        // Toggle the visibility of the output-area and output-area-bg based on user choice
        $('#toggle-output').click(function() {
            if ($('#toggle-output').is(':checked')) {
                $('#output-area').hide();
                $('#output-area-bg').show();
            } else {
                $('#output-area').show();
                $('#output-area-bg').hide();
            }
        });

        $('#output-area').html(output);
        $('#output-area-bg').html(outputBg);
 

    });


});
