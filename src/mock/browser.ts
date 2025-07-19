import {setupWorker} from "msw/browser";
import { addReivew, reviewsById, reviewForMain } from "./review";
import { bestBooks } from "./book";

const handlers = [reviewsById, addReivew, reviewForMain, bestBooks];

export const worker = setupWorker(...handlers);