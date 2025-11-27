# Cal.com Integration Guide

## Overview
This guide explains how to integrate Cal.com booking functionality into the FLOWST8 website.

## API Key Secured ✅
Your Cal.com API key has been noted:
- `cal_live_eeb4e731c6fc5ae5f54b9d0224733a9d`

## What I Need From You

To complete the Cal.com integration, please provide:

### 1. Your Cal.com Booking Link
The full URL where people can book with you.

**Example**: `https://cal.com/flowst8/consultation`

From this, I can extract:
- **Username**: `flowst8`
- **Event Type**: `consultation`

### 2. Integration Preference

Choose how you want Cal.com integrated:

#### Option A: Embedded Booking Widget (Recommended)
- Booking form appears **directly on your website**
- Users don't leave your site
- Seamless experience
- Requires JavaScript embed code

#### Option B: Simple Link/Button
- Button that **opens Cal.com in new tab**
- Simpler implementation
- Less technical overhead
- Users go to cal.com

#### Option C: Popup/Modal
- Button triggers **popup overlay** with booking form
- Professional look
- Keeps users on your site
- Medium complexity

### 3. Where to Place Booking

Where should booking appear on the website?

- **Primary CTA** in hero section?
- **Contact page** only?
- **Every page** header button?
- **Service pages** (Training, Consultancy, Development)?
- **Footer** as persistent CTA?

### 4. CTA Button Text

What should the booking button say?

**Options**:
- "Schedule Free Audit"
- "Book a Consultation"
- "Get Started"
- "Schedule Discovery Call"
- "Book Free Strategy Session"
- Custom text?

## Integration Methods

### Method 1: Cal.com Embed Widget (JavaScript)

```html
<!-- Add to your HTML where booking should appear -->
<div id="cal-booking-widget"></div>

<!-- Add before closing </body> tag -->
<script>
(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        typeof namespace === "string"
          ? (cal.ns[namespace] = api) && p(api, ar)
          : p(cal, ar);
        return;
      }
      p(cal, ar);
    };
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", {origin:"https://cal.com"});

// Inline embed
Cal("inline", {
  elementOrSelector:"#cal-booking-widget",
  calLink: "YOUR_USERNAME/YOUR_EVENT_TYPE"
});

// OrUI configuration
Cal("ui", {
  "theme":"light",
  "styles":{"branding":{"brandColor":"#4040F5"}},
  "hideEventTypeDetails":false
});
</script>
```

### Method 2: Simple Link Button

```html
<a href="https://cal.com/YOUR_USERNAME/YOUR_EVENT_TYPE" 
   target="_blank"
   class="btn-primary">
  Schedule Free Audit
</a>
```

### Method 3: Popup Modal

```html
<!-- Trigger button -->
<button data-cal-link="YOUR_USERNAME/YOUR_EVENT_TYPE" 
        data-cal-config='{"theme":"light"}'
        class="btn-primary">
  Book Consultation
</button>

<!-- Cal.com script (popup mode) -->
<script src="https://app.cal.com/embed/embed.js"></script>
```

## Customization Options

With the embed widget, you can customize:

### Theme
- `light` or `dark`
- Match FLOWST8 design system

### Brand Color
- Use FLOWST8 primary blue: `#4040F5` (from design system)

### Layout
- `inline` - Embedded directly in page
- `popup` - Opens in modal overlay
- `floating-popup` - Floating button that opens modal

### Hide Elements
- Event type details
- Branding
- Specific fields

## Integration Checklist

When you provide your current website code, I will:

- [ ] Add Cal.com embed script
- [ ] Create booking component matching design system
- [ ] Add CTA buttons in specified locations
- [ ] Style to match FLOWST8 brand colors
- [ ] Test responsive design
- [ ] Ensure accessibility (keyboard navigation)
- [ ] Add loading states
- [ ] Configure theme to match dark/light mode

## Next Steps

**Please provide**:
1. Your Cal.com booking link
2. Integration preference (A, B, or C)
3. Where to place booking on site
4. CTA button text preference
5. Your current website code/design

**Then I'll**:
- Integrate Cal.com seamlessly
- Match FLOWST8 design system
- Ensure professional, premium look
- Test across all pages

## Security Note

Your API key (`cal_live_eeb4e731c6fc5ae5f54b9d0224733a9d`) should be stored in `.env` file locally (which is gitignored for security). Most basic integrations don't need the API key in the frontend - just your public booking link.

The API key is mainly for:
- Backend integrations
- Programmatic booking creation
- Webhook handling
- Custom calendar management

For a simple website booking widget, your public Cal.com link is sufficient!

---

**Ready when you are!** Share your website code and preferences, and I'll integrate Cal.com beautifully. 🚀
