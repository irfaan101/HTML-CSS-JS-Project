function ToastBuilder(options) {
    var opts = options || {};

    opts.defaultText = opts.defaultText || 'default text';
    opts.displayTime = opts.displayTime || 3000;
    opts.target = opts.target || 'body';

    return function (text) {
        $('<div/>')
            .addClass('toast')
            .prependTo($(opts.target))
            .text(text || opts.defaultText)
            .queue(function (next) {
                $(this).css({
                    'opacity': 1
                });
                var topOffset = 15;
                $('.toast').each(function () {
                    var $this = $(this);
                    var height = $this.outerHeight();
                    var offset = 15;
                    $this.css('top', topOffset + 'px');

                    topOffset += height + offset;
                });
                next();
            })
            .delay(opts.displayTime)
            .queue(function (next) {
                var $this = $(this);
                var width = $this.outerWidth() + 20;
                $this.css({
                    'right': '-' + width + 'px',
                    'opacity': 0
                });
                next();
            })
            .delay(600)
            .queue(function (next) {
                $(this).remove();
                next();
            });
    };
}

// customize it with your own options
var myOptions = {
    defaultText: 'Toast, yo!',
    displayTime: 3000,
    target: 'body'
};

var showtoast = new ToastBuilder(myOptions);

$('#toast-btn').click(function () {
    showtoast($('#textbox').val());
});

$('#textbox').keypress(function (e) {
    if (e.which == 13) {
        showtoast($('#textbox').val());
        return false;
    }
});

// Demo:

$('body')
    .queue(function (next) {
        showtoast('Hello! from Coding Torque.');
        next();
    })