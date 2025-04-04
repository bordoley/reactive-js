[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentDeferredComputationModule

# Interface: ConcurrentDeferredComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`ProducerModule`](../Producer/interfaces/ProducerModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](ComputationTypeLike.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### genAsync()

> **genAsync**\<`T`\>(`factory`, `options`?): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

##### options?

`TCreationOptions`\[`"genAsync"`\]

#### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

***

### genPureAsync()

> **genPureAsync**\<`T`\>(`factory`, `options`?): [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

##### options?

`TCreationOptions`\[`"genPureAsync"`\]

#### Returns

[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>
