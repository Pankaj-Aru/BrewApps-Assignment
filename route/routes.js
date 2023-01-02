this is the first commit
this is the second commit
this is the third commit





import express from "express";
const router = express.Router();

import { getData } from "../Controller/dataController.js";

router.get("/getData", getData);

export default router;
