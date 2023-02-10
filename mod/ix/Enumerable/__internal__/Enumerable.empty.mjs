/// <reference types="./Enumerable.empty.d.ts" />
import Enumerator_empty from '../../Enumerator/__internal__/Enumerator.empty.mjs';
import Enumerable_create from './Enumerable.create.mjs';

const Enumerable_empty = /*@__PURE__*/ (() => () => Enumerable_create(Enumerator_empty))();

export { Enumerable_empty as default };
