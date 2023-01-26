/// <reference types="./RunnableObservable.scanAsync.d.ts" />
import HigherOrderObservable$scanAsync from '../HigherOrderObservable/HigherOrderObservable.scanAsync.mjs';
import RunnableObservable$create from './RunnableObservable.create.mjs';

const RunnableObservable$scanAsync = HigherOrderObservable$scanAsync(RunnableObservable$create);

export { RunnableObservable$scanAsync as default };
