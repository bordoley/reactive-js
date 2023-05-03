import { Container } from "../../../containers.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";
import { ObservableContainer, Reactive } from "../../../rx.js";

const HigherOrderObservable_encodeUtf8 =
  <C extends ObservableContainer>(
    defer: Reactive.Defer<C>["defer"],
    map: Container.Map<C>["map"],
  ): Reactive.EncodeUtf8<C>["encodeUtf8"] =>
  () =>
  observable =>
    defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(observable, map(bindMethod(textEncoder, "encode")));
    });

export default HigherOrderObservable_encodeUtf8;
