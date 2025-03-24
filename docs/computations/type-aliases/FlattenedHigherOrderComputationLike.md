[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FlattenedHigherOrderComputationLike

# Type Alias: FlattenedHigherOrderComputationLike\<TOuter, TInner\>

> **FlattenedHigherOrderComputationLike**\<`TOuter`, `TInner`\>: `object`

## Type Parameters

• **TOuter** *extends* [`ComputationLike`](../interfaces/ComputationLike.md)

• **TInner** *extends* [`ComputationLike`](../interfaces/ComputationLike.md)

## Type declaration

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `NonNullable`\<`TOuter`\[*typeof* [`ComputationLike_isDeferred`](../variables/ComputationLike_isDeferred.md)\]\> & `NonNullable`\<`TInner`\[*typeof* [`ComputationLike_isDeferred`](../variables/ComputationLike_isDeferred.md)\]\>

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `NonNullable`\<`TOuter`\[*typeof* [`ComputationLike_isPure`](../variables/ComputationLike_isPure.md)\]\> & `NonNullable`\<`TInner`\[*typeof* [`ComputationLike_isPure`](../variables/ComputationLike_isPure.md)\]\>

### \[ComputationLike\_isSynchronous\]?

> `readonly` `optional` **\[ComputationLike\_isSynchronous\]**: `NonNullable`\<`TOuter`\[*typeof* [`ComputationLike_isSynchronous`](../variables/ComputationLike_isSynchronous.md)\]\> & `NonNullable`\<`TInner`\[*typeof* [`ComputationLike_isSynchronous`](../variables/ComputationLike_isSynchronous.md)\]\>
