# Waxing the City Pleasanton Website

This folder contains a simple microsite for the Waxing the City franchise in **Pleasanton, CA**.  
It mirrors the look and feel of the corporate website but adds useful extras like an embedded map, a services &amp; pricing grid, and a short reviews section.

## Files

* **index.html** – Main page with hero banner, studio info, services, gallery, map, reviews and footer.
* **styles.css** – Stylesheet defining the layout, colours and responsive behaviour.
* **script.js** – Small script to cycle through customer reviews every few seconds.
* **images/** – Contains all of the visual assets used on the page (downloaded from the corporate site).

## Running the site locally

You can view the site directly by opening `index.html` in your browser.  
For a more robust experience, start a local server from the `wtc‑pleasanton‑site` directory:

```bash
python3 -m http.server 8000
```

Then navigate to [http://localhost:8000](http://localhost:8000) in your browser.

## Customising content

* **Hero section:** Replace `images/StudioLP_Header.png` with another image to change the hero banner.  
* **Studio Info:** Edit the address, phone number or hours in the `.studio-info` section of `index.html`.
* **Services:** Add or remove cards from the `.services-grid` container to reflect your full service menu.
* **Map:** Update the `iframe` source in the `.map-section` if you have a custom embed code.
* **Reviews:** Replace the placeholder reviews in the `.reviews` section with real testimonials from Google or Yelp.

## Notes

* This site is intended as a local marketing page for franchise owners.  
* All images are downloaded from the official Waxing the City website as of 2025-09-21.  
* Before publishing, verify that your usage complies with brand guidelines and franchise agreements.