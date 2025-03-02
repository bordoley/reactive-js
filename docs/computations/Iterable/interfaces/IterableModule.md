[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / IterableModule

# Interface: IterableModule

## Extends

- [`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<[`IterableComputation`](IterableComputation.md)\>.[`ComputationWithSideEffectsModule`](../../interfaces/ComputationWithSideEffectsModule.md)\<[`IterableComputation`](IterableComputation.md)\>.[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<[`IterableComputation`](IterableComputation.md)\>.[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md)\<[`IterableComputation`](IterableComputation.md)\>

## Methods

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>\>

###### options

###### innerType

`Pick`\<[`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>

##### Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(`options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options?

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`IterableComputation`](IterableComputation.md), [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>

##### Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`IterableComputation`](IterableComputation.md), [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

***

### concatMany()

#### Call Signature

> **concatMany**\<`T`\>(`computations`): [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

readonly [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>[]

##### Returns

[`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatMany`](../../interfaces/DeferredComputationModule.md#concatmany)

#### Call Signature

> **concatMany**\<`T`\>(`computations`): [`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

readonly [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>[]

##### Returns

[`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatMany`](../../interfaces/DeferredComputationModule.md#concatmany)

***

### empty()

> **empty**\<`T`\>(): [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`empty`](../../interfaces/DeferredComputationModule.md#empty)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationWithSideEffectsModule`](../../interfaces/ComputationWithSideEffectsModule.md).[`forEach`](../../interfaces/ComputationWithSideEffectsModule.md#foreach)

***

### fromIterable()

> **fromIterable**\<`T`\>(): \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`unknown`\> ? [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> : [`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

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

`TIterable` *extends* [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`unknown`\> ? [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> : [`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromIterable`](../../interfaces/DeferredComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromReadonlyArray`](../../interfaces/DeferredComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromValue`](../../interfaces/DeferredComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

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

[`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`generate`](../../interfaces/DeferredComputationModule.md#generate)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`keep`](../../interfaces/DeferredComputationModule.md#keep)

***

### last()

> **last**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`last`](../../interfaces/SynchronousComputationModule.md#last)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `TA`, `TB`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`map`](../../interfaces/DeferredComputationModule.md#map)

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`raise`](../../interfaces/DeferredComputationModule.md#raise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `TAcc`\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`reduce`](../../interfaces/SynchronousComputationModule.md#reduce)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`retry`](../../interfaces/DeferredComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`scan`](../../interfaces/DeferredComputationModule.md#scan)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeFirst`](../../interfaces/DeferredComputationModule.md#takefirst)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeWhile`](../../interfaces/DeferredComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`throwIfEmpty`](../../interfaces/DeferredComputationModule.md#throwifempty)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, readonly `T`[]\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toReadonlyArray`](../../interfaces/SynchronousComputationModule.md#toreadonlyarray)

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toRunnable`](../../interfaces/SynchronousComputationModule.md#torunnable)

***

### zip()

#### Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`IterableLike`](../../interfaces/IterableLike.md)\<`TA`\>

###### b

[`IterableLike`](../../interfaces/IterableLike.md)\<`TB`\>

##### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`IterableLike`](../../interfaces/IterableLike.md)\<`TA`\>

###### b

[`IterableLike`](../../interfaces/IterableLike.md)\<`TB`\>

###### c

[`IterableLike`](../../interfaces/IterableLike.md)\<`TC`\>

##### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`IterableLike`](../../interfaces/IterableLike.md)\<`TA`\>

###### b

[`IterableLike`](../../interfaces/IterableLike.md)\<`TB`\>

###### c

[`IterableLike`](../../interfaces/IterableLike.md)\<`TC`\>

###### d

[`IterableLike`](../../interfaces/IterableLike.md)\<`TD`\>

##### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)
