# moa-demo

A small TypeScript utility library — strings and arrays helpers — used to dogfood
[Moa](https://fnmoa.com)'s GitHub-driven coding workflows (issue → PR → review →
fix-CI → merge).

## Develop

```bash
npm install
npm test        # vitest
npm run typecheck
```

## API

- `capitalize(s)`, `reverse(s)`, `truncate(s, max)`
- `chunk(items, size)`, `unique(items)`, `sum(items)`

See open issues for planned work.
