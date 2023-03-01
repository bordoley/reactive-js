[Reactive-JS](../README.md) / rx/Observer

# Module: rx/Observer

## Table of contents

### Functions

- [getDispatcher](rx_Observer.md#getdispatcher)
- [getScheduler](rx_Observer.md#getscheduler)
- [notify](rx_Observer.md#notify)
- [notifyObserver](rx_Observer.md#notifyobserver)
- [schedule](rx_Observer.md#schedule)
- [sourceFrom](rx_Observer.md#sourcefrom)

## Functions

### getDispatcher

▸ **getDispatcher**<`T`\>(`observer`): [`DispatcherLike`](../interfaces/scheduling.DispatcherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`\> |

#### Returns

[`DispatcherLike`](../interfaces/scheduling.DispatcherLike.md)<`T`\>

___

### getScheduler

▸ **getScheduler**<`T`\>(`observer`): [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`\> |

#### Returns

[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

___

### notify

▸ **notify**<`TObserver`, `T`\>(`v`): [`Function1`](functions.md#function1)<`TObserver`, `TObserver`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObserver` | extends [`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`, `TObserver`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`TObserver`, `TObserver`\>

___

### notifyObserver

▸ **notifyObserver**<`T`\>(`observer`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>

___

### schedule

▸ **schedule**(`f`, `options?`): [`Function1`](functions.md#function1)<[`ObserverLike`](../interfaces/rx.ObserverLike.md)<`unknown`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](functions.md#sideeffect) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObserverLike`](../interfaces/rx.ObserverLike.md)<`unknown`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### sourceFrom

▸ **sourceFrom**<`C`, `TObserver`, `T`\>(`source`): [`Function1`](functions.md#function1)<`TObserver`, `TObserver`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `TObserver` | extends [`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`, `TObserver`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](functions.md#function1)<`TObserver`, `TObserver`\>
