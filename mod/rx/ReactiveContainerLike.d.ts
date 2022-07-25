import { StatefulContainerStateOf } from "../containers.mjs";
import { Function1 } from "../functions.mjs";
import { ReactiveContainerLike } from "../rx.mjs";
declare const sinkInto: <C extends ReactiveContainerLike, T, TSink extends StatefulContainerStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends ReactiveContainerLike, T, TSink extends StatefulContainerStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
export { sinkInto, sourceFrom };
