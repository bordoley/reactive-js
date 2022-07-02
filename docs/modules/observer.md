[Reactive-JS](../README.md) / observer

# Module: observer

## Table of contents

### Classes

- [AbstractDelegatingObserver](../classes/observer.AbstractDelegatingObserver.md)
- [Observer](../classes/observer.Observer.md)

### Functions

- [createDelegatingObserver](observer.md#createdelegatingobserver)
- [getDispatcher](observer.md#getdispatcher)
- [getScheduler](observer.md#getscheduler)

## Functions

### createDelegatingObserver

▸ **createDelegatingObserver**<`T`\>(`delegate`): [`Observer`](../classes/observer.Observer.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`Observer`](../classes/observer.Observer.md)<`T`\> |

#### Returns

[`Observer`](../classes/observer.Observer.md)<`T`\>

___

### getDispatcher

▸ **getDispatcher**<`T`\>(`observer`): [`DispatcherLike`](../interfaces/dispatcher.DispatcherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../classes/observer.Observer.md)<`T`\> |

#### Returns

[`DispatcherLike`](../interfaces/dispatcher.DispatcherLike.md)<`T`\>

___

### getScheduler

▸ **getScheduler**<`T`\>(`observer`): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../classes/observer.Observer.md)<`T`\> |

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)
