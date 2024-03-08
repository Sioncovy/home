import Image from "next/image";
import avatar from './avatar.jpeg'

export default function Home() {
  return (
    <div className="h-screen relative flex justify-center items-center bg-slate-300">
      <div className="flex justify-center items-center flex-col gap-8">
        <div className="p-2 bg-blue-50 rounded-full overflow-hidden">
          <Image className="rounded-full" height={160} width={160} alt="avatar" src={avatar} />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center">
            <h1 className="text-gray-600">Sioncovy</h1>
            <h1 className="text-4xl">Sion</h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="text-2xl">一个喜欢代码，也喜欢汉语言的 Web 前端工程师</div>
            <div className="text-xl">你也可以叫我赛博刷漆的</div>
          </div>
          <div className="flex gap-4 text-xl underline">
            <a href="https://blog.sion.ink" target="_blank">博客</a>
            <a href="https://juejin.cn/user/1442195938480167" target="_blank">掘金</a>
            <a href="https://github.com/Sioncovy" target="_blank">GitHub</a>
            <a href="https://leetcode.cn/u/sioncovy/" target="_blank">LeetCode</a>
            <a href="mailto:Sioncovy@gmail.com">邮箱</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4">
        <div className="text-gray-600">© 2024 Sioncovy — Crafted with Passion by Myself</div>
      </div>
    </div>
  );
}
