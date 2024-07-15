Overview

This project is a responsive, accessible website that features a theme switcher, image effects, and full keyboard navigation support. The website includes pages for Home, Products, About Us, and Contact Us.

Features

Responsive Design: The website is fully responsive and adjusts its layout based on the screen size.
Theme Switcher: Users can switch between light and dark themes.
Image Effects: Images in the product grid enlarge on hover, and captions appear.
Keyboard Navigation: All buttons, links, and inputs are accessible via keyboard navigation.
Screen Reader Friendly: The website uses semantic HTML and appropriate ARIA roles to ensure compatibility with screen readers.
No Keyboard Traps: Users can navigate through the entire website using the keyboard without getting trapped in any section.


Notes for Features

Theme Switcher Implementation

The theme switcher toggles between light and dark modes using CSS custom properties and a data attribute on the <html> element. The switchTheme function updates the data-theme attribute.

Image Effects

Images in the product grid have a hover effect that enlarges the image and displays a caption. This is achieved using CSS transitions and the :hover pseudo-class.

Keyboard Navigation

Interactive elements are focusable via the tabindex attribute where necessary. The focus indicator is styled using the :focus pseudo-class in CSS. Additionally, a JavaScript snippet ensures that custom buttons can be activated with the Enter or Space key.


