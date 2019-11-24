[@reactive-js/rx-subscriber](README.md)

# @reactive-js/rx-subscriber

## Index

### Classes

* [DelegatingSubscriber](classes/delegatingsubscriber.md)

### Interfaces

* [ConnectableSubscriberLike](interfaces/connectablesubscriberlike.md)
* [Operator](interfaces/operator.md)
* [SubscriberLike](interfaces/subscriberlike.md)

### Functions

* [create](README.md#const-create)
* [observe](README.md#const-observe)
* [toSafeObserver](README.md#const-tosafeobserver)

## Functions

### `Const` create

▸ **create**<**T**>(`scheduler`: SchedulerLike, `subscription`: DisposableLike): *[ConnectableSubscriberLike](interfaces/connectablesubscriberlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`subscription` | DisposableLike |

**Returns:** *[ConnectableSubscriberLike](interfaces/connectablesubscriberlike.md)‹T›*

___

### `Const` observe

▸ **observe**<**T**>(`observer`: ObserverLike‹T›): *[Operator](interfaces/operator.md)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observer` | ObserverLike‹T› |

**Returns:** *[Operator](interfaces/operator.md)‹T, T›*

___

### `Const` toSafeObserver

▸ **toSafeObserver**<**T**>(`subscriber`: [SubscriberLike](interfaces/subscriberlike.md)‹T›, `priority?`: undefined | number): *ObserverLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [SubscriberLike](interfaces/subscriberlike.md)‹T› |
`priority?` | undefined &#124; number |

**Returns:** *ObserverLike‹T›*
