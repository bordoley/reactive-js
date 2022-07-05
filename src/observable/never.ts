import { createNever } from "../__internal__.reactiveContainer";
import { createT } from "./createObservable";

export const never = /*@__PURE__*/ createNever(createT);
