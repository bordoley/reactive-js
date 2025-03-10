[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredComputationModule

# Interface: DeferredComputationModule\<TComputation\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputation`\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputation`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

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

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, [`PureSynchronousComputationLike`](PureSynchronousComputationLike.md), [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, [`PureSynchronousComputationLike`](PureSynchronousComputationLike.md), [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>, `T`\>

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

***

### empty()

> **empty**\<`T`\>(): [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

***

### encodeUtf8()

> **encodeUtf8**(): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

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

***

### fromIterable()

> **fromIterable**\<`T`\>(): [`FromIterableDeferredOperator`](../type-aliases/FromIterableDeferredOperator.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`FromIterableDeferredOperator`](../type-aliases/FromIterableDeferredOperator.md)\<`TComputation`, `T`\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\> \| [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\> \| [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>\>

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>\>

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

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

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureDeferredComputationOf`](../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

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

#### Call Signature

> **repeat**\<`T`\>(`count`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

#### Call Signature

> **repeat**\<`T`\>(): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

##### Type Parameters

• **T**

##### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`, [`DeferredComputationOf`](../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>\>

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
