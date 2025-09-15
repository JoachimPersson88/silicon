🔹 Steg 1: Projektförberedelser ✅

1. Skapa repo på GitHub ✔️  
2. Namnge projektet t.ex. silicon-website ✔️  
3. Skapa main-branch ✔️  
4. Lägg in en enkel README.md med projektinfo ✔️  
5. Skapa struktur lokalt:  
  - index.html ✔️  
  - style.css ✔️  
  - script.js ✔️  
  - assets/ (bilder, ikoner etc.) ✔️  
6. Installera ev. hjälpbibliotek ✔️  
7. Bestäm om du vill använda Tailwind eller Bootstrap (frivilligt).  
  Annars kör du med ren HTML/CSS/JS. ✔️

🔸 Steg 2: Designanalys (pågående)

- Gå igenom Silicon Design Template.fig i Figma.
- Identifiera och dokumentera sektionerna (uppdatera vid behov):
  - Header
  - Hero
  - Brands
  - Features
  - How-Does-It-Work
  - App Features
  - Testimonials
  - FAQ (Accordion)
  - Subscribe
  - Footer
- Notera och analysera färger, typsnitt, spacing, knappar etc.
- Uppdatera analysen löpande under projektets gång.
- Dokumentera eventuella designändringar eller tillägg.

1. Öppna Silicon Design Template.fig i Figma.  
2. Identifiera sektionerna (VG kräver alla):  
    - Header  
    - Hero  
    - Brands  
    - Features  
    - How-Does-It-Work  
    - App Features  
    - Testimonials  
    - FAQ (Accordion)  
    - Subscribe  
    - Footer  
    Notera färger, typsnitt, spacing, knappar etc.

🔸 Steg 3: Kodstruktur & Branch-strategi (pågående)

För VG måste du använda olika brancher för sektionerna:

- hero-section  
- brand-section  
- features-section  
- faq-section  
- … osv.

**Arbetsflöde:**  
1. Skapa branch  
2. Koda sektionen  
3. Commit & push  
4. Skapa pull request  
5. Merge in i main

🔸 Steg 4: Responsiv Design

Arbeta mobile-first med följande brytpunkter:  
- Mobilvy: 375px  
- Tablet: ~768px  
- Desktop: 1440px

🔸 Steg 5: Dark/Light Theme

1. Skapa CSS-variabler för färger, t.ex. --bg, --text, --primary.  
2. Implementera en toggle-knapp i headern med JavaScript.  
3. När användaren klickar på knappen ska färgvariablerna växla till dark-mode.

🔸 Steg 6: Funktionalitet

- Accordion i FAQ  
  Endast en panel öppen i taget.  
  Stäng automatiskt den andra när man öppnar en ny.  
- Theme toggle  
  Byt färger globalt.  
  Ikon (måne/sol) för feedback.

🔸 Steg 7: Versionshantering

- Varje sektion kodas på en egen branch.  
- Commits ska vara tydliga och beskrivande, till exempel: "Add hero section" eller "Fix FAQ accordion bug".

🔸 Steg 8: Slutkontroll (VG-checklista)

- [ ] Responsiv för desktop, tablet, mobil.  
- [ ] Mobile-first.  
- [ ] Light/Dark theme via toggle.  
- [ ] Alla sektioner inkluderade.  
- [ ] FAQ fungerar korrekt.  
- [ ] GitHub repo med branches per sektion.
