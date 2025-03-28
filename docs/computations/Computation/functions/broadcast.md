[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / broadcast

# Function: broadcast()

> **broadcast**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

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

`object` & `Parameters`\<`TComputationModule`\[`"toProducer"`\]\>\[`0`\]

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>
