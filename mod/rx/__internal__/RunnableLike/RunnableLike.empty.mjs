/// <reference types="./RunnableLike.empty.d.ts" />
import { pipe } from '../../../functions.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import RunnableLike__create from './RunnableLike.create.mjs';

const RunnableLike__empty = () => RunnableLike__create(sink => {
    pipe(sink, DisposableLike__dispose());
});

export { RunnableLike__empty as default };
