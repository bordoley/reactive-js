import {
  Containers,
  ObservableContainer,
  StatefulContainers,
} from "../../containers.js";
import { bindMethod, newInstance, pipe } from "../../functions.js";

const HigherOrderObservable_encodeUtf8 =
  <C extends ObservableContainer>(
    defer: StatefulContainers.TypeClass<C>["defer"],
    map: Containers.TypeClass<C>["map"],
  ): StatefulContainers.TypeClass<C>["encodeUtf8"] =>
  () =>
  observable =>
    defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(observable, map(bindMethod(textEncoder, "encode")));
    });

export default HigherOrderObservable_encodeUtf8;
