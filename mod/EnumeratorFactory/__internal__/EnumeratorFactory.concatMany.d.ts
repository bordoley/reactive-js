import { EnumeratorFactoryLike } from "../../types.js";
declare const EnumeratorFactory_concatMany: <T>(factories: readonly EnumeratorFactoryLike<T>[]) => import("../../functions.js").Factory<import("../../types.js").EnumeratorLike<T>>;
export default EnumeratorFactory_concatMany;
