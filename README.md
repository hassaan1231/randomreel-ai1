# RandomReel AI

Roblox rant / story Shorts maker. Paste a script, upload gameplay + narration + a meme image,
preview in 9:16, then render a real 1080x1920 MP4 with burned-in captions and punchline zooms.

## Setup (Windows)
1. Install Node.js 20+ and FFmpeg:  `winget install Gyan.FFmpeg`  (reopen the terminal afterwards)
2. In this folder:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:5173

## How it works
- `src/`    React + Tailwind studio (script, assets, live canvas preview, timeline)
- `server/` Express + FFmpeg renderer (ASS captions, zoom filter, meme overlay, audio mux)
- Rendered files land in `server/downloads/`

## Notes
- No gameplay uploaded: preview shows a built-in obby; the export uses a plain dark background.
- No narration uploaded: the export has silent audio. "Test voice" is browser-only preview speech.
- Caption timing is spread over the chosen duration by word count.
