import { ZipWith } from "../../../containers.js";
import Container_zipWith from "../../../containers/Container/__internal__/Container.zipWith.js";
import { ObservableContainerLike } from "../../../rx.js";
import Observable_zip from "./Observable.zip.js";

const Observable_zipWith: ZipWith<ObservableContainerLike>["zipWith"] =
  /*@__PURE__*/ Container_zipWith(Observable_zip);

export default Observable_zipWith;
