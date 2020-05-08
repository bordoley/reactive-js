import { fromArray } from "./fromArray.js";
const defaultEmpty = fromArray()([]);
export const empty = ({ delay } = { delay: 0 }) => delay > 0 ? fromArray({ delay })([]) : defaultEmpty;
