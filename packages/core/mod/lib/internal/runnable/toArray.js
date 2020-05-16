import { reduce } from "./reduce.js";
const toArrayReducer = (acc, next) => {
    acc.push(next);
    return acc;
};
const _toArray = reduce(toArrayReducer, () => []);
export const toArray = () => _toArray;
