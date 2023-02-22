import { ZipWith } from "../../../containers.js";
import Container_zipWith from "../../../containers/Container/__internal__/Container.zipWith.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_zip from "./Enumerable.zip.js";

const Enumerable_zipWith: ZipWith<EnumerableLike>["zipWith"] =
  /*@__PURE__*/ Container_zipWith(Enumerable_zip);

export default Enumerable_zipWith;
