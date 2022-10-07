import { BookmarkSimple, DownloadSimple, Gear, NotePencil, Printer, ShareNetwork, Tray } from "phosphor-react";

import "./styles.css"

export function SideBar() {
  return (
    <div className="h-screen w-[84px] bg-[#2F76E6]  transition-all flex flex-col " id="container">
      <div className="flex flex-col items-center mt-[46px] ">
        <img
          className="w-[61px]  rounded-full mb-[10px] border-[3px] "
          src="https://github.com/prg-maker.png"
          alt="user avatar "
        />
        <span className="font-medium text-white text-center">
          Daniel
        </span>
      </div>

      <main className="h-full flex flex-col justify-end items-center pb-[30px] gap-7">
        
        <span className="w-full flex justify-center" >

          <a href="#" className="flex  items-center ">
            <NotePencil size={32} weight="regular" color="white" />
          </a>

        </span>

        <span className="w-full flex justify-center"  >
          <a href="#" className="flex  items-center ">
            <Tray size={32} weight="regular" color="white" />
            
          </a>
        </span>

        <span>
          <a href="#" className="flex  items-center ">
          <BookmarkSimple size={32} weight="regular" color="white" />
         
          </a>
        </span>

        <span>
          <a href="#" className="flex  items-center ">
            <ShareNetwork size={32} weight="regular" color="white" />
           
          </a>
        </span>

        <span>
          <a href="#" className="flex  items-center ">
            <DownloadSimple size={32} weight="regular" color="white" />
           
          </a>
          
        </span>

        <span>
          <a href="#" className="flex  items-center ">
          <Printer size={32} weight="regular" color="white" />
       
          </a>
        </span>

        <span>
          <a href="#" className="flex  items-center ">
          <Gear size={32} weight="regular" color="white" />
          </a>
        </span>
      </main>
    </div>
  );
}
