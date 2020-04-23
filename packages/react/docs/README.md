
# @reactive-js/react - v0.0.37

## Index

### Functions

* [useAsyncEnumerable](README.md#const-useasyncenumerable)
* [useObservable](README.md#const-useobservable)

## Functions

### `Const` useAsyncEnumerable

▸ **useAsyncEnumerable**<**TReq**, **T**>(`enumerable`: AsyncEnumerableLike‹TReq, T›, `config`: object): *[Option‹T›, function]*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`enumerable` | AsyncEnumerableLike‹TReq, T› | - |
`config` | object |  {} |

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
