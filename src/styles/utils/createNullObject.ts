export type DeepNull<T> = {
  [K in keyof T]: T[K] extends object ? DeepNull<T[K]> : null
}

export const createNullObject = <T>(obj: T): DeepNull<T> => {
  return Object.fromEntries(
    Object.entries(obj as Record<string, unknown>).map(([key, value]) => [
      key,
      typeof value === 'object' ? createNullObject(value) : null,
    ])
  ) as DeepNull<T>
}
