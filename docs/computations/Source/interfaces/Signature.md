[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Source](../README.md) / Signature

# Interface: Signature

## Methods

### lastAsync()

> **lastAsync**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SourceLike`](../../interfaces/SourceLike.md)\<`T`, [`ObserverLike`](../../../utils/interfaces/ObserverLike.md)\<`unknown`\>\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SourceLike`](../../interfaces/SourceLike.md)\<`T`, [`ObserverLike`](../../../utils/interfaces/ObserverLike.md)\<`unknown`\>\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

***

### subscribe()

> **subscribe**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SourceLike`](../../interfaces/SourceLike.md)\<`T`, [`ObserverLike`](../../../utils/interfaces/ObserverLike.md)\<`unknown`\>\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SourceLike`](../../interfaces/SourceLike.md)\<`T`, [`ObserverLike`](../../../utils/interfaces/ObserverLike.md)\<`unknown`\>\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SourceLike`](../../interfaces/SourceLike.md)\<`T`, [`ObserverLike`](../../../utils/interfaces/ObserverLike.md)\<`unknown`\>\>, `Promise`\<readonly `T`[]\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SourceLike`](../../interfaces/SourceLike.md)\<`T`, [`ObserverLike`](../../../utils/interfaces/ObserverLike.md)\<`unknown`\>\>, `Promise`\<readonly `T`[]\>\>
