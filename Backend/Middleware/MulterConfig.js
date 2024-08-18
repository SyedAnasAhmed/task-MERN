import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory buffer
const upload = multer({ storage });

export { upload };