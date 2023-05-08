import {
  Container,
  ObservableContainer,
  ReactiveContainer,
} from "../../../core.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";

const HigherOrderObservable_encodeUtf8 =
  <C extends ObservableContainer>(
    defer: ReactiveContainer.Defer<C>["defer"],
    map: Container.Map<C>["map"],
  ): ReactiveContainer.EncodeUtf8<C>["encodeUtf8"] =>
  () =>
  observable =>
    defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(observable, map(bindMethod(textEncoder, "encode")));
    });

export default HigherOrderObservable_encodeUtf8;
