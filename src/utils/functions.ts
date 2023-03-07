//判断是否是对象或数组
export function isObject(obj: Record<string, unknown>) {
  return typeof obj === 'object' && obj !== null
}

