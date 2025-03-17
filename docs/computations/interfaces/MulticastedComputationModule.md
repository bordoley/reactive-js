[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / MulticastedComputationModule

# Interface: MulticastedComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`EventSourceModule`](../EventSource/interfaces/EventSourceModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>\>

***

### never()

> **never**\<`T`\>(): [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>
