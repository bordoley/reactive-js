[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/MulticastObservable](../README.md) / MulticastObservableModule

# Interface: MulticastObservableModule

## Extends

- [`ConcurrentReactiveComputationModule`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md)\<[`ObservableComputationFor`](../../Observable/type-aliases/ObservableComputationFor.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\>\>

## Methods

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md).[`fromPromise`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md#frompromise)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`MulticastObservableComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`MulticastObservableComputation`, `T`, `T`\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md).[`keep`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md#keep)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`MulticastObservableComputation`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`MulticastObservableComputation`, `TA`, `TB`\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md).[`map`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md#map)

***

### mergeMany()

#### Call Signature

> **mergeMany**\<`T`\>(`computations`): [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

readonly [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>[]

##### Returns

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md).[`mergeMany`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md#mergemany)

#### Call Signature

> **mergeMany**\<`T`\>(`computations`): `never`

##### Type Parameters

• **T**

##### Parameters

###### computations

readonly [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>[]

##### Returns

`never`

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md).[`mergeMany`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md#mergemany)
