# Deployment Guide - Vercel

This site is optimized for **Vercel** deployment. Vercel is the creator of Next.js and provides the best integration.

## 🚀 Deploy via GitHub (Recommended)

### Step 1: Push to GitHub

```bash
cd D:\Projects_Clients\Evosoft\ComingSoon\site
git init
git add .
git commit -m "Initial commit: Evosoft Coming Soon"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/evosoft-coming-soon.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New..."** → **"Project"**
3. Find and select your `evosoft-coming-soon` repository
4. Vercel auto-detects Next.js - no configuration needed!
5. Click **"Deploy"**

### Step 3: Done! 🎉

- Your site is live at `https://evosoft-coming-soon.vercel.app`
- Every push to `main` triggers automatic deployment
- Pull requests get preview deployments

---

## 🔗 Add Your Custom Domain

### In Vercel Dashboard:

1. Go to your project → **Settings** → **Domains**
2. Enter your domain (e.g., `evosoft.com`)
3. Click **Add**
4. Vercel shows you the DNS records needed

### In Square Domains:

1. Log in to [domains.squarespace.com](https://domains.squarespace.com)
2. Select your domain → **DNS**
3. Add the records Vercel provided:

**For apex domain (evosoft.com):**
| Type | Host | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |

**For www subdomain:**
| Type | Host | Value |
|------|------|-------|
| CNAME | www | `cname.vercel-dns.com.` |

4. Wait 5-30 minutes for DNS propagation
5. Vercel automatically provisions SSL certificate

---

## ✅ Pre-Deployment Checklist

Before your first deploy:

- [x] `app/layout.tsx` - ✅ Set to `https://www.evosoftllc.com`
- [x] `public/sitemap.xml` - ✅ Updated
- [x] `public/robots.txt` - ✅ Updated  
- [ ] Convert `og-image.svg` to `og-image.png` (1200×630) - *optional, for social sharing*
- [ ] Convert `apple-touch-icon.svg` to `apple-touch-icon.png` (180×180) - *optional, for iOS*

---

## 🔧 Vercel Project Settings

The site includes `vercel.json` with:
- Framework: Next.js (auto-detected)
- Region: `iad1` (US East - change if needed)
- Caching headers for static assets

### Optional: Environment Variables

If you add features later that need env vars:
1. Go to **Settings** → **Environment Variables**
2. Add variables for Production/Preview/Development

---

## 📊 After Deployment

### Verify Everything Works:

- [ ] Site loads at your custom domain
- [ ] HTTPS padlock shows (SSL working)
- [ ] Test on mobile device
- [ ] Check [Google PageSpeed](https://pagespeed.web.dev/) score
- [ ] Test social sharing with [metatags.io](https://metatags.io)

### Monitor (Free):

- **Vercel Analytics** - Enable in dashboard for basic analytics
- **Vercel Speed Insights** - Core Web Vitals monitoring

---

## 💰 Cost: $0

Vercel's free tier includes:
- 100 GB bandwidth/month
- Unlimited deployments
- Unlimited custom domains
- Automatic SSL
- Preview deployments

Your Coming Soon page will use <1% of these limits.

---

## 🚨 Troubleshooting

### Build Fails
- Check Node.js version (needs 18.17+)
- Run `npm run build` locally first to catch errors

### Domain Not Working
- DNS propagation can take up to 48 hours (usually 5-30 min)
- Check [dnschecker.org](https://dnschecker.org) for propagation status
- Verify no typos in DNS records

### 404 Errors
- Check `vercel.json` exists
- Ensure `trailingSlash: true` in `next.config.ts`

---

## 🔥 Shut Down Azure

Once your Vercel site is live with your custom domain:

1. Verify site works at your domain
2. Go to Azure Portal
3. Delete the App Service / resource group
4. **Save $60/month!** 💸
