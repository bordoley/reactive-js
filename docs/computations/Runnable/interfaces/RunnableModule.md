[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / RunnableModule

# Interface: RunnableModule

## Extends

- [`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md), [`RunnableComputationFor`](../type-aliases/RunnableComputationFor.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\>\>.[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md), [`RunnableComputationFor`](../type-aliases/RunnableComputationFor.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\>\>.[`ComputationWithSideEffectsModule`](../../interfaces/ComputationWithSideEffectsModule.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md), [`RunnableComputationFor`](../type-aliases/RunnableComputationFor.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\>, [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), [`RunnableComputationFor`](../type-aliases/RunnableComputationFor.md)\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\>\>.[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md), [`RunnableComputationFor`](../type-aliases/RunnableComputationFor.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\>\>

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, readonly `T`[]\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`buffer`](../../interfaces/DeferredReactiveComputationModule.md#buffer)

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

***

### concatAll()

> **concatAll**\<`T`\>(): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

***

### concatMany()

> **concatMany**\<`T`\>(`computations`): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Type Parameters

• **T**

#### Parameters

##### computations

readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>[]

#### Returns

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatMany`](../../interfaces/DeferredComputationModule.md#concatmany)

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `ArrayBuffer`, `string`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`decodeWithCharset`](../../interfaces/DeferredReactiveComputationModule.md#decodewithcharset)

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`distinctUntilChanged`](../../interfaces/DeferredReactiveComputationModule.md#distinctuntilchanged)

***

### empty()

> **empty**\<`T`\>(): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Type Parameters

• **T**

#### Returns

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`empty`](../../interfaces/DeferredComputationModule.md#empty)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`unknown`\>, `RunnableWithSideEffectsComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`unknown`\>, `RunnableWithSideEffectsComputation`, `T`, `T`\>

#### Inherited from

[`ComputationWithSideEffectsModule`](../../interfaces/ComputationWithSideEffectsModule.md).[`forEach`](../../interfaces/ComputationWithSideEffectsModule.md#foreach)

***

### fromIterable()

> **fromIterable**\<`T`, `TIterable`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TIterable`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Type Parameters

• **T**

• **TIterable** *extends* [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> = [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TIterable`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromIterable`](../../interfaces/DeferredComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromReadonlyArray`](../../interfaces/DeferredComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromValue`](../../interfaces/DeferredComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

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

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`generate`](../../interfaces/DeferredComputationModule.md#generate)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`keep`](../../interfaces/DeferredComputationModule.md#keep)

***

### last()

> **last**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`last`](../../interfaces/SynchronousComputationModule.md#last)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `TA`, `TB`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`map`](../../interfaces/DeferredComputationModule.md#map)

***

### pairwise()

> **pairwise**\<`T`\>(): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`pairwise`](../../interfaces/DeferredReactiveComputationModule.md#pairwise)

***

### raise()

> **raise**\<`T`\>(`options`?): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`raise`](../../interfaces/DeferredComputationModule.md#raise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, `TAcc`\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`reduce`](../../interfaces/SynchronousComputationModule.md#reduce)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`retry`](../../interfaces/DeferredComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `TAcc`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`scan`](../../interfaces/DeferredComputationModule.md#scan)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`skipFirst`](../../interfaces/DeferredReactiveComputationModule.md#skipfirst)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeFirst`](../../interfaces/DeferredComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`takeLast`](../../interfaces/DeferredReactiveComputationModule.md#takelast)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeWhile`](../../interfaces/DeferredComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, `RunnableComputation`, `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`throwIfEmpty`](../../interfaces/DeferredComputationModule.md#throwifempty)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, readonly `T`[]\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toReadonlyArray`](../../interfaces/SynchronousComputationModule.md#toreadonlyarray)

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toRunnable`](../../interfaces/SynchronousComputationModule.md#torunnable)
