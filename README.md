# responsiveTable
Responsive tables like a boss

Inspired in tablesaw :)

@docme
```html
<link rel="stylesheet" href="responsiveTable.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="responsiveTable.js"></script>

<table class="example">
    <tr>
        <th>One</th>
        <th>Two</th>
        <th>Three</th>
    </tr>

    <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
    </tr>
    <tr>
        <td>d</td>
        <td>e</td>
        <td>f</td>
    </tr>
    <tr>
        <td colspan="3">g</td>
    </tr>
    <tr>
        <td colspan="1">h</td>
        <td colspan="2">i</td>
    </tr>
</table>
```

```javascript
$('table').responsiveTable();
```