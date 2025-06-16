import { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function App() {
  const [code, setCode] = useState("");           // User-input code
  const [review, setReview] = useState("");       // AI-generated review
  const [loading, setLoading] = useState(false);  // Loading state

  // Handles review button click
  const handleReview = async () => {
    if (!code.trim()) {
      setReview("Please enter some code to review.");
      return;
    }

    setLoading(true);
    setReview(""); // Clear previous result

    try {
      const res = await axios.post("http://localhost:3002/api/review/ai", { code });
      setReview(res.data.result);
    } catch (error) {
      console.error(error);
      setReview("Error: Could not get review from AI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-screen p-6 bg-black flex flex-col'>
      {/* Header */}
      <div className='flex justify-center'>
        <h1 className='text-2xl font-bold text-white mb-4'>Code Reviewer</h1>
      </div>

      {/* Main section */}
      <div className='flex flex-1 overflow-hidden gap-4'>

        {/* Code input area */}
        <div className='flex-1 relative flex flex-col'>
          <textarea
            className='flex-1 w-full text-gray-400 p-4 pb-20 border border-gray-600 rounded resize-none focus:outline-none bg-gray-900'
            placeholder="Paste your code here..."
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          <button
            className="absolute bottom-4 right-4 bg-blue-600 text-white px-6 py-2 rounded cursor-pointer"
            onClick={handleReview}
            disabled={loading}
          >
            {loading ? 'Reviewing...' : 'Review Code'}
          </button>
        </div>

        {/* Review output area */}
        <div className='flex-1 p-4 bg-gray-900 border border-gray-600 rounded overflow-auto'>
          <div className="text-gray-400">
            <ReactMarkdown>
              {review || "Review output will appear here."}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
