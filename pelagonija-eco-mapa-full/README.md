# Пелагонија Еко Мапа (Pelagonia Eco Map)

A Macedonian-language civic eco-reporting webpage — a simpler, registration-free
alternative to FixMyStreet for reporting local pollution and environmental
degradation in the Pelagonia region and wider North Macedonia.

Created by **ЕКТЕР Битола**. Supported through the **Digital Spark** grant scheme,
implemented by the Metamorphosis Foundation, with the support of CIVICUS:
World Alliance for Citizen Participation, in partnership with TechSoup and Global Voices.

Contact: **ecterbt@gmail.com**

## Features

- Kinetic animated hero (framer-motion masked line reveal + parallax)
- Smooth momentum scrolling (lenis) and an editorial marquee of reportable issues
- Location card: street & number input, "use my current location" (browser geolocation),
  link-out to the public Google My Maps
- Photo card: drag & drop attach with instant local preview (demo only — files are
  NOT uploaded or stored)
- Embedded public Google My Maps: `mid=1UU0Ar9nAG9v0mUkHMQayg_M8olNHs5c`
- 3-step "How to report a problem" guide
- Two FAQ sections (citizen info + map usage, incl. emergency warnings)
- Fully in Macedonian (mk), dark Swiss-editorial design
  (Unbounded / Manrope / JetBrains Mono, all with Cyrillic support)

## Tech Stack

- **Frontend:** React 19, Tailwind CSS, framer-motion, lenis, lucide-react, shadcn/ui
- **Backend:** FastAPI + Motor (MongoDB) — currently only a health/status API;
  the reporting flow links out to Google My Maps, so no data is stored
- **Database:** MongoDB (used only by the template status endpoints)

## Project Structure

```
frontend/
  public/index.html        # Fonts + meta (Macedonian)
  src/App.js               # Page composition + lenis setup
  src/constants.js         # Google My Maps URLs + contact email
  src/components/          # TopBanner, NavBar, Hero, LocationCard, PhotoCard,
                           # Marquee, MapSection, HowTo, FaqSection, Footer, Reveal
  src/components/ui/       # shadcn/ui components
backend/
  server.py                # FastAPI app (routes under /api)
  requirements.txt         # Python dependencies
```

## Environment Variables

### frontend/.env
```
REACT_APP_BACKEND_URL=<public URL where the backend /api is reachable>
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
```

### backend/.env
```
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

## Running Locally

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Frontend
```bash
cd frontend
yarn install
yarn start
```

The frontend runs on http://localhost:3000 and expects the backend API
under `/api` on the URL set in `REACT_APP_BACKEND_URL`.

## Notes

- Photo upload is intentionally demo-only (local preview, nothing stored).
  To make reporting fully in-page, add a MongoDB-backed reports API and
  object storage for photos.
- No registration or personal data is collected, by design.
