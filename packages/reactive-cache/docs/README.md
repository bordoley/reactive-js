[@reactive-js/reactive-cache](README.md)

# @reactive-js/reactive-cache

## Index

### Interfaces

* [ReactiveCacheLike](interfaces/reactivecachelike.md)

### Functions

* [createReactiveCache](README.md#const-createreactivecache)
* [getOrSet](README.md#const-getorset)

## Functions

### `Const` createReactiveCache

▸ **createReactiveCache**<**T**>(`dispatchScheduler`: SchedulerLike, `cleanupScheduler`: SchedulerLike, `maxCount`: number): *[ReactiveCacheLike](interfaces/reactivecachelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`dispatchScheduler` | SchedulerLike | - |
`cleanupScheduler` | SchedulerLike | - |
`maxCount` | number |  Number.MAX_SAFE_INTEGER |

**Returns:** *[ReactiveCacheLike](interfaces/reactivecachelike.md)‹T›*

___

### `Const` getOrSet

▸ **getOrSet**<**T**>(`key`: string, `defaultValue`: ObservableLike‹T›): *OperatorLike‹[ReactiveCacheLike](interfaces/reactivecachelike.md)‹T›, ObservableLike‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue` | ObservableLike‹T› |

**Returns:** *OperatorLike‹[ReactiveCacheLike](interfaces/reactivecachelike.md)‹T›, ObservableLike‹T››*
