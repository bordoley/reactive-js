[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Deferable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`DeferableLike`](../../interfaces/DeferableLike.md)\<`T`\>\>

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`DeferableComputation`](../interfaces/DeferableComputation.md), `T`, `T`\>
