import './App.css';

export default {
    name: 'App',
    template: `
    <div>
        <div>
        <img v-if="isShowImg1" class="img" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1111%2F11131Q45604%2F1Q113145604-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649504657&t=2a48eec8e0e23a2192c960e60ce27b7f" />
        <img v-show="isShowImg2" class="img" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F021620115230%2F200216115230-9-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649504684&t=b8e0aa845d744916020406fa30d6217e" />
        </div>
        <button @click="showImg1">Show Image 1</button>
        <button @click="showImg2">Show Image 2</button>
    </div>
    `,
    data () {
      return {
        isShowImg1: true,
        isShowImg2: false
      }
    },
    methods: {
      showImg1 () {
        this.isShowImg1 = !this.isShowImg1;
      },
      showImg2 () {
        this.isShowImg2 = !this.isShowImg2;
      }
    }
  }

  /**
   * 1. 服务应用 -> node
   * 2. node应用上 -> 程序 -> .vue -> .js
   * 3. es6 -> es5 -> node程序
   * 4. Less/Sass -> node程序 -> css
   * 
   * html js 
   * css -> html -> head 内部样式表
   * 
   * fs -> writeFile  readFile makedir
   * 
   * webpack
   */