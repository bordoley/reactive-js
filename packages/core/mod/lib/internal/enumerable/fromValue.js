import { fromArray } from "./fromArray.js";
import { pipe } from "../../functions.js";
export const fromValue = (value) => pipe([value], fromArray());
