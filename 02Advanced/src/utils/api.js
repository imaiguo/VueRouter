// 模拟接口
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export async function getPost(id) {
  // const res = await fetch(`/api/post/${id}`)
  // if (!res.ok) throw new Error('获取文章失败')
  // return res.json()
  console.log('开始')
  await sleep(3000)
  console.log('过了3s')

  return {title:"hello", first: "fetch first", later:"fetch later"}
}


export async function fetchUser(id) {
  // const res = await fetch(`/api/post/${id}`)
  // if (!res.ok) throw new Error('获取文章失败')
  // return res.json()
  console.log('开始')
  await sleep(3000)
  console.log('过了3s')

  const date = new Date()
  return id + " -> " + date.toLocaleString()
}

