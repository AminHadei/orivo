---
name: content-fa
description: Use when writing or editing Persian copy in orivo — landing sections, blog posts, metadata, or microcopy. Covers voice, orthography, numerals, and the post authoring flow.
---

# Persian content — orivo

## Voice

orivo is a one-person consulting practice in «هوشمندسازی سازمان». The voice is that of a senior
advisor talking to an executive: specific, unhurried, free of hype. Claims come with a mechanism or
a number. No marketing exclamation, no borrowed English where Persian exists.

- Prefer «سامانه» over «سیستم», «فرایند» over «پروسه», «داده» over «دیتا».
- Keep established Latin technical names in Latin script (Power BI, dbt, BPMN 2.0).
- Address the reader as «شما»; describe the practice as «ما» or «اوریوو» — never first-person plural
  inflation for solo work claims.

## Orthography

- Use ZWNJ (نیم‌فاصله) correctly: «می‌شود», «هوشمندسازی‌ها», «داده‌ها».
- Use the Persian ezafe form «ٔ» where the register calls for it: «مشاوره هوشمندسازی».
- Persian digits (`۰۱۲۳…`) in UI and prose; `toPersianDigits()` in `app/lib/utils.ts` converts.
- Persian quotation marks «…» rather than "…".

## Blog posts

1. Add metadata to `app/data/posts.json`:

```json
{
  "title": "…",
  "slug": "kebab-case-latin",
  "shortSummary": "one line for cards",
  "summary": "two to three lines for the post header and meta description",
  "authors": ["محمد امین هادئی"],
  "category": "رویکرد | ارزیابی بلوغ | معماری | مدیریت تحول",
  "date": "YYYY-MM-DD",
  "dateLabel": "۲۷ تیر ۱۴۰۵",
  "readingMinutes": 9,
  "shape": "spectrum | citrus | mint | dusk"
}
```

2. Create `app/pages/blog/<slug>.vue` wrapping the body in `<BlogPostShell slug="<slug>">`.
3. Write the body as plain `h2` / `h3` / `p` / `ul` / `ol` / `blockquote` / `table` — `PostShell`
   styles all of them. Wrap tables in `<div class="table-wrap">` so they scroll on mobile.
4. `slug` must match the filename, and the post must be linked from `/blog` or it will not
   prerender.

## Structure of a post

Open with the problem as an executive would state it, not with a definition. Use `h2` for each move
in the argument, keep paragraphs to three or four sentences, and close with a section that tells the
reader what to do differently. Lists carry parallel items only — if items are not parallel, they are
paragraphs.

## Homepage copy

Section headers are two lines: a short title and a subtitle that says what the section covers. Card
titles are noun phrases, not sentences. Card descriptions are one or two sentences and never repeat
the title.
