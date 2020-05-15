import { fromArray } from "./fromArray.js";
import { pipe } from "../../functions.js";
const _fromValue = (value) => pipe([value], fromArray());
export const fromValue = () => _fromValue;
