import { InteractiveSourceLike_move, InteractiveSourceLike } from "../ix.mjs";
declare const move: <TSource extends {
    [InteractiveSourceLike_move](): void;
} = InteractiveSourceLike>(source: TSource) => TSource;
export { move };
