[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentReactiveComputationModule

# Interface: ConcurrentReactiveComputationModule\<Type, TComputation\>

## Extends

- [`ComputationModule`](ComputationModule.md)\<`Type`, `TComputation`\>

## Extended by

- [`EventSourceModule`](../../events/EventSource/interfaces/EventSourceModule.md)

## Type Parameters

• **Type** *extends* [`ReactiveComputationLike`](ReactiveComputationLike.md)

• **TComputation** *extends* [`Computation`](Computation.md)

## Methods

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

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

### mergeMany()

> **mergeMany**\<`T`\>(`eventSources`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### eventSources

readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>
