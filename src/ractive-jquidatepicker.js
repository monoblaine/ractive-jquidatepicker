Ractive.decorators.jquidatepicker = function (node) {
    var self = this,
        $el = $(node),
        context = self.getContext(node),
        keypath;

    if (!context.isBound()) {
        throw new Error('You should use two-way binding for the "jquidatepicker" decorator.');
    }

    keypath = context.getBindingPath();

    $el.datepicker({
        onSelect: function (dateText) {
            context.set(keypath, dateText);
        }
    });

    return {
        teardown: function () {
            $el.datepicker('destroy');
        }
    };
};
