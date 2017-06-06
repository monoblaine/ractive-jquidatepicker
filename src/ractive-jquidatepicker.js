Ractive.decorators.jquidatepicker = function (node, datepickerCfg) {
    var self = this,
        $el = $(node),
        context = self.getContext(node),
        keypath;

    if (!context.isBound()) {
        throw new Error('You should use two-way binding for the "jquidatepicker" decorator.');
    }

    keypath = context.getBindingPath();

    $el.datepicker($.extend(true, {}, datepickerCfg, {
        onSelect: function (dateText) {
            context.set(keypath, dateText);
        }
    }));

    return {
        teardown: function () {
            $el.datepicker('destroy');
        }
    };
};
