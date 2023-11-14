import { useEffect } from "react";
import Header from "../components/header";

const DAO = () => {
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
  return (
    <div className="relative bg-white w-full h-[3786px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-lg text-black font-inika md:h-[4300px]">
      <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] [background:linear-gradient(180deg,_#6d5e7b,_#003025)] w-[1512px] h-[591px] overflow-hidden shrink-0 z-[0] text-11xl text-white font-gravitas-one">
        <div className="absolute top-[157px] left-[0px] w-[1049px] flex flex-row items-start justify-start gap-[460px] lg:gap-[300px] md:w-[390px] md:flex-row md:gap-[0px]">
          <div className="relative w-10 h-[42px]" />
          <div className="flex flex-col items-center justify-start gap-[41px] md:gap-[20px] md:items-center md:justify-start">
            <div
              className="relative inline-block w-[485px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0] md:text-xl md:w-[349px]"
              data-animate-on-scroll
            >
              Welcome to CryptoCollective DAO
            </div>
            <div
              className="relative text-mid font-headlandone [&.animate]:animate-[1s_linear_2s_1_normal_forwards_slide-in-top] opacity-[0] md:text-sm"
              data-animate-on-scroll
            >
              Empowering Decentralization, Empowering You
            </div>
          </div>
        </div>
        <div className="absolute top-[400px] left-[0px] flex flex-row items-center justify-start gap-[420px] text-lgi text-black lg:gap-[230px] md:gap-[0px]">
          <div className="relative w-[21px] h-[13px]" />
          <div
            className="relative rounded-3xs bg-white w-[632px] h-[58px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:w-[390px] md:h-[50px]"
            data-animate-on-scroll
          >
            <div className="absolute top-[8px] left-[8px] flex flex-row items-start justify-start gap-[88px] md:gap-[50px]">
              <div className="flex flex-col items-center justify-start">
                <div className="relative md:text-mid">$3M</div>
                <div className="relative text-sm font-inika md:text-4xs">
                  Contributions
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <div className="relative md:text-base">$7M</div>
                <div className="relative text-sm font-inika md:text-4xs">
                  Distributions
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <div className="relative md:text-base">23+</div>
                <div className="relative text-sm font-inika md:text-4xs">
                  Startups
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <div className="relative md:text-base">20,000</div>
                <div className="relative text-sm font-inika md:text-4xs">
                  KYC Verified users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[671px] left-[0px] flex flex-row items-center justify-start gap-[391px] z-[1] text-xl lg:gap-[200px] md:gap-[0px] md:pl-5 md:box-border">
        <div className="relative w-px h-[38px]" />
        <div
          className="relative inline-block w-[728px] h-[148px] shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[380px]"
          data-animate-on-scroll
        >
          At CryptoCollective DAO, we envision a future where decisions are made
          collaboratively, transparently, and with the collective wisdom of our
          community. We are a Decentralized Autonomous Organization committed to
          fostering a decentralized ecosystem where every participant has a say
          in shaping the future.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[954px] left-[1px] w-[1511px] h-[625px] flex flex-row items-start justify-center gap-[282px] z-[2] lg:w-[1170px] md:flex-col md:gap-[750px] md:pl-3 md:pt-[270px] md:box-border">
        <div className="relative w-[395px] h-[594px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#6d5e7b,_#f3b3c3)] shadow-[4px_4px_0px_2px_#000] w-[395px] h-[230px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[14px] inline-block w-[368px] h-[172px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Fostering Collaboration
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                We believe in the power of collaboration. Our mission is to
                create a space where individuals from all walks of life can come
                together to contribute their skills, ideas, and resources for
                the betterment of the community.
              </p>
            </div>
          </div>
          <div
            className="absolute top-[377px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#6d5e7b,_#f3b3c3)] shadow-[4px_4px_0px_2px_#000] w-[395px] h-[230px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[14px] inline-block w-[368px] h-[163px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Community-Led Innovation
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                The future is shaped by innovation. CryptoCollective DAO is a
                platform that encourages and supports community-led projects and
                initiatives. Whether you're a developer, designer, or visionary,
                your ideas can make a significant impact.
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative rounded-xl [background:linear-gradient(180deg,_#6d5e7b,_#f3b3c3)] shadow-[4px_4px_0px_2px_#000] w-[395px] h-[230px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[14px] inline-block w-[368px] h-[184px]">
            <p className="m-0 font-black font-inknut-antiqua">
              Transparency and Trust
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Trust is the cornerstone of any community. We are committed to
              providing complete transparency in our operations and
              decision-making processes. Our smart contracts ensure that every
              action taken within the DAO is visible to all members.
            </p>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2433px] left-[2px] w-[1507px] h-[612px] flex flex-row items-start justify-center gap-[311px] z-[3] lg:w-[1200px] md:flex-col md:gap-[200px] md:pl-3 md:pt-[400px] md:box-border">
        <div className="relative w-[395px] h-[581px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#0c9e91,_rgba(245,_245,_245,_0))] shadow-[4px_4px_0px_1px_#000] w-[395px] h-[156px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[16px] left-[14px] inline-block w-[368px] h-[123px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Become a Member
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                {" "}
                Acquire DAO tokens and become a voting member of the community.
              </p>
            </div>
          </div>
          <div
            className="absolute top-[416px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#0c9e91,_rgba(245,_245,_245,_0))] shadow-[4px_4px_0px_1px_#000] w-[395px] h-[156px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[16px] left-[14px] inline-block w-[368px] h-[123px]">
              <p className="m-0 font-black font-inknut-antiqua">
                {" "}
                Propose Projects
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                {" "}
                Have an idea? Propose a project to the community and seek
                support.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[395px] h-[581px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#0c9e91,_rgba(245,_245,_245,_0))] shadow-[4px_4px_0px_1px_#000] w-[395px] h-[156px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[16px] left-[14px] whitespace-pre-wrap inline-block w-[368px] h-[123px]">
              <p className="m-0 font-black font-inknut-antiqua">
                Vote on proposals
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                {" "}
                Exercise your voting power to shape the direction of
                CryptoCollective DAO.
              </p>
            </div>
          </div>
          <div
            className="absolute top-[416px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#0c9e91,_rgba(245,_245,_245,_0))] shadow-[4px_4px_0px_1px_#000] w-[395px] h-[165px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[-6px] left-[14px] inline-block w-[368px] h-[165px]">
              <p className="m-0 font-black font-inknut-antiqua"> Contribute</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Whether you're a developer, designer, or enthusiast, your skills
                are valuable. Contribute to existing projects or start your own.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3135px] left-[2px] flex flex-row items-end justify-start gap-[455px] z-[4] text-3xl font-headlandone lg:gap-[320px] md:gap-[0px] md:pl-[7px] md:pt-[600px] md:box-border">
        <div className="relative w-[22px] h-9" />
        <div
          className="relative inline-block w-[504px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-base md:w-[380px]"
          data-animate-on-scroll
        >
          Ready to embark on this decentralized journey with us? Join
          CryptoCollective DAO and be a part of the future.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2088px] left-[1px] flex flex-row items-center justify-start gap-[557px] z-[5] lg:gap-[400px] md:gap-[0px] md:pl-3 md:pt-[350px] md:pb-0 md:box-border">
        <div className="relative w-px h-[39px]" />
        <div
          className="relative rounded-xl bg-white shadow-[0px_0px_0px_3px_#000] w-[395px] h-[217px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[62px] left-[14px] inline-block w-[368px] h-[93px]">
            Join CryptoCollective DAO today and become a stakeholder in the
            future of decentralized governance. Here's how you can get involved:
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3629px] left-[2px] flex flex-row items-start justify-start gap-[50px] z-[6] md:gap-[20px] md:pt-[500px] md:box-border">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[58px] bg-[url('/twitterx@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/telegramapp@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/youtube@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/discord@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1941px] left-[0px] flex flex-row items-center justify-start gap-[610px] z-[7] text-11xl font-gravitas-one lg:gap-[450px] md:gap-[50px] md:pt-[350px] md:box-border">
        <div className="relative w-[34px] h-[9px]" />
        <div
          className="relative inline-block w-[223px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          Join Us
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1700px] left-[11px] flex flex-row items-start justify-start gap-[391px] z-[8] text-xl font-headlandone lg:gap-[230px] md:flex-col md:pl-2.5 md:pt-[100px] md:box-border">
        <div className="relative w-px h-[23px]" />
        <div
          className="relative inline-block w-[728px] h-[161px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[380px]"
          data-animate-on-scroll
        >
          CryptoCollective DAO operates on blockchain technology, utilizing
          smart contracts to automate decision-making processes. Every member of
          the DAO holds voting power proportional to their contribution to the
          community. Major decisions, such as fund allocation and project
          proposals, are voted on by the community, ensuring a truly democratic
          and inclusive governance structure.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3274px] left-[2px] flex flex-row items-end justify-start gap-[489px] z-[9] text-3xl font-inknut-antiqua lg:gap-[310px] md:flex-col md:pl-5 md:pt-[200px] md:box-border">
        <div className="relative w-[39px] h-[38px]" />
        <b className="relative inline-block w-[456px] shrink-0 md:text-xl md:w-[380px]">
          Enter email below for our newsletter
        </b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3443px] left-[0px] flex flex-row items-start justify-start gap-[570px] z-[10] lg:gap-[400px] md:flex-col md:gap-[450px] md:pl-[50px] md:pt-0 md:box-border">
        <div className="relative w-[19px] h-[53px]" />
        <div className="relative rounded-3xs [background:linear-gradient(180deg,_#fff,_rgba(245,_245,_245,_0))] shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.25)] w-[331px] h-[53px] overflow-hidden shrink-0">
          <input
            className="[border:none] font-medium font-inknut-antiqua text-lg bg-[transparent] absolute top-[2px] left-[14px] text-black text-left inline-block w-[152px] h-[43px]"
            placeholder="Email"
            type="text"
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3709px] left-[2px] flex flex-row items-center justify-start gap-[13px] z-[11] text-sm lg:pb-0 lg:box-border md:pt-[500px] md:box-border">
        <img
          className="relative w-[30px] h-[30px] object-cover"
          alt=""
          src="/circled-c@2x.png"
        />
        <div className="relative">Copy Right</div>
        <Header />
      </div>
    </div>
  );
};

export default DAO;
