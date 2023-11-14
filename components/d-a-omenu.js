import { useCallback, useEffect } from "react";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const DAOmenu = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const { open } = useWeb3Modal()

  const onFrameButton2Click = useCallback(() => {
    window.open("https://blockfronttech.vercel.app");
  }, []);

  return (
    <div
      className="rounded-xl bg-slategray w-[430px] h-[364px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-full max-h-full"
      data-animate-on-scroll
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[56px] left-[93px] rounded-xl [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0))] shadow-[0px_4px_0px_1px_#000] w-[199px] h-[33px] overflow-hidden"
        onClick={() => open()}
      >
        <b className="absolute top-[5px] left-[40px] text-mid font-inika text-white text-center">
          Connect Wallet
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[133px] left-[93px] rounded-xl [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)_91.25%)] shadow-[0px_4px_0px_1px_#000] w-[199px] h-[33px] overflow-hidden">
        <b className="absolute top-[5px] left-[54px] text-mid font-inika text-white text-center">
          Community
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[210px] left-[93px] rounded-xl [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0))] shadow-[0px_4px_0px_1px_#000] w-[199px] h-[33px] overflow-hidden"
        onClick={onFrameButton2Click}
      >
        <b className="absolute top-[5px] left-[61px] text-mid font-inika text-white text-center">
          Developer
        </b>
      </button>
    </div>
  );
};

export default DAOmenu;
