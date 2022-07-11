import { createNever } from "../__internal__.reactiveContainer";
import { ObservableLike } from "../observable";
import { Never } from "../reactiveContainer";
import { createT } from "./createObservable";

export const never = /*@__PURE__*/ createNever(createT);
export const neverT: Never<ObservableLike<unknown>> = {
  never,
};
