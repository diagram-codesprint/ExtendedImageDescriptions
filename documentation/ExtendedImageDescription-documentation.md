# Documentation for Extended Image Description (EID)

## Reader Experience

EID allows screenreader users to access extended descriptions of images, that can include markup.

It allows sighted readers of your documents to see the descriptions you provide for screenreader users.

The descriptions can also include image credits-- information that must be available, but readers may not always want to see.

Ordinarily, you'll provide a button that allows readers to access the description information (though you can also arrange for the information to be displayed by default.)

Sighted readers can reposition the information, so that they can see the image and the description at the same time. Using a pointing device this is done by dragging the description. When a description is open, the arrow keys move the description.

[future] They can also resize the information, in case the information is too big to fit in a small text box. This can also be done by keyboard control.

## Author Experience

EID allows you, the author, to control many aspects of the reader experience:

- The content of the description, including whether alt text for images is automatically included in the description.
- Whether the description is displayed by default.
- The appearance and position of the button that readers use to display the decriptions.
- Whether the button that controls a description is always visible, or appears only when the pointer is over the figure ("hover" behavior).

## How you control these things

### Content of the description

Your image is specified in HTML as a _figure_ element, as in the following example:

```html
<figure>
  <img src="images/louvre.jpg" alt="The Louvre" aria-details="ext1" />
  <details id="ext1">
    This is a photograph of the Louvre Museum in France at night. The entrance
    to the museum is a large pyramid made out of glass.
  </details>
</figure>
```

As you see, the description is specified in a _details_ element associated with the figure.

Note that "ext1" is an _id-ref_, that links the figure to its details. This must be unique for each figure on the HTML page. It's crucial that the same id-ref appear in the figure and its details.

In this example, the description is just text. But you can include markup in your description if you wish.

By default, sighted readers will see the alt text, added before the description. So in the example, sighted readers would see

> The Louvre
> This is a photograph of the Louvre Museum in France at night. The entrance to the museum is a large pyramid made out of glass.

if they choose to see the description.

Note that the alt text is NOT added for screenreader users, since they will already have heard the alt text.

If you prefer not to show the alt text to sighted readers, you can control that in two ways. You can add the attribute _data-noalt_ to the detail tag for a figure, as in this example:

```html
<details id="ext1" open data-noalt></details>
```

You can also specify this behavior for all figures on your page when you invoke EID, as described in the _Making EID work_ section, below.

### Whether the description is shown to sighted readers by default

Normally, sighted users are shown a button, and they press the button to see the description. If you want the description to be shown without requiring them to press the button, you can add the attribute _open_ to the details element:

```html
<details id="ext1" open></details>
```

### The appearance and position of the button that readers use to display the description

The button is displayed in the top right corner of the image, by default. If this position obscures an important part of the image, the button can be moved to the top left corner, by changing the markup for the figure in this way:

```html
<details id="ext1" data-position="top left"></details>
```

Other possible placements are "bottom left" or "bottom right".

By default, the button is shown as info-circle. To change this, add a summary element to the markup for a figure, as in the following example. Be sure to add a _title_ attribute to your summary element, so that the screenreader can describe the button. The title will also serve as a tooltip for the button. Here we've linked to Font Awesome, to pick up an icon of cat for the button, and added a summary element:

```html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
  integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
  crossorigin="anonymous"
/>
<figure>
  <img src="images/louvre.jpg" alt="The Louvre" aria-details="ext1" />
  <summary title="More information"
    ><span class="fas fa-cat" aria-hidden="true"></span
  ></summary>
  <details id="ext1">
    This is a photograph of the Louvre Museum in France at night. The entrance
    to the museum is a large pyramid made out of glass.
  </details>
</figure>
```

_Note_: If you are using a framework that has other ways to provide accessible names for controls, and/or tooltips, you can use that rather than providing a title element.

### Hover behavior

By default, the button that controls the display of a description only appears when the pointer is on the figure. To change this, so that the control is always shown, add a new style sheet (.css file) to your project, and include the following style rule:

```css
.ext-summary {
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
}
```

_Note_: On mobile devices or tablets, with no pointer, hover behavior is a bit different. Tapping a figure causes the button to be displayed.

## Making EID work

Your project will have a file with Javascript code that executes after your page loads. In that file you'll need to ask EID to enhance your page with the features we've just described. Here is a line of code to do that:

```javascript
Details.enhanceAll();
```

If you do not want alt text to be included when your description is shown to sighted readers, you can add an option, as follows:

```javascript
Details.enhanceAll({noalt=true});
```

EID also provides finer levels of control. If you have detail elements in figures on your page that you do not want EID to process, you can use a call like this:

```javascript
Details.enhanceAll('some selector');
```

where "some selector" picks out only the detail elements you want EID to process. You can include both a selector, and the noalt option, like this:

```javascript
Details.enhanceAll('some selector', { noalt: true });
```

EID also provides a call that will enhance a single element:

```javascript
Details.enhance(detailsElement, [options]);
```

## EID Style sheet

Some aspects of EID's behavior are specified in EID's CSS style sheet. If you don't include this style sheet in your project, you'll likely see some divergence from the description above. For example, positioning of the description control will probably be different.
