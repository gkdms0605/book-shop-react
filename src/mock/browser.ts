import {setupWorker} from "msw/browser";
import { addReivew, reviewsById, reviewForMain } from "./review";
import { bestBooks } from "./book";
import { banners } from "./banner";

const handlers = [reviewsById, addReivew, reviewForMain, bestBooks, banners];

export const worker = setupWorker(...handlers);