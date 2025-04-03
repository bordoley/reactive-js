[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Streamable](../README.md) / animationGroup

# Function: animationGroup()

## Call Signature

> **animationGroup**\<`T`, `TKey`\>(`animationGroup`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`void`, `number`, [`AnimationGroupLike`](../interfaces/AnimationGroupLike.md)\<`void`, `TKey`, `T`\>\>

### Type Parameters

• **T**

• **TKey** *extends* `string` = `string`

### Parameters

#### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### options?

##### animationScheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`void`, `number`, [`AnimationGroupLike`](../interfaces/AnimationGroupLike.md)\<`void`, `TKey`, `T`\>\>

## Call Signature

> **animationGroup**\<`T`, `TKey`, `TEvent`\>(`animationGroup`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `number`, [`AnimationGroupLike`](../interfaces/AnimationGroupLike.md)\<`TEvent`, `TKey`, `T`\>\>

### Type Parameters

• **T**

• **TKey** *extends* `string`

• **TEvent**

### Parameters

#### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> \| [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>\>

#### options?

##### animationScheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `number`, [`AnimationGroupLike`](../interfaces/AnimationGroupLike.md)\<`TEvent`, `TKey`, `T`\>\>
