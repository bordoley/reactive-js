[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / lastAsync

# Function: lastAsync()

> **lastAsync**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

## Type Parameters

• **TComputationModule** *extends* `Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, *typeof* [`ComputationModuleLike_computationType`](../../variables/ComputationModuleLike_computationType.md) \| `"toProducer"`\>

## Parameters

### m

`TComputationModule`

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### options?

`Parameters`\<`TComputationModule`\[`"toProducer"`\]\>\[`0`\]

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>
