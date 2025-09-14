import e from "express";
import { Router } from "express";

const router = Router();

// gets all the posts ('/posts')
router.get('/', (req, res) => {
    res.json({Content: 'postRoutes to be configured'})
})

// create new post via router.POST -> sends req, res to postController


export default router;