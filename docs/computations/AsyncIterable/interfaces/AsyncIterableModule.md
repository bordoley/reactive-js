[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / AsyncIterableModule

# Interface: AsyncIterableModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>.[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>.[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: [`AsyncIterableComputation`](AsyncIterableComputation.md)

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`[ComputationModuleLike_computationType]`](../../interfaces/InteractiveComputationModule.md#computationmodulelike_computationtype)

***

### empty

> **empty**: [`EmptyOperator`](../../type-aliases/EmptyOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`empty`](../../interfaces/ComputationModule.md#empty)

***

### raise()

> **raise**: \<`T`\>(`options`?) => [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>

#### Overrides

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`raise`](../../interfaces/DeferredComputationModule.md#raise)

***

### zip

> **zip**: `ZipConstructor`\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

## Methods

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`, `TInnerLike`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TInnerLike`, `T`, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TInnerLike`, `T`\>\>

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TInnerLike`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): `never`

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly `never`[]

##### Returns

`never`

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concat`](../../interfaces/DeferredComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): `never`

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly `never`[]

##### Returns

`never`

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concat`](../../interfaces/DeferredComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>[]

##### Returns

[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concat`](../../interfaces/DeferredComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>[]

##### Returns

[`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concat`](../../interfaces/DeferredComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `never`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `never`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

***

### encodeUtf8()

> **encodeUtf8**(): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`encodeUtf8`](../../interfaces/DeferredComputationModule.md#encodeutf8)

***

### firstAsync()

> **firstAsync**\<`T`\>(): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`firstAsync`](../../interfaces/ComputationModule.md#firstasync)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`forEach`](../../interfaces/DeferredComputationModule.md#foreach)

***

### fromIterable()

> **fromIterable**\<`T`\>(): [`FromIterableOperator`](../../type-aliases/FromIterableOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Returns

[`FromIterableOperator`](../../type-aliases/FromIterableOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromIterable`](../../interfaces/ComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], \{ `[ComputationLike_isDeferred]`: `true`; `[ComputationLike_isPure]`: `true`; `[ComputationLike_isSynchronous]`: `false`; \}\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], \{ `[ComputationLike_isDeferred]`: `true`; `[ComputationLike_isPure]`: `true`; `[ComputationLike_isSynchronous]`: `false`; \}\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromReadonlyArray`](../../interfaces/DeferredComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, \{ `[ComputationLike_isDeferred]`: `true`; `[ComputationLike_isPure]`: `true`; `[ComputationLike_isSynchronous]`: `false`; \}\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, \{ `[ComputationLike_isDeferred]`: `true`; `[ComputationLike_isPure]`: `true`; `[ComputationLike_isSynchronous]`: `false`; \}\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromValue`](../../interfaces/DeferredComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): `object`

#### Type Parameters

• **T**

#### Parameters

##### generator

[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### count?

`number`

#### Returns

`object`

##### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `true`

##### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `true`

##### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`generate`](../../interfaces/DeferredComputationModule.md#generate)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`keep`](../../interfaces/ComputationModule.md#keep)

***

### lastAsync()

> **lastAsync**\<`T`\>(): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`lastAsync`](../../interfaces/ComputationModule.md#lastasync)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TA`, `TB`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`map`](../../interfaces/ComputationModule.md#map)

***

### of()

> **of**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\>\>

***

### reduceAsync()

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, `TAcc`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`reduceAsync`](../../interfaces/ComputationModule.md#reduceasync)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>

##### Type Parameters

• **T**

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`retry`](../../interfaces/DeferredComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`scan`](../../interfaces/DeferredComputationModule.md#scan)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeFirst`](../../interfaces/DeferredComputationModule.md#takefirst)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeWhile`](../../interfaces/DeferredComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`throwIfEmpty`](../../interfaces/DeferredComputationModule.md#throwifempty)

***

### toEventSource()

> **toEventSource**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### toObservable()

> **toObservable**\<`T`\>(): [`ToObservableOperator`](../../type-aliases/ToObservableOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Returns

[`ToObservableOperator`](../../type-aliases/ToObservableOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toObservable`](../../interfaces/ComputationModule.md#toobservable)

***

### toPauseableEventSource()

> **toPauseableEventSource**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableEventSourceLike`](../../interfaces/PauseableEventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableEventSourceLike`](../../interfaces/PauseableEventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### toPauseableObservable()

> **toPauseableObservable**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableObservableLike`](../../interfaces/PauseableObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### options?

###### autoDispose?

`boolean`

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### replay?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableObservableLike`](../../interfaces/PauseableObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`T`\>(): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, readonly `T`[]\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toReadonlyArrayAsync`](../../interfaces/ComputationModule.md#toreadonlyarrayasync)
