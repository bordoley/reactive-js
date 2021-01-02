[Reactive-JS](../README.md) / react

# Module: react

## Index

### Variables

* [idlePriority](react.md#idlepriority)
* [immediatePriority](react.md#immediatepriority)
* [lowPriority](react.md#lowpriority)
* [normalPriority](react.md#normalpriority)
* [userBlockingPriority](react.md#userblockingpriority)

### Functions

* [createComponent](react.md#createcomponent)
* [useObservable](react.md#useobservable)

## Variables

### idlePriority

• `Const` **idlePriority**: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)

Scheduler that schedules work on React's internal priority scheduler with idle priority.

___

### immediatePriority

• `Const` **immediatePriority**: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)

Scheduler that schedules work on React's internal priority scheduler with immediate priority.

___

### lowPriority

• `Const` **lowPriority**: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)

Scheduler that schedules work on React's internal priority scheduler with low priority.

___

### normalPriority

• `Const` **normalPriority**: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)

Scheduler that schedules work on React's internal priority scheduler with normal priority.

___

### userBlockingPriority

• `Const` **userBlockingPriority**: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)

Scheduler that schedules work on React's internal priority scheduler with user blocking priority.

## Functions

### createComponent

▸ `Const`**createComponent**\<TProps>(`fn`: (`props`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TProps\>) => [*ObservableLike*](../interfaces/observable.observablelike.md)<*ReactElement*<*any*, *string* \| (`props`: *any*) => *null* \| *ReactElement*<*any*, *string* \| (props: any) => ReactElement\<any, string \| ... \| (new (props: any) => Component\<any, any, any>)> \| null \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>\>): function

#### Type parameters:

Name |
------ |
`TProps` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (`props`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TProps\>) => [*ObservableLike*](../interfaces/observable.observablelike.md)<*ReactElement*<*any*, *string* \| (`props`: *any*) => *null* \| *ReactElement*<*any*, *string* \| (props: any) => ReactElement\<any, string \| ... \| (new (props: any) => Component\<any, any, any>)> \| null \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>\> |

**Returns:** function

___

### useObservable

▸ `Const`**useObservable**\<T>(`observable`: [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, `options?`: { `scheduler?`: [*Option*](option.md#option)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)\>  }): [*Option*](option.md#option)<T\>

Returns the current value, if defined, of `observable`.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`observable` | [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> | The `ObservableLike` to subscribe to.   |
`options?` | { `scheduler?`: [*Option*](option.md#option)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)\>  } | - |

**Returns:** [*Option*](option.md#option)<T\>
