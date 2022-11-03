import request from '@/utils/request'

export function getPosts () {
  return request.get('/posts/1')
}
export function addPost (data) {
  return request.post('/posts', data)
}
// export const getTodos = () => request.get('/todos')
