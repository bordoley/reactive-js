[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / subscribe

# Function: subscribe()

> **subscribe**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

## Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"toProducer"`\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>
