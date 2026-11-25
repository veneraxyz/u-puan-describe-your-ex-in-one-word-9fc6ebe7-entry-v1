# Describe Your Ex in One Word

[![Competition](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7.svg)](https://make.fun/competitions/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![Rank](https://make.fun/badge/veneraxyz/u-puan-describe-your-ex-in-one-word-9fc6ebe7-entry-v1/rank.svg)](https://make.fun/competitions/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![Reward](https://make.fun/badge/veneraxyz/u-puan-describe-your-ex-in-one-word-9fc6ebe7-entry-v1/reward.svg)](https://make.fun/competitions/u-puan-describe-your-ex-in-one-word-9fc6ebe7)

Entry for [Describe Your Ex in One Word](https://make.fun/competitions/u-puan-describe-your-ex-in-one-word-9fc6ebe7) on make.fun.

## Entry word

**Exmemoried**

One freshly coined word for an ex: someone now only a memory, filed away
and no longer carried.

## How it works

`main.ts` (stdlib-only TypeScript) validates the word — non-blank, 1–111
characters, exactly one token, letters only, valid UTF-8 — then writes it to
`entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, falling back to
`/output`).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
