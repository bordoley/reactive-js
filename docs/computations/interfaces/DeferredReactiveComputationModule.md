[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredReactiveComputationModule

# Interface: DeferredReactiveComputationModule\<TComputation\>

## Extends

- [`SynchronousComputationModule`](SynchronousComputationModule.md)\<`TComputation`\>

## Extended by

- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Properties

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**: \<`T`\>() => [`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>, readonly `T`[]\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`toReadonlyArrayAsync`](SynchronousComputationModule.md#toreadonlyarrayasync)

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, readonly `T`[]\>

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`catchError`](SynchronousComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`, `TInnerType`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, `TInnerType`, `T`, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`HigherOrderInnerComputationLike`](../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### onError

[`Function1`](../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputation`, `TInnerType`, `T`\>\>

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, `TInnerType`, `T`, `T`\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`catchError`](SynchronousComputationModule.md#catcherror)

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`concat`](SynchronousComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`concat`](SynchronousComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`concat`](SynchronousComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`concat`](SynchronousComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, [`PureSynchronousComputationLike`](PureSynchronousComputationLike.md), [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, [`PureSynchronousComputationLike`](PureSynchronousComputationLike.md), [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>, `T`\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`concatAll`](SynchronousComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, `TInnerType`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputation`, `TInnerType`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`HigherOrderInnerComputationLike`](../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, `TInnerType`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputation`, `TInnerType`, `T`\>, `T`\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`concatAll`](SynchronousComputationModule.md#concatall)

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `ArrayBuffer`, `string`\>

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### empty()

> **empty**\<`T`\>(): [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`empty`](SynchronousComputationModule.md#empty)

***

### encodeUtf8()

> **encodeUtf8**(): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`encodeUtf8`](SynchronousComputationModule.md#encodeutf8)

***

### first()

> **first**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`first`](SynchronousComputationModule.md#first)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`forEach`](SynchronousComputationModule.md#foreach)

***

### fromIterable()

> **fromIterable**\<`T`\>(): [`FromIterableOperator`](../type-aliases/FromIterableOperator.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`FromIterableOperator`](../type-aliases/FromIterableOperator.md)\<`TComputation`, `T`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`fromIterable`](SynchronousComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`fromReadonlyArray`](SynchronousComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`fromValue`](SynchronousComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### generator

[`Updater`](../../functions/type-aliases/Updater.md)\<`T`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### count?

`number`

#### Returns

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`generate`](SynchronousComputationModule.md#generate)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`keep`](SynchronousComputationModule.md#keep)

***

### last()

> **last**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`last`](SynchronousComputationModule.md#last)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`map`](SynchronousComputationModule.md#map)

***

### pairwise()

> **pairwise**\<`T`\>(): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`raise`](SynchronousComputationModule.md#raise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, `TAcc`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`reduce`](SynchronousComputationModule.md#reduce)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`repeat`](SynchronousComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`repeat`](SynchronousComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

##### Type Parameters

• **T**

##### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

##### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`repeat`](SynchronousComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`retry`](SynchronousComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `TAcc`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`scan`](SynchronousComputationModule.md#scan)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`takeFirst`](SynchronousComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`takeWhile`](SynchronousComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`throwIfEmpty`](SynchronousComputationModule.md#throwifempty)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, readonly `T`[]\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`toReadonlyArray`](SynchronousComputationModule.md#toreadonlyarray)

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`RunnableLike`](RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`RunnableLike`](RunnableLike.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](SynchronousComputationModule.md).[`toRunnable`](SynchronousComputationModule.md#torunnable)
