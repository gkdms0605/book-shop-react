import {setupWorker} from "msw/browser";
import { addReivew, reviewsById, reviewForMain } from "./review";

const handlers = [reviewsById, addReivew, reviewForMain];

export const worker = setupWorker(...handlers);