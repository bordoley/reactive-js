import {
  ContainerTypeClass,
  ObservableContainer,
  StatefulTypeClass,
} from "../../containers.js";
import { bindMethod, newInstance, pipe } from "../../functions.js";

const HigherOrderObservable_encodeUtf8 =
  <C extends ObservableContainer.Type>(
    defer: StatefulTypeClass<C>["defer"],
    map: ContainerTypeClass<C>["map"],
  ): StatefulTypeClass<C>["encodeUtf8"] =>
  () =>
  observable =>
    defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(observable, map(bindMethod(textEncoder, "encode")));
    });

export default HigherOrderObservable_encodeUtf8;
