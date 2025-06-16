require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

// Initialize Gemini with API Key
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Controller function to handle code review
const reviewCode = async (req, res) => {
    const { code } = req.body;

    const prompt = `
    You are a senior software engineer and an expert code reviewer. I will give you a piece of code.

    Your job is to provide a clear and educational code review for beginner developers. **Format your entire response using Markdown**, with **all section headings in bold** (using \`**Your Title:**\`), and include **double line breaks** between sections for clean spacing in HTML or Markdown renderers.

    Use this exact structure and formatting:

    **❌ Bad Code:**

    \`\`\`javascript
    [Insert the problematic code]
    \`\`\`


    **🔍 Issues:**

    ❌ Clearly list each issue in bullet points  
    ❌ Use simple language to explain what's wrong  


    **✅ Recommended Fix:**

    \`\`\`javascript
    [Corrected version of the code]
    \`\`\`


    **💡 Improvements:**

    ✔ Describe how this fix improves the code  
    ✔ Suggest any refactoring or naming tips  


    **🧠 Best Practices:**

    ✔ Share general coding best practices  
    ✔ Mention naming conventions, readability, etc.  


    **🏁 Final Note:**

    Close with encouraging advice and a reminder to write clean, understandable, and maintainable code.

    Here is the code to review:

    \`\`\`javascript
    ${code}
    \`\`\`
    `;


     try {
    const genResponse = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    // Extract response text
    const text = genResponse.text;
    res.json({ result: text });

  } catch (error) {
    console.error("Error calling Gemini API:", error.message);
    throw error;
  }

}

module.exports = { reviewCode };