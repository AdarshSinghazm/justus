/**
 * TEMPLATES DATA
 * 
 * Each template includes:
 * 1. Video of website (videoSrc & posterImage)
 * 2. Screenshots (array of image previews)
 * 3. Needs of website (requirements: photos, dates, song, letter, etc.)
 * 
 * You can easily replace the dummy data below with your real files anytime!
 */

export const templatesData = [
  {
    id: "the-classic",
    number: "01",
    name: "The Classic",
    price: 300,
    priceDisplay: "₹300",
    tagline: "Soft, timeless & understated",
    description: "Plays your special song in the background when opened. Includes an interactive milestone timeline from when you met until today, plus a hidden unfoldable love letter.",
    badge: "Most popular",
    
    // 1. VIDEO OF WEBSITE
    // Replace with: videoSrc: "/videos/the-classic.mp4"
    videoSrc: null,
    posterImage: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop",
    
    // 2. SCREENSHOTS OF WEBSITE
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop",
        title: "Hero Greeting & Song Player",
        caption: "Starts playing your song softly as soon as they open the link."
      },
      {
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
        title: "Milestone Timeline",
        caption: "A simple visual scroll through your firsts and favorite trips."
      },
      {
        url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
        title: "Unfoldable Love Note",
        caption: "A personal letter that unfolds when tapped."
      },
      {
        url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
        title: "Anniversary Live Counter",
        caption: "Days, hours, and minutes spent together."
      }
    ],

    // 3. NEEDS OF WEBSITE (REQUIREMENTS)
    needs: {
      photos: "10 to 15 photos (portraits, candid & favorite trips)",
      dates: "Anniversary date + first date (optional)",
      song: "1 special song link (Spotify or YouTube)",
      letter: "1 heartfelt letter / note (50–250 words)",
      names: "Both of your names or cute nicknames",
      optional: "A favorite quote or inside joke"
    }
  },
  {
    id: "our-story",
    number: "02",
    name: "Our Story",
    price: 300,
    priceDisplay: "₹300",
    tagline: "A timeline of how you got here",
    description: "Built like a private journal of your relationship. Perfect for anniversary gifts, travel memories, candid voice memos, and inside jokes.",
    badge: "Storybook",
    
    // 1. VIDEO OF WEBSITE
    videoSrc: null,
    posterImage: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop",
    
    // 2. SCREENSHOTS OF WEBSITE
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
        title: "Chapter 1: The Beginning",
        caption: "Where you two met and how it all started."
      },
      {
        url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1200&auto=format&fit=crop",
        title: "Memories & Audio Notes",
        caption: "Short voice messages alongside your favorite photos."
      },
      {
        url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",
        title: "Reasons Why I Love You",
        caption: "Cards you can flip to read sweet little thoughts."
      },
      {
        url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
        title: "Future Bucket List",
        caption: "Places you want to visit together."
      }
    ],

    // 3. NEEDS OF WEBSITE (REQUIREMENTS)
    needs: {
      photos: "12 to 20 photos organized by chapters/trips",
      dates: "When you met, first date, and anniversary",
      song: "1 or 2 songs (or voice memo audio clips)",
      letter: "Short captions for each story chapter",
      names: "Couple's names or nicknames",
      optional: "5 to 10 'Reasons why I love you' bullet points"
    }
  },
  {
    id: "little-moments",
    number: "03",
    name: "Little Moments",
    price: 300,
    priceDisplay: "₹300",
    tagline: "Photobooth strips & casual candids",
    description: "A fun, scrapbook-style website filled with photobooth strips, polaroid frames, tap-to-scratch secret notes, and quick song snippets.",
    badge: "Photobooth vibe",
    
    // 1. VIDEO OF WEBSITE
    videoSrc: null,
    posterImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",
    
    // 2. SCREENSHOTS OF WEBSITE
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
        title: "Film Strip Gallery",
        caption: "Scrollable vertical photobooth strips with candids."
      },
      {
        url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200&auto=format&fit=crop",
        title: "Scratch-off Secret",
        caption: "Swipe or scratch to reveal a surprise message."
      },
      {
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
        title: "Our Playlist Jukebox",
        caption: "Tap to play songs that remind you of each other."
      },
      {
        url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop",
        title: "Inside Jokes & Doodles",
        caption: "Fun little notes and candid snaps."
      }
    ],

    // 3. NEEDS OF WEBSITE (REQUIREMENTS)
    needs: {
      photos: "8 to 14 candid photos (selfies, photobooth, funny moments)",
      dates: "Special date or anniversary date",
      song: "1 favorite upbeat or romantic song",
      letter: "1 secret message for the scratch-off card",
      names: "Both your names",
      optional: "Your favorite inside jokes or cafe memories"
    }
  }
];
