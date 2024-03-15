'use client'
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import dynamic from 'next/dynamic';

const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);

export default function Home() {
  const [isActive, setIsActive] = useState<number | null>(null)
  const [listChat, setListChat] = useState<any[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  return (<div className="bg-grey-c1 h-screen w-full py-8 flex">
    {/* Left */}
    <div className="w-[19%] h-full flex flex-col border-solid border border-r-0 border-grey-c6">
      <div className="flex justify-between px-4 py-2">
        <h2 className="font-bold text-2xl text-white">Đoạn Chat</h2>
        <div className="flex gap-2">
          <button className="bg-grey-c2 rounded-full p-2 text-white"><svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"><g fill-rule="evenodd" transform="translate(-446 -398)"><path d="M458 408a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></button>
          <button className="bg-grey-c2 rounded-full p-2 text-white"><svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" ><g fill-rule="evenodd" transform="translate(-450 -1073)"><g><path d="M105.506 926.862a.644.644 0 0 1-.644.644h-6.724a.644.644 0 0 1-.644-.644v-6.724c0-.356.288-.644.644-.644h2.85c.065 0 .13-.027.176-.074l.994-.993a.25.25 0 0 0-.177-.427h-3.843A2.138 2.138 0 0 0 96 920.138v6.724c0 1.18.957 2.138 2.138 2.138h6.724a2.138 2.138 0 0 0 2.138-2.138v-3.843a.25.25 0 0 0-.427-.177l-1.067 1.067v2.953zm1.024-9.142a.748.748 0 0 0-1.06 0l-.589.588a.25.25 0 0 0 0 .354l1.457 1.457a.25.25 0 0 0 .354 0l.588-.589a.75.75 0 0 0 0-1.06l-.75-.75z" transform="translate(354.5 156)"></path><path d="M99.22 923.97a.75.75 0 0 0-.22.53v.75c0 .414.336.75.75.75h.75a.75.75 0 0 0 .53-.22l4.248-4.247a.25.25 0 0 0 0-.354l-1.457-1.457a.25.25 0 0 0-.354 0l-4.247 4.248z" transform="translate(354.5 156)"></path></g></g></svg></button>
        </div>
      </div>
      <div className="px-4 relative w-full">
        <input type="text" className="bg-grey-c2 text-grey-c3 w-full py-2 rounded-3xl px-9" placeholder="Tìm kiếm trên Messenger" />
        <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" className="absolute top-[0.625rem] left-7 text-grey-c3" ><g fill-rule="evenodd" transform="translate(-450 -1073)"><g fill-rule="nonzero"><path d="m104.609 929.891.103.106a4.75 4.75 0 1 1-.103-.106zm-1.155.97a3.25 3.25 0 1 0 .185.185l-.09-.094-.095-.09z" transform="translate(353.5 145)"></path><path d="M104.1 934.827c-.048.085-.11.211-.17.372a2.285 2.285 0 0 0-.147 1.107c.049.366.205.702.478.974a.75.75 0 0 0 1.112-1.003l-.052-.057a.173.173 0 0 1-.051-.112.87.87 0 0 1 .066-.385l.031-.078.032-.066a.75.75 0 1 0-1.298-.752z" transform="translate(353.5 145)"></path><path d="m103.617 937.38.066-.029.042-.016a.869.869 0 0 1 .385-.067.181.181 0 0 1 .087.03l.023.02a.75.75 0 0 0 1.06-1.06 1.664 1.664 0 0 0-.975-.477c-.379-.05-.75.015-1.107.149a2.52 2.52 0 0 0-.372.172.75.75 0 0 0 .624 1.356l.066-.026.1-.052z" transform="translate(353.5 145)"></path><path d="m106.608 940.169-.04-.044-2.889-3.388c-.599-.703.355-1.657 1.058-1.058l3.388 2.889.044.04c.055.055.114.128.17.222.23.394.23.895-.142 1.31l-.057.057a1.077 1.077 0 0 1-1.31.141 1.097 1.097 0 0 1-.222-.169zm1.03-1.03-.24.283-.318-.284c-.11.122-.11.326-.036.451a.387.387 0 0 0 .064.08l.561-.56a.387.387 0 0 0-.08-.065c-.125-.073-.33-.073-.451.036l.284.317-.283.242.5-.5z" transform="translate(353.5 145)"></path></g></g></svg>
      </div>
      <div className="px-4 py-2 overflow-y-auto flex-shrink">
        {listChat.map((item: number) => {
          return <div key={item} className={`flex items-center cursor-pointer rounded-md ${isActive === item ? `bg-blue-c1 hover:bg-blue-c1` : `hover:bg-grey-c5`}`} onClick={() => {
            setIsActive(item)
          }}>
            <img className="w-14 h-14 rounded-full m-[0.375rem]" src="https://scontent.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1gF2o9B3-g4AX8Xz7id&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfBQGPnXz2uOG5IbhVOC_UYMzzgP9rkVDzqApW5ZeK44ow&oe=661A2C78" alt="" />
            <div className="p-[0.375rem]">
              <h2 className="text-white text-sm font-semibold">Nguyễn Hữu Tài</h2>
              <p className="text-grey-c4 text-[0.813rem]">Bạn: Hello bạn</p>
            </div>
          </div>
        })}
      </div>
    </div>
    {/* Middle */}
    <div className="w-[61%] h-full flex flex-col border-solid border border-grey-c6">
      {/* Header */}
      <div className="flex justify-between boxshadow-bottom  px-4 py-2 items-center">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full m-[0.375rem]" src="https://scontent.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1gF2o9B3-g4AX8Xz7id&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfBQGPnXz2uOG5IbhVOC_UYMzzgP9rkVDzqApW5ZeK44ow&oe=661A2C78" alt="" />
          <div>
            <h2 className="text-white text-base font-semibold">Nguyễn Hữu Tài</h2>
            <p className="text-grey-c4 text-[0.813rem]">Hoạt động 8 phút trước</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-9 h-9 p-1 rounded-full hover:bg-grey-c5 flex items-center justify-center">
            <svg viewBox="0 0 12 13" className="text-blue-c2" width="20" height="20" fill="currentColor"><g stroke="none" stroke-width="1" fill-rule="evenodd"><path d="M109.492 925.682a1.154 1.154 0 0 0-.443-.81 10.642 10.642 0 0 0-1.158-.776l-.211-.125c-.487-.29-.872-.514-1.257-.511a3.618 3.618 0 0 0-.693.084c-.304.07-.6.302-.88.69a3.365 3.365 0 0 0-.297.494l.449.22-.507-.202-.13-.074a8.53 8.53 0 0 1-3.04-3.043l-.071-.124.019-.057v-.001c.168-.083.334-.183.492-.297.162-.117.552-.432.681-.842.063-.2.075-.407.086-.59l.007-.116c.029-.389-.197-.764-.482-1.237l-.153-.256c-.322-.55-.6-.933-.775-1.158a1.155 1.155 0 0 0-.811-.443c-.36-.031-1.066.01-1.748.608-1.018.896-1.326 2.25-.845 3.714a11.734 11.734 0 0 0 2.834 4.612 11.732 11.732 0 0 0 4.61 2.833c.455.149.897.222 1.32.222.94 0 1.777-.364 2.395-1.067.599-.681.639-1.387.608-1.748" transform="translate(-450 -1073) translate(352.5 157)"></path></g></svg>
          </button>
          <button className="w-9 h-9 p-1 rounded-full hover:bg-grey-c5 flex items-center justify-center">
            <svg viewBox="0 0 12 13" className="text-blue-c2" width="20" height="20" fill="currentColor"><g fill-rule="evenodd" transform="translate(-450 -1073)"><path d="M461.583 1076.078a.732.732 0 0 0-.774.073l-.612.466a.498.498 0 0 0-.197.398v4.97c0 .157.072.304.197.398l.612.466a.736.736 0 0 0 .774.073.749.749 0 0 0 .417-.677v-5.49a.75.75 0 0 0-.417-.677m-4.562-1.557h-5.043A1.98 1.98 0 0 0 450 1076.5v6.021a1.98 1.98 0 0 0 1.978 1.979h5.043a1.98 1.98 0 0 0 1.979-1.979v-6.021a1.98 1.98 0 0 0-1.978-1.979"></path></g></svg>
          </button>
          <button className="w-9 h-9 p-1 rounded-full hover:bg-grey-c5 flex items-center justify-center">
            <svg viewBox="0 0 12 13" className="text-blue-c2" width="20" height="20" fill="currentColor" ><g fill-rule="evenodd" transform="translate(-450 -1073)"><g><path d="M105.506 926.862a.644.644 0 0 1-.644.644h-6.724a.644.644 0 0 1-.644-.644v-6.724c0-.356.288-.644.644-.644h2.85c.065 0 .13-.027.176-.074l.994-.993a.25.25 0 0 0-.177-.427h-3.843A2.138 2.138 0 0 0 96 920.138v6.724c0 1.18.957 2.138 2.138 2.138h6.724a2.138 2.138 0 0 0 2.138-2.138v-3.843a.25.25 0 0 0-.427-.177l-1.067 1.067v2.953zm1.024-9.142a.748.748 0 0 0-1.06 0l-.589.588a.25.25 0 0 0 0 .354l1.457 1.457a.25.25 0 0 0 .354 0l.588-.589a.75.75 0 0 0 0-1.06l-.75-.75z" transform="translate(354.5 156)"></path><path d="M99.22 923.97a.75.75 0 0 0-.22.53v.75c0 .414.336.75.75.75h.75a.75.75 0 0 0 .53-.22l4.248-4.247a.25.25 0 0 0 0-.354l-1.457-1.457a.25.25 0 0 0-.354 0l-4.247 4.248z" transform="translate(354.5 156)"></path></g></g></svg>
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="shrink overflow-y-auto">
        {/* <Picker reactionsDefaultOpen={true}  /> */}

      </div>
    </div>
    <div className="w-[20%] h-full flex flex-col border-solid border border-l-0 border-grey-c6">

    </div>
  </div>
  );
}
