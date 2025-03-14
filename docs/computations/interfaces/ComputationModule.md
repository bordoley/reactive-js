[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationModule

# Interface: ComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`EventSourceModule`](../EventSource/interfaces/EventSourceModule.md)
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

***

### empty

> **empty**: [`EmptyOperator`](../type-aliases/EmptyOperator.md)\<`TComputationType`\>

## Methods

### firstAsync()

> **firstAsync**\<`T`\>(): [`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, `T`\>

#### Type Parameters

• **T**

#### Returns

[`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, `T`\>

***

### fromIterable()

> **fromIterable**\<`T`\>(): [`FromIterableOperator`](../type-aliases/FromIterableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`FromIterableOperator`](../type-aliases/FromIterableOperator.md)\<`TComputationType`, `T`\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

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

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

***

### keep()

> **keep**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### lastAsync()

> **lastAsync**\<`T`\>(): [`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, `T`\>

#### Type Parameters

• **T**

#### Returns

[`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, `T`\>

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `TA`, `TB`\>

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

***

### reduceAsync()

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, `TAcc`\>

***

### toObservable()

> **toObservable**\<`T`\>(): [`ToObservableOperator`](../type-aliases/ToObservableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ToObservableOperator`](../type-aliases/ToObservableOperator.md)\<`TComputationType`, `T`\>

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`T`\>(): [`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, readonly `T`[]\>
