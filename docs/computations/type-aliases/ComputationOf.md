[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationOf

# Type Alias: ComputationOf\<Type, TComputation, T\>

> **ComputationOf**\<`Type`, `TComputation`, `T`\>: `TComputation` *extends* `object` ? `NonNullable`\<`TComputation` & `object`\[*typeof* [`Computation_type`](../variables/Computation_type.md)\] & `Pick`\<`Type`, *typeof* [`ComputationLike_isPure`](../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../variables/ComputationLike_isSynchronous.md)\>\> : `object`

## Type Parameters

• **Type** *extends* [`ComputationLike`](../interfaces/ComputationLike.md)

• **TComputation** *extends* [`Computation`](../interfaces/Computation.md)\<`Type`\>

• **T**
