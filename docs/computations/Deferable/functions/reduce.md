[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Deferable](../README.md) / reduce

# Function: reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`T`\> & `Pick`\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>, `TAcc`\>

## Type Parameters

• **T**

• **TAcc**

## Parameters

### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`T`\> & `Pick`\<[`DeferableLike`](../../interfaces/DeferableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>, `TAcc`\>
