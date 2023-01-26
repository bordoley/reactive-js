/// <reference types="./Enumerable.empty.d.ts" />
import Enumerator$empty from '../Enumerator/Enumerator.empty.mjs';
import Enumerable$create from './Enumerable.create.mjs';

const Enumerable$empty = /*@__PURE__*/ (() => () => Enumerable$create(Enumerator$empty))();

export { Enumerable$empty as default };
