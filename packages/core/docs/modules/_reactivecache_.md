[@reactive-js/core - v0.0.37](../README.md) › ["reactiveCache"](_reactivecache_.md)

# Module: "reactiveCache"

## Index

### Interfaces

* [ReactiveCacheLike](../interfaces/_reactivecache_.reactivecachelike.md)

### Functions

* [createReactiveCache](_reactivecache_.md#const-createreactivecache)
* [getOrSet](_reactivecache_.md#const-getorset)

## Functions

### `Const` createReactiveCache

▸ **createReactiveCache**<**T**>(`dispatchScheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), `cleanupScheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), `maxCount`: number): *[ReactiveCacheLike](../interfaces/_reactivecache_.reactivecachelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`dispatchScheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | - |
`cleanupScheduler` | [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md) | - |
`maxCount` | number | Number.MAX_SAFE_INTEGER |

**Returns:** *[ReactiveCacheLike](../interfaces/_reactivecache_.reactivecachelike.md)‹T›*

___

### `Const` getOrSet

▸ **getOrSet**<**T**>(`cache`: [ReactiveCacheLike](../interfaces/_reactivecache_.reactivecachelike.md)‹T›, `key`: string, `defaultValue`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`cache` | [ReactiveCacheLike](../interfaces/_reactivecache_.reactivecachelike.md)‹T› |
`key` | string |
`defaultValue` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*
