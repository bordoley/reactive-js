import { SideEffect1 } from "../../functions.mjs";
import { RunnableLike } from "../../rx.mjs";
import { SinkLike } from "../../util.mjs";
declare const create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
export { create };
