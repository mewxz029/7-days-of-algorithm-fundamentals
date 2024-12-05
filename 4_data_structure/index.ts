export function isValid(s: string): boolean {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else {
      const last = stack[stack.length - 1]
      if (stack.length === 0) {
        return false
      }

      if (c === ')' && last !== '(') {
        return false
      }

      if (c === ']' && last !== '[') {
        return false
      }

      if (c === '}' && last !== '{') {
        return false
      }

      stack.pop()
    }
  }
  return stack.length === 0
}
