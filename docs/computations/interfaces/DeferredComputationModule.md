[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredComputationModule

# Interface: DeferredComputationModule\<Type, TComputation\>

## Extends

- [`ComputationModule`](ComputationModule.md)\<`Type`, `TComputation`\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)

## Type Parameters

• **Type** *extends* [`DeferredComputationLike`](DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](Computation.md)

## Methods

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../functions/type-aliases/Function1.md)\<`Error`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

##### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

***

### concatAll()

> **concatAll**\<`T`\>(): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>, `T`\>

***

### concatMany()

> **concatMany**\<`T`\>(`computations`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### computations

readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

***

### empty()

> **empty**\<`T`\>(): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

***

### fromIterable()

> **fromIterable**\<`T`, `TIterable`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`TIterable`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

#### Type Parameters

• **T**

• **TIterable** *extends* [`IterableLike`](IterableLike.md)\<`T`\> = [`IterableLike`](IterableLike.md)\<`T`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`TIterable`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

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

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

***

### keep()

> **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Inherited from

[`ComputationModule`](ComputationModule.md).[`keep`](ComputationModule.md#keep)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

#### Inherited from

[`ComputationModule`](ComputationModule.md).[`map`](ComputationModule.md#map)

***

### raise()

> **raise**\<`T`\>(`options`?): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Call Signature

> **repeat**\<`T`\>(`count`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Call Signature

> **repeat**\<`T`\>(): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `TAcc`\>

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>
