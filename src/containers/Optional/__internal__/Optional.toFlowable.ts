import { compose, none } from "../../../functions.js";
import ReadonlyArray_toFlowable from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toFlowable.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";

const Optional_toFlowable = <T>(options?: { readonly delay?: number }) => {
  const { delay = 0 } = options ?? {};
  const toFlowableOptions = delay > 0 ? { delay, delayStart: true } : none;

  return compose(
    Optional_toReadonlyArray<T>(),
    ReadonlyArray_toFlowable(toFlowableOptions),
  );
};

export default Optional_toFlowable;
