import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
/**
 * A function with transforms a SubscriberLike<B> to a SubscriberLike<A>.
 */
export interface SubscriberOperatorLike<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

/** A function which converts an ObservableLike<A> to an ObservableLike<B> */
export interface ObservableOperatorLike<A, B> {
  (observable: ObservableLike<A>): ObservableLike<B>;
}
