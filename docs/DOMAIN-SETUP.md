# Domain Setup Guide

This guide explains how to point your domain (hosted at Square/Google Domains) to your Vercel or Netlify deployment.

## 📋 Before You Start

- Your site must be deployed to Vercel or Netlify
- You need access to your Square Domains dashboard
- DNS changes can take up to 48 hours to propagate (usually much faster)

---

## 🟣 Domain Setup for Vercel

### Step 1: Add Domain in Vercel

1. Go to your project in the [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on **Settings** → **Domains**
3. Enter your domain (e.g., `evosoft.com` or `www.evosoft.com`)
4. Click **Add**

Vercel will provide DNS records to configure.

### Step 2: Configure Square Domains

1. Log in to [Square Domains](https://domains.squarespace.com/) (formerly Google Domains)
2. Select your domain
3. Go to **DNS** settings

### Step 3: Add DNS Records

**For apex domain (evosoft.com):**

| Type | Host | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |

**For www subdomain (www.evosoft.com):**

| Type | Host | Value |
|------|------|-------|
| CNAME | www | `cname.vercel-dns.com.` |

**Alternative: Using both apex and www:**

Add both records, then Vercel will auto-redirect one to the other.

### Step 4: Verify in Vercel

1. Return to Vercel dashboard
2. Wait for the domain to show "Valid Configuration" ✓
3. SSL certificate is automatically provisioned

---

## 🟢 Domain Setup for Netlify

### Step 1: Add Domain in Netlify

1. Go to your site in [Netlify Dashboard](https://app.netlify.com)
2. Click **Domain settings** → **Add custom domain**
3. Enter your domain and click **Verify**
4. Click **Add domain**

### Step 2: Configure Square Domains

1. Log in to [Square Domains](https://domains.squarespace.com/)
2. Select your domain
3. Go to **DNS** settings

### Step 3: Add DNS Records

**Option A: Using Netlify's Load Balancer (Recommended)**

| Type | Host | Value |
|------|------|-------|
| A | @ | `75.2.60.5` |
| CNAME | www | `your-site-name.netlify.app.` |

**Option B: CNAME Flattening (for apex domain)**

| Type | Host | Value |
|------|------|-------|
| ALIAS/ANAME | @ | `your-site-name.netlify.app` |
| CNAME | www | `your-site-name.netlify.app.` |

> Note: Square Domains supports ALIAS records for apex domains.

### Step 4: Verify in Netlify

1. Return to Netlify dashboard
2. Check domain status shows "Netlify DNS" or valid external DNS
3. Enable HTTPS (automatic with Let's Encrypt)

---

## 🔄 DNS Record Types Explained

| Type | Purpose | Example |
|------|---------|---------|
| **A Record** | Points domain to IPv4 address | `@` → `76.76.21.21` |
| **AAAA Record** | Points domain to IPv6 address | `@` → `2606:4700::1` |
| **CNAME** | Points subdomain to another domain | `www` → `example.com` |
| **ALIAS/ANAME** | Like CNAME but for apex domains | `@` → `example.com` |

---

## 🔒 SSL/HTTPS Setup

Both Vercel and Netlify provide **free SSL certificates** via Let's Encrypt.

### Vercel
- SSL is automatically provisioned when domain is verified
- No action required

### Netlify
1. Go to **Domain settings** → **HTTPS**
2. Click **Verify DNS configuration**
3. Click **Provision certificate**

---

## ⏱️ DNS Propagation

DNS changes typically take:
- **5-30 minutes**: Initial propagation
- **Up to 48 hours**: Full global propagation

### Check Propagation Status

Use these tools to verify DNS changes:
- [dnschecker.org](https://dnschecker.org)
- [whatsmydns.net](https://whatsmydns.net)

---

## 🔀 Redirects

### Redirect www to apex (or vice versa)

**Vercel**: Automatic - Set your preferred domain in the dashboard

**Netlify**: Add to `netlify.toml`:
```toml
[[redirects]]
  from = "https://www.evosoft.com/*"
  to = "https://evosoft.com/:splat"
  status = 301
  force = true
```

### Redirect HTTP to HTTPS

Both Vercel and Netlify handle this automatically.

---

## 🚨 Troubleshooting

### Domain Not Verifying

1. **Wait longer**: DNS propagation takes time
2. **Check records**: Ensure no typos in DNS values
3. **Remove conflicting records**: Delete old A/CNAME records pointing elsewhere

### SSL Certificate Error

1. **Wait for DNS**: Certificate requires verified DNS
2. **Check CAA records**: Remove any CAA records blocking Let's Encrypt
3. **Manual provision**: In Netlify, click "Renew certificate"

### Site Shows Old Content

1. **Clear browser cache**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Check deployment**: Ensure latest deploy is live
3. **DNS cache**: Try from incognito/private window

### ERR_TOO_MANY_REDIRECTS

1. **Check for redirect loops**: www → apex → www
2. **Remove conflicting redirects**: Check both platform settings and code

---

## 📝 Square Domains Quick Reference

### Accessing DNS Settings

1. Go to [domains.squarespace.com](https://domains.squarespace.com)
2. Sign in with your Google account
3. Click your domain
4. Select **DNS** from the left menu
5. Scroll to **Custom records** section

### Common Square Domains DNS Interface

```
Custom records
─────────────────────────────────────────────
Host name    Type     TTL      Data
@            A        1 hour   76.76.21.21
www          CNAME    1 hour   cname.vercel-dns.com.
─────────────────────────────────────────────
```

### Tips for Square Domains

- TTL (Time to Live): Use 1 hour for testing, 1 day for production
- The `@` symbol represents the apex domain (evosoft.com)
- CNAME values should end with a period (.)
- Save changes and wait for propagation

---

## ✅ Final Checklist

- [ ] Domain added to Vercel/Netlify
- [ ] DNS records configured in Square Domains
- [ ] DNS propagation complete (check with dnschecker.org)
- [ ] Site accessible via custom domain
- [ ] HTTPS working (padlock icon in browser)
- [ ] www redirect working (if desired)
- [ ] Old Azure site decommissioned

