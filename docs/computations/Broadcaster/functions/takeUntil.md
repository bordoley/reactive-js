[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Broadcaster](../README.md) / takeUntil

# Function: takeUntil()

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`unknown`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `T`, `T`\>

## Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### notifier

##### [ComputationLike_isDeferred]

`false`

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### [ComputationLike_isSynchronous]

`false`

##### [DisposableContainerLike_add]

##### [SourceLike_subscribe]

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `T`, `T`\>
