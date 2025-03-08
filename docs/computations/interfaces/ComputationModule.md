[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationModule

# Interface: ComputationModule\<TComputation\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`SynchronousComputationModule`](SynchronousComputationModule.md)
- [`ConcurrentReactiveComputationModule`](ConcurrentReactiveComputationModule.md)

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
