[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, `Iterable`\<`T`, `any`, `any`\>\>

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`\>
