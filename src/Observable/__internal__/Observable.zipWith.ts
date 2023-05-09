import Container_zipWith from "../../Container/__internal__/Container.zipWith.js";
import { Containers, ObservableContainer } from "../../containers.js";
import Observable_zip from "./Observable.zip.js";

const Observable_zipWith: Containers.TypeClass<ObservableContainer>["zipWith"] =
  /*@__PURE__*/ Container_zipWith(Observable_zip);

export default Observable_zipWith;
