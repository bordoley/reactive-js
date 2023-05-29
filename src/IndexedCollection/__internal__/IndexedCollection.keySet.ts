import type * as IndexedCollection from "../../IndexedCollection.js";
import Observable_toReadonlySet from "../../Observable/__internal__/Observable.toReadonlySet.js";
import { compose } from "../../functions.js";
import IndexedCollection_keys from "./IndexedCollection.keys.js";

const IndexedCollection_keySet: IndexedCollection.Signature["keySet"] = (() =>
  compose(
    IndexedCollection_keys(),
    Observable_toReadonlySet(),
  )) as IndexedCollection.Signature["keySet"];

export default IndexedCollection_keySet;
