[Reactive-JS](../README.md) / reactiveCache

# Module: reactiveCache

## Index

### Interfaces

* [ReactiveCacheLike](../interfaces/reactivecache.reactivecachelike.md)

### Functions

* [createReactiveCache](reactivecache.md#createreactivecache)
* [getOrSet](reactivecache.md#getorset)

## Functions

### createReactiveCache

▸ `Const`**createReactiveCache**\<T>(`dispatchScheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), `cleanupScheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), `options?`: { `maxCount?`: *undefined* \| *number*  }): [*ReactiveCacheLike*](../interfaces/reactivecache.reactivecachelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`dispatchScheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) |
`cleanupScheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) |
`options?` | { `maxCount?`: *undefined* \| *number*  } |

**Returns:** [*ReactiveCacheLike*](../interfaces/reactivecache.reactivecachelike.md)<T\>

___

### getOrSet

▸ `Const`**getOrSet**\<T>(`cache`: [*ReactiveCacheLike*](../interfaces/reactivecache.reactivecachelike.md)<T\>, `key`: *string*, `defaultValue`: [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`cache` | [*ReactiveCacheLike*](../interfaces/reactivecache.reactivecachelike.md)<T\> |
`key` | *string* |
`defaultValue` | [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>
