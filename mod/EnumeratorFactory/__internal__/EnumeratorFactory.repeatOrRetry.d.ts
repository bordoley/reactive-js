import { Function1, Function2, Optional } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";
declare const EnumeratorFactory_repeatOrRetry: <T>(predicate: Function2<number, Optional<Error>, boolean>) => Function1<EnumeratorFactoryLike<T>, EnumeratorFactoryLike<T>>;
export default EnumeratorFactory_repeatOrRetry;
