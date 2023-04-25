import { Map } from "../../../containers.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";
import { Defer, EncodeUtf8, ObservableLike } from "../../../rx.js";

const HigherOrderObservable_encodeUtf8 =
  <C extends ObservableLike>(
    defer: Defer<C>["defer"],
    map: Map<C>["map"],
  ): EncodeUtf8<C>["encodeUtf8"] =>
  () =>
  observable =>
    defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(observable, map(bindMethod(textEncoder, "encode")));
    });

export default HigherOrderObservable_encodeUtf8;
