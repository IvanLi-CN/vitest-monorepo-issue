import { hello } from 'hello';

export function world() {
  return 'WORLD';
}

export function say() {
  return `${world()}, ${hello()}?`;
}
