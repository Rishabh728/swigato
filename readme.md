# Swigato

## Objective

The objective of the **Swigato** website is to design a fully responsive and interactive food delivery platform interface.  
It aims to provide an engaging user experience with clear navigation and visually appealing design.  
The goal is to simulate a real-world food-ordering website layout using HTML, CSS, and JavaScript.  
Students will learn how to structure a multi-section webpage with both static and dynamic content.

---

## Synopsis

1. Swigato is a front-end replica of a modern food delivery platform.
2. It includes sections such as Navbar, Hero banner, Cuisines, Testimonials, and Footer.
3. Each part of the page demonstrates layout, styling, and responsiveness.
4. The website uses semantic HTML and organized CSS for clarity and maintenance.
5. It focuses on visual design and layout flow rather than backend integration.

---

## Image Description

### 1. Navbar Image

![alt text](<Screenshot 2025-11-11 095822.png>)

- Displays the Swigato logo, navigation menu, and essential buttons like “Sign in” or “Cart.”
- Helps users access different sections easily and maintain brand visibility across the site.

---

### 2 Sign-In Popup with Blur Effect

![alt text](<./Screenshot 2025-11-11 103815.png>)

This section explains how to create the **Sign-In popup box** that appears in the center of the screen with the background blurred when the "Sign In" button is clicked.

---

#### Objective

To create a login popup form that overlays on the current webpage while blurring the background content.  
The popup should be fully responsive and include a close button.

---

#### Steps to Create

**HTML Setup**

- Add a button with an `id="signIn"` in your navigation bar or header.
- No popup HTML is added directly inside the file; it will be dynamically created using JavaScript.

### 3 JavaScript Instructions — Day/Night Theme Toggle

![Theme](<./Screenshot 2025-11-11 104614.png>)
This JavaScript code allows the user to **switch between light and dark themes** when a specific button (often represented by a sun/moon icon) is clicked.  
It dynamically updates the page’s background, hero section, and button styles by toggling CSS classes.

---

### 4. Hungry Image

![alt text](<Screenshot 2025-11-11 095906.png>)

- Represents the hero or banner section that catches user attention with a catchy tagline or promotional visual.
- It sets the tone for the website and can include a background image or call-to-action button.

---

### 5. Popular Cuisines Image

![Popular Cuisines Image](<Screenshot 2025-11-11 095929.png>)

- Highlights a grid of cuisine categories like Pizza, Biryani, or Desserts.
- Encourages users to explore food types and makes navigation visually interesting.

---

### 6. Top Restaurants Image

![Top Restaurants Image](<Screenshot 2025-11-11 102608.png>)

- Displays popular restaurant cards with images, titles, and brief taglines.
- Gives users an overview of the top-rated restaurants available on Swigato.

---


### 7. Footer Image

![Footer Image](<./Screenshot 2025-11-11 102916.png>)

- Displays company info, social media icons, and quick navigation links.
- Acts as the closing part of the webpage and maintains brand consistency.

---

## Section Instructions

Below are the step-by-step instructions for creating each main section of the **Swigato** website.  
Each section corresponds directly to the images and descriptions given above and helps structure the full webpage layout.

---

##### 1. Navbar Section
- Create a **header** using the `<nav>` tag that includes the Swigato logo, navigation links, search input, and action buttons like **Sign In** and **Cart**.  
- Use **Flexbox** to align elements horizontally with even spacing using `justify-content: space-between`.  
- Make the navbar **sticky** to the top for constant accessibility while scrolling.  
- Add a light background color and minimal box shadow for better visibility.

---

#### 2. Sign-In Popup Section
- Build a **login form popup** that appears when the “Sign In” button is clicked.  
- Use **JavaScript** to dynamically create the popup and overlay blur effect.  
- The popup should contain text fields for **Username** and **Password**, along with a **Close** and **Submit** button.  
- Apply a semi-transparent overlay behind the popup to blur the main content area.

---

#### 3. Day/Night Theme Toggle Section
- Add a toggle button (like a sun/moon icon) with the `id="dayNight"`.  
- Use **JavaScript event listeners** to switch between light and dark modes when the icon is clicked.  
- Toggle CSS classes on the `<body>` and key sections like `.hero` and `.pill` buttons to change colors dynamically.  
- Ensure smooth transitions between themes for better user experience.

---

#### 4. Hero (Hungry) Section
- Create a **full-width hero banner** that visually represents the food delivery theme.  
- Use a background image with overlay text such as *“Live to Eat”* or *“Deliciousness Delivered Fast.”*  
- Center the content using **Flexbox** or **Grid**, and add a call-to-action button like *“Order Now”*.  
- Make it responsive so text and images resize properly on smaller screens.

---

#### 5. Popular Cuisines Section
- Design a **responsive grid** showing various cuisine options like *Pizza*, *Biryani*, *Chinese*, and *Desserts*.  
- Each grid item should contain an image and a label below it.  
- Apply hover effects like scale-up or shadow for interactivity.  
- Use CSS Grid with `grid-template-columns` to adjust automatically for different devices.

---

#### 6. Top Restaurants Section
- Build a **restaurant showcase** displaying multiple restaurant cards.  
- Each card should include an image, name, rating, and a short tagline (e.g., *“Best Biryani in Town”*).  
- Arrange them in a flexible grid layout using **Flexbox** or **CSS Grid**.  
- Add hover animations for a dynamic and modern look.


---

#### 7. Footer Section
- Design a **footer** with three main columns — Company Info, Quick Links, and Social Media Handles.  
- Use a **Grid** layout for neat alignment and a consistent spacing structure.  
- Add copyright text and use icons for social links.  
- Choose a contrasting background color that complements the website’s theme.

---


---

## HTML , CSS and Javascript Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Swigato</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- write your code here -->
    <script defer src="./script.js"></script>
  </body>
</html>
```
