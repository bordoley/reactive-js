[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentReactiveComputationModule

# Interface: ConcurrentReactiveComputationModule\<TComputation\>

## Extends

- [`ComputationModule`](ComputationModule.md)\<`TComputation`\>

## Extended by

- [`EventSourceModule`](../../events/EventSource/interfaces/EventSourceModule.md)

## Type Parameters

• **TComputation** *extends* [`Computation`](../type-aliases/Computation.md)

## Methods

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>\>

***

### keep()

> **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Inherited from

[`ComputationModule`](ComputationModule.md).[`keep`](ComputationModule.md#keep)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

#### Inherited from

[`ComputationModule`](ComputationModule.md).[`map`](ComputationModule.md#map)

***

### mergeMany()

#### Call Signature

> **mergeMany**\<`T`\>(`computations`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

readonly [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>

#### Call Signature

> **mergeMany**\<`T`\>(`computations`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>[]

##### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>
