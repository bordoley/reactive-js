[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/EventSource](../README.md) / takeUntil

# Function: takeUntil()

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

`never`

### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

`never`

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

`never`

### Returns

[`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`\>, `never`\>

### Type Parameters

• **T**

### Parameters

#### notifier

`never`

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`\>, `never`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatelessAsynchronousComputationOperator`](../../type-aliases/StatelessAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`unknown`\>

### Returns

[`StatelessAsynchronousComputationOperator`](../../type-aliases/StatelessAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`, `T`\>
