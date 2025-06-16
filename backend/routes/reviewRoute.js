const express = require("express");
const router = express.Router();
const { reviewCode } = require("../controllers/reviewController");

// POST endpoint to review code using Gemini AI
router.post("/ai", reviewCode);

module.exports = router;
