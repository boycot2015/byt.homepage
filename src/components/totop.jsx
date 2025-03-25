import classNames from "classnames";
import { useState, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";
export default function Totop() {
    const [isShow, toggleShow] = useState(false)
    const totop = (e) => {
        e.stopPropagation()
        // document.querySelector('#inner_wrapper')?.scrollTo({ top: 0, behavior: 'smooth' });
        let el = document.querySelector('#inner_wrapper')
        backTop(el)
    }
    const backTop = (e) => {
        const cubic = value => Math.pow(value, 3)
        const easeInOutCubic = value => value < 0.5
        ? cubic(value * 2) / 2
        : 1 - cubic((1 - value) * 2) / 2
        const el = e || document.body
        const beginTime = Date.now()
        const beginValue = el.scrollTop
        const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
        const frameFunc = () => {
            const progress = (Date.now() - beginTime) / 500
            if (progress < 1) {
                el.scrollTop = beginValue * (1 - easeInOutCubic(progress))
                rAF(frameFunc)
            } else {
                el.scrollTop = 0
            }
        };
        rAF(frameFunc)
    }
    useEffect(() => {
        document.querySelector('#inner_wrapper').addEventListener('scroll', () => {
            toggleShow(document.querySelector('#inner_wrapper').scrollTop > 100)
        })
    }, [])
  return (
    isShow ? <div
        key={`totop`}
        className={classNames(
          "fixed cursor-pointer right-10 z-999999 bottom-10 leading-[24px] flex items-center text-2xl bg-[#ccc] rounded-full p-2 drop-md",
        )}
        onClick={(e) => totop(e)}
      >
        <span><MdArrowUpward /></span>
      </div> : null
  );
}
