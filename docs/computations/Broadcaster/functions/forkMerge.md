[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Broadcaster](../README.md) / forkMerge

# Function: forkMerge()

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[ReactiveSourceLike_subscribe]`: `void`; \}\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[ReactiveSourceLike_subscribe]`: `void`; \}\>

#### options

##### [ComputationLike_isPure]

`false`

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[ReactiveSourceLike_subscribe]`: `void`; \}\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[ReactiveSourceLike_subscribe]`: `void`; \}\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[ReactiveSourceLike_subscribe]`: `void`; \}\>

#### options

##### [ComputationLike_isPure]

`false`

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[ReactiveSourceLike_subscribe]`: `void`; \}\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[ReactiveSourceLike_subscribe]`: `void`; \}\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[ReactiveSourceLike_subscribe]`: `void`; \}\>

#### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[ReactiveSourceLike_subscribe]`: `void`; \}\>

#### options

##### [ComputationLike_isPure]

`false`

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`BroadcasterComputation`](../interfaces/BroadcasterComputation.md), `TIn`, `TOut`\>
