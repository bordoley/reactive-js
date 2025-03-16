[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SequentialComputationModule

# Interface: SequentialComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **catchError**\<`T`, `TInnerLike`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, `T`, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### onError

[`Function1`](../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `T`\>\>

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, `T`, `T`\>

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`PureSynchronousComputationLike`](PureSynchronousComputationLike.md), [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`PureSynchronousComputationLike`](PureSynchronousComputationLike.md), [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>, `T`\>

#### Call Signature

> **concatAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `T`\>, `T`\>

***

### encodeUtf8()

> **encodeUtf8**(): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>\>

#### Call Signature

> **repeat**\<`T`\>(`count`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>\>

#### Call Signature

> **repeat**\<`T`\>(): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>\>

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>\>

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `T`, `TAcc`\>

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>
