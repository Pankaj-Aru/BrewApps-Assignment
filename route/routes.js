<<<<<<< HEAD
this is the first commit
this is the second commit





=======
>>>>>>> parent of b844f48 (this is my first commit, into learning of git)
import express from "express";
const router = express.Router();

import { getData } from "../Controller/dataController.js";

router.get("/getData", getData);

export default router;