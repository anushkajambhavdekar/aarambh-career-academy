# AARAMBH Career Academy — Premium Next.js Website

A complete responsive marketing website for **Akshay Sir's AARAMBH Career Academy & Physics IIT-NEET Group Tutions**, Nanded.

## Stack

- Next.js 16.3.8 (Active LTS)
- React 19.2
- TypeScript
- Tailwind CSS 4.3
- Motion 14 (the current Motion for React package; successor to Framer Motion)

## Run locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run typecheck
npm run build
npm start
```

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  About.tsx
  Contact.tsx
  Featured.tsx
  Footer.tsx
  Gallery.tsx
  Hero.tsx
  Icons.tsx
  Location.tsx
  Navbar.tsx
  Programs.tsx
  Reveal.tsx
  Reviews.tsx
  WhyChooseUs.tsx
data/
  site.ts
public/gallery/
  award.png
  classroom.png
  felicitation.png
  group.png
  physics-poster.png
  storefront.png
  students.png
```

## Business details

Edit `data/site.ts` to update the phone number, WhatsApp number, address, map URL, programs or public copy.

The current WhatsApp CTA uses **8483970019**, the contact number clearly visible in the supplied academy material. The second number visible on the storefront is partially obscured, so it was not guessed or added.

## Functional behaviour

- Navbar anchors scroll to each major section.
- WhatsApp buttons open a direct enquiry chat.
- Contact form validates required fields and opens a pre-filled WhatsApp message.
- Call button uses a `tel:` link.
- Location CTA opens the supplied Google Maps listing.
- Gallery uses the user-supplied academy photographs.
- Review content is explicitly presented as public-review themes, not fabricated quotes.
- No awards, certifications, ratings, fees or achievements were invented.

## Design notes

The visual system uses a navy/blue/yellow palette inspired by the supplied academy material without reproducing its logo or another website's proprietary layout. The UI uses large typography, editorial spacing, premium cards, restrained motion, and mobile-first responsive layouts.
