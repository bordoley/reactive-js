import Enumerator_buffer from "../../Enumerator/__internal__/Enumerator.buffer.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_buffer: EnumeratorFactory.Signature["buffer"] = <
  T,
>(options?: {
  count?: number;
}) => composeLazy(EnumeratorFactory_enumerate<T>(), Enumerator_buffer(options));

export default EnumeratorFactory_buffer;
