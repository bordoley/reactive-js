[Reactive-JS](../README.md) / scheduling/Dispatcher

# Module: scheduling/Dispatcher

## Table of contents

### Functions

- [dispatch](scheduling_Dispatcher.md#dispatch)
- [dispatchTo](scheduling_Dispatcher.md#dispatchto)
- [getScheduler](scheduling_Dispatcher.md#getscheduler)

## Functions

### dispatch

▸ **dispatch**<`T`, `TDispatcher`\>(`v`): [`Updater`](functions.md#updater)<`TDispatcher`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TDispatcher` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Updater`](functions.md#updater)<`TDispatcher`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | `Object` |
| `dispatcher.[DispatcherLike_dispatch]` | (`v`: `T`) => `void` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>

___

### getScheduler

▸ **getScheduler**(`dispatcher`): [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | `Object` |
| `dispatcher.[DispatcherLike_scheduler]` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)
