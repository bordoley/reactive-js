import { createUsing } from "../__internal__.source";
import { Using } from "../container";
import { ObservableLike } from "../observable";
import { createT } from "./createObservable";

export const using: Using<ObservableLike<unknown>>["using"] =
  /*@__PURE__*/ createUsing(createT);

export const usingT: Using<ObservableLike<unknown>> = {
  using,
};
