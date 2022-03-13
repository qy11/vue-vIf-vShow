import { update } from './render';

export default function (vm, data, propsPool) {
  vm.$data = data;
  
  for (let key in vm.$data) {
      Object.defineProperty(vm, key, {
          get () {
              return vm.$data[key];
          },

          set (newValue) {
              vm.$data[key] = newValue;
              update(vm, key, propsPool);
          }
      })
  }
}