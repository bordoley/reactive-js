import { compose } from "../../functions.js";
import { switchMap } from "./switchAll.js";
import { takeFirst } from "./takeFirst.js";
export const await_ = (mapper) => compose(takeFirst(), switchMap(mapper));
