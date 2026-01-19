# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static web application (quiz/image viewer) running on XAMPP. No build tools, frameworks, or package managers.

## Technology Stack

- HTML, CSS, JavaScript (vanilla)
- No backend - client-side only
- Served via XAMPP Apache server

## Project Structure

```
htdocs/
├── index.html      # Entry point
├── style.css       # Styles
├── script.js       # Application logic
└── img/            # Quiz images (Q=question, A=answer pairs)
    ├── 1-Q.png, 1-A.png
    ├── 2-Q.png, 2-A.png
    └── ... (9 question-answer pairs)
```

## Development

- **Run**: Open http://localhost in browser (XAMPP Apache must be running)
- **No build step required** - edit files directly and refresh browser
