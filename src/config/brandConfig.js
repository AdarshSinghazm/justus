/**
 * BRAND & CONTACT CONFIGURATION
 * 
 * Replace these placeholder values with your actual contact details,
 * social links, and brand messaging whenever you're ready!
 */

export const brandConfig = {
  name: "justus. ♡",
  tagline: "Made with love, for the ones you love.",
  shortDescription: "Personalized websites for couples. Cherish your memories in your own romantic corner of the internet.",
  
  // WhatsApp settings
  whatsapp: {
    phoneNumber: "917690050935",
    rawNumber: "7690050935",
    displayNumber: "+91 76900 50935",
    defaultMessage: "Hey! I would love to know more about creating a personalized website for us ♡",
    // Helper to generate a prefilled WhatsApp link
    getTemplateLink: (templateName, price = "₹300") => {
      const message = `Hey! I loved your ${templateName} template (${price}) and would like to create one for us ♡`;
      return `https://wa.me/917690050935?text=${encodeURIComponent(message)}`;
    },
    getCustomOrderLink: (details = {}) => {
      const { template = "The Classic", coupleNames = "", date = "", notes = "" } = details;
      let msg = `Hey! I'd love to order a personalized website ♡\n`;
      if (template) msg += `• Template: ${template}\n`;
      if (coupleNames) msg += `• For: ${coupleNames}\n`;
      if (date) msg += `• Special Date: ${date}\n`;
      if (notes) msg += `• Notes: ${notes}\n`;
      msg += `Can you please share how we can get started?`;
      return `https://wa.me/917690050935?text=${encodeURIComponent(msg)}`;
    }
  },

  // Instagram settings (Dummy placeholder - user can update handle anytime)
  instagram: {
    handle: "justus.love",
    profileUrl: "https://instagram.com/justus.love",
    dmUrl: "https://ig.me/m/justus.love",
  },

  // General email contact
  email: {
    address: "hello@justusgifting.com",
    subject: "Personalized Couple Website Inquiry ♡"
  },

  // Turnaround and order details
  orderInfo: {
    turnaroundTime: "24 to 48 hours",
    deliveryFormat: "Private custom web link & QR code",
    hostingIncluded: "1 year included (renewable)",
  }
};
