[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / RunnableModule

# Interface: RunnableModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`RunnableComputation`](RunnableComputation.md)\>.[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<[`RunnableComputation`](RunnableComputation.md)\>.[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md)\<[`RunnableComputation`](RunnableComputation.md)\>.[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<[`RunnableComputation`](RunnableComputation.md)\>

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: [`RunnableComputation`](RunnableComputation.md)

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`[ComputationModuleLike_computationType]`](../../interfaces/SynchronousComputationModule.md#computationmodulelike_computationtype)

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`buffer`](../../interfaces/SequentialReactiveComputationModule.md#buffer)

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`, `TInnerLike`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerLike`, `T`, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerLike`, `T`\>\>

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerLike`, `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>[]

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

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

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`decodeWithCharset`](../../interfaces/SequentialReactiveComputationModule.md#decodewithcharset)

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`distinctUntilChanged`](../../interfaces/SequentialReactiveComputationModule.md#distinctuntilchanged)

***

### empty()

> **empty**\<`T`\>(`options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`empty`](../../interfaces/ComputationModule.md#empty)

***

### encodeUtf8()

> **encodeUtf8**(): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`encodeUtf8`](../../interfaces/SequentialComputationModule.md#encodeutf8)

***

### first()

> **first**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`first`](../../interfaces/SynchronousComputationModule.md#first)

***

### firstAsync()

> **firstAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<`never` \| `never` \| [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| `never`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<`never` \| `never` \| [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| `never`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`firstAsync`](../../interfaces/ComputationModule.md#firstasync)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`forEach`](../../interfaces/SequentialComputationModule.md#foreach)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`FromReadonlyArrayOperator`](../../type-aliases/FromReadonlyArrayOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`FromReadonlyArrayOperator`](../../type-aliases/FromReadonlyArrayOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromReadonlyArray`](../../interfaces/ComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(`options`?): [`FromValueOperator`](../../type-aliases/FromValueOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`FromValueOperator`](../../type-aliases/FromValueOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromValue`](../../interfaces/ComputationModule.md#fromvalue)

***

### gen()

> **gen**\<`T`\>(`factory`, `options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Generator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`gen`](../../interfaces/ComputationModule.md#gen)

***

### genWithSideEffects()

> **genWithSideEffects**\<`T`\>(`factory`, `options`?): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Generator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`genWithSideEffects`](../../interfaces/ComputationModule.md#genwithsideeffects)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`keep`](../../interfaces/ComputationModule.md#keep)

***

### last()

> **last**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`last`](../../interfaces/SynchronousComputationModule.md#last)

***

### lastAsync()

> **lastAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<`never` \| `never` \| [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| `never`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<`never` \| `never` \| [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| `never`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`lastAsync`](../../interfaces/ComputationModule.md#lastasync)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TA`, `TB`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`map`](../../interfaces/ComputationModule.md#map)

***

### pairwise()

> **pairwise**\<`T`\>(): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`pairwise`](../../interfaces/SequentialReactiveComputationModule.md#pairwise)

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`raise`](../../interfaces/ComputationModule.md#raise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, `TAcc`\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, `TAcc`\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`reduce`](../../interfaces/SynchronousComputationModule.md#reduce)

***

### reduceAsync()

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<`never` \| `never` \| [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| `never`, `TAcc`\>

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

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<`never` \| `never` \| [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| `never`, `TAcc`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`reduceAsync`](../../interfaces/ComputationModule.md#reduceasync)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, `never`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, `never`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, `never`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, `never`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, `never`\>

##### Type Parameters

• **T**

##### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, `never`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, `never`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`, `never`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`retry`](../../interfaces/SequentialComputationModule.md#retry)

***

### run()

> **run**\<`T`\>(`options`?): [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`run`](../../interfaces/SynchronousComputationModule.md#run)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`scan`](../../interfaces/SequentialComputationModule.md#scan)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`skipFirst`](../../interfaces/SequentialReactiveComputationModule.md#skipfirst)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`takeFirst`](../../interfaces/SequentialComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`takeLast`](../../interfaces/SequentialReactiveComputationModule.md#takelast)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`takeWhile`](../../interfaces/SequentialComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`throwIfEmpty`](../../interfaces/SequentialComputationModule.md#throwifempty)

***

### toObservable()

> **toObservable**\<`T`\>(): [`ToObservableOperator`](../../type-aliases/ToObservableOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Returns

[`ToObservableOperator`](../../type-aliases/ToObservableOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toObservable`](../../interfaces/ComputationModule.md#toobservable)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, readonly `T`[]\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toReadonlyArray`](../../interfaces/SynchronousComputationModule.md#toreadonlyarray)

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<`never` \| `never` \| [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| `never`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<`never` \| `never` \| [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> \| `never`, readonly `T`[]\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toReadonlyArrayAsync`](../../interfaces/ComputationModule.md#toreadonlyarrayasync)

***

### toRunnable()

> **toRunnable**\<`T`\>(`options`?): [`ToRunnableOperator`](../../type-aliases/ToRunnableOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`ToRunnableOperator`](../../type-aliases/ToRunnableOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toRunnable`](../../interfaces/SynchronousComputationModule.md#torunnable)
