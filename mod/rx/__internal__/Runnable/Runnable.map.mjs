/// <reference types="./Runnable.map.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer$map from '../../../containers/__internal__/StatefulContainer/StatefulContainer.map.mjs';
import { pipe } from '../../../functions.mjs';
import { Sink$mapMixin } from '../Sink/Sink.mapMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = Sink$mapMixin();
    return pipe(createInstanceFactory(typedMapSinkMixin), StatefulContainer$map(Runnable$liftT));
})();

export { Runnable$map as default };
