# v-css-app-framework

### Main Layout Classes

These classes provide general styling and structure for the main content area of the webpage.

- `main`: Defines the overall width and padding of the main content area.

  - `.container`: A centered container that takes up 70% of the width of its parent.
  - `.row`: Defines a flexible row layout, with child alignment classes.

    - `.right`: Aligns children to the right.
    - `.left`: Aligns children to the left.
    - `.center`: Centers the children.
    - `.spaced`: Distributes children with space between.

  - `[class*="col"]`: Column styling. Includes responsive classes for mobile (`.s1`, `.s2`, etc.), tablet (`.m1`, `.m2`, etc.), and desktop (`.l1`, `.l2`, etc.) layouts. Each class corresponds to a different percentage width of the container.

### Form Layout Classes

These classes help structure and style forms, making them responsive and well-organized.

- `form`: Defines a flexible form layout with wrapping.
  - `div`: Contains column classes for form elements.
    - `.form-col-12`: Full-width column, minus padding.
    - `.form-col-6`: Half-width column, minus padding.
    - `.form-col-4`: One-third width column, minus padding.
    - Mobile view classes: Ensures that all columns are full width minus padding on screens smaller than 768px.

#### Usage

These classes can be combined to create complex layouts, with specific alignment and sizing based on the screen size. For example:

```html
<main>
  <div class="container">
    <div class="row">
      <div class="col s12 m6 l4">Content here</div>
      <div class="col s12 m6 l8">Content here</div>
    </div>
  </div>
</main>
```

```html
<main>
  <div class="container">
    <div class="row right">
      <div class="col s12 m6 l6">Content here</div>
    </div>
  </div>
</main>
```

```html
<form>
  <div class="form-col-12">Full width input</div>
  <div class="form-col-6">Half width input</div>
  <div class="form-col-4">One-third width input</div>
</form>
```

This allows developers to create flexible and responsive designs that adapt to different devices and screen sizes, maintaining a consistent and user-friendly experience.

### Heading Classes (h1 - h6)

These classes set specific font sizes and weights for each heading level, incorporating a fluid design that adjusts the font size based on the viewport width.

- `h1`: Main heading, larger and bolder.
- `h2`: Secondary heading, slightly smaller.
- `h3`: Tertiary heading.
- `h4`: Fourth-level heading.
- `h5`: Fifth-level heading, smaller.
- `h6`: Sixth-level heading, smallest.

### Text Size Classes

These classes provide different text sizes, allowing more nuanced control over the appearance of the text.

- `.text-s`: Small text size.
- `.text-l`: Large text size.
- `.text-xl`: Extra-large text size.

### Text Color Classes

These classes define different text colors, each associated with different contexts or messages.

- `.text-info`: Informational text, colored in blue.
- `.text-error`: Error or warning text, colored in red.
- `.text-light`: Light-colored text, typically used against a dark background.
- `.text-dark`: Dark-colored text, typically used against a light background.
- `.text-success`: Indicates success or a positive message, colored in green.
- `.text-warning`: Warning text, colored in yellow, typically used for caution messages.

#### Usage

These classes can be applied directly to HTML elements to control their appearance according to the specific design needs. For example:

```html
<h1 class="text-success">This is a Successful Heading</h1>
<p class="text-l text-info">This is a large, informational paragraph.</p>
```

This approach allows developers to utilize a consistent design language across different parts of a website or application.

### Default Button Styling

These classes define the default appearance for buttons and input types of "submit" and "button."

- `input[type="submit"], input[type="button"], button`: Styles the default appearance with a blue background, white text color, padding, and other properties. Includes a drop shadow and a smooth transition effect for hover states.
  - `:hover`: Affects the opacity when hovered, creating a subtle interaction effect.

### Color Variants

These classes allow for customization of the button's background color, providing additional visual cues for different purposes or states.

- `.green`: A green variant, often used to indicate success or a positive action (e.g., "Save," "Accept").
- `.red`: A red variant, often used to indicate danger or a negative action (e.g., "Delete," "Cancel").
- `.orange`: An orange variant, which can be used to indicate caution or a secondary action.

#### Usage

These color variant classes can be applied directly to a button or input element to modify its appearance. For example:

```html
<button class="green">Save</button>
<button class="red">Delete</button>
<input type="button" class="orange" value="Cancel" />
```

The color variants offer a simple way to adapt the styling of buttons based on their function within the user interface, providing intuitive visual cues to the users.

### Card Component

#### `.card`

Defines a standard card component with a white, translucent background and a blurred backdrop filter effect. Padding, margins, and border radius provide consistent spacing and a softer appearance.

#### `.card-header`

Styles the header of a card, with bold font weight and a margin at the bottom.

#### `.card-content`

Styles the main content area of the card, with a specific font size and color.

#### `.card-footer`

Styles the footer of the card, with a smaller font size, a specific color, and right-aligned text.

### Call-To-Action Button

#### `.cta`

Defines a call-to-action button with a green background color (with transparency), white text color, center alignment, and other common button styling properties. Includes a smooth transition effect for hover states.

- `:hover`: Slightly enlarges the button and deepens the background color on hover, creating a visual interaction effect.

### Modal Component

#### `dialog`

Styles a modal dialog component. Includes fixed positioning to center the modal in the viewport, a blurred backdrop filter, and a white, translucent background with rounded corners. Multiple responsive breakpoints define the maximum width of the modal's main content area.

#### `dialog article`

Defines the appearance of the main content area inside the modal dialog. This includes a "glass effect" background, consistent padding, rounded corners, and a soft shadow for depth.

#### Header and Footer Inside Modal

- `dialog article>header, dialog article>footer`: Styles the header and footer inside the modal's main content area.
- `dialog article .close`: Defines the appearance and behavior of a close button inside the modal, including a transition effect on hover/focus.

#### Open and Close Animations for Modal

Various classes and keyframe animations define the open/close animations for the modal dialog, including easing and timing properties.

```html
<!-- Button to trigger the modal -->
<button
  class="contrast"
  data-modal-target="modal-example"
  onClick="toggleModal(event)"
>
  Launch demo modal
</button>

< !-- Modal -->
<dialog id="modal-example">
  <article>
    <a
      href="#close"
      aria-label="Close"
      class="close"
      data-modal-target="modal-example"
      onClick="toggleModal(event)"
    ></a>
    <h3>Confirm your action !</h3>
    <p>
      Cras sit amet maximus risus. Pellentesque sodales odio sit amet augue
      finibus pellentesque. Nullam finibus risus non semper euismod.
    </p>
    <footer>
      <a
        href="#cancel"
        role="button"
        class="secondary"
        data-modal-target="modal-example"
        onClick="toggleModal(event)"
        >Cancel </a
      ><a
        href="#confirm"
        role="button"
        data-modal-target="modal-example"
        onClick="toggleModal(event)"
        >Confirm
      </a>
    </footer>
  </article>
</dialog>
```
