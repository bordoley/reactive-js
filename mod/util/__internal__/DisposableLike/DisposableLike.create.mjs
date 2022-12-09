/// <reference types="./DisposableLike.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import { disposableMixin } from '../../../__internal__/util/DisposableLike.mixins.mjs';

const create = 
/*@__PURE__*/ createInstanceFactory(disposableMixin);

export { create };
