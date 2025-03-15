[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/EventSource](../README.md) / forkMerge

# Function: forkMerge()

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TIn`\>, `never`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TIn`\>, `never`\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TIn`\>, `never`\>

#### tail

...[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TIn`\>, `never`\>[]

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TIn`\>, `never`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`, `TInnerLike`\>(`fst`, `snd`, ...`tail`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TInnerLike`, `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

• **TInnerLike** *extends* [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md)

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TIn`\>, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TInnerLike`, `TOut`\>\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TIn`\>, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TInnerLike`, `TOut`\>\>

#### tail

...readonly \[[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TIn`\>, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TInnerLike`, `TOut`\>\>, \{ `innerType`: `TInnerLike`; \}\]

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TInnerLike`, `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TIn`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TOut`\>\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TIn`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TOut`\>\>

#### tail

...readonly \[[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TIn`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TOut`\>\>, \{ `innerType`: [`MulticastComputationLike`](../../interfaces/MulticastComputationLike.md); \}\]

### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TIn`, `TOut`\>
