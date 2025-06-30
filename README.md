# Gemini Clone

Gemini Clone is a React-based web application that emulates the conversational AI experience of Google's Gemini. It allows users to interact with an AI assistant powered by the Gemini API, providing responses to user prompts in real time.

## Features

- **Conversational AI:** Chat with an AI assistant using natural language prompts.
- **Recent Chats:** View and revisit your recent prompts from the sidebar.
- **New Chat:** Start a new conversation at any time.
- **Interactive UI:** Modern, responsive interface with animated transitions and intuitive controls.
- **Voice and Gallery Icons:** UI elements for future enhancements like voice input and image prompts.
- **Loading Indicators:** Visual feedback while the AI processes your request.

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [@google/genai](https://www.npmjs.com/package/@google/genai) (Gemini API)

## Getting Started

### Prerequisites

- Node.js and npm installed
- A Gemini API key (set as `VITE_GEMINI_API_KEY` in your environment)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd gemini-clone-nsk
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Enter your prompt in the input box and click the send icon to interact with the AI.
- Use the sidebar to start a new chat or revisit recent prompts.

## Disclaimer

Gemini Clone is a demo application. The AI may provide inaccurate information. Always verify responses before relying on them.
