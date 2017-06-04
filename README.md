# About

This is a [Ractive.js](https://ractive.js.org/) decorator for jQuery UI datepicker.

# Demo

https://jsfiddle.net/monoblaine/x1zw11Le/

# Usage

## Template

```html
<script type="text/ractive" id="template">
    <p><input type="text" value="{{value}}" as-jquidatepicker></p>
    <p>value: {{value}}</p>
</script>
```

## Ractive instance

```js
new Ractive({
    el: document.body,
    template: '#template',

    data: {
        value: '2017-05-26'
    }
})
```

# TODO

* Needs to be modularized, ES6-compatible, etc.
