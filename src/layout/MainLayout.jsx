import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "../components/todoapp/TodoApp";

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <div className="relative bg-white h-screen ">
          {/* <div className="absolute w-screen h-screen top-0 z-99">
        <button
          onClick={() => {
            window.scrollTo({        
              top: 0,
              behavior: "smooth",
            });
          }}
          className="bg-[#BAC0CC] rounded-full fixed text-black-2 z-50 bottom-10 xl:right-10 lg:right-7 md:right-6 right-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            className="w-[40px] h-[40px]"
            viewBox="0 0 511.998 511.998"
          >
            <path
              fill="white"
              fill-rule="nonzero"
              d="M255.999 511.999c70.684-.001 134.695-28.658 181.019-74.981 46.323-46.324 74.981-110.335 74.98-181.019 0-70.691-28.657-134.695-74.98-181.018C390.694 28.657 326.691 0 255.999 0 185.308 0 121.304 28.657 74.981 74.981 28.657 121.304 0 185.308 0 255.999c0 70.684 28.657 134.695 74.981 181.019 46.323 46.323 110.327 74.981 181.018 74.981zm-74.995-203.995c-29.412 16.955-43.962-6.609-27.542-23.789l84.234-95.914c15.311-15.318 21.289-15.318 36.607 0l84.234 95.914c16.303 17.26 2.086 40.686-27.549 23.789l-74.989-44.549-74.995 44.549zM410.99 410.99c-39.657 39.657-94.473 64.199-154.991 64.199-60.525 0-115.334-24.542-154.991-64.199-39.657-39.657-64.199-94.473-64.199-154.991 0-60.525 24.542-115.334 64.199-154.991 39.657-39.657 94.466-64.199 154.991-64.199 60.526 0 115.334 24.542 154.991 64.199 39.657 39.657 64.199 94.466 64.199 154.991 0 60.518-24.542 115.334-64.199 154.991z"
            />
          </svg>
        </button>
        </div> */}
          <div className="">
            <Routes>
              <Route path="/">
                <Route index element={<TodoApp />} />
                {/* <Route path="home" element={<Home />} />
                            <Route path="product/:type" element={<Products />} />
                            <Route path="service/:type" element={<Service />} /> */}
               
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
