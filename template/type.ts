type Obj = { [key: string]: any };
type Func = (...args: any) => Obj;
export type ObjectKeysToUnion<Type extends Func | Obj> = keyof (Type extends Func ? ReturnType<Type> : Type);
