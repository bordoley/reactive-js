[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / IterableModule

# Interface: IterableModule

## Extends

- [`PureStatelessComputationModule`](../../interfaces/PureStatelessComputationModule.md)\<[`IterableComputation`](IterableComputation.md)\>

## Methods

### forEach()

> **forEach**\<`T`\>(`effect`): [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Iterable`\<`T`, `any`, `any`\>\>

#### Type Parameters

• **T**

#### Parameters

##### effect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Iterable`\<`T`, `any`, `any`\>\>

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

[`PureStatelessComputationModule`](../../interfaces/PureStatelessComputationModule.md).[`keep`](../../interfaces/PureStatelessComputationModule.md#keep)

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

[`PureStatelessComputationModule`](../../interfaces/PureStatelessComputationModule.md).[`map`](../../interfaces/PureStatelessComputationModule.md#map)
