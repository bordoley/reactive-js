/// <reference types="./EnumerableObservable.never.d.ts" />
import { ignore } from '../../../functions.mjs';
import EnumerableObservable$create from './EnumerableObservable.create.mjs';

const EnumerableObservable$never = () => EnumerableObservable$create(ignore);

export { EnumerableObservable$never as default };
