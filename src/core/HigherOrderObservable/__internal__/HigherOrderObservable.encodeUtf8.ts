import {
  Container,
  ObservableContainer,
  ReactiveContainer,
} from "../../../core.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";

const HigherOrderObservable_encodeUtf8 =
  <C extends ObservableContainer>(
    defer: ReactiveContainer.TypeClass<C>["defer"],
    map: Container.TypeClass<C>["map"],
  ): ReactiveContainer.TypeClass<C>["encodeUtf8"] =>
  () =>
  observable =>
    defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(observable, map(bindMethod(textEncoder, "encode")));
    });

export default HigherOrderObservable_encodeUtf8;
