# BrunchBox

**A custom e-commerce web application built with Vanilla JavaScript, HTML, CSS, JSON, and PHP.**

**Project Status:** 🚧 Work in Progress / Active Development

## Overview

BrunchBox is an independently developed e-commerce web application designed to provide an interactive online shopping experience.

The project focuses on building core storefront functionality using Vanilla JavaScript without relying on a front-end framework. It incorporates dynamic product rendering, shopping cart management, browser-based data persistence, interactive navigation, and server-side contact form handling.

BrunchBox also serves as an ongoing development project for exploring application architecture, user experience, data management, and web application security.

## Features

### Product Catalog
- Dynamically generates product listings from a local JSON file.
- Retrieves product data asynchronously using the Fetch API.
- Displays product images, names, and prices.
- Uses JavaScript classes to organize product retrieval and UI functionality.

### Shopping Cart
- Adds products to an interactive shopping cart.
- Supports increasing and decreasing item quantities.
- Calculates cart totals and item counts dynamically.
- Allows individual product removal or complete cart clearing.
- Updates product buttons based on cart selection status.

### Local Storage
- Uses the Web Storage API (`localStorage`) to store product and cart information.
- Preserves shopping cart contents across browser sessions.
- Restores previously saved cart items when the application loads.

### User Interface & Navigation
- Slide-out navigation menu and shopping cart.
- Interactive overlays and modal components.
- Custom smooth-scrolling navigation.
- Subscription popup interactions.
- Ongoing UI refinement and navigation improvements.

### Contact Form
- PHP-based contact form processing.
- Server-side handling of submitted contact information.
- Email delivery through PHP's `mail()` function.

*The contact form requires a PHP-enabled server and additional security hardening before production deployment.*

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS | Styling and layout |
| JavaScript (ES6+) | Application logic and interactive functionality |
| JSON | Product catalog data |
| Fetch API | Asynchronous product retrieval |
| Web Storage API | Browser-based data persistence |
| PHP | Server-side contact form handling |

## Application Architecture

BrunchBox organizes its primary JavaScript functionality into three classes:

**Products**
- Retrieves and parses product information from `products.json`.
- Transforms product records into objects used by the storefront.

**UI**
- Renders products and manages shopping cart interactions.
- Updates cart totals, quantities, and interface elements.
- Controls navigation and shopping cart visibility.

**Storage**
- Saves and retrieves product and shopping cart information using `localStorage`.

This separation provides a foundation for maintaining and expanding the application as development progresses.

## Current Development

The following areas are being actively developed or refined:

- User interface styling and layout improvements.
- Navigation functionality and user experience.
- Additional application pages.
- Application security improvements.
- Alternative data storage options.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/casbu/BrunchBox.git
   ```

2. Open the project directory.

3. Run the project using a local development server so the browser can load `products.json` through the Fetch API.

4. Open the application in your browser.

**Note:** PHP contact form functionality requires a PHP-enabled server. Opening the HTML file directly may prevent JSON retrieval due to browser security restrictions.

## Project Scope

BrunchBox currently demonstrates front-end e-commerce functionality, including product browsing and client-side shopping cart management.

The provided implementation does not establish a completed payment-processing or checkout integration. The application should be considered a development project rather than a production-ready storefront.

