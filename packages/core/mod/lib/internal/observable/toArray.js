import { compose } from "../../functions.js";
import { createVirtualTimeScheduler, } from "../../scheduler.js";
import { reduce } from "./reduce.js";
import { toValue } from "./toValue.js";
const toArrayReducer = (acc, next) => {
    acc.push(next);
    return acc;
};
export const toArray = (schedulerFactory = createVirtualTimeScheduler) => compose(reduce(toArrayReducer, () => []), toValue(schedulerFactory));
