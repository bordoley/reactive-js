[@reactive-js/rx](README.md)

# @reactive-js/rx

## Index

### Classes

* [DelegatingSubscriber](classes/delegatingsubscriber.md)

### Interfaces

* [ErrorLike](interfaces/errorlike.md)
* [MulticastObservableLike](interfaces/multicastobservablelike.md)
* [MulticastObservableResourceLike](interfaces/multicastobservableresourcelike.md)
* [ObservableLike](interfaces/observablelike.md)
* [ObservableResourceLike](interfaces/observableresourcelike.md)
* [ObserverLike](interfaces/observerlike.md)
* [SubjectLike](interfaces/subjectlike.md)
* [SubjectResourceLike](interfaces/subjectresourcelike.md)
* [SubscriberLike](interfaces/subscriberlike.md)

### Functions

* [connect](README.md#const-connect)
* [createObservable](README.md#const-createobservable)
* [createSubject](README.md#const-createsubject)

## Functions

### `Const` connect

▸ **connect**<**T**>(`scheduler`: SchedulerLike): *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, DisposableLike›*

Safely connects an ObservableLike to a SubscriberLike,
using the provided scheduler. The returned DisposableLike
may used to cancel the subscription.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *OperatorLike‹[ObservableLike](interfaces/observablelike.md)‹T›, DisposableLike›*

___

### `Const` createObservable

▸ **createObservable**<**T**>(`onSubscribe`: function): *[ObservableLike](interfaces/observablelike.md)‹T›*

Factory for safely creating new ObservableLikes. The onSubscribe function
is called with an observer which may be notified from any context,
queueing notifications for notification on the underlying SubscriberLike's
scheduler. The onSubscribe function may return a DisposableOrTeardown instance
which will be disposed when the underlying subscription is disposed.

Note, implementations should not do significant blocking work in
the onSubscribe function.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **onSubscribe**: *function*

▸ (`observer`: [ObserverLike](interfaces/observerlike.md)‹T›): *DisposableOrTeardown | void*

**Parameters:**

Name | Type |
------ | ------ |
`observer` | [ObserverLike](interfaces/observerlike.md)‹T› |

**Returns:** *[ObservableLike](interfaces/observablelike.md)‹T›*

___

### `Const` createSubject

▸ **createSubject**<**T**>(`replayCount`: number): *[SubjectResourceLike](interfaces/subjectresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`replayCount` | number | 0 |

**Returns:** *[SubjectResourceLike](interfaces/subjectresourcelike.md)‹T›*
