[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / RunnableModule

# Interface: RunnableModule

## Extends

- [`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md)\<[`RunnableComputation`](RunnableComputation.md)\>

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`buffer`](../../interfaces/DeferredReactiveComputationModule.md#buffer)

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`catchError`](../../interfaces/DeferredReactiveComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `T`, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`catchError`](../../interfaces/DeferredReactiveComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`, `TInnerType`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, `T`, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`DeferringHigherOrderInnerType`](../../type-aliases/DeferringHigherOrderInnerType.md)

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`ComputationOfInnerType`](../../type-aliases/ComputationOfInnerType.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, `T`\>\>

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, `T`, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`catchError`](../../interfaces/DeferredReactiveComputationModule.md#catcherror)

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

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concat`](../../interfaces/DeferredReactiveComputationModule.md#concat)

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

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concat`](../../interfaces/DeferredReactiveComputationModule.md#concat)

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

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concat`](../../interfaces/DeferredReactiveComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>[]

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concat`](../../interfaces/DeferredReactiveComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concatAll`](../../interfaces/DeferredReactiveComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../type-aliases/ComputationOfInnerType.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`DeferringHigherOrderInnerType`](../../type-aliases/DeferringHigherOrderInnerType.md)

##### Parameters

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../type-aliases/ComputationOfInnerType.md)\<[`RunnableComputation`](RunnableComputation.md), `TInnerType`, `T`\>, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`concatAll`](../../interfaces/DeferredReactiveComputationModule.md#concatall)

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`decodeWithCharset`](../../interfaces/DeferredReactiveComputationModule.md#decodewithcharset)

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`distinctUntilChanged`](../../interfaces/DeferredReactiveComputationModule.md#distinctuntilchanged)

***

### empty()

> **empty**\<`T`\>(): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`empty`](../../interfaces/DeferredReactiveComputationModule.md#empty)

***

### encodeUtf8()

> **encodeUtf8**(): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`encodeUtf8`](../../interfaces/DeferredReactiveComputationModule.md#encodeutf8)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`forEach`](../../interfaces/DeferredReactiveComputationModule.md#foreach)

***

### fromIterable()

> **fromIterable**\<`T`\>(): \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`unknown`\> ? [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> : [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

`Function`

##### Type Parameters

• **TIterable** *extends* [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> = [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Parameters

###### iterable

`TIterable`

##### Returns

`TIterable` *extends* [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`unknown`\> ? [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> : [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`fromIterable`](../../interfaces/DeferredReactiveComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`fromReadonlyArray`](../../interfaces/DeferredReactiveComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`fromValue`](../../interfaces/DeferredReactiveComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

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

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> & [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`generate`](../../interfaces/DeferredReactiveComputationModule.md#generate)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`keep`](../../interfaces/DeferredReactiveComputationModule.md#keep)

***

### last()

> **last**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`last`](../../interfaces/DeferredReactiveComputationModule.md#last)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `TA`, `TB`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`map`](../../interfaces/DeferredReactiveComputationModule.md#map)

***

### pairwise()

> **pairwise**\<`T`\>(): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`pairwise`](../../interfaces/DeferredReactiveComputationModule.md#pairwise)

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

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`raise`](../../interfaces/DeferredReactiveComputationModule.md#raise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, `TAcc`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`reduce`](../../interfaces/DeferredReactiveComputationModule.md#reduce)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`repeat`](../../interfaces/DeferredReactiveComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`repeat`](../../interfaces/DeferredReactiveComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`repeat`](../../interfaces/DeferredReactiveComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`retry`](../../interfaces/DeferredReactiveComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scan`](../../interfaces/DeferredReactiveComputationModule.md#scan)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`skipFirst`](../../interfaces/DeferredReactiveComputationModule.md#skipfirst)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`takeFirst`](../../interfaces/DeferredReactiveComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`takeLast`](../../interfaces/DeferredReactiveComputationModule.md#takelast)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`takeWhile`](../../interfaces/DeferredReactiveComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`throwIfEmpty`](../../interfaces/DeferredReactiveComputationModule.md#throwifempty)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, readonly `T`[]\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`toReadonlyArray`](../../interfaces/DeferredReactiveComputationModule.md#toreadonlyarray)

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`RunnableComputation`](RunnableComputation.md), `T`\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`toRunnable`](../../interfaces/DeferredReactiveComputationModule.md#torunnable)
