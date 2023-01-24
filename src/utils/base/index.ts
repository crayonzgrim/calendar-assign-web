export const call = <T>(func: Function | undefined, ...args: any) => {
  return func?.call(func, ...args) ?? undefined
}
