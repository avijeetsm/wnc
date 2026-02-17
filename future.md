# Future Improvements

## UI Improvements

### 1. Performance / Image Optimization
- [x] Use Hugo's built-in image pipeline to generate optimized thumbnails, WebP variants — images moved to `assets/`, `img.html` and `bg-image.html` partials generate WebP with fallback (24MB originals → 14MB processed)
- [x] Add `loading="lazy"` to all images below the fold (news cards, campaigns, media gallery, team photos, footer thumbnails)

### 2. Carousel UX
- [ ] Pause carousel on hover so users can read captions (currently `data-bs-pause="false"`)
- [ ] First slide (bg0.jpg) has no overlay/caption — consider adding a subtle tagline or centered logo watermark

### 3. Accessibility
- [ ] Replace generic `alt="Media Coverage"` (repeated 20+ times) with descriptive alt text for each media image
- [ ] Gallery images use `onclick` which isn't keyboard-accessible — wrap in `<button>` or `<a>` elements
- [ ] The top-bar phone/email links disappear on mobile but social icons remain — phone number is arguably more important on mobile

### 4. Navbar
- [ ] Dropdown active item uses Bootstrap's default blue highlight — consider a subtle green background instead
- [ ] "Become a Member" button in top bar has no visible hover state change on amber background

### 5. Footer
- [ ] Verify "Latest News" thumbnail links use correct context (`.RelPermalink` vs `$.RelPermalink`)
- [ ] Add a "Back to top" text link at the bottom of the footer (in addition to the floating button)

### 6. Contact Page
- [ ] Edge case: contact card `border-right` dividers and `col-md-4` breakpoint both at 768px — verify alignment

### 7. Typography & Spacing
- [ ] "About Body" section on about page is bare white with just two paragraphs — add a background or merge into section above
- [ ] Mission and Vision text blocks are dense — break into shorter sentences or add bullet points

### 8. Mobile Refinements
- [ ] `background-attachment: fixed` (parallax) doesn't work on iOS Safari — consider disabling for mobile
- [ ] Campaign tile images go down to 140px on mobile — some are hard to read at that size

---

## Content Improvements

### 1. Stale / Dated Content
- [ ] Events section on homepage says "Upcoming" but all events are from 2020-2025 — rename to "Recent Events" if nothing is scheduled
- [ ] "7+ Years Active" stat should be auto-calculated from a founding date so it stays current

### 2. About Page
- [ ] Final section is thin (two short paragraphs) — add concrete achievements, numbers (species documented, trees planted, people reached), or a timeline
- [ ] Add registration details, 80G/12A tax exemption status, FCRA registration if applicable

### 3. Reports Page
- [ ] Only 5 reports listed — add more if they exist, or add brief summaries/key findings for each
- [ ] All reports link to OneDrive — host PDF copies locally as backup in case links break

### 4. Donate Page
- [ ] Add mention of 80G tax benefits — one of the biggest motivators for Indian donors
- [ ] Add suggested donation tiers (e.g. "₹500 plants a tree, ₹2000 sponsors a survey")
- [ ] "Sponsor a Plantation / Workshop / Event / Survey" highlights are just labels — link to contact form or add approximate costs

### 5. Team Page
- [ ] Bios are very long (150+ words each) — add "Read more" toggle to show first 2 lines and expand on click
- [ ] Add LinkedIn or personal profile links for team members

### 6. Missing Pages / Content
- [ ] **Photo Gallery** — dedicated page showing on-ground work (bird surveys, plantation drives, rescued animals)
- [ ] **Our Impact / Achievements** — page or homepage section listing concrete outcomes (species documented, hectares covered, reports published)
- [ ] **Testimonials / Partner Logos** — display logos or quotes from forest departments, CSR partners, or other NGOs
- [ ] **Blog / Long-form Content** — news articles are very short — add field notes from surveys for SEO and engagement

### 7. SEO & Meta
- [ ] Add `og:image` meta tag using the article's featured image for better social sharing
- [ ] Add `sitemap.xml` reference in `robots.txt` or `<head>`
- [ ] Write custom meta descriptions for key pages (About, Donate, Contact)

### 8. Engagement
- [ ] Add newsletter signup / email capture in footer or above Join CTA
- [ ] Add WhatsApp floating button (very common for Indian NGOs)
- [ ] Add Twitter/X social link if WNC has an account

---

## Quick Wins (high impact, low effort)

1. Add `loading="lazy"` to all below-fold images
2. Rename "Upcoming" to "Recent Events" on homepage
3. Add 80G tax benefit mention on the Donate page
4. Add WhatsApp floating button
5. Add `og:image` meta tag for article pages
6. Truncate long team bios with a "Read more" toggle
