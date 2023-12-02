import { hello } from 'hello'

export function world() {
  return 'world';
}

export function say() {
  return `${hello()}, ${world()}!`;
}
