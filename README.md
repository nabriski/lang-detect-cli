```bash
lang-detect

Options:
  --version   Show version number                                      [boolean]
  --mime, -m  get output as a mime type
  --lang, -l  list of languages to match against (all if not present)
                                                           [array] [default: []]
  --help      Show help                                                [boolean]

Examples:
  lang-detect -l javascript xml < file
  echo {"koko":1} | lang-detect -m -l json html css # output is
  'application/json'
```
