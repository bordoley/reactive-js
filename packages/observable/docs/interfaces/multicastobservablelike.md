[@reactive-js/observable - v0.0.33](../README.md) › [MulticastObservableLike](multicastobservablelike.md)

# Interface: MulticastObservableLike <**T**>

An `ObservableLike` that shares a common subscription to an underlying observable source.

## Type parameters

▪ **T**

## Hierarchy

* [ObservableLike](observablelike.md)‹T›

* DisposableLike

  ↳ **MulticastObservableLike**

  ↳ [SubjectLike](subjectlike.md)

## Index

### Properties

* [subscriberCount](multicastobservablelike.md#subscribercount)

## Properties

###  subscriberCount

• **subscriberCount**: *number*

The number of subscribers currently subscribed.
