[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [react/web](../README.md) / useAnimationGroup

# Function: useAnimationGroup()

## Call Signature

> **useAnimationGroup**\<`T`, `TKey`\>(`animationGroup`): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupLike`](../../../computations/Streamable/interfaces/AnimationGroupLike.md)\<`unknown`, `TKey`, `T`\>\>

### Type Parameters

• **T**

• **TKey** *extends* `string` = `string`

### Parameters

#### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupLike`](../../../computations/Streamable/interfaces/AnimationGroupLike.md)\<`unknown`, `TKey`, `T`\>\>

## Call Signature

> **useAnimationGroup**\<`T`, `TKey`, `TEvent`\>(`animationGroup`): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupLike`](../../../computations/Streamable/interfaces/AnimationGroupLike.md)\<`TEvent`, `TKey`, `T`\>\>

### Type Parameters

• **T**

• **TKey** *extends* `string`

• **TEvent**

### Parameters

#### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\> \| [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>\>

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupLike`](../../../computations/Streamable/interfaces/AnimationGroupLike.md)\<`TEvent`, `TKey`, `T`\>\>
