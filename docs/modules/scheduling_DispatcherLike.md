[Reactive-JS](../README.md) / scheduling/DispatcherLike

# Module: scheduling/DispatcherLike

## Table of contents

### Interfaces

- [DispatcherLike](../interfaces/scheduling_DispatcherLike.DispatcherLike.md)

### Variables

- [DispatcherLike\_dispatch](scheduling_DispatcherLike.md#dispatcherlike_dispatch)
- [DispatcherLike\_scheduler](scheduling_DispatcherLike.md#dispatcherlike_scheduler)

### Functions

- [dispatch](scheduling_DispatcherLike.md#dispatch)
- [dispatchTo](scheduling_DispatcherLike.md#dispatchto)
- [getScheduler](scheduling_DispatcherLike.md#getscheduler)

## Variables

### DispatcherLike\_dispatch

• `Const` **DispatcherLike\_dispatch**: unique `symbol`

___

### DispatcherLike\_scheduler

• `Const` **DispatcherLike\_scheduler**: unique `symbol`

## Functions

### dispatch

▸ **dispatch**<`T`, `TDispatcher`\>(`v`): [`Identity`](util_functions.md#identity)<`TDispatcher`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TDispatcher` | extends [`DispatcherLike`](../interfaces/scheduling_DispatcherLike.DispatcherLike.md)<`T`, `TDispatcher`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Identity`](util_functions.md#identity)<`TDispatcher`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`SideEffect1`](util_functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/scheduling_DispatcherLike.DispatcherLike.md)<`T`\> |

#### Returns

[`SideEffect1`](util_functions.md#sideeffect1)<`T`\>

___

### getScheduler

▸ **getScheduler**(`dispatcher`): [`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)<[`SchedulerOptions`](scheduling_SchedulerLike.md#scheduleroptions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/scheduling_DispatcherLike.DispatcherLike.md)<`unknown`\> |

#### Returns

[`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)<[`SchedulerOptions`](scheduling_SchedulerLike.md#scheduleroptions)\>
