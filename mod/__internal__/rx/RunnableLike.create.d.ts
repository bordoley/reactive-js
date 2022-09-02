import { SideEffect1 } from "../../functions.mjs";
import { SinkLike, RunnableLike } from "../../rx.mjs";
declare const create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
export { create };
