import { createVirtualTimeScheduler, } from "../../scheduler.js";
import { reduce } from "./reduce.js";
const toArrayReducer = (acc, next) => {
    acc.push(next);
    return acc;
};
export const toArray = (schedulerFactory = createVirtualTimeScheduler) => reduce(toArrayReducer, () => [], schedulerFactory);
