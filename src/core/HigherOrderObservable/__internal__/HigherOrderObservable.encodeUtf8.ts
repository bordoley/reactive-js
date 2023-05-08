import {
  Containers,
  ObservableContainer,
  ReactiveContainers,
} from "../../../core.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";

const HigherOrderObservable_encodeUtf8 =
  <C extends ObservableContainer>(
    defer: ReactiveContainers.TypeClass<C>["defer"],
    map: Containers.TypeClass<C>["map"],
  ): ReactiveContainers.TypeClass<C>["encodeUtf8"] =>
  () =>
  observable =>
    defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(observable, map(bindMethod(textEncoder, "encode")));
    });

export default HigherOrderObservable_encodeUtf8;
