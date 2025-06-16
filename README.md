# 🧠 Code Reviewer

An AI-powered code review tool that allows developers to paste any code and get educational, structured reviews using **Google Gemini AI**. The feedback includes issues, fixes, improvements, and best practices—all rendered cleanly with Markdown.

---

## 🎥 Demo

[Click here to watch the demo video](https://drive.google.com/file/d/1QozS1CaWQwYDrcsEylYxwjU_40CUEXSv/view?usp=sharing)

---

## Features

- Paste any code for review  
- AI-generated feedback using Google Gemini  
- Clearly formatted output in Markdown  
- Helpful fixes, improvements, and coding best practices  
- Responsive UI with live rendering of review content  

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios, React-Markdown  
- **Backend:** Node.js, Express.js  
- **AI:** Google Gemini 2.0 Flash API  

---

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Google Gemini API key

---

### Backend Setup

1. Clone the repo and navigate to the `backend` folder:

    ```bash
    cd backend
    ```

2. Create a `.env` file with the following content:

    ```env
    PORT=3002
    GEMINI_API_KEY=your_google_gemini_api_key
    ```

3. Install dependencies and start the server:

    ```bash
    npm install
    node server.js
    ```

    The backend will run on `http://localhost:3002`.

---

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm run dev
    ```

    The frontend will be available on `http://localhost:5173` (or a different port based on your environment).

---

## Usage

1. Paste your any code into the left panel.
2. Click **Review Code** to generate AI feedback.
3. Review the response rendered in Markdown format on the right panel.

---

## Notes

- Requires a valid Gemini API key.
- The frontend and backend must both be running locally.
- Markdown formatting is automatically handled via `react-markdown`.

---

## License

MIT License

---

## Contact

For bugs, suggestions, or contributions—feel free to open an issue or submit a pull request.

---
