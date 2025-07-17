import {setupWorker} from "msw/browser";
import { addReivew, reviewsById } from "./review";

const handlers = [reviewsById, addReivew];

export const worker = setupWorker(...handlers);