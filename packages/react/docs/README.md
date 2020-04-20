
# @reactive-js/react - v0.0.35

## Index

### Functions

* [useAsyncEnumerable](README.md#const-useasyncenumerable)
* [useAsyncEnumerator](README.md#const-useasyncenumerator)
* [useObservable](README.md#const-useobservable)

## Functions

### `Const` useAsyncEnumerable

▸ **useAsyncEnumerable**<**TReq**, **T**>(`enumerable`: AsyncEnumerableLike‹TReq, T›, `config`: object): *Option‹AsyncEnumeratorLike‹TReq, T››*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`enumerable` | AsyncEnumerableLike‹TReq, T› | - | - |
`config` | object |  {} |   |

**Returns:** *Option‹AsyncEnumeratorLike‹TReq, T››*

___

### `Const` useAsyncEnumerator

▸ **useAsyncEnumerator**<**TReq**, **T**>(`enumerator`: AsyncEnumeratorLike‹TReq, T›, `scheduler?`: SchedulerLike): *[Option‹T›, function]*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enumerator` | AsyncEnumeratorLike‹TReq, T› | - |
`scheduler?` | SchedulerLike |   |

**Returns:** *[Option‹T›, function]*

___

### `Const` useObservable

▸ **useObservable**<**T**>(`observable`: ObservableLike‹T›, `scheduler`: SchedulerLike): *Option‹T›*

Returns the current value, if defined, of `observable`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`observable` | ObservableLike‹T› | - | The `ObservableLike` to subscribe to. |
`scheduler` | SchedulerLike |  normalPriority | An optional scheduler used when subscribing to `observable`. The default is React's normal priority scheduler.  |

**Returns:** *Option‹T›*
