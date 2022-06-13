[Reactive-JS](../README.md) / react

# Module: react

## Table of contents

### Functions

- [createComponent](react.md#createcomponent)
- [createReactIdlePriorityScheduler](react.md#createreactidlepriorityscheduler)
- [createReactImmediatePriorityScheduler](react.md#createreactimmediatepriorityscheduler)
- [createReactLowPriorityScheduler](react.md#createreactlowpriorityscheduler)
- [createReactNormalPriorityScheduler](react.md#createreactnormalpriorityscheduler)
- [createReactUserBlockingPriorityScheduler](react.md#createreactuserblockingpriorityscheduler)
- [useObservable](react.md#useobservable)

## Functions

### createComponent

▸ **createComponent**<`TProps`\>(`fn`, `options?`): `ComponentType`<`TProps`\>

#### Type parameters

| Name |
| :------ |
| `TProps` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`props`: [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TProps`\>) => [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>\> |
| `options?` | `Object` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)\> |

#### Returns

`ComponentType`<`TProps`\>

___

### createReactIdlePriorityScheduler

▸ **createReactIdlePriorityScheduler**(): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

___

### createReactImmediatePriorityScheduler

▸ **createReactImmediatePriorityScheduler**(): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

___

### createReactLowPriorityScheduler

▸ **createReactLowPriorityScheduler**(): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

___

### createReactNormalPriorityScheduler

▸ **createReactNormalPriorityScheduler**(): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

___

### createReactUserBlockingPriorityScheduler

▸ **createReactUserBlockingPriorityScheduler**(): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

___

### useObservable

▸ **useObservable**<`T`\>(`observable`, `options?`): [`Option`](option.md#option)<`T`\>

Returns the current value, if defined, of `observable`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> | The `ObservableLike` to subscribe to. |
| `options?` | `Object` | - |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)\> | - |

#### Returns

[`Option`](option.md#option)<`T`\>
