# Star Rating Component

A customizable React component for displaying a star rating with user interaction.

## Installation

To use the Star Rating component in your React application, you can install it using npm or yarn:

```bash
npm install @your-package/star-rating-component
```

or

```bash
yarn add @your-package/star-rating-component
```

## Usage

Import the `StarRating` component into your React application:

```javascript
import StarRating from "@your-package/star-rating-component";
```

Then, you can use the `StarRating` component in your JSX:

```javascript
<StarRating
  maxRating={5}
  color="#fcc419"
  size={48}
  className="star-rating"
  messages={[
    "Poor",
    "Fair",
    "Average",
    "Good",
    "Excellent"
  ]}
  defaultRating={3}
  onSetRating={(rating) => console.log(`Selected rating: ${rating}`)}
/>
```

## Props

The Star Rating component accepts the following props:

- `maxRating`: (number, default: 5) The maximum number of stars to display.
- `color`: (string, default: "#fcc419") The color of the stars when filled.
- `size`: (number, default: 48) The size of each star in pixels.
- `className`: (string) An additional CSS class to apply to the container element.
- `messages`: (array) An array of messages to display below the stars based on the rating. The array should have a length equal to `maxRating`.
- `defaultRating`: (number, default: 0) The initial rating to display when the component is rendered.
- `onSetRating`: (function) A callback function that will be called with the selected rating whenever the user changes the rating.

## Customization

You can customize the appearance of the stars by modifying the CSS styles in your application. The `color` and `size` props allow you to change the color and size of the stars dynamically.

## Example

```javascript
import React from "react";
import StarRating from "@your-package/star-rating-component";

function MyComponent() {
  return (
    <div>
      <h2>Rate this product:</h2>
      <StarRating
        maxRating={5}
        color="#ff9800"
        size={32}
        messages={[
          "Terrible",
          "Bad",
          "Okay",
          "Good",
          "Great"
        ]}
        defaultRating={4}
        onSetRating={(rating) => console.log(`Selected rating: ${rating}`)}
      />
    </div>
  );
}

export default MyComponent;
```

## License

This component is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it as needed. Contributions are welcome! If you find any issues or have suggestions for improvements, please [create an issue](https://github.com/your-username/your-repo/issues) or submit a pull request.

Happy rating! 🌟