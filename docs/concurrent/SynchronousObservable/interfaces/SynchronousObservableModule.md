[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/SynchronousObservable](../README.md) / SynchronousObservableModule

# Interface: SynchronousObservableModule

## Extends

- [`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md)\<[`ObservableComputationFor`](../../Observable/type-aliases/ObservableComputationFor.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\>\>.[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md)\<[`ObservableComputationFor`](../../Observable/type-aliases/ObservableComputationFor.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\>\>.[`SynchronousComputationModule`](../../../computations/interfaces/SynchronousComputationModule.md)\<[`ObservableComputationFor`](../../Observable/type-aliases/ObservableComputationFor.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\>\>

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, readonly `T`[]\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`buffer`](../../../computations/interfaces/DeferredReactiveComputationModule.md#buffer)

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`catchError`](../../../computations/interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

##### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`catchError`](../../../computations/interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

###### options

###### innerType

`Pick`\<[`ComputationWithSideEffectsLike`](../../../computations/interfaces/ComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md)\>

##### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`catchError`](../../../computations/interfaces/DeferredComputationModule.md#catcherror)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options?

##### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`concatAll`](../../../computations/interfaces/DeferredComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`SynchronousObservableComputation`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`ComputationWithSideEffectsLike`](../../../computations/interfaces/ComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md)\>

##### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`SynchronousObservableComputation`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`concatAll`](../../../computations/interfaces/DeferredComputationModule.md#concatall)

***

### concatMany()

#### Call Signature

> **concatMany**\<`T`\>(`computations`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

##### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`concatMany`](../../../computations/interfaces/DeferredComputationModule.md#concatmany)

#### Call Signature

> **concatMany**\<`T`\>(`computations`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

##### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`concatMany`](../../../computations/interfaces/DeferredComputationModule.md#concatmany)

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `ArrayBuffer`, `string`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`decodeWithCharset`](../../../computations/interfaces/DeferredReactiveComputationModule.md#decodewithcharset)

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`distinctUntilChanged`](../../../computations/interfaces/DeferredReactiveComputationModule.md#distinctuntilchanged)

***

### empty()

> **empty**\<`T`\>(): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`empty`](../../../computations/interfaces/DeferredComputationModule.md#empty)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`forEach`](../../../computations/interfaces/DeferredComputationModule.md#foreach)

***

### fromIterable()

> **fromIterable**\<`T`\>(): \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureIterableLike`](../../../computations/interfaces/PureIterableLike.md)\<`unknown`\> ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> : [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

`Function`

##### Type Parameters

• **TIterable** *extends* [`IterableLike`](../../../computations/interfaces/IterableLike.md)\<`T`\> = [`IterableLike`](../../../computations/interfaces/IterableLike.md)\<`T`\>

##### Parameters

###### iterable

`TIterable`

##### Returns

`TIterable` *extends* [`PureIterableLike`](../../../computations/interfaces/PureIterableLike.md)\<`unknown`\> ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> : [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`fromIterable`](../../../computations/interfaces/DeferredComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`fromReadonlyArray`](../../../computations/interfaces/DeferredComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`fromValue`](../../../computations/interfaces/DeferredComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

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

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`generate`](../../../computations/interfaces/DeferredComputationModule.md#generate)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`keep`](../../../computations/interfaces/DeferredComputationModule.md#keep)

***

### last()

> **last**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../../computations/interfaces/SynchronousComputationModule.md).[`last`](../../../computations/interfaces/SynchronousComputationModule.md#last)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `TA`, `TB`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`map`](../../../computations/interfaces/DeferredComputationModule.md#map)

***

### pairwise()

> **pairwise**\<`T`\>(): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`pairwise`](../../../computations/interfaces/DeferredReactiveComputationModule.md#pairwise)

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`raise`](../../../computations/interfaces/DeferredComputationModule.md#raise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `TAcc`\>

#### Inherited from

[`SynchronousComputationModule`](../../../computations/interfaces/SynchronousComputationModule.md).[`reduce`](../../../computations/interfaces/SynchronousComputationModule.md#reduce)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`repeat`](../../../computations/interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`repeat`](../../../computations/interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`repeat`](../../../computations/interfaces/DeferredComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`retry`](../../../computations/interfaces/DeferredComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `TAcc`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`scan`](../../../computations/interfaces/DeferredComputationModule.md#scan)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`skipFirst`](../../../computations/interfaces/DeferredReactiveComputationModule.md#skipfirst)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`takeFirst`](../../../computations/interfaces/DeferredComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`takeLast`](../../../computations/interfaces/DeferredReactiveComputationModule.md#takelast)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`takeWhile`](../../../computations/interfaces/DeferredComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`throwIfEmpty`](../../../computations/interfaces/DeferredComputationModule.md#throwifempty)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, readonly `T`[]\>

#### Inherited from

[`SynchronousComputationModule`](../../../computations/interfaces/SynchronousComputationModule.md).[`toReadonlyArray`](../../../computations/interfaces/SynchronousComputationModule.md#toreadonlyarray)

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`RunnableLike`](../../../computations/interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`RunnableLike`](../../../computations/interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../../computations/interfaces/SynchronousComputationModule.md).[`toRunnable`](../../../computations/interfaces/SynchronousComputationModule.md#torunnable)
