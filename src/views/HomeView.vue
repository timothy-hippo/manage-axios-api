<template>
  <div class="home">
    <button @click="addPost()">新增文章</button>
  </div>
</template>

<script>
import { getPosts, addPost } from '@/apimanager/todo_api'
export default {
  data () {
    return {}
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        const data = await getPosts()
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    },
    async addPost () {
      try {
        const data = {
          title: 'foo',
          body: 'bar',
          userId: 617
        }
        const res = await addPost(data)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  }
  // setup () {
  //   const getData = async () => {
  //     try {
  //       const data = await getTodos()
  //       console.log(data)
  //       console.log(1)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   onMounted(() => {
  //     getData()
  //   })
  //   return {}
  // }
}
</script>
