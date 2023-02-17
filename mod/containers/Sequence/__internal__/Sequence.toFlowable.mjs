/// <reference types="./Sequence.toFlowable.d.ts" />
import { compose } from '../../../functions.mjs';
import RunnableObservable_toFlowable from '../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.mjs';
import Sequence_toRunnableObservable from './Sequence.toRunnableObservable.mjs';

const Sequence_toFlowable = options => compose(Sequence_toRunnableObservable(options), RunnableObservable_toFlowable());

export { Sequence_toFlowable as default };
