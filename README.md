# OpenChat — ChatGPT-style Frontend

A clean, responsive ChatGPT-like chat interface built with vanilla HTML/CSS/JS.

## Run

```bash
npm install
npm start
# Open http://localhost:3000
```

Or just open `index.html` directly in a browser.

## Features

- Dark / light / system theme
- Conversation history (create, rename, delete, clear all)
- Model selector (GPT-4o, GPT-4o mini, GPT-4 Turbo, o1-preview, o3-mini)
- Streaming responses with typing cursor
- Markdown rendering (code blocks, tables, headers, lists, bold, italic, links)
- Copy / edit / regenerate messages
- Stop generation
- Settings: theme, font size, default model
- Keyboard shortcuts: `Ctrl+N` new chat, `Ctrl+K` focus input, `Esc` stop
- Fully responsive (mobile sidebar, adaptive layout)
- Conversations persisted to localStorage

## Connecting a real API

The default provider is OpenAI using `gpt-4o`. Open **Settings → API keys**, enter
your OpenAI API key, and select the provider/model you want to use. Keys are stored
in this browser's local storage and sent only to the selected provider.

For production, do not expose an API key in a browser app. Route requests through
your own backend or Supabase Edge Function and update the endpoint configuration.

If you prefer a local model, select Ollama or LM Studio and start its OpenAI-compatible
server before sending a message. In **Settings → Local model endpoints**, click
**Install Ollama open-source models** to explicitly download every model in the
Ollama catalog. Downloads are sequential and can require significant disk space
and bandwidth. The app displays progress and rescans Ollama when installation
finishes.
