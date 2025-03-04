[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / IterableModule

# Interface: IterableModule

## Extends

- [`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md)\<[`IterableComputation`](IterableComputation.md)\>

## Properties

### zip

> **zip**: [`ZippingConstructor`](../../interfaces/ZippingConstructor.md)\<[`IterableComputation`](IterableComputation.md)\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

## Methods

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`catchError`](../../interfaces/InteractiveComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>\>

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `T`, `T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`catchError`](../../interfaces/InteractiveComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`, `TInnerType`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `TInnerType`, `T`, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`DeferringHigherOrderInnerType`](../../type-aliases/DeferringHigherOrderInnerType.md)

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`ComputationOfInnerType`](../../type-aliases/ComputationOfInnerType.md)\<[`IterableComputation`](IterableComputation.md), `TInnerType`, `T`\>\>

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `TInnerType`, `T`, `T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`catchError`](../../interfaces/InteractiveComputationModule.md#catcherror)

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>[]

##### Returns

[`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`concat`](../../interfaces/InteractiveComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`IterableComputation`](IterableComputation.md), `T`\>[]

##### Returns

[`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`concat`](../../interfaces/InteractiveComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>[]

##### Returns

[`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`concat`](../../interfaces/InteractiveComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`IterableComputation`](IterableComputation.md), `T`\>[]

##### Returns

[`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`concat`](../../interfaces/InteractiveComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`concatAll`](../../interfaces/InteractiveComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../type-aliases/ComputationOfInnerType.md)\<[`IterableComputation`](IterableComputation.md), `TInnerType`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`DeferringHigherOrderInnerType`](../../type-aliases/DeferringHigherOrderInnerType.md)

##### Parameters

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../type-aliases/ComputationOfInnerType.md)\<[`IterableComputation`](IterableComputation.md), `TInnerType`, `T`\>, `T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`concatAll`](../../interfaces/InteractiveComputationModule.md#concatall)

***

### empty()

> **empty**\<`T`\>(): [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

[`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`empty`](../../interfaces/InteractiveComputationModule.md#empty)

***

### encodeUtf8()

> **encodeUtf8**(): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`encodeUtf8`](../../interfaces/InteractiveComputationModule.md#encodeutf8)

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

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`forEach`](../../interfaces/InteractiveComputationModule.md#foreach)

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

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`fromIterable`](../../interfaces/InteractiveComputationModule.md#fromiterable)

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

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`fromReadonlyArray`](../../interfaces/InteractiveComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`fromValue`](../../interfaces/InteractiveComputationModule.md#fromvalue)

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

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`generate`](../../interfaces/InteractiveComputationModule.md#generate)

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

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`keep`](../../interfaces/InteractiveComputationModule.md#keep)

***

### last()

> **last**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`IterableComputation`](IterableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`IterableComputation`](IterableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`last`](../../interfaces/InteractiveComputationModule.md#last)

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

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`map`](../../interfaces/InteractiveComputationModule.md#map)

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

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`raise`](../../interfaces/InteractiveComputationModule.md#raise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`IterableComputation`](IterableComputation.md), `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`IterableComputation`](IterableComputation.md), `T`\>, `TAcc`\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`reduce`](../../interfaces/InteractiveComputationModule.md#reduce)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`repeat`](../../interfaces/InteractiveComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`repeat`](../../interfaces/InteractiveComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`repeat`](../../interfaces/InteractiveComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`retry`](../../interfaces/InteractiveComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`scan`](../../interfaces/InteractiveComputationModule.md#scan)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`takeFirst`](../../interfaces/InteractiveComputationModule.md#takefirst)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`takeWhile`](../../interfaces/InteractiveComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`throwIfEmpty`](../../interfaces/InteractiveComputationModule.md#throwifempty)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`IterableComputation`](IterableComputation.md), `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`IterableComputation`](IterableComputation.md), `T`\>, readonly `T`[]\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`toReadonlyArray`](../../interfaces/InteractiveComputationModule.md#toreadonlyarray)

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`IterableComputation`](IterableComputation.md), `T`\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`IterableComputation`](IterableComputation.md), `T`\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`toRunnable`](../../interfaces/InteractiveComputationModule.md#torunnable)
