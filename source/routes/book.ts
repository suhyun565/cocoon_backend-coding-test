import express from 'express';
import controller from '../controllers/book';

const router = express.Router();

router.post('/create/books', controller.createBook);
router.get('/get/books', controller.getAllBooks);

export = router;
