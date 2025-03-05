[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [events/EventSource](../README.md) / withLatestFrom

# Function: withLatestFrom()

## Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`StatefulSynchronousComputationOperator`](../../../computations/type-aliases/StatefulSynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### other

`never`

### Returns

[`StatefulSynchronousComputationOperator`](../../../computations/type-aliases/StatefulSynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`StatefulSynchronousComputationOperator`](../../../computations/type-aliases/StatefulSynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, `T`\>

### Type Parameters

• **TA**

• **TB**

• **T**

### Parameters

#### other

`never`

#### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

### Returns

[`StatefulSynchronousComputationOperator`](../../../computations/type-aliases/StatefulSynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, `T`\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ComputationOperatorWithSideEffects`](../../../computations/type-aliases/ComputationOperatorWithSideEffects.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### other

`never`

### Returns

[`ComputationOperatorWithSideEffects`](../../../computations/type-aliases/ComputationOperatorWithSideEffects.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ComputationOperatorWithSideEffects`](../../../computations/type-aliases/ComputationOperatorWithSideEffects.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, `T`\>

### Type Parameters

• **TA**

• **TB**

• **T**

### Parameters

#### other

`never`

#### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

### Returns

[`ComputationOperatorWithSideEffects`](../../../computations/type-aliases/ComputationOperatorWithSideEffects.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, `T`\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`StatefulAsynchronousComputationOperator`](../../../computations/type-aliases/StatefulAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### other

`never`

### Returns

[`StatefulAsynchronousComputationOperator`](../../../computations/type-aliases/StatefulAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`StatefulAsynchronousComputationOperator`](../../../computations/type-aliases/StatefulAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, `T`\>

### Type Parameters

• **TA**

• **TB**

• **T**

### Parameters

#### other

`never`

#### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

### Returns

[`StatefulAsynchronousComputationOperator`](../../../computations/type-aliases/StatefulAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, `T`\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TA`\>, `never`\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### other

`never`

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TA`\>, `never`\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TA`\>, `never`\>

### Type Parameters

• **TA**

• **TB**

• **T**

### Parameters

#### other

`never`

#### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TA`\>, `never`\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`StatelessAsynchronousComputationOperator`](../../../computations/type-aliases/StatelessAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### other

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TB`\>

### Returns

[`StatelessAsynchronousComputationOperator`](../../../computations/type-aliases/StatelessAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`StatelessAsynchronousComputationOperator`](../../../computations/type-aliases/StatelessAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, `T`\>

### Type Parameters

• **TA**

• **TB**

• **T**

### Parameters

#### other

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`TB`\>

#### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

### Returns

[`StatelessAsynchronousComputationOperator`](../../../computations/type-aliases/StatelessAsynchronousComputationOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `TA`, `T`\>
