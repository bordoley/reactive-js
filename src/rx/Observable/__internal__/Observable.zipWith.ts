import { Container } from "../../../containers.js";
import Container_zipWith from "../../../containers/Container/__internal__/Container.zipWith.js";
import { ObservableContainer } from "../../../rx.js";
import Observable_zip from "./Observable.zip.js";

const Observable_zipWith: Container.ZipWith<ObservableContainer>["zipWith"] =
  /*@__PURE__*/ Container_zipWith(Observable_zip);

export default Observable_zipWith;
