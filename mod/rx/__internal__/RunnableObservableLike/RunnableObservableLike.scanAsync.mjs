/// <reference types="./RunnableObservableLike.scanAsync.d.ts" />
import HigherOrderObservableLike__scanAsync from '../HigherOrderObservableLike/HigherOrderObservableLike.scanAsync.mjs';
import RunnableObservableLike__create from './RunnableObservableLike.create.mjs';

const RunnableObservableLike__scanAsync = HigherOrderObservableLike__scanAsync(RunnableObservableLike__create);

export { RunnableObservableLike__scanAsync as default };
