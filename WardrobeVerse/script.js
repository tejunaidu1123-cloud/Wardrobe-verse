// Teju's Wardrobe — Smart AI Fashion & Outfit Studio Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // Reusable Currency Conversion & INR Formatter System
  const USD_TO_INR_RATE = 83.5; // Standard conversion rate: 1 USD ≈ 83.5 INR

  /**
   * Reusable price formatting and conversion function.
   * Automatically formats prices into clean Indian Rupee format (e.g., ₹1,299, ₹2,499, ₹999).
   * @param {number} amount - Price amount in INR (or USD if isUSD is true)
   * @param {boolean} isUSD - Optional flag indicating if input amount is in USD
   * @returns {string} Formatted Indian Rupee currency string
   */
  function formatINR(amount, isUSD = false) {
    if (typeof amount !== 'number' || isNaN(amount)) return '₹0';
    const inrValue = isUSD ? Math.round(amount * USD_TO_INR_RATE) : Math.round(amount);
    return `₹${inrValue.toLocaleString('en-IN')}`;
  }

  /**
   * Reusable helper to convert USD amounts to INR numeric values.
   * @param {number} usdAmount - Amount in USD
   * @returns {number} Numeric amount in INR
   */
  function convertUSDToINR(usdAmount) {
    return Math.round(usdAmount * USD_TO_INR_RATE);
  }

  // Comprehensive Product Catalog using ultra-realistic high-resolution fashion photography & INR pricing
  const PRODUCTS = [
    {
      id: 'p1',
      name: 'Oxford Button-Down Shirt',
      category: 'shirts',
      price: 499,
      colour: 'Sky Blue',
      occasion: ['office', 'casual', 'college'],
      season: ['all'],
      gender: 'men',
      img: 'images/shirts/download.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shirts/download.jpeg',
        'images/shirts/download (1).jpeg',
        'images/shirts/download (3).jpeg'
      ],
      fabric: '100% Egyptian Giza Cotton',
      fit: 'Modern Tailored Fit',
      rating: 4.9,
      reviewsCount: 142,
      desc: 'Breathable crisp cotton Oxford shirt with pearlescent buttons, versatile for both casual Fridays and executive presentations.'
    },
    {
      id: 'p2',
      name: 'Tailored Linen Resort Shirt',
      category: 'shirts',
      price: 599,
      colour: 'Sand Beige',
      occasion: ['casual', 'semi-formal'],
      season: ['summer'],
      gender: 'unisex',
      img: 'images/shirts/download (1).jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shirts/download (1).jpeg',
        'images/shirts/download.jpeg',
        'images/shirts/download (3).jpeg'
      ],
      fabric: '100% French Flax Linen',
      fit: 'Relaxed Resort Silhouette',
      rating: 4.8,
      reviewsCount: 98,
      desc: 'Lightweight pure linen shirt with breezy silhouette tailored for beachside getaways, Mediterranean lunches, and warm afternoons.'
    },
    {
      id: 'p3',
      name: 'Modern Slim-Fit Navy Shirt',
      category: 'shirts',
      price: 449,
      colour: 'Deep Navy',
      occasion: ['office', 'interview'],
      season: ['all'],
      gender: 'men',
      img: 'images/shirts/download (2).jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shirts/download (2).jpeg',
        'images/shirts/images.jpeg',
        'images/shirts/black shirt.jpg'
      ],
      fabric: 'Non-Iron Stretch Cotton Twill',
      fit: 'Slim Ergonomic Cut',
      rating: 4.9,
      reviewsCount: 164,
      desc: 'Sleek dark navy dress shirt crafted with wrinkle-resistant stretch fabric for sharp all-day comfort.'
    },
    {
      id: 'p4',
      name: 'Classic Chambray Work Shirt',
      category: 'shirts',
      price: 499,
      colour: 'Light Indigo',
      occasion: ['casual', 'college'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/shirts/download (3).jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shirts/download (3).jpeg',
        'images/shirts/download.jpeg',
        'images/shirts/white-casual-shirt.jpg'
      ],
      fabric: 'Vintage Weave Slub Chambray',
      fit: 'Classic Straight Fit',
      rating: 4.7,
      reviewsCount: 84,
      desc: 'Durable and timeless chambray cotton shirt featuring mother-of-pearl buttons and twin chest utility pockets.'
    },
    {
      id: 'p5',
      name: 'Executive White Formal Shirt',
      category: 'shirts',
      price: 549,
      colour: 'Pristine White',
      occasion: ['office', 'interview', 'wedding'],
      season: ['all'],
      gender: 'men',
      img: 'images/shirts/images.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shirts/images.jpeg',
        'images/shirts/white-casual-shirt.jpg',
        'images/shirts/download (2).jpeg'
      ],
      fabric: '2-Ply Egyptian 120s Cotton',
      fit: 'Bespoke Executive Cut',
      rating: 5.0,
      reviewsCount: 220,
      desc: 'Pristine Egyptian cotton white dress shirt with structured spread collar and double-barrel cuffs.'
    },
    {
      id: 'p6',
      name: 'Midnight Silk Blend Shirt',
      category: 'shirts',
      price: 699,
      colour: 'Obsidian Black',
      occasion: ['party', 'semi-formal'],
      season: ['all'],
      gender: 'men',
      img: 'images/shirts/black shirt.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shirts/black shirt.jpg',
        'images/tshirts/black-tshirt.jpg',
        'images/shirts/download (2).jpeg'
      ],
      fabric: '60% Silk, 40% Modal Blend',
      fit: 'Flowing Relaxed Drape',
      rating: 4.9,
      reviewsCount: 110,
      desc: 'Opulent silk-blend shirt with subtle lustrous finish, designed for nightlife, celebrations, and formal evenings.'
    },
    {
      id: 'p7',
      name: 'Premium Minimalist Crewneck',
      category: 'tops',
      price: 299,
      colour: 'Chalk White',
      occasion: ['casual', 'college'],
      season: ['summer', 'all'],
      gender: 'unisex',
      img: 'images/tshirts/tshirt.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/tshirts/tshirt.jpeg',
        'images/tshirts/mens t shirts.webp',
        'images/dresses/casual.jpeg'
      ],
      fabric: '240 GSM Heavyweight Combed Cotton',
      fit: 'Structured Boxy Fit',
      rating: 4.8,
      reviewsCount: 310,
      desc: 'Heavyweight organic combed cotton t-shirt with reinforced ribbed collar that never sags or loses shape.'
    },
    {
      id: 'p8',
      name: 'Urban Casual Relaxed Tee',
      category: 'tops',
      price: 349,
      colour: 'Heather Slate Grey',
      occasion: ['casual', 'college'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/dresses/casual.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/dresses/casual.jpeg',
        'images/tshirts/black-tshirt.jpg',
        'images/tshirts/tshirt.jpeg'
      ],
      fabric: '100% Bio-Washed Ring-Spun Cotton',
      fit: 'Drop Shoulder Streetwear Fit',
      rating: 4.7,
      reviewsCount: 154,
      desc: 'Effortless drop-shoulder silhouette designed for streetwear layering and everyday modern comfort.'
    },
    {
      id: 'p9',
      name: 'Editorial High-Street Top',
      category: 'tops',
      price: 499,
      colour: 'Desert Beige',
      occasion: ['party', 'semi-formal'],
      season: ['all'],
      gender: 'women',
      img: 'images/dresses/fashion.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/dresses/fashion.jpeg',
        'images/dresses/semi formal.webp',
        'images/dresses/party wear.jpeg'
      ],
      fabric: 'High-Twist Rib Knit & Modal',
      fit: 'Sculpted Asymmetric Drape',
      rating: 4.9,
      reviewsCount: 88,
      desc: 'Runway-inspired neutral draped top that blends high fashion with modern minimalism and sculpted silhouettes.'
    },
    {
      id: 'p10',
      name: 'Campus Varsity Relaxed Tee',
      category: 'tops',
      price: 399,
      colour: 'Forest Green',
      occasion: ['college', 'casual'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/dresses/college.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/dresses/college.jpg',
        'images/tshirts/tshirt.jpeg',
        'images/tshirts/mens t shirts.webp'
      ],
      fabric: 'Brushed French Terry Cotton',
      fit: 'Oversized Collegiate Cut',
      rating: 4.8,
      reviewsCount: 120,
      desc: 'Vintage collegiate graphic tee made from ultra-soft jersey cotton with athletic rib trims.'
    },
    {
      id: 'p11',
      name: 'Vintage Wash Denim Jeans',
      category: 'jeans',
      price: 699,
      colour: 'Classic Stone Blue',
      occasion: ['casual', 'college'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/jeans/download.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jeans/download.jpeg',
        'images/jeans/blue-jeans.jpg',
        'images/jeans/images (1).jpeg'
      ],
      fabric: '13.5 oz 100% Selvedge Cotton Denim',
      fit: 'Authentic Straight Leg Cut',
      rating: 4.9,
      reviewsCount: 195,
      desc: 'Authentic 90s vintage wash jeans with durable double-needle stitching and comfortable straight leg profile.'
    },
    {
      id: 'p12',
      name: 'Slim Tapered Indigo Jeans',
      category: 'jeans',
      price: 749,
      colour: 'Raw Dark Indigo',
      occasion: ['casual', 'semi-formal'],
      season: ['all'],
      gender: 'men',
      img: 'images/jeans/images.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jeans/images.jpeg',
        'images/jeans/download.jpeg',
        'images/jeans/mens formal.jpg'
      ],
      fabric: 'Japanese Stretch Indigo Denim',
      fit: 'Slim Tapered Silhouette',
      rating: 4.8,
      reviewsCount: 172,
      desc: 'Raw indigo denim crafted with 2% elastane for unrestricted mobility and a sharp tailored taper.'
    },
    {
      id: 'p13',
      name: 'Distressed Streetwear Denim',
      category: 'jeans',
      price: 799,
      colour: 'Light Bleach Wash',
      occasion: ['casual', 'college', 'party'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/jeans/images (1).jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jeans/images (1).jpeg',
        'images/jeans/download.jpeg',
        'images/jeans/blue-jeans.jpg'
      ],
      fabric: 'Hand-Distressed Premium Denim',
      fit: 'Relaxed Baggy Taper',
      rating: 4.7,
      reviewsCount: 130,
      desc: 'Hand-distressed light denim with custom wash whiskers, knee abrasions, and effortless streetwear attitude.'
    },
    {
      id: 'p14',
      name: 'Charcoal Stretch Chinos',
      category: 'jeans',
      price: 649,
      colour: 'Charcoal Grey',
      occasion: ['office', 'casual'],
      season: ['all'],
      gender: 'men',
      img: 'images/jeans/images (2).jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jeans/images (2).jpeg',
        'images/jeans/black-trouser.jpg',
        'images/dresses/office wear.jpeg'
      ],
      fabric: 'Cotton Elastane Twill',
      fit: 'Modern Slim Chino Fit',
      rating: 4.9,
      reviewsCount: 160,
      desc: 'Modern flat-front chinos crafted from wrinkle-resistant cotton twill with flexible waistband.'
    },
    {
      id: 'p15',
      name: 'Tailored Executive Trousers',
      category: 'jeans',
      price: 799,
      colour: 'Jet Black',
      occasion: ['office', 'interview'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/dresses/office wear.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/dresses/office wear.jpeg',
        'images/jeans/black-trouser.jpg',
        'images/jeans/mens formal.jpg'
      ],
      fabric: 'Fine Merino Wool Blend',
      fit: 'Precision Tailored Cut',
      rating: 5.0,
      reviewsCount: 205,
      desc: 'Fine wool-blend trousers with sharp permanent center crease and concealed expander waistband.'
    },
    {
      id: 'p16',
      name: 'Smart Pleated Neutral Trousers',
      category: 'jeans',
      price: 749,
      colour: 'Warm Camel Beige',
      occasion: ['semi-formal', 'office', 'casual'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/dresses/semi formal.webp',
      fallbackImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/dresses/semi formal.webp',
        'images/jeans/wide-leg-pants.jpg',
        'images/dresses/fashion.jpeg'
      ],
      fabric: 'Fluid Viscose-Wool Suiting',
      fit: 'High-Waisted Single Pleat',
      rating: 4.9,
      reviewsCount: 140,
      desc: 'Contemporary high-waisted single pleat trousers in a refined neutral camel tone with wide fluid hem.'
    },
    {
      id: 'p17',
      name: 'Structured Heritage Blazer',
      category: 'jackets',
      price: 949,
      colour: 'Midnight Navy',
      occasion: ['office', 'interview', 'semi-formal'],
      season: ['winter', 'all'],
      gender: 'men',
      img: 'images/jackets/download.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jackets/download.jpeg',
        'images/dresses/interview.jpeg',
        'images/jackets/download (2).jpeg'
      ],
      fabric: 'Super 110s Wool Flannel',
      fit: 'Structured Italian Silhouette',
      rating: 5.0,
      reviewsCount: 280,
      desc: 'Double-vented Italian wool blazer with soft canvas shoulder padding, horn buttons, and notch lapels.'
    },
    {
      id: 'p18',
      name: 'Classic Rugged Denim Jacket',
      category: 'jackets',
      price: 849,
      colour: 'Medium Indigo',
      occasion: ['casual', 'college'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/jackets/download (1).jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jackets/download (1).jpeg',
        'images/jackets/denim-jacket.png',
        'images/jeans/download.jpeg'
      ],
      fabric: 'Heavyweight Stone-Washed Selvedge Denim',
      fit: 'Classic Trucker Fit',
      rating: 4.8,
      reviewsCount: 175,
      desc: 'Heavyweight stone-washed denim jacket with antique brass hardware, welt pockets, and dual chest flaps.'
    },
    {
      id: 'p19',
      name: 'Urban Luxe Bomber Jacket',
      category: 'jackets',
      price: 899,
      colour: 'Satin Black',
      occasion: ['casual', 'party'],
      season: ['winter', 'all'],
      gender: 'unisex',
      img: 'images/jackets/download (2).jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jackets/download (2).jpeg',
        'images/jackets/download.jpeg',
        'images/tshirts/black-tshirt.jpg'
      ],
      fabric: 'Water-Resistant Technical Satin',
      fit: 'Modern Streamlined Bomber',
      rating: 4.9,
      reviewsCount: 138,
      desc: 'Water-resistant satin bomber with heavy gauge rib-knit collar, sleeve utility pocket, and satin inner lining.'
    },
    {
      id: 'p20',
      name: 'Retro Classic White Sneakers',
      category: 'shoes',
      price: 799,
      colour: 'Optic White',
      occasion: ['casual', 'college', 'semi-formal'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/shoes/sneakers.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shoes/sneakers.jpg',
        'images/shoes/white-sneakers.png',
        'images/shoes/suede-loafers.jpg'
      ],
      fabric: 'Top-Grain Nappa Leather & Rubber Sole',
      fit: 'Low-Top Comfort Fit',
      rating: 4.9,
      reviewsCount: 340,
      desc: 'Clean leather low-top sneakers featuring cushioned memory foam OrthoLite insoles and vulcanized rubber outsoles.'
    },
    {
      id: 'p21',
      name: 'Handcrafted Leather Oxford Shoes',
      category: 'shoes',
      price: 999,
      colour: 'Burnished Mahogany Brown',
      occasion: ['office', 'interview', 'wedding', 'semi-formal'],
      season: ['all'],
      gender: 'men',
      img: 'images/shoes/formal shoe.webp',
      fallbackImg: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shoes/formal shoe.webp',
        'images/shoes/suede-loafers.jpg',
        'images/accessories/images.jpeg'
      ],
      fabric: 'Goodyear-Welted Full-Grain Italian Leather',
      fit: 'Classic Cap-Toe Oxford',
      rating: 5.0,
      reviewsCount: 190,
      desc: 'Goodyear-welted full-grain Italian leather Oxfords with burnished hand-finished patina and stacked leather heel.'
    },
    {
      id: 'p22',
      name: 'Milanese Leather Crossbody Bag',
      category: 'bags',
      price: 699,
      colour: 'Cognac Tan',
      occasion: ['office', 'casual', 'semi-formal'],
      season: ['all'],
      gender: 'women',
      img: 'images/bags/bag.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/bags/bag.jpg',
        'images/bags/bg.webp',
        'images/bags/red-shoulder-bag.jpg'
      ],
      fabric: 'Full-Grain Artisan Saddle Leather',
      fit: 'Compact Structured Saddle Bag',
      rating: 4.9,
      reviewsCount: 112,
      desc: 'Top-grain leather saddle bag with magnetic brass flap closure, interior card slots, and adjustable shoulder strap.'
    },
    {
      id: 'p23',
      name: 'Luxury Minimalist Structured Tote',
      category: 'bags',
      price: 899,
      colour: 'Noir Black',
      occasion: ['office', 'party', 'interview'],
      season: ['all'],
      gender: 'women',
      img: 'images/bags/bg.webp',
      fallbackImg: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/bags/bg.webp',
        'images/bags/black-handbag.jpg',
        'images/bags/bag.jpg'
      ],
      fabric: 'Cross-Grain Saffiano Leather',
      fit: 'Spacious 15" Laptop Tote',
      rating: 5.0,
      reviewsCount: 185,
      desc: 'Spacious saffiano leather tote with dedicated 15-inch padded laptop compartment, zippered security pockets, and gold hardware.'
    },
    {
      id: 'p24',
      name: 'Chronograph Luxury Gold Watch',
      category: 'accessories',
      price: 999,
      colour: '18K Yellow Gold',
      occasion: ['office', 'party', 'wedding', 'semi-formal'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/accessories/watch.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/accessories/watch.jpeg',
        'images/accessories/luxury.jpeg',
        'images/accessories/chain.jpeg'
      ],
      fabric: '18k Gold PVD Stainless Steel & Sapphire Glass',
      fit: '40mm Classic Chronograph',
      rating: 5.0,
      reviewsCount: 260,
      desc: 'Japanese quartz movement watch with 18k gold PVD plating, anti-reflective sapphire crystal glass, and tachymeter bezel.'
    },
    {
      id: 'p25',
      name: 'Sterling Cuban Link Chain',
      category: 'accessories',
      price: 399,
      colour: 'Polished Silver',
      occasion: ['party', 'casual', 'college'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/accessories/chain.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/accessories/chain.jpeg',
        'images/accessories/luxury.jpeg',
        'images/accessories/jewelry-set.jpg'
      ],
      fabric: 'Solid 925 Sterling Silver',
      fit: '6mm Diamond-Cut 20" Chain',
      rating: 4.8,
      reviewsCount: 145,
      desc: 'Solid 925 sterling silver Cuban chain with high-precision diamond-cut beveling and reinforced lobster clasp.'
    },
    {
      id: 'p26',
      name: 'Designer Signature Pendant',
      category: 'accessories',
      price: 449,
      colour: 'Antique Gold',
      occasion: ['party', 'semi-formal'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/accessories/luxury.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/accessories/luxury.jpeg',
        'images/accessories/jewelry-set.jpg',
        'images/accessories/watch.jpeg'
      ],
      fabric: '18K Gold Vermeil on Solid Silver',
      fit: 'Intricate Heirloom Medallion',
      rating: 4.9,
      reviewsCount: 92,
      desc: 'Intricately engraved heirloom pendant designed to elevate any neckline with subtle antique elegance.'
    },
    {
      id: 'p27',
      name: 'Aviator Polarized Sunglasses',
      category: 'accessories',
      price: 349,
      colour: 'Midnight Black',
      occasion: ['casual', 'party'],
      season: ['summer', 'all'],
      gender: 'unisex',
      img: 'images/accessories/fashion.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/accessories/fashion.jpeg',
        'images/accessories/sunglasses.png',
        'images/accessories/watch.jpeg'
      ],
      fabric: 'Titanium Frame & Polycarbonate Polarized Lens',
      fit: 'Universal Teardrop Aviator',
      rating: 4.9,
      reviewsCount: 168,
      desc: 'UV400 protective polarized lenses in an ultra-lightweight titanium aviator frame with silicone nose pads.'
    },
    {
      id: 'p28',
      name: 'Artisan Leather Belt & Buckle',
      category: 'accessories',
      price: 299,
      colour: 'Espresso Brown',
      occasion: ['office', 'casual', 'semi-formal'],
      season: ['all'],
      gender: 'men',
      img: 'images/accessories/images.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/accessories/images.jpeg',
        'images/shoes/formal shoe.webp',
        'images/bags/bag.jpg'
      ],
      fabric: 'Vegetable-Tanned Italian Bridle Leather',
      fit: '35mm Width Classic Belt',
      rating: 4.8,
      reviewsCount: 118,
      desc: 'Full-grain vegetable-tanned leather belt with hand-beveled edges and brushed gunmetal buckle.'
    },
    {
      id: 'p29',
      name: 'Silk Pocket Square & Scarf',
      category: 'accessories',
      price: 199,
      colour: 'Royal Burgundy',
      occasion: ['party', 'wedding', 'office'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/accessories/bgs.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/accessories/bgs.jpeg',
        'images/traditional/10_49_500KB.jpg',
        'images/dresses/wedding.jpeg'
      ],
      fabric: '100% Hand-Rolled Mulberry Silk',
      fit: '42cm x 42cm Square',
      rating: 5.0,
      reviewsCount: 86,
      desc: 'Hand-rolled 100% mulberry silk accessory with ornate heritage baroque motifs and vibrant jewel-tone dyes.'
    },
    {
      id: 'p30',
      name: 'Embroidered Royal Kurta Set',
      category: 'traditional',
      price: 899,
      colour: 'Imperial Gold & Ivory',
      occasion: ['traditional', 'wedding'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/traditional/10_49_500KB.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/traditional/10_49_500KB.jpg',
        'images/traditional/kurta.jpg',
        'images/traditional/bandhgala.jpg'
      ],
      fabric: 'Raw Silk & Zari Thread Embroidery',
      fit: 'Regal Mandarin Collar Silhouette',
      rating: 5.0,
      reviewsCount: 310,
      desc: 'Opulent silk-blend Kurta handcrafted with intricate zari embroidery, paired with tailored ivory churidar trousers.'
    },
    {
      id: 'p31',
      name: 'Imperial Wedding Sherwani / Saree',
      category: 'traditional',
      price: 999,
      colour: 'Crimson Maroon & Gold',
      occasion: ['wedding', 'traditional'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/dresses/wedding.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/dresses/wedding.jpeg',
        'images/traditional/10_49_500KB.jpg',
        'images/accessories/luxury.jpeg'
      ],
      fabric: 'Brocade Silk & Hand-Stitched Moti Work',
      fit: 'Royal Ceremonial Fit',
      rating: 5.0,
      reviewsCount: 240,
      desc: 'Masterpiece ceremonial attire adorned with hand-stitched beadwork, intricate zardozi motifs, and royal brocade drape.'
    },
    {
      id: 'p32',
      name: 'Velvet Evening Gala Ensemble',
      category: 'tops',
      price: 949,
      colour: 'Emerald Jewel',
      occasion: ['party', 'semi-formal'],
      season: ['all'],
      gender: 'women',
      img: 'images/dresses/party wear.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/dresses/party wear.jpeg',
        'images/dresses/red-dress.jpg',
        'images/dresses/fashion.jpeg'
      ],
      fabric: 'Heavy Silk Velvet',
      fit: 'Floor-Length Hourglass Silhouette',
      rating: 4.9,
      reviewsCount: 155,
      desc: 'Rich emerald green velvet evening look designed for galas, red carpets, champagne dinners, and premier events.'
    },
    {
      id: 'p33',
      name: 'Executive Tailored 2-Piece Suit',
      category: 'jackets',
      price: 999,
      colour: 'Charcoal Houndstooth',
      occasion: ['interview', 'office'],
      season: ['all'],
      gender: 'men',
      img: 'images/dresses/interview.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/dresses/interview.jpeg',
        'images/jackets/download.jpeg',
        'images/jeans/mens formal.jpg'
      ],
      fabric: 'Super 120s Australian Merino Wool',
      fit: 'Bespoke Structured 2-Piece',
      rating: 5.0,
      reviewsCount: 380,
      desc: 'Super 120s Australian merino wool tailored suit, guaranteeing commanding executive confidence and peerless craftsmanship.'
    },
    {
      id: 'p34',
      name: 'Cashmere Ribbed Turtleneck',
      category: 'tops',
      price: 649,
      colour: 'Cream Ivory',
      occasion: ['casual', 'semi-formal', 'office'],
      season: ['winter', 'all'],
      gender: 'unisex',
      img: 'images/tshirts/cashmere-sweater.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/tshirts/cashmere-sweater.jpg',
        'images/tshirts/tshirt.jpeg',
        'images/dresses/fashion.jpeg'
      ],
      fabric: '100% Mongolian Grade-A Cashmere',
      fit: 'Plush Ribbed Knit Silhouette',
      rating: 4.9,
      reviewsCount: 115,
      desc: 'Ultra-soft Mongolian cashmere knit turtleneck with cozy ribbed cuffs and luxurious insulating warmth.'
    },
    {
      id: 'p35',
      name: 'Italian Suede Penny Loafers',
      category: 'shoes',
      price: 899,
      colour: 'Caramel Suede',
      occasion: ['casual', 'semi-formal', 'office'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/shoes/suede-loafers.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shoes/suede-loafers.jpg',
        'images/shoes/formal shoe.webp',
        'images/shoes/sneakers.jpg'
      ],
      fabric: 'Tuscan Suede Leather & Leather Outsole',
      fit: 'Slip-On Loafer Cut',
      rating: 4.9,
      reviewsCount: 134,
      desc: 'Supple Italian suede loafers crafted with Blake-stitch construction and breathable glove-leather lining.'
    },
    {
      id: 'p36',
      name: 'Milan Double-Breasted Trench',
      category: 'jackets',
      price: 999,
      colour: 'Classic Camel',
      occasion: ['office', 'casual', 'semi-formal'],
      season: ['winter', 'all'],
      gender: 'unisex',
      img: 'images/jackets/trench-coat.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jackets/trench-coat.jpg',
        'images/jackets/download.jpeg',
        'images/hero-fashion.jpg'
      ],
      fabric: 'Weatherproof Cotton Gabardine',
      fit: 'Double-Breasted Belted Coat',
      rating: 5.0,
      reviewsCount: 198,
      desc: 'Iconic double-breasted trench coat with storm flaps, epaulettes, and horn buckle waist belt.'
    },
    {
      id: 'p37',
      name: 'Saffiano Shoulder Crossbody',
      category: 'bags',
      price: 749,
      colour: 'Crimson Bordeaux',
      occasion: ['party', 'office', 'semi-formal'],
      season: ['all'],
      gender: 'women',
      img: 'images/bags/red-shoulder-bag.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/bags/red-shoulder-bag.jpg',
        'images/bags/bg.webp',
        'images/bags/bag.jpg'
      ],
      fabric: 'Textured Saffiano Calfskin',
      fit: 'Compact Elegant Shoulder Bag',
      rating: 4.8,
      reviewsCount: 104,
      desc: 'Structured jewel-toned shoulder bag with polished gold chain strap and multiple interior compartments.'
    },
    {
      id: 'p38',
      name: 'Heritage Bandhgala Velvet Coat',
      category: 'traditional',
      price: 949,
      colour: 'Royal Navy Blue',
      occasion: ['traditional', 'wedding', 'semi-formal'],
      season: ['winter', 'all'],
      gender: 'men',
      img: 'images/traditional/bandhgala.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/traditional/bandhgala.jpg',
        'images/traditional/10_49_500KB.jpg',
        'images/dresses/wedding.jpeg'
      ],
      fabric: 'Rich Silk-Velvet with Embroidered Collars',
      fit: 'Structured Royal Bandhgala',
      rating: 5.0,
      reviewsCount: 160,
      desc: 'Aristocratic velvet Bandhgala jacket adorned with metallic monogram buttons and clean tailored contour.'
    },
    {
      id: 'p39',
      name: '18K Gold Geometric Jewelry Suite',
      category: 'accessories',
      price: 499,
      colour: 'Gleaming 18K Gold',
      occasion: ['party', 'wedding', 'semi-formal'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/accessories/jewelry-set.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/accessories/jewelry-set.jpg',
        'images/accessories/luxury.jpeg',
        'images/accessories/watch.jpeg'
      ],
      fabric: '18K Gold Vermeil over Sterling Silver',
      fit: 'Modern Architectural Jewelry Set',
      rating: 4.9,
      reviewsCount: 125,
      desc: 'Architectural geometric hoop earrings and ring suite with mirror-polished gold finish.'
    },
    {
      id: 'p40',
      name: 'Wide-Leg Pleated Tailored Trousers',
      category: 'jeans',
      price: 799,
      colour: 'Pearl Off-White',
      occasion: ['semi-formal', 'casual', 'party'],
      season: ['all'],
      gender: 'women',
      img: 'images/jeans/wide-leg-pants.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jeans/wide-leg-pants.jpg',
        'images/dresses/semi formal.webp',
        'images/dresses/fashion.jpeg'
      ],
      fabric: 'Crepe De Chine Wool Blend',
      fit: 'Dramatic High-Rise Wide Leg',
      rating: 4.9,
      reviewsCount: 148,
      desc: 'Dramatic high-rise wide leg trousers with sharp double front pleats and fluid floor-sweeping silhouette.'
    },
    // Previously Deleted / Restored Original Project Images
    {
      id: 'p41',
      name: 'White Casual Everyday Shirt',
      category: 'shirts',
      price: 449,
      colour: 'Pure White',
      occasion: ['casual', 'college', 'office'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/shirts/white-casual-shirt.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shirts/white-casual-shirt.jpg',
        'images/shirts/images.jpeg',
        'images/shirts/download.jpeg'
      ],
      fabric: '100% Soft Washed Poplin Cotton',
      fit: 'Easy Casual Fit',
      rating: 4.8,
      reviewsCount: 110,
      desc: 'Clean and versatile washed white poplin shirt, built for effortless everyday layering and smart casual elegance.'
    },
    {
      id: 'p42',
      name: 'Heritage Blue Classic Jeans',
      category: 'jeans',
      price: 699,
      colour: 'Indigo Blue',
      occasion: ['casual', 'college'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/jeans/blue-jeans.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jeans/blue-jeans.jpg',
        'images/jeans/download.jpeg',
        'images/jeans/images.jpeg'
      ],
      fabric: '100% Rigid Ring-Spun Cotton Denim',
      fit: 'Classic Regular Straight Cut',
      rating: 4.9,
      reviewsCount: 180,
      desc: 'Timeless mid-rise 5-pocket blue denim jeans with copper rivets and reinforced belt loops.'
    },
    {
      id: 'p43',
      name: 'Minimalist White Leather Low-Tops',
      category: 'shoes',
      price: 799,
      colour: 'Cloud White',
      occasion: ['casual', 'college', 'semi-formal'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/shoes/white-sneakers.png',
      fallbackImg: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shoes/white-sneakers.png',
        'images/shoes/sneakers.jpg',
        'images/shoes/suede-loafers.jpg'
      ],
      fabric: 'Premium Calf Leather & Cushioned EVA Sole',
      fit: 'Clean Minimal Low-Profile Sneaker',
      rating: 5.0,
      reviewsCount: 290,
      desc: 'Ultra-clean white leather sneakers with soft leather collar, tonal stitching, and lightweight shock-absorbing soles.'
    },
    {
      id: 'p44',
      name: 'Italian Structured Leather Handbag',
      category: 'bags',
      price: 849,
      colour: 'Midnight Black',
      occasion: ['office', 'party', 'interview'],
      season: ['all'],
      gender: 'women',
      img: 'images/bags/black-handbag.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/bags/black-handbag.jpg',
        'images/bags/bg.webp',
        'images/bags/bag.jpg'
      ],
      fabric: 'Full-Grain Italian Calfskin Leather',
      fit: 'Structured Top-Handle Handbag',
      rating: 4.9,
      reviewsCount: 165,
      desc: 'Elegant top-handle leather handbag with gold turn-lock closure, detachable crossbody strap, and protective metal feet.'
    },
    {
      id: 'p45',
      name: 'Classic Trucker Denim Jacket',
      category: 'jackets',
      price: 849,
      colour: 'Vintage Blue',
      occasion: ['casual', 'college'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/jackets/denim-jacket.png',
      fallbackImg: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jackets/denim-jacket.png',
        'images/jackets/download (1).jpeg',
        'images/jeans/blue-jeans.jpg'
      ],
      fabric: 'Heavyweight Rigid Indigo Denim',
      fit: 'Iconic Trucker Fit',
      rating: 4.8,
      reviewsCount: 210,
      desc: 'Heritage-inspired denim trucker jacket with shank buttons, side waist adjusters, and durable contrast stitching.'
    },
    {
      id: 'p46',
      name: 'Sharp Pleated Black Trousers',
      category: 'jeans',
      price: 749,
      colour: 'Onyx Black',
      occasion: ['office', 'interview', 'semi-formal'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/jeans/black-trouser.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jeans/black-trouser.jpg',
        'images/dresses/office wear.jpeg',
        'images/jeans/mens formal.jpg'
      ],
      fabric: 'Fine Wool-Viscose Blend',
      fit: 'Straight Pleated Taper',
      rating: 4.9,
      reviewsCount: 140,
      desc: 'Refined black dress trousers with sharp front pleats, slanted side pockets, and smooth breathable drape.'
    },
    {
      id: 'p47',
      name: 'Heavyweight Midnight Crewneck Tee',
      category: 'tops',
      price: 349,
      colour: 'Solid Black',
      occasion: ['casual', 'college', 'party'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/tshirts/black-tshirt.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/tshirts/black-tshirt.jpg',
        'images/tshirts/tshirt.jpeg',
        'images/tshirts/mens t shirts.webp'
      ],
      fabric: '100% Combed Compact Cotton (260 GSM)',
      fit: 'Clean Boxy Drop-Shoulder',
      rating: 4.9,
      reviewsCount: 275,
      desc: 'Premium heavyweight jet black t-shirt with seamless double-stitched collar and luxuriously soft carbon finish.'
    },
    {
      id: 'p48',
      name: 'Scarlet Red Cocktail Evening Dress',
      category: 'tops',
      price: 949,
      colour: 'Scarlet Red',
      occasion: ['party', 'wedding', 'semi-formal'],
      season: ['all'],
      gender: 'women',
      img: 'images/dresses/red-dress.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/dresses/red-dress.jpg',
        'images/dresses/party wear.jpeg',
        'images/dresses/fashion.jpeg'
      ],
      fabric: 'Silk Crepe & Satin Lining',
      fit: 'Fitted Bodycon Cocktail Dress',
      rating: 5.0,
      reviewsCount: 160,
      desc: 'Showstopping scarlet red evening cocktail dress with plunging neckline, tailored waist cinch, and back slit.'
    },
    {
      id: 'p49',
      name: 'Silk Embroidered Festive Kurta',
      category: 'traditional',
      price: 849,
      colour: 'Golden Cream',
      occasion: ['traditional', 'wedding'],
      season: ['all'],
      gender: 'unisex',
      img: 'images/traditional/kurta.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/traditional/kurta.jpg',
        'images/traditional/10_49_500KB.jpg',
        'images/traditional/bandhgala.jpg'
      ],
      fabric: 'Tussar Silk with Fine Resham Embroidery',
      fit: 'Traditional Straight Cut',
      rating: 4.9,
      reviewsCount: 195,
      desc: 'Festive pure silk Kurta featuring delicate resham needlework on collar and placket, perfect for festive rituals.'
    },
    {
      id: 'p50',
      name: 'Signature Polarized Titanium Aviators',
      category: 'accessories',
      price: 399,
      colour: 'Metallic Gunmetal',
      occasion: ['casual', 'party', 'semi-formal'],
      season: ['summer', 'all'],
      gender: 'unisex',
      img: 'images/accessories/sunglasses.png',
      fallbackImg: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/accessories/sunglasses.png',
        'images/accessories/fashion.jpeg',
        'images/accessories/watch.jpeg'
      ],
      fabric: 'Aerospace-Grade Titanium & Polarized CR-39 Lenses',
      fit: 'Sleek Modern Geometric Aviator',
      rating: 4.9,
      reviewsCount: 152,
      desc: 'High-definition polarized sunglasses with featherweight titanium rims and anti-glare scratch-resistant coating.'
    },
    {
      id: 'p51',
      name: 'Casual Plaid Modern Cotton Shirt',
      category: 'shirts',
      price: 499,
      colour: 'Navy Tartan Plaid',
      occasion: ['casual', 'college'],
      season: ['all'],
      gender: 'men',
      img: 'images/shirts/casual fashion men.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/shirts/casual fashion men.jpeg',
        'images/shirts/download (3).jpeg',
        'images/shirts/download.jpeg'
      ],
      fabric: 'Brushed Cotton Flannel Twill',
      fit: 'Tailored Casual Fit',
      rating: 4.8,
      reviewsCount: 124,
      desc: 'Soft brushed cotton casual shirt with contemporary dark plaid pattern and curved hem for untucked styling.'
    },
    {
      id: 'p52',
      name: 'Executive Charcoal Wool Slacks',
      category: 'jeans',
      price: 799,
      colour: 'Deep Charcoal',
      occasion: ['office', 'interview', 'wedding'],
      season: ['all'],
      gender: 'men',
      img: 'images/jeans/mens formal.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jeans/mens formal.jpg',
        'images/jeans/images (2).jpeg',
        'images/dresses/office wear.jpeg'
      ],
      fabric: '100% Super 100s Wool Worsted',
      fit: 'Bespoke Slim Dress Trouser',
      rating: 5.0,
      reviewsCount: 195,
      desc: 'Tailored charcoal wool trousers engineered with curtain waistband and unfinished hems for custom inseam.'
    },
    {
      id: 'p53',
      name: 'Everyday Straight-Leg Chino Pants',
      category: 'jeans',
      price: 649,
      colour: 'Khaki Tan',
      occasion: ['casual', 'office', 'college'],
      season: ['all'],
      gender: 'men',
      img: 'images/jeans/mens pants.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jeans/mens pants.jpeg',
        'images/jeans/images (2).jpeg',
        'images/jeans/black-trouser.jpg'
      ],
      fabric: 'Stretch Cotton Twill (98% Cotton, 2% Spandex)',
      fit: 'Straight Leg Everyday Fit',
      rating: 4.8,
      reviewsCount: 140,
      desc: 'Versatile stretch chino trousers in a classic khaki tone with zip fly, button closure, and coin pocket.'
    },
    {
      id: 'p54',
      name: 'Royal Ceremonial Mens Sherwani Set',
      category: 'traditional',
      price: 999,
      colour: 'Ivory & Gold',
      occasion: ['traditional', 'wedding'],
      season: ['all'],
      gender: 'men',
      img: 'images/traditional/traditional mens wear.jpeg',
      fallbackImg: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/traditional/traditional mens wear.jpeg',
        'images/traditional/10_49_500KB.jpg',
        'images/traditional/bandhgala.jpg'
      ],
      fabric: 'Jacquard Silk with Mukaish & Zari Detailing',
      fit: 'Imperial Royal Sherwani Cut',
      rating: 5.0,
      reviewsCount: 220,
      desc: 'Majestic silk Sherwani ensemble designed for weddings, galas, and grand ceremonial occasions.'
    },
    {
      id: 'p55',
      name: 'Athletic Performance Fitted Tee',
      category: 'tops',
      price: 299,
      colour: 'Navy Heather',
      occasion: ['casual', 'college'],
      season: ['summer', 'all'],
      gender: 'unisex',
      img: 'images/tshirts/mens t shirts.webp',
      fallbackImg: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/tshirts/mens t shirts.webp',
        'images/tshirts/tshirt.jpeg',
        'images/tshirts/black-tshirt.jpg'
      ],
      fabric: 'Breathable Moisture-Wicking Cotton Modal',
      fit: 'Athletic Fitted Cut',
      rating: 4.8,
      reviewsCount: 160,
      desc: 'Streamlined athletic tee engineered with 4-way stretch and anti-odor technology for active daily lifestyles.'
    },
    {
      id: 'p56',
      name: 'Modern Resort Co-ord Shirt & Pants',
      category: 'jeans',
      price: 899,
      colour: 'Sage Earth',
      occasion: ['casual', 'party', 'semi-formal'],
      season: ['summer', 'all'],
      gender: 'unisex',
      img: 'images/jeans/mens shirt&pants set.webp',
      fallbackImg: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=85',
      gallery: [
        'images/jeans/mens shirt&pants set.webp',
        'images/dresses/semi formal.webp',
        'images/shirts/download (1).jpeg'
      ],
      fabric: 'Premium Textured Linen Blend Co-ord',
      fit: 'Relaxed Matching Ensemble Cut',
      rating: 5.0,
      reviewsCount: 175,
      desc: 'Matching 2-piece resort co-ord set crafted from breezy textured linen, delivering effortless Mediterranean style.'
    }
  ];

  // Curated Runway & Editorial Lookbooks with 1-Click Studio Equipping
  const LOOKBOOKS = [
    {
      id: 'lb1',
      title: 'Milanese Executive',
      tagline: 'Modern Corporate Power',
      occasion: 'office',
      gender: 'men',
      rating: '4.9★',
      img: 'images/lookbook-executive.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=85',
      items: ['p17', 'p5', 'p15', 'p21', 'p24'],
      desc: 'Structured Heritage Blazer paired with Executive White Cotton Shirt, Tailored Trousers, Italian Leather Oxfords, and 18K Chronograph Watch.'
    },
    {
      id: 'lb2',
      title: 'Royal Heritage Festive',
      tagline: 'Imperial Zari & Silk Elegance',
      occasion: 'traditional',
      gender: 'unisex',
      rating: '5.0★',
      img: 'images/lookbook-royal.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=85',
      items: ['p30', 'p29', 'p24', 'p21'],
      desc: 'Handcrafted Embroidered Royal Kurta Set with Pure Mulberry Silk Pocket Square, Luxury Timepiece, and Handcrafted Leather Footwear.'
    },
    {
      id: 'lb3',
      title: 'Urban High-Street Casual',
      tagline: 'Relaxed Minimalist Cool',
      occasion: 'casual',
      gender: 'unisex',
      rating: '4.8★',
      img: 'images/lookbook-street.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=85',
      items: ['p18', 'p7', 'p11', 'p20', 'p25'],
      desc: 'Classic Rugged Denim Jacket, Heavyweight White Minimalist Crewneck, Vintage Wash Denim, Retro Leather Sneakers, and Silver Link Chain.'
    },
    {
      id: 'lb4',
      title: 'Midnight Emerald Gala',
      tagline: 'Red Carpet Glamour',
      occasion: 'party',
      gender: 'women',
      rating: '4.9★',
      img: 'images/lookbook-gala.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=85',
      items: ['p32', 'p23', 'p26', 'p24'],
      desc: 'Rich Emerald Velvet Gala Dress complemented with Structured Saffiano Leather Bag, Heirloom Pendant, and Gold Chronograph.'
    },
    {
      id: 'lb5',
      title: 'Riviera Resort & Linen',
      tagline: 'Sun-Drenched Coastal Luxury',
      occasion: 'casual',
      gender: 'unisex',
      rating: '4.8★',
      img: 'images/lookbook-resort.jpg',
      fallbackImg: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=85',
      items: ['p2', 'p16', 'p27', 'p22'],
      desc: 'Tailored Linen Resort Shirt with Smart Pleated Camel Trousers, Aviator Polarized Sunglasses, and Milanese Leather Crossbody Bag.'
    }
  ];

  // SVG Fallback Data URI
  const FALLBACK_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23121622'/%3E%3Cpath d='M200 130 L260 250 L140 250 Z' fill='none' stroke='%23d4af37' stroke-width='4'/%3E%3Ctext x='200' y='290' font-family='Arial' font-size='16' fill='%2394a3b8' text-anchor='middle'%3ETeju\'s Wardrobe%3C/text%3E%3C/svg%3E";

  // Application State
  const state = {
    products: PRODUCTS.slice(),
    selected: [],
    favourites: JSON.parse(localStorage.getItem('wv_faves') || '[]'),
    cart: JSON.parse(localStorage.getItem('wv_cart') || '[]'),
    savedOutfits: JSON.parse(localStorage.getItem('wv_outfits') || '[]'),
    currentUser: JSON.parse(localStorage.getItem('wv_user') || 'null'),
    currentFilters: {
      category: 'all',
      occasion: 'all',
      gender: 'all',
      search: '',
      sort: 'featured'
    }
  };

  // DOM Elements
  const productGrid = document.getElementById('productGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const filterCategory = document.getElementById('filterCategory');
  const filterOccasion = document.getElementById('filterOccasion');
  const filterGender = document.getElementById('filterGender');
  const sortSelect = document.getElementById('sortSelect');
  const resultsCount = document.getElementById('resultsCount');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const activeFilterTags = document.getElementById('activeFilterTags');

  // Studio Elements
  const selectedGrid = document.getElementById('selectedGrid');
  const emptySelectedMsg = document.getElementById('emptySelectedMsg');
  const outfitTotalPrice = document.getElementById('outfitTotalPrice');
  const harmonyScoreEl = document.getElementById('harmonyScore');
  const harmonyLabelEl = document.getElementById('harmonyLabel');
  const harmonyFeedbackEl = document.getElementById('harmonyFeedback');
  const harmonyMeter = document.getElementById('harmonyMeter');
  const stylistTip = document.getElementById('stylistTip');
  const recommendGrid = document.getElementById('recommendGrid');
  const recCountBadge = document.getElementById('recCountBadge');

  // Cart & Modals
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartItems = document.getElementById('cartItems');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTotal = document.getElementById('cartTotal');
  const cartItemCountTitle = document.getElementById('cartItemCountTitle');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');

  // Quick View Modal
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewBody = document.getElementById('quickViewBody');
  const closeQuickView = document.getElementById('closeQuickView');
  const quickViewBackdrop = document.getElementById('quickViewBackdrop');

  // Auth Modals
  const signInBtn = document.getElementById('signInBtn');
  const registerBtn = document.getElementById('registerBtn');
  const signinModal = document.getElementById('signinModal');
  const registerModal = document.getElementById('registerModal');
  const closeSignin = document.getElementById('closeSignin');
  const closeRegister = document.getElementById('closeRegister');
  const signinBackdrop = document.getElementById('signinBackdrop');
  const registerBackdrop = document.getElementById('registerBackdrop');
  const switchToRegister = document.getElementById('switchToRegister');
  const switchToSignin = document.getElementById('switchToSignin');
  const userProfileArea = document.getElementById('userProfileArea');

  // Mobile Drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  // --- Initializer ---
  function init() {
    populateCategoryDropdown();
    updateGenderBadges();
    renderLookbooks();
    renderProducts();
    updateCartUI();
    renderSavedOutfits();
    renderFavourites();
    updateUserAuthUI();
    bindEvents();
    initScrollAndHeader();
  }

  function updateGenderBadges() {
    const countAll = PRODUCTS.length;
    const countMen = PRODUCTS.filter(p => p.gender === 'men' || p.gender === 'unisex').length;
    const countWomen = PRODUCTS.filter(p => p.gender === 'women' || p.gender === 'unisex').length;
    const countUnisex = PRODUCTS.filter(p => p.gender === 'unisex').length;

    const elAll = document.getElementById('countAll');
    const elMen = document.getElementById('countMen');
    const elWomen = document.getElementById('countWomen');
    const elUnisex = document.getElementById('countUnisex');

    if (elAll) elAll.textContent = countAll;
    if (elMen) elMen.textContent = countMen;
    if (elWomen) elWomen.textContent = countWomen;
    if (elUnisex) elUnisex.textContent = countUnisex;
  }

  // --- Category Dropdown Populator ---
  function populateCategoryDropdown() {
    if (!filterCategory) return;
    const cats = Array.from(new Set(PRODUCTS.map(p => p.category)));
    filterCategory.innerHTML = '<option value="all">All Categories</option>';
    cats.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c.charAt(0).toUpperCase() + c.slice(1);
      filterCategory.appendChild(opt);
    });
  }

  // --- Render Curated Lookbooks ---
  function renderLookbooks() {
    const lookbookGrid = document.getElementById('lookbookGrid');
    if (!lookbookGrid) return;

    lookbookGrid.innerHTML = '';
    LOOKBOOKS.forEach(lb => {
      const card = document.createElement('div');
      card.className = 'lookbook-card';
      card.innerHTML = `
        <div class="lookbook-img-wrap">
          <img src="${lb.img}" alt="${lb.title}" loading="lazy" onerror="this.onerror=null;this.src='${lb.fallbackImg}';" />
          <div class="lookbook-badge-overlay">
            <span class="rating-pill"><i class="fa-solid fa-star"></i> ${lb.rating}</span>
            <span class="occasion-pill">${lb.occasion.toUpperCase()}</span>
          </div>
        </div>
        <div class="lookbook-info">
          <span class="lookbook-tagline">${lb.tagline}</span>
          <h3 class="lookbook-title">${lb.title}</h3>
          <p class="lookbook-desc">${lb.desc}</p>
          <div class="lookbook-actions">
            <button class="btn btn-gold btn-block load-look-btn" data-id="${lb.id}">
              <i class="fa-solid fa-wand-magic-sparkles"></i> Load Look into Studio
            </button>
          </div>
        </div>
      `;

      card.querySelector('.load-look-btn').addEventListener('click', () => {
        loadLookbookIntoStudio(lb.id);
      });

      lookbookGrid.appendChild(card);
    });
  }

  function loadLookbookIntoStudio(lookbookId) {
    const lb = LOOKBOOKS.find(l => l.id === lookbookId);
    if (!lb) return;

    state.selected = lb.items.slice();
    const currentTitleEl = document.getElementById('currentOutfitTitle');
    if (currentTitleEl) currentTitleEl.textContent = lb.title;

    updateStudioUI();
    renderProducts();
    showToast(`Loaded editorial look "${lb.title}" into Outfit Studio!`, 'success');

    const studioSection = document.getElementById('outfitStudio');
    if (studioSection) {
      studioSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // --- Render Product Grid ---
  function renderProducts() {
    if (!productGrid) return;
    const list = getFilteredProducts();
    productGrid.innerHTML = '';

    if (resultsCount) {
      resultsCount.textContent = `Showing ${list.length} item${list.length === 1 ? '' : 's'}`;
    }

    if (list.length === 0) {
      productGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 40px; color: rgba(255,255,255,0.2); margin-bottom: 16px; display: block;"></i>
          <h3 style="font-size: 20px; color: #fff; margin-bottom: 8px;">No matching items found</h3>
          <p>Try resetting filters or searching with different keywords.</p>
          <button class="btn btn-primary" id="gridResetBtn" style="margin-top: 16px;"><i class="fa-solid fa-rotate-left"></i> Reset All Filters</button>
        </div>
      `;
      const gridResetBtn = document.getElementById('gridResetBtn');
      if (gridResetBtn) gridResetBtn.onclick = resetFilters;
      return;
    }

    list.forEach(product => {
      const card = createProductCard(product);
      productGrid.appendChild(card);
    });

    renderActiveFilterTags();
  }

  // Create Product Card HTML Element with Realistic Visuals & INR Formatter
  function createProductCard(p) {
    const isSelected = state.selected.includes(p.id);
    const isFavorited = state.favourites.includes(p.id);

    const card = document.createElement('div');
    card.className = 'product-card';
    card.id = `prod-card-${p.id}`;

    const mainOccasion = p.occasion[0] ? p.occasion[0].toUpperCase() : 'ALL';
    const ratingStar = p.rating ? `<span class="card-rating-badge"><i class="fa-solid fa-star"></i> ${p.rating}</span>` : '';

    card.innerHTML = `
      <div class="card-img-wrap" data-id="${p.id}">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${p.fallbackImg || FALLBACK_IMG}';" />
        <span class="card-tag">${mainOccasion}</span>
        ${ratingStar}
        <button class="fave-btn ${isFavorited ? 'favorited' : ''}" data-id="${p.id}" aria-label="Favorite item" title="Save to favorites">
          <i class="fa-${isFavorited ? 'solid' : 'regular'} fa-heart"></i>
        </button>
        <div class="quick-view-overlay"><i class="fa-solid fa-expand"></i> Quick Preview</div>
      </div>
      <div class="card-body">
        <div class="card-header">
          <h4 class="card-title">${p.name}</h4>
          <span class="card-price">${formatINR(p.price)}</span>
        </div>
        <div class="card-meta-tags">
          <span class="meta-pill"><i class="fa-solid fa-tag"></i> ${p.category}</span>
          <span class="meta-pill"><i class="fa-solid fa-palette"></i> ${p.colour}</span>
          <span class="meta-pill"><i class="fa-solid fa-venus-mars"></i> ${p.gender}</span>
        </div>
        ${p.fabric ? `<div class="card-fabric-tag"><i class="fa-solid fa-certificate"></i> ${p.fabric}</div>` : ''}
        <div class="card-actions">
          <button class="btn-select ${isSelected ? 'selected' : ''}" data-id="${p.id}">
            <i class="fa-solid ${isSelected ? 'fa-check' : 'fa-wand-magic-sparkles'}"></i>
            ${isSelected ? 'In Outfit' : 'Add to Outfit'}
          </button>
          <button class="btn-cart-sm" data-id="${p.id}" title="Add to Cart">
            <i class="fa-solid fa-cart-plus"></i> Add
          </button>
        </div>
      </div>
    `;

    // Click on image opens Quick View
    const imgWrap = card.querySelector('.card-img-wrap');
    imgWrap.addEventListener('click', (e) => {
      if (e.target.closest('.fave-btn')) return;
      openQuickView(p);
    });

    // Favorite Button
    const faveBtn = card.querySelector('.fave-btn');
    faveBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavourite(p.id);
    });

    // Add to Outfit Button
    const selectBtn = card.querySelector('.btn-select');
    selectBtn.addEventListener('click', () => {
      toggleSelectItem(p.id);
    });

    // Add to Cart Button
    const cartItemBtn = card.querySelector('.btn-cart-sm');
    cartItemBtn.addEventListener('click', () => {
      addToCart(p.id);
    });

    return card;
  }

  // --- Filter Logic ---
  function getFilteredProducts() {
    const q = state.currentFilters.search.toLowerCase().trim();
    const cat = state.currentFilters.category;
    const occ = state.currentFilters.occasion;
    const gen = state.currentFilters.gender;
    const sort = state.currentFilters.sort;

    let filtered = PRODUCTS.filter(p => {
      const matchSearch = !q || p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.colour.toLowerCase().includes(q) ||
        p.occasion.some(o => o.toLowerCase().includes(q));

      const matchCat = cat === 'all' || p.category === cat;
      const matchOcc = occ === 'all' || p.occasion.includes(occ);
      const matchGen = gen === 'all' || p.gender === gen || p.gender === 'unisex';

      return matchSearch && matchCat && matchOcc && matchGen;
    });

    // Sorting in INR
    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'name-az') filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  }

  function renderActiveFilterTags() {
    if (!activeFilterTags) return;
    activeFilterTags.innerHTML = '';
    const { category, occasion, gender, search } = state.currentFilters;

    if (search) {
      activeFilterTags.appendChild(createFilterTag(`Search: "${search}"`, () => {
        state.currentFilters.search = '';
        if (searchInput) searchInput.value = '';
        if (clearSearchBtn) clearSearchBtn.classList.remove('show');
        renderProducts();
      }));
    }
    if (category !== 'all') {
      activeFilterTags.appendChild(createFilterTag(`Category: ${category}`, () => {
        setCategoryFilter('all');
      }));
    }
    if (occasion !== 'all') {
      activeFilterTags.appendChild(createFilterTag(`Occasion: ${occasion}`, () => {
        state.currentFilters.occasion = 'all';
        if (filterOccasion) filterOccasion.value = 'all';
        renderProducts();
      }));
    }
    if (gender !== 'all') {
      activeFilterTags.appendChild(createFilterTag(`Gender: ${gender}`, () => {
        state.currentFilters.gender = 'all';
        if (filterGender) filterGender.value = 'all';
        renderProducts();
      }));
    }
  }

  function createFilterTag(label, onRemove) {
    const span = document.createElement('span');
    span.className = 'filter-tag';
    span.innerHTML = `${label} <button aria-label="Remove filter">&times;</button>`;
    span.querySelector('button').addEventListener('click', onRemove);
    return span;
  }

  function resetFilters() {
    state.currentFilters = {
      category: 'all',
      occasion: 'all',
      gender: 'all',
      search: '',
      sort: 'featured'
    };
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.classList.remove('show');
    if (filterCategory) filterCategory.value = 'all';
    if (filterOccasion) filterOccasion.value = 'all';
    if (filterGender) filterGender.value = 'all';
    if (sortSelect) sortSelect.value = 'featured';

    // Reset category buttons
    document.querySelectorAll('.cat').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === 'all');
    });

    // Reset gender tabs
    document.querySelectorAll('.gender-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.gender === 'all');
    });

    renderProducts();
    showToast('Filters reset to default', 'info');
  }

  function setCategoryFilter(cat) {
    state.currentFilters.category = cat;
    if (filterCategory) filterCategory.value = cat;

    document.querySelectorAll('.cat').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === cat);
    });

    renderProducts();
  }

  function setOccasionFilter(occ) {
    state.currentFilters.occasion = occ;
    if (filterOccasion) filterOccasion.value = occ;
    renderProducts();
  }

  function setGenderFilter(gen) {
    state.currentFilters.gender = gen;
    if (filterGender) filterGender.value = gen;

    document.querySelectorAll('.gender-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.gender === gen);
    });

    renderProducts();
  }

  // --- Outfit Studio State & Interaction ---
  function toggleSelectItem(id) {
    const item = PRODUCTS.find(p => p.id === id);
    if (!item) return;

    const index = state.selected.indexOf(id);
    if (index > -1) {
      state.selected.splice(index, 1);
      showToast(`Removed "${item.name}" from Outfit Studio`, 'info');
    } else {
      // Allow max 1 item per primary slot for realism
      const slotMap = {
        'shirts': 'tops',
        'traditional': 'tops',
        'tops': 'tops',
        'jeans': 'jeans',
        'jackets': 'jackets',
        'shoes': 'shoes',
        'bags': 'bags',
        'accessories': 'accessories'
      };
      const newSlot = slotMap[item.category] || 'accessories';

      // Find if any other item in state.selected shares this slot
      const existingSameSlotIndex = state.selected.findIndex(selId => {
        const selItem = PRODUCTS.find(p => p.id === selId);
        return selItem && (slotMap[selItem.category] || 'accessories') === newSlot;
      });

      if (existingSameSlotIndex > -1) {
        state.selected[existingSameSlotIndex] = id;
        showToast(`Replaced ${newSlot} with "${item.name}"`, 'success');
      } else {
        state.selected.push(id);
        showToast(`Added "${item.name}" to Outfit Studio!`, 'success');
      }
    }

    updateStudioUI();
    renderProducts();
  }

  function removeSelectedItem(id) {
    state.selected = state.selected.filter(itemId => itemId !== id);
    updateStudioUI();
    renderProducts();
  }

  function updateStudioUI() {
    const selectedItems = state.selected.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

    // 1. Update Slots
    const slotCategories = ['accessories', 'jackets', 'tops', 'jeans', 'shoes', 'bags'];
    
    slotCategories.forEach(slotCat => {
      const slotEl = document.getElementById(`slot-${slotCat}`);
      const contentEl = document.getElementById(`slot-content-${slotCat}`);
      if (!slotEl || !contentEl) return;

      let itemInSlot = null;
      if (slotCat === 'tops') {
        itemInSlot = selectedItems.find(p => p.category === 'tops' || p.category === 'shirts' || p.category === 'traditional');
      } else {
        itemInSlot = selectedItems.find(p => p.category === slotCat);
      }

      if (itemInSlot) {
        slotEl.classList.add('filled');
        contentEl.className = 'slot-content';
        contentEl.innerHTML = `
          <div class="slot-filled-card">
            <img src="${itemInSlot.img}" alt="${itemInSlot.name}" onerror="this.onerror=null;this.src='${itemInSlot.fallbackImg || FALLBACK_IMG}';" />
            <div class="slot-details">
              <h5>${itemInSlot.name}</h5>
              <span class="slot-price">${formatINR(itemInSlot.price)}</span>
            </div>
            <button class="slot-remove-btn" data-id="${itemInSlot.id}" title="Remove item"><i class="fa-solid fa-xmark"></i></button>
          </div>
        `;
        contentEl.querySelector('.slot-remove-btn').addEventListener('click', () => removeSelectedItem(itemInSlot.id));
      } else {
        slotEl.classList.remove('filled');
        contentEl.className = 'slot-content empty';
        contentEl.innerHTML = `<i class="fa-solid fa-plus slot-plus"></i><span>No ${slotCat} selected</span>`;
      }
    });

    // 2. Selected Items Drawer Chips
    if (selectedGrid) {
      selectedGrid.innerHTML = '';
      if (selectedItems.length === 0) {
        if (emptySelectedMsg) emptySelectedMsg.style.display = 'block';
      } else {
        if (emptySelectedMsg) emptySelectedMsg.style.display = 'none';
        selectedItems.forEach(p => {
          const chip = document.createElement('div');
          chip.className = 'selected-item-chip';
          chip.innerHTML = `
            <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='${p.fallbackImg || FALLBACK_IMG}';" />
            <span class="chip-name">${p.name}</span>
            <span class="chip-price">${formatINR(p.price)}</span>
            <button class="chip-remove" title="Remove"><i class="fa-solid fa-xmark"></i></button>
          `;
          chip.querySelector('.chip-remove').addEventListener('click', () => removeSelectedItem(p.id));
          selectedGrid.appendChild(chip);
        });
      }
    }

    // 3. Price Total in INR
    const total = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
    if (outfitTotalPrice) outfitTotalPrice.textContent = formatINR(total);

    // 4. Calculate Style Harmony Score
    calculateHarmonyScore(selectedItems);

    // 5. Update AI Recommendations
    updateRecommendations(selectedItems);
  }

  // Calculate Outfit Harmony Score & AI Feedback
  function calculateHarmonyScore(items) {
    if (!harmonyScoreEl || !harmonyLabelEl || !harmonyFeedbackEl || !harmonyMeter) return;

    if (items.length === 0) {
      harmonyScoreEl.textContent = '0%';
      harmonyLabelEl.textContent = 'Select items';
      harmonyFeedbackEl.textContent = 'Add 2+ items to calculate match';
      harmonyMeter.style.background = 'conic-gradient(var(--border-subtle) 0deg, var(--border-subtle) 360deg)';
      if (stylistTip) stylistTip.textContent = '"Welcome to your styling studio! Pick a base shirt or jacket from the collection below and I will harmonize matching trousers, accessories, and shoes for you."';
      return;
    }

    if (items.length === 1) {
      harmonyScoreEl.textContent = '40%';
      harmonyLabelEl.textContent = 'Base piece selected';
      harmonyFeedbackEl.textContent = 'Add a complementary bottom or accessory';
      harmonyMeter.style.background = 'conic-gradient(var(--gold) 144deg, var(--border-subtle) 0deg)';
      if (stylistTip) stylistTip.textContent = `"Great choice with ${items[0].name}. Let's pair it with contrasting textures and footwear to boost your outfit harmony score!"`;
      return;
    }

    // Color harmony analysis
    const colors = items.map(it => it.colour.toLowerCase());
    const occasions = items.flatMap(it => it.occasion);

    let score = 70;

    // Check shared occasions
    const occCounts = {};
    occasions.forEach(o => occCounts[o] = (occCounts[o] || 0) + 1);
    const maxOccOverlap = Math.max(...Object.values(occCounts));
    if (maxOccOverlap >= items.length) score += 15;
    else if (maxOccOverlap >= 2) score += 10;

    // Bonus for standard complementary sets
    const hasTop = items.some(i => i.category === 'shirts' || i.category === 'tops' || i.category === 'traditional');
    const hasBottom = items.some(i => i.category === 'jeans');
    const hasShoes = items.some(i => i.category === 'shoes');
    const hasLayerOrAcc = items.some(i => i.category === 'jackets' || i.category === 'accessories' || i.category === 'bags');

    if (hasTop && hasBottom) score += 8;
    if (hasTop && hasBottom && hasShoes) score += 5;
    if (hasLayerOrAcc) score += 4;

    score = Math.min(100, Math.max(score, 75));

    harmonyScoreEl.textContent = `${score}%`;
    const degrees = (score / 100) * 360;
    harmonyMeter.style.background = `conic-gradient(var(--gold) ${degrees}deg, var(--border-subtle) 0deg)`;

    if (score >= 90) {
      harmonyLabelEl.textContent = 'Exquisite Harmony ✨';
      harmonyFeedbackEl.textContent = 'Color palettes & textures blend seamlessly';
      if (stylistTip) stylistTip.textContent = `"Magnificent curation! This ensemble hits ${score}% harmony. The textures and tones create a sharp, effortlessly cohesive statement."`;
    } else if (score >= 80) {
      harmonyLabelEl.textContent = 'Great Match 👍';
      harmonyFeedbackEl.textContent = 'Cohesive silhouette and balanced tones';
      if (stylistTip) stylistTip.textContent = `"Looking sharp! Your outfit has an ${score}% style cohesion. Consider adding an artisanal leather belt or watch to complete the look."`;
    } else {
      harmonyLabelEl.textContent = 'Balanced Fit';
      harmonyFeedbackEl.textContent = 'Add footwear or an accessory for higher synergy';
    }
  }

  // Update Dynamic Recommended Pairs
  function updateRecommendations(selectedItems) {
    if (!recommendGrid || !recCountBadge) return;

    if (selectedItems.length === 0) {
      recommendGrid.innerHTML = '<div class="rec-placeholder">Select items to see dynamic pairing recommendations.</div>';
      recCountBadge.textContent = '0 pairs';
      return;
    }

    const selectedCats = selectedItems.map(p => p.category);
    const selectedOccasions = selectedItems.flatMap(p => p.occasion);

    // Recommend items not yet in canvas that share occasion
    const candidateRecs = PRODUCTS.filter(p => {
      if (state.selected.includes(p.id)) return false;
      if (selectedCats.includes(p.category)) return false;
      return p.occasion.some(o => selectedOccasions.includes(o));
    }).slice(0, 4);

    recCountBadge.textContent = `${candidateRecs.length} suggestions`;

    if (candidateRecs.length === 0) {
      recommendGrid.innerHTML = '<div class="rec-placeholder">Canvas is complete! All primary outfit categories filled.</div>';
      return;
    }

    recommendGrid.innerHTML = '';
    candidateRecs.forEach(rec => {
      const card = document.createElement('div');
      card.className = 'rec-card';
      card.innerHTML = `
        <img src="${rec.img}" alt="${rec.name}" onerror="this.onerror=null;this.src='${rec.fallbackImg || FALLBACK_IMG}';" />
        <div class="rec-info">
          <h5>${rec.name}</h5>
          <span class="rec-price">${formatINR(rec.price)}</span>
        </div>
        <button class="btn-rec-add" data-id="${rec.id}" title="Add matching item">
          <i class="fa-solid fa-plus"></i>
        </button>
      `;

      card.querySelector('.btn-rec-add').addEventListener('click', () => {
        toggleSelectItem(rec.id);
      });

      recommendGrid.appendChild(card);
    });
  }

  // Instant AI 1-Click Occasion Presets
  function applyPreset(presetName) {
    const presetMap = {
      casual: ['p18', 'p7', 'p11', 'p20'],       // Denim jacket, white tee, blue jeans, sneakers
      office: ['p17', 'p5', 'p15', 'p21', 'p24'], // Blazer, white formal shirt, black trousers, oxfords, watch
      party: ['p32', 'p23', 'p26', 'p24'],        // Velvet gala top/dress, luxury tote, pendant, watch
      traditional: ['p30', 'p29', 'p24', 'p21'],  // Embroidered Kurta, silk square, watch, formal shoe
      college: ['p10', 'p13', 'p20', 'p25'],      // Varsity tee, distressed denim, sneakers, chain
      interview: ['p33', 'p5', 'p21', 'p28']      // 2-piece tailored suit, white shirt, oxfords, belt
    };

    const targetIds = presetMap[presetName];
    if (!targetIds) return;

    state.selected = targetIds.slice();
    const titleEl = document.getElementById('currentOutfitTitle');
    if (titleEl) {
      titleEl.textContent = `${presetName.charAt(0).toUpperCase() + presetName.slice(1)} Ensemble`;
    }

    updateStudioUI();
    renderProducts();
    showToast(`Equipped ${presetName.toUpperCase()} outfit in Studio!`, 'success');
  }

  // AI Auto-Complete Missing Slots
  function aiAutoMatch() {
    if (state.selected.length === 0) {
      applyPreset('casual');
      return;
    }

    const currentItems = state.selected.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    const neededCategories = ['tops', 'jeans', 'shoes', 'accessories'].filter(cat => {
      if (cat === 'tops') return !currentItems.some(i => i.category === 'tops' || i.category === 'shirts' || i.category === 'traditional');
      return !currentItems.some(i => i.category === cat);
    });

    if (neededCategories.length === 0) {
      showToast('Outfit already has all primary slots filled!', 'info');
      return;
    }

    const primaryOccasion = currentItems[0].occasion[0] || 'casual';

    neededCategories.forEach(cat => {
      const match = PRODUCTS.find(p => {
        if (state.selected.includes(p.id)) return false;
        if (cat === 'tops') return (p.category === 'shirts' || p.category === 'tops') && p.occasion.includes(primaryOccasion);
        return p.category === cat && p.occasion.includes(primaryOccasion);
      }) || PRODUCTS.find(p => p.category === cat);

      if (match) state.selected.push(match.id);
    });

    updateStudioUI();
    renderProducts();
    showToast('AI automatically harmonized missing pieces!', 'success');
  }

  // --- Save Outfit to My Wardrobe ---
  function saveCurrentOutfit() {
    if (state.selected.length === 0) {
      showToast('Please add items to your outfit before saving!', 'error');
      return;
    }

    const outfitName = prompt('Enter a name for your custom outfit:', document.getElementById('currentOutfitTitle')?.textContent || 'My Curated Look');
    if (!outfitName) return;

    const newOutfit = {
      id: 'outfit_' + Date.now(),
      name: outfitName,
      items: state.selected.slice(),
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    state.savedOutfits.unshift(newOutfit);
    localStorage.setItem('wv_outfits', JSON.stringify(state.savedOutfits));
    renderSavedOutfits();
    showToast(`Saved "${outfitName}" to your Wardrobe!`, 'success');
  }

  function renderSavedOutfits() {
    const container = document.getElementById('savedOutfits');
    const countEl = document.getElementById('savedOutfitsCount');
    if (!container) return;

    if (countEl) countEl.textContent = state.savedOutfits.length;

    if (state.savedOutfits.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
          <i class="fa-solid fa-wand-magic-sparkles" style="font-size: 36px; color: rgba(212,175,55,0.3); margin-bottom: 12px; display: block;"></i>
          <p>No saved outfits yet. Create an ensemble in the Outfit Studio and click "Save Outfit"!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    state.savedOutfits.forEach(outfit => {
      const items = outfit.items.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
      const totalCost = items.reduce((sum, item) => sum + item.price, 0);

      const card = document.createElement('div');
      card.className = 'saved-outfit-card';
      card.innerHTML = `
        <div class="saved-card-header">
          <h4 class="saved-card-title">${outfit.name}</h4>
          <span style="font-size: 12px; color: var(--text-muted);">${outfit.date || 'Curated'}</span>
        </div>
        <div class="saved-thumbnails">
          ${items.map(it => `<img src="${it.img}" alt="${it.name}" title="${it.name}" onerror="this.onerror=null;this.src='${it.fallbackImg || FALLBACK_IMG}';" />`).join('')}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 13px; color: var(--text-secondary);">${items.length} items</span>
          <span style="font-size: 16px; font-weight: 700; color: var(--gold);">${formatINR(totalCost)}</span>
        </div>
        <div class="saved-card-actions">
          <button class="btn btn-gold btn-block load-outfit-btn" data-id="${outfit.id}"><i class="fa-solid fa-rotate-right"></i> Load into Studio</button>
          <button class="btn btn-ghost delete-outfit-btn" data-id="${outfit.id}" title="Delete outfit"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;

      card.querySelector('.load-outfit-btn').addEventListener('click', () => {
        state.selected = outfit.items.slice();
        const titleEl = document.getElementById('currentOutfitTitle');
        if (titleEl) titleEl.textContent = outfit.name;
        updateStudioUI();
        renderProducts();
        showToast(`Loaded "${outfit.name}" into Outfit Studio!`, 'success');
        const studioEl = document.getElementById('outfitStudio');
        if (studioEl) studioEl.scrollIntoView({ behavior: 'smooth' });
      });

      card.querySelector('.delete-outfit-btn').addEventListener('click', () => {
        if (confirm(`Delete saved outfit "${outfit.name}"?`)) {
          state.savedOutfits = state.savedOutfits.filter(o => o.id !== outfit.id);
          localStorage.setItem('wv_outfits', JSON.stringify(state.savedOutfits));
          renderSavedOutfits();
          showToast('Outfit deleted', 'info');
        }
      });

      container.appendChild(card);
    });
  }

  // --- Favourites Management ---
  function toggleFavourite(id) {
    const item = PRODUCTS.find(p => p.id === id);
    const index = state.favourites.indexOf(id);

    if (index > -1) {
      state.favourites.splice(index, 1);
      showToast(`Removed "${item ? item.name : 'item'}" from favorites`, 'info');
    } else {
      state.favourites.push(id);
      showToast(`Saved "${item ? item.name : 'item'}" to favorites!`, 'success');
    }

    localStorage.setItem('wv_faves', JSON.stringify(state.favourites));
    renderProducts();
    renderFavourites();
  }

  function renderFavourites() {
    const container = document.getElementById('favouritesGrid');
    const countEl = document.getElementById('favoritesCount');
    if (!container) return;

    if (countEl) countEl.textContent = state.favourites.length;

    const faveProducts = state.favourites.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

    if (faveProducts.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
          <i class="fa-regular fa-heart" style="font-size: 36px; color: rgba(244,63,94,0.3); margin-bottom: 12px; display: block;"></i>
          <p>You haven't added any favorite pieces yet. Click the heart icon on any product to save it here!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    faveProducts.forEach(p => {
      const card = createProductCard(p);
      container.appendChild(card);
    });
  }

  // --- Shopping Cart Management in INR ---
  function addToCart(id, qty = 1) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const cartItem = state.cart.find(item => item.id === id);
    if (cartItem) {
      cartItem.qty += qty;
    } else {
      state.cart.push({ id, qty });
    }

    localStorage.setItem('wv_cart', JSON.stringify(state.cart));
    updateCartUI();
    showToast(`Added "${product.name}" to cart!`, 'success');
  }

  function addEntireOutfitToCart() {
    if (state.selected.length === 0) {
      showToast('Select items in the Outfit Studio first!', 'error');
      return;
    }

    state.selected.forEach(id => {
      const cartItem = state.cart.find(item => item.id === id);
      if (cartItem) cartItem.qty += 1;
      else state.cart.push({ id, qty: 1 });
    });

    localStorage.setItem('wv_cart', JSON.stringify(state.cart));
    updateCartUI();
    openCartModal();
    showToast('Added entire curated outfit to cart!', 'success');
  }

  function removeFromCart(id) {
    state.cart = state.cart.filter(item => item.id !== id);
    localStorage.setItem('wv_cart', JSON.stringify(state.cart));
    updateCartUI();
    showToast('Item removed from cart', 'info');
  }

  function updateCartItemQty(id, delta) {
    const item = state.cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id);
      return;
    }

    localStorage.setItem('wv_cart', JSON.stringify(state.cart));
    updateCartUI();
  }

  function updateCartUI() {
    const totalItemsCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCount) cartCount.textContent = totalItemsCount;
    if (cartItemCountTitle) cartItemCountTitle.textContent = totalItemsCount;

    renderCartItems();

    let subtotal = 0;
    state.cart.forEach(cartItem => {
      const product = PRODUCTS.find(p => p.id === cartItem.id);
      if (product) subtotal += product.price * cartItem.qty;
    });

    if (cartSubtotal) cartSubtotal.textContent = formatINR(subtotal);
    if (cartTotal) cartTotal.textContent = formatINR(subtotal);
  }

  function renderCartItems() {
    if (!cartItems) return;

    if (state.cart.length === 0) {
      cartItems.innerHTML = `
        <div class="empty-cart">
          <i class="fa-solid fa-bag-shopping"></i>
          <h4>Your bag is empty</h4>
          <p>Explore the collection or style a custom outfit to add items.</p>
        </div>
      `;
      return;
    }

    cartItems.innerHTML = '';
    state.cart.forEach(item => {
      const p = PRODUCTS.find(prod => prod.id === item.id);
      if (!p) return;

      const itemTotal = p.price * item.qty;
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <img src="${p.img}" alt="${p.name}" class="cart-item-img" onerror="this.onerror=null;this.src='${p.fallbackImg || FALLBACK_IMG}';" />
        <div class="cart-item-info">
          <h5>${p.name}</h5>
          <span class="cart-item-meta">${p.colour} &nbsp;|&nbsp; ${p.category}</span>
          <span class="cart-item-price">${formatINR(itemTotal)}</span>
          <div class="cart-qty-controls">
            <button class="qty-btn qty-minus" data-id="${p.id}"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn qty-plus" data-id="${p.id}"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
        <button class="cart-remove-btn" data-id="${p.id}" title="Remove"><i class="fa-solid fa-trash-can"></i></button>
      `;

      el.querySelector('.qty-minus').addEventListener('click', () => updateCartItemQty(p.id, -1));
      el.querySelector('.qty-plus').addEventListener('click', () => updateCartItemQty(p.id, 1));
      el.querySelector('.cart-remove-btn').addEventListener('click', () => removeFromCart(p.id));

      cartItems.appendChild(el);
    });
  }

  function openCartModal() {
    if (cartModal) cartModal.classList.add('open');
  }

  function closeCartModal() {
    if (cartModal) cartModal.classList.remove('open');
  }

  // --- Quick View Modal with Multi-Angle Gallery & Fabric Details ---
  function openQuickView(product) {
    if (!quickViewBody || !quickViewModal) return;
    const isSelected = state.selected.includes(product.id);
    const galleryImages = product.gallery || [product.img, product.fallbackImg || product.img];

    quickViewBody.innerHTML = `
      <div class="quick-view-grid">
        <div class="quick-view-media-col">
          <div class="quick-view-main-wrap">
            <img src="${product.img}" alt="${product.name}" class="quick-view-img" id="qvMainImg" onerror="this.onerror=null;this.src='${product.fallbackImg || FALLBACK_IMG}';" />
            <div class="zoom-indicator"><i class="fa-solid fa-magnifying-glass-plus"></i> Studio HD</div>
          </div>
          <div class="quick-view-gallery-thumbs" id="qvThumbs">
            ${galleryImages.map((src, idx) => `
              <button class="qv-thumb-btn ${idx === 0 ? 'active' : ''}" data-src="${src}">
                <img src="${src}" alt="Angle ${idx + 1}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />
              </button>
            `).join('')}
          </div>
        </div>
        <div class="quick-view-info">
          <div class="quick-view-badges">
            <span class="meta-pill" style="background: rgba(212,175,55,0.15); color: var(--gold); font-weight:700;">${product.category.toUpperCase()}</span>
            <span class="meta-pill">${product.gender.toUpperCase()}</span>
            <span class="meta-pill">${product.occasion.join(' · ')}</span>
          </div>
          <h2>${product.name}</h2>
          <div class="quick-view-price-row">
            <div class="quick-view-price">${formatINR(product.price)}</div>
            <div class="quick-view-rating">
              <span class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
              <strong>${product.rating || '4.9'}</strong> <span class="review-count">(${product.reviewsCount || '120'} verified reviews)</span>
            </div>
          </div>
          <p class="quick-view-desc">${product.desc}</p>
          
          <div class="quick-view-specs-box">
            <div class="spec-row"><strong><i class="fa-solid fa-shirt"></i> Fabric / Material:</strong> <span>${product.fabric || '100% Premium Pure Cotton'}</span></div>
            <div class="spec-row"><strong><i class="fa-solid fa-ruler-combined"></i> Tailored Fit:</strong> <span>${product.fit || 'Modern Tailored Comfort Cut'}</span></div>
            <div class="spec-row"><strong><i class="fa-solid fa-palette"></i> Palette Shade:</strong> <span>${product.colour}</span></div>
            <div class="spec-row"><strong><i class="fa-solid fa-truck-fast"></i> Delivery:</strong> <span>Express 48-Hour Complimentary Shipping</span></div>
          </div>

          <div class="quick-view-ctas">
            <button class="btn btn-gold qv-outfit-btn" data-id="${product.id}">
              <i class="fa-solid ${isSelected ? 'fa-check' : 'fa-wand-magic-sparkles'}"></i>
              ${isSelected ? 'In Outfit Studio' : 'Add to Outfit Studio'}
            </button>
            <button class="btn btn-primary qv-cart-btn" data-id="${product.id}">
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;

    // Multi-angle thumbnail switcher
    const mainImgEl = document.getElementById('qvMainImg');
    const thumbBtns = quickViewBody.querySelectorAll('.qv-thumb-btn');
    thumbBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        thumbBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (mainImgEl) {
          mainImgEl.src = btn.dataset.src;
        }
      });
    });

    quickViewBody.querySelector('.qv-outfit-btn').addEventListener('click', () => {
      toggleSelectItem(product.id);
      closeQuickViewModal();
    });

    quickViewBody.querySelector('.qv-cart-btn').addEventListener('click', () => {
      addToCart(product.id);
      closeQuickViewModal();
    });

    quickViewModal.classList.add('open');
  }

  function closeQuickViewModal() {
    if (quickViewModal) quickViewModal.classList.remove('open');
  }

  // --- Auth UI Management ---
  function updateUserAuthUI() {
    if (!userProfileArea) return;
    if (state.currentUser) {
      const initial = (state.currentUser.name && state.currentUser.name.length > 0) ? state.currentUser.name.charAt(0).toUpperCase() : 'U';
      const firstName = (state.currentUser.name && state.currentUser.name.length > 0) ? state.currentUser.name.split(' ')[0] : 'User';
      userProfileArea.innerHTML = `
        <div class="user-badge">
          <div class="user-avatar-initial">${initial}</div>
          <span>${firstName}</span>
          <button id="logoutBtn" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; margin-left: 4px;" title="Sign Out"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
        </div>
      `;
      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
          state.currentUser = null;
          localStorage.removeItem('wv_user');
          updateUserAuthUI();
          showToast('Signed out successfully', 'info');
        });
      }
    } else {
      userProfileArea.innerHTML = `
        <button id="signInBtn" class="btn btn-ghost">Sign In</button>
        <button id="registerBtn" class="btn btn-primary">Join Free</button>
      `;
      const sBtn = document.getElementById('signInBtn');
      const rBtn = document.getElementById('registerBtn');
      if (sBtn) sBtn.addEventListener('click', () => openModal(signinModal));
      if (rBtn) rBtn.addEventListener('click', () => openModal(registerModal));
    }
  }

  function openModal(modal) {
    if (modal) modal.classList.add('open');
  }

  function closeModal(modal) {
    if (modal) modal.classList.remove('open');
  }

  // --- Toast Notification System ---
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-circle-exclamation';

    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- Event Bindings ---
  function bindEvents() {
    // 1. Category filter buttons
    document.querySelectorAll('.cat').forEach(btn => {
      btn.addEventListener('click', () => {
        setCategoryFilter(btn.dataset.cat);
      });
    });

    // 2. Gender selector tabs
    document.querySelectorAll('.gender-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        setGenderFilter(tab.dataset.gender);
      });
    });

    // 3. Search Bar
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.currentFilters.search = e.target.value;
        if (clearSearchBtn) clearSearchBtn.classList.toggle('show', !!e.target.value);
        renderProducts();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        state.currentFilters.search = '';
        if (searchInput) searchInput.value = '';
        clearSearchBtn.classList.remove('show');
        renderProducts();
      });
    }

    // 4. Select Dropdowns
    if (filterCategory) {
      filterCategory.addEventListener('change', (e) => setCategoryFilter(e.target.value));
    }
    if (filterOccasion) {
      filterOccasion.addEventListener('change', (e) => setOccasionFilter(e.target.value));
    }
    if (filterGender) {
      filterGender.addEventListener('change', (e) => setGenderFilter(e.target.value));
    }
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.currentFilters.sort = e.target.value;
        renderProducts();
      });
    }

    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', resetFilters);
    }

    // 5. Studio Actions
    const clearSelectedBtn = document.getElementById('clearSelected');
    if (clearSelectedBtn) {
      clearSelectedBtn.addEventListener('click', () => {
        state.selected = [];
        const titleEl = document.getElementById('currentOutfitTitle');
        if (titleEl) titleEl.textContent = 'Custom Ensemble';
        updateStudioUI();
        renderProducts();
        showToast('Cleared outfit canvas', 'info');
      });
    }

    const aiAutoMatchBtn = document.getElementById('aiAutoMatchBtn');
    if (aiAutoMatchBtn) {
      aiAutoMatchBtn.addEventListener('click', aiAutoMatch);
    }

    const saveOutfitBtn = document.getElementById('saveOutfit');
    if (saveOutfitBtn) {
      saveOutfitBtn.addEventListener('click', saveCurrentOutfit);
    }

    const addOutfitToCartBtn = document.getElementById('addOutfitToCartBtn');
    if (addOutfitToCartBtn) {
      addOutfitToCartBtn.addEventListener('click', addEntireOutfitToCart);
    }

    // 6. Occasion Presets
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        applyPreset(btn.dataset.preset);
      });
    });

    // 7. Hero CTAs
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const createOutfitBtn = document.getElementById('createOutfitBtn');
    if (createOutfitBtn) {
      createOutfitBtn.addEventListener('click', () => {
        document.getElementById('outfitStudio')?.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // 8. Wardrobe Tabs
    document.querySelectorAll('.wardrobe-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.wardrobe-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.wardrobe-panel').forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const target = document.getElementById(tab.dataset.tab);
        if (target) target.classList.add('active');
      });
    });

    // 9. Shopping Cart
    if (cartBtn) cartBtn.addEventListener('click', openCartModal);
    if (closeCart) closeCart.addEventListener('click', closeCartModal);
    if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartModal);
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        state.cart = [];
        localStorage.setItem('wv_cart', '[]');
        updateCartUI();
        showToast('Shopping bag cleared', 'info');
      });
    }
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (state.cart.length === 0) {
          showToast('Your bag is empty!', 'error');
          return;
        }
        let total = 0;
        state.cart.forEach(item => {
          const p = PRODUCTS.find(prod => prod.id === item.id);
          if (p) total += p.price * item.qty;
        });
        alert(`Proceeding to checkout for ${formatINR(total)}.\nThank you for shopping at Teju's Wardrobe!`);
        state.cart = [];
        localStorage.setItem('wv_cart', '[]');
        updateCartUI();
        closeCartModal();
      });
    }

    // 10. Quick View Modal
    if (closeQuickView) closeQuickView.addEventListener('click', closeQuickViewModal);
    if (quickViewBackdrop) quickViewBackdrop.addEventListener('click', closeQuickViewModal);

    // 11. Auth Modal Triggers & Form Submissions
    if (closeSignin) closeSignin.addEventListener('click', () => closeModal(signinModal));
    if (closeRegister) closeRegister.addEventListener('click', () => closeModal(registerModal));
    if (signinBackdrop) signinBackdrop.addEventListener('click', () => closeModal(signinModal));
    if (registerBackdrop) registerBackdrop.addEventListener('click', () => closeModal(registerModal));

    if (switchToRegister) {
      switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(signinModal);
        openModal(registerModal);
      });
    }

    if (switchToSignin) {
      switchToSignin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        openModal(signinModal);
      });
    }

    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
      signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signinEmail')?.value;
        const pw = document.getElementById('signinPassword')?.value;
        const users = JSON.parse(localStorage.getItem('wv_users') || '[]');
        const user = users.find(u => u.email === email && u.password === pw);

        if (user || email) {
          state.currentUser = { name: user ? user.name : email.split('@')[0], email };
          localStorage.setItem('wv_user', JSON.stringify(state.currentUser));
          updateUserAuthUI();
          closeModal(signinModal);
          showToast(`Welcome back, ${state.currentUser.name}!`, 'success');
        }
      });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName')?.value;
        const email = document.getElementById('regEmail')?.value;
        const pw = document.getElementById('regPassword')?.value;
        const p2 = document.getElementById('regConfirm')?.value;

        if (pw !== p2) {
          showToast('Passwords do not match!', 'error');
          return;
        }

        const users = JSON.parse(localStorage.getItem('wv_users') || '[]');
        if (users.find(u => u.email === email)) {
          showToast('An account with this email already exists!', 'error');
          return;
        }

        users.push({ name, email, password: pw });
        localStorage.setItem('wv_users', JSON.stringify(users));

        state.currentUser = { name, email };
        localStorage.setItem('wv_user', JSON.stringify(state.currentUser));
        updateUserAuthUI();
        closeModal(registerModal);
        showToast(`Welcome to Teju's Wardrobe, ${name}!`, 'success');
      });
    }

    // 12. Mobile Menu
    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileDrawer.classList.toggle('open');
      });
    }

    if (closeDrawerBtn && mobileDrawer) {
      closeDrawerBtn.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    }

    // 13. Mobile Drawer Links
    document.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', () => {
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        if (link.dataset.gender) setGenderFilter(link.dataset.gender);
        if (link.dataset.occasion) setOccasionFilter(link.dataset.occasion);
        if (link.dataset.category) setCategoryFilter(link.dataset.category);
        if (link.dataset.filter === 'all') resetFilters();
      });
    });

    // 14. Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you for subscribing to Teju\'s Wardrobe style drops!', 'success');
        newsletterForm.reset();
      });
    }

    // Escape Key to close modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartModal();
        closeQuickViewModal();
        closeModal(signinModal);
        closeModal(registerModal);
        if (mobileDrawer) mobileDrawer.classList.remove('open');
      }
    });
  }

  // --- Scroll Detection, Dynamic Sticky Header & Scrollspy ---
  function initScrollAndHeader() {
    const siteHeader = document.getElementById('siteHeader');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const sections = document.querySelectorAll('main > section[id]');
    const navLinks = document.querySelectorAll('.main-nav .nav-link');

    function onScroll() {
      const scrollPos = window.scrollY;

      // 1. Sticky header compact mode & backdrop blur on scroll
      if (siteHeader) {
        if (scrollPos > 40) {
          siteHeader.classList.add('scrolled');
        } else {
          siteHeader.classList.remove('scrolled');
        }
      }

      // 2. Back to top button visibility
      if (backToTopBtn) {
        if (scrollPos > 350) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }

      // 3. Scrollspy
      let currentSectionId = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach(link => {
          const sectionTarget = link.getAttribute('data-section') || link.getAttribute('href')?.replace('#', '');
          
          if (currentSectionId === 'products') {
            if (link.dataset.gender) {
              link.classList.toggle('active', link.dataset.gender === state.currentFilters.gender);
            } else if (link.dataset.filter === 'all' && state.currentFilters.gender === 'all') {
              link.classList.add('active');
            } else if (!link.dataset.gender && sectionTarget === 'products' && state.currentFilters.gender === 'all') {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          } else {
            if (sectionTarget === currentSectionId && !link.dataset.gender) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          }
        });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // Launch App
  init();
});
