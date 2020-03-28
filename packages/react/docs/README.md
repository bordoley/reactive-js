[@reactive-js/react](README.md)

# @reactive-js/react

## Index

### Functions

* [useAsyncEnumerable](README.md#const-useasyncenumerable)
* [useAsyncEnumerator](README.md#const-useasyncenumerator)
* [useObservable](README.md#const-useobservable)

## Functions

### `Const` useAsyncEnumerable

▸ **useAsyncEnumerable**<**TReq**, **T**>(`enumerable`: AsyncEnumerableLike‹TReq, T›, `config`: object): *AsyncEnumeratorLike‹TReq, T› | undefined*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`enumerable` | AsyncEnumerableLike‹TReq, T› | - | - |
`config` | object |  {} |   |

**Returns:** *AsyncEnumeratorLike‹TReq, T› | undefined*

___

### `Const` useAsyncEnumerator

▸ **useAsyncEnumerator**<**TReq**, **T**>(`enumerator`: AsyncEnumeratorLike‹TReq, T›, `scheduler?`: SchedulerLike): *[T | undefined, function]*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enumerator` | AsyncEnumeratorLike‹TReq, T› | - |
`scheduler?` | SchedulerLike |   |

**Returns:** *[T | undefined, function]*

___

### `Const` useObservable

▸ **useObservable**<**T**>(`observable`: ObservableLike‹T›, `scheduler`: SchedulerLike): *T | undefined*

Returns the current value, if defined, of `observable`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`observable` | ObservableLike‹T› | - | The `ObservableLike` to subscribe to. |
`scheduler` | SchedulerLike |  normalPriority | An optional scheduler used when subscribing to `observable`. The default is React's normal priority scheduler.  |

**Returns:** *T | undefined*
