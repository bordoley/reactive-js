import { createNever } from "../__internal__.reactive";
import { createT } from "./createObservable";

export const never = /*@__PURE__*/ createNever(createT);
