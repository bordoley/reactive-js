[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [utils/EventListener](../README.md) / ConsumerModule

# Interface: ConsumerModule

## Methods

### toConsumer()

> **toConsumer**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventListenerLike`](../../interfaces/EventListenerLike.md)\<`T`\>, [`ConsumerLike`](../../interfaces/ConsumerLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventListenerLike`](../../interfaces/EventListenerLike.md)\<`T`\>, [`ConsumerLike`](../../interfaces/ConsumerLike.md)\<`T`\>\>

***

### toObserver()

> **toObserver**\<`T`\>(`scheduler`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventListenerLike`](../../interfaces/EventListenerLike.md)\<`T`\>, [`ObserverLike`](../../interfaces/ObserverLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventListenerLike`](../../interfaces/EventListenerLike.md)\<`T`\>, [`ObserverLike`](../../interfaces/ObserverLike.md)\<`T`\>\>
