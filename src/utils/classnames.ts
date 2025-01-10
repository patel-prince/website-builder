export declare namespace Classnames {
  type Value = string | number | boolean | undefined | null
  type Mapping = Record<string, unknown>
  type ArgumentArray = Array<Argument>
  type Argument = Value | Mapping | ArgumentArray
}

export function classnames(...args: Classnames.ArgumentArray): string {
  const result: string[] = []

  const processArg = (arg: Classnames.Argument) => {
    if (!arg) return

    if (typeof arg === 'string' || typeof arg === 'number') {
      result.push(arg.toString())
    } else if (Array.isArray(arg)) {
      arg.forEach(processArg)
    } else if (typeof arg === 'object') {
      Object.entries(arg).forEach(([classname, isAllowed]) => {
        if (isAllowed) {
          result.push(classname)
        }
      })
    }
  }

  args.forEach(processArg)

  return result.join(' ').trim()
}
