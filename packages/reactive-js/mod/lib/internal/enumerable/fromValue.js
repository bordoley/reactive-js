import { pipe } from "../../functions.js";
import { fromArray } from "./fromArray.js";
const _fromValue = (value) => pipe([value], fromArray());
export const fromValue = () => _fromValue;
