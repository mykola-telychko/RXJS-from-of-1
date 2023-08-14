import { from, of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/from
// Example 1: Observable from array
//emit array as a sequence of values
const arrSource = from([1, 2, 3, 4, 5]);
const arrSrc = of(11, 22, 33, 44, 55);

const subscribe = arrSource.subscribe((val) => console.log(val));
const sub = arrSrc.subscribe((val) => console.log(val));
