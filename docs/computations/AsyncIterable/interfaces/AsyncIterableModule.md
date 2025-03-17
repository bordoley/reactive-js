[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / AsyncIterableModule

# Interface: AsyncIterableModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>.[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>.[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>.[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: [`AsyncIterableComputation`](AsyncIterableComputation.md)

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`[ComputationModuleLike_computationType]`](../../interfaces/ConcurrentDeferredComputationModule.md#computationmodulelike_computationtype)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `never`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `never`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

***

### empty()

> **empty**\<`T`\>(`options`?): `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

`never`

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`empty`](../../interfaces/ComputationModule.md#empty)

***

### encodeUtf8()

> **encodeUtf8**(): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`encodeUtf8`](../../interfaces/SequentialComputationModule.md#encodeutf8)

***

### firstAsync()

> **firstAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`forEach`](../../interfaces/SequentialComputationModule.md#foreach)

***

### fromAsyncFactory()

> **fromAsyncFactory**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>\>

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`fromAsyncFactory`](../../interfaces/ConcurrentDeferredComputationModule.md#fromasyncfactory)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`FromReadonlyArrayOperator`](../../type-aliases/FromReadonlyArrayOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`FromReadonlyArrayOperator`](../../type-aliases/FromReadonlyArrayOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromReadonlyArray`](../../interfaces/ComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(`options`?): [`FromValueOperator`](../../type-aliases/FromValueOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`FromValueOperator`](../../type-aliases/FromValueOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromValue`](../../interfaces/ComputationModule.md#fromvalue)

***

### gen()

> **gen**\<`T`\>(`factory`, `options`?): `never`

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Generator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

`never`

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`gen`](../../interfaces/ComputationModule.md#gen)

***

### genWithSideEffects()

> **genWithSideEffects**\<`T`\>(`factory`, `options`?): `never`

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Generator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

`never`

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`genWithSideEffects`](../../interfaces/ComputationModule.md#genwithsideeffects)

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

> **lastAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

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

### raise()

> **raise**\<`T`\>(`options`?): `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

`never`

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`raise`](../../interfaces/ComputationModule.md#raise)

***

### reduceAsync()

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### options?

`unknown`

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>

##### Type Parameters

• **T**

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`, [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`retry`](../../interfaces/SequentialComputationModule.md#retry)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`scan`](../../interfaces/SequentialComputationModule.md#scan)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`takeFirst`](../../interfaces/SequentialComputationModule.md#takefirst)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`takeWhile`](../../interfaces/SequentialComputationModule.md#takewhile)

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

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`throwIfEmpty`](../../interfaces/SequentialComputationModule.md#throwifempty)

***

### toEventSource()

> **toEventSource**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableEventSourceLike`](../../interfaces/PauseableEventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableEventSourceLike`](../../interfaces/PauseableEventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

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

### toPauseableObservable()

> **toPauseableObservable**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableObservableLike`](../../interfaces/PauseableObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### options?

###### replay?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableObservableLike`](../../interfaces/PauseableObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, readonly `T`[]\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toReadonlyArrayAsync`](../../interfaces/ComputationModule.md#toreadonlyarrayasync)
