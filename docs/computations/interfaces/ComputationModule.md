[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationModule

# Interface: ComputationModule\<TComputation\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`EventSourceModule`](../EventSource/interfaces/EventSourceModule.md)
- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
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

## Methods

### empty()

> **empty**\<`T`\>(): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>

***

### fromIterable()

> **fromIterable**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`PureIterableLike`](PureIterableLike.md)\<`T`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureIterableLike`](PureIterableLike.md)\<`T`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>\>

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>\>

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>

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

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>

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

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>
