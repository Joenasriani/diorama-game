# Third-party licenses and asset notices

DIORAMA's root [MIT LICENSE](LICENSE) applies to original code and documentation for which the named copyright holder has licensing authority. It does **not** relicense third-party components, external music, or fonts. The copyright and licensing of third-party content remain with their respective holders.

## Three.js runtime

- **Component:** Three.js r160, bundled into `index.html`
- **Upstream:** https://threejs.org/
- **License:** MIT (separate third-party MIT licensing)
- **Current bundled notice:** `Copyright 2010-2023 Three.js Authors`, `SPDX-License-Identifier: MIT`, embedded at the end of `index.html`
- **Requirement:** Preserve existing notices and any applicable license text when redistributing the runtime.
- **Boundary:** DIORAMA's original-code MIT notice does not replace the Three.js authors' notice.

## Amatic SC typefaces

- **Files:** `assets/fonts/AmaticSC-Regular.ttf`, `assets/fonts/AmaticSC-Bold.ttf`
- **Upstream family:** https://github.com/googlefonts/AmaticSC
- **Upstream license:** SIL Open Font License, Version 1.1
- **Source licensing text:** https://github.com/googlefonts/AmaticSC/blob/main/OFL.txt
- **Upstream copyright metadata:** Copyright 2015 The Amatic SC Project Authors.
- **Boundary:** Font files retain their own license. Preserve the proper OFL copyright and license notices for distribution. Exact checked-in binaries have not been hash-matched with the upstream release, so their provenance remains to be verified.

## HitsLab background music

- **File:** `assets/music/hitslab-game-gaming-music-295075.mp3`
- **Attribution/source listing:** https://pixabay.com/music/happy-childrens-tunes-game-gaming-music-295075/
- **License described by source:** Pixabay Content License (not MIT)
- **License summary:** https://pixabay.com/service/license-summary/
- **Use in DIORAMA:** Pixabay's content terms permit incorporating music in creative projects, including games, subject to their conditions. DIORAMA credits the creator in-game as **Music HitLabs**; attribution does not replace license compliance.
- **Separate redistribution boundary:** The track is **not MIT-licensed**, and the Pixabay terms restrict standalone distribution of substantially unchanged content. Because the repository exposes the original MP3 as an individual file, permission for that mode of redistribution remains unconfirmed. Do not offer the track as a reusable standalone asset. No change to the game's music is required.

## Ending cinematic audio

- **Location:** `ending/audio/`
- **Score bed:** `hero-score-bed.mp3`, adapted for the ending from **Hero Heroic Patriotic** by **NastelBom**, Pixabay track **436876**. The supplied source filename was `nastelbom-hero-heroic-patriotic-436876.mp3`.
- **Track source:** https://pixabay.com/music/main-title-hero-heroic-patriotic-436876/
- **Source license:** Pixabay Content License, as stated on the track page; not the game’s MIT license. License summary: https://pixabay.com/service/license-summary/
- **Credit:** Ending music: “Hero Heroic Patriotic” by NastelBom, via Pixabay. The in-game music credit lists HitsLab and NastelBom; this notice distinguishes their tracks.
- **Source matching:** The track ID matches the recorded supplied filename; no hash comparison against the original downloaded MP3 has been performed.
- **Princess call:** `princess-call.mp3`, prepared from the user-supplied Runway-generated distress-call source.
- **Sound effects:** wind, door, wings, dragon vocal, landing, stomp, doom and boom assets supplied or generated during production of the ending cinematic.
- **Boundary:** These audio files are bundled only for playback inside DIORAMA. They are not relicensed by the game's original-code license and must not be represented as reusable standalone assets.
- **Verification:** Preserve the user's source receipts, generation records and applicable service/license terms with the release archive. Public redistribution rights should be confirmed against those records before commercial publication.

## Game identity, branding and other materials

The DIORAMA title, logos, marks and original art are not granted trademark rights merely by the MIT software license. No separate trademark or artwork permission is implied by this document. Rights in any third-party artwork and other embedded media require individual verification.

## Outstanding legal verification

The maintainer should verify that all original code and original documentation are owned or sublicensable by the stated copyright holder, confirm the source and notices of both fonts, and resolve music-source redistribution rights. This file records known boundaries, **not a certification** that every embedded asset is cleared for all uses.

This document does not modify the game's runtime, asset files, or gameplay.
