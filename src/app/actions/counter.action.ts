import { Action } from '@ngrx/store';

export enum ActionsTypes {
  Increment = '[COUNT] INCREMENT',
  Decrement = '[COUNT] DECREMENT',
  Reset = '[COUNT] RESET'
}

export class Increment implements Action{
  readonly type = ActionsTypes.Increment
}
