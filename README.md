````markdown
# SpendWise Dashboard

## Week 4: CSS Grid & Flexbox Dashboard

This week, I rebuilt my Budget Tracker into a responsive SpendWise Dashboard Shell using modern CSS layout techniques.

The dashboard is a visual interface with realistic static financial information. No JavaScript functionality was added for this week's assignment.

## Dashboard Features

The dashboard contains:

- Sidebar navigation menu
- Dashboard header
- Monthly budget summary
- Six financial category cards
- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

## CSS Grid

CSS Grid is used to create the overall dashboard layout and organize the six financial category cards.

The desktop dashboard uses a sidebar and main content area. The category cards are arranged in a three-column grid.

## Flexbox

Flexbox is used inside:

- Sidebar navigation
- Dashboard header
- Monthly budget summary
- Individual financial cards

This creates flexible and organized content layouts.

## CSS Custom Properties

The application uses CSS variables inside `:root` for the main theme.

Variables include:

- Brand color
- Accent color
- Surface color
- Background color
- Primary text color
- Secondary text color
- Border color

Using CSS custom properties makes the theme easier to maintain and change.

## Responsive Design

A media query is used below 768px.

On smaller screens:

- The sidebar and main content use a single-column layout.
- Navigation items can wrap.
- The dashboard header becomes vertical.
- Financial cards display one per row.

The responsive layout was tested using the browser's DevTools Device Toolbar.

## Card Micro-interactions

The financial cards include hover and keyboard-focus effects.

The effects use:

- `transform`
- `box-shadow`
- CSS transitions

The transition duration is 200ms, which is below the required 250ms maximum.

The cards use `tabindex="0"` so they can also receive keyboard focus.

## Dark Theme

As a stretch goal, a dark theme was added using:

```css
@media (prefers-color-scheme: dark)
````

The dark theme overrides the CSS custom properties while keeping the same layout.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Media Queries

## Project Files

* `index.html` - Contains the dashboard structure and static financial content.
* `style.css` - Contains the dashboard layout, theme, responsive design, and micro-interactions.
* `README.md` - Documents the project and the techniques used.

## Author

Mohamed Aden Abdullahi

```
```
