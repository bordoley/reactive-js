import { Containers, ObservableContainer } from "../../../core.js";
import Container_zipWith from "../../../core/Container/__internal__/Container.zipWith.js";
import Observable_zip from "./Observable.zip.js";

const Observable_zipWith: Containers.TypeClass<ObservableContainer>["zipWith"] =
  /*@__PURE__*/ Container_zipWith(Observable_zip);

export default Observable_zipWith;
