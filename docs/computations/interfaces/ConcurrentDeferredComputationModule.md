[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentDeferredComputationModule

# Interface: ConcurrentDeferredComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### broadcast()

> **broadcast**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationBaseOf`](../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>, [`PauseableLike`](../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`object` & `TCreationOptions`\[`"broadcast"`\]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationBaseOf`](../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>, [`PauseableLike`](../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md)\>

***

### fromAsyncFactory()

> **fromAsyncFactory**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"fromAsyncFactory"`\]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

***

### genAsync()

> **genAsync**\<`T`\>(`factory`, `options`?): [`NewInstanceWithSideEffectsOf`](../type-aliases/NewInstanceWithSideEffectsOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

##### options?

`TCreationOptions`\[`"genAsync"`\]

#### Returns

[`NewInstanceWithSideEffectsOf`](../type-aliases/NewInstanceWithSideEffectsOf.md)\<`TComputationType`, `T`\>

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

***

### toProducer()

> **toProducer**\<`T`\>(`options`?): [`ToProducer`](../type-aliases/ToProducer.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toProducer"`\]

#### Returns

[`ToProducer`](../type-aliases/ToProducer.md)\<`TComputationType`, `T`\>
