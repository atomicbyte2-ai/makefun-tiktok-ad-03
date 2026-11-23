# makefun-tiktok-ad-03 — AI Plays Snake

![make.fun bounty](https://make.fun/badge/bring-the-humans-03.svg)
![rank](https://make.fun/badge/bring-the-humans-03/atomicbyte2-ai/makefun-tiktok-ad-03/rank.svg)
![reward](https://make.fun/badge/bring-the-humans-03/atomicbyte2-ai/makefun-tiktok-ad-03/reward.svg)

Entry for the make.fun bounty [bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03).

The ad is a 21-second vertical TikTok in which an AI solver plays Snake on a
14×14 grid, growing from length 3 to 40. Each move uses a shortest-path search
to the food plus a tail-reachability safety check, so the snake never traps
itself. The soundtrack is an original, code-generated 124 BPM beat with game
sound effects — no voiceover.

Video: https://www.tiktok.com/@gudang.garam1600/video/7711253365400833298

## Run

Requires Node.js 22 or newer. No dependencies.

```sh
npm start
# or
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
```

`main.ts` reads `VIDEO.json` from its own folder, checks the TikTok URL, and
writes `VIDEO.json` and `entry.txt` to `$MAKEFUN_OUTPUT_DIR` (default `/output`).

## License

MIT — see [LICENSE](LICENSE).
