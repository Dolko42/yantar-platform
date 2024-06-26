import Image from "next/image";
import Button from "./ui/Button";
import Navbar from "./ui/Navbar";
import Announcer from "./ui/Announcer";
import heroImage from "/public/dashboard.svg";

export default function Home() {
  return (
    <>
      <Announcer />
      <Navbar />
      <main className="p-4 lg:p-6">
        <section className="flex flex-col items-center lg:max-h-[40rem] pb-10 border-b border-skin-base md:flex-row justify-between gap-12 md:mt-10">
          <div className="w-full lg:w-1/2">
            <h1 className="text-skin-base max-w-[20ch] text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl mb-6">
              Provide advertising space. Grow money and traffic.
            </h1>
            <p className="text-gray-600 mb-12 max-w-[40ch] 3xl:text-lg">
              Are you an{" "}
              <span className="text-skin-base font-semibold">AI platform</span>?
              Allow{" "}
              <span className="text-skin-secondary font-semibold">
                Advertisers
              </span>{" "}
              stream relevant ads into your AI generated text and earn money.
              Yantar is an AI-driven advertising platform designed to integrate
              seamlessly with various AI platforms.
            </p>
            <a href="https://tally.so/r/3yl5v8">
              <Button text="Join waitlist ->" hover="hover:bg-skin-secondary" />
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-center p-8 bg-skin-subtle rounded-md">
              <Image
                alt="yantar advertising data dashboard mockup"
                src={heroImage}
                className="non-selectable max-h-[35rem] w-auto 4xl:max-w-[1100px]"
                style={{
                  border: "3px solid #000AFF",
                  borderRadius: "8px",
                }}
                priority
              ></Image>
            </div>
          </div>
        </section>

        <section
          className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-8 py-10"
          style={{ margin: "0 auto" }}
        >
          <div className="flex flex-col justify-between h-56 text-skin-secondary p-4 bg-skin-secondarymuted border border-skin-secondary rounded-md">
            <div>
              <span className="uppercase font-mono text-sm 2xl:text-md">
                advertisers
              </span>
              <h3 className="text-xl max-w-[20ch] mt-1 2xl:text-2xl">
                Drive relevant traffic
              </h3>
            </div>
            <p className="text-sm max-w-[32ch] 2xl:text-[16px]">
              Reach your target audience effectively with Yantar’s
              context-driven ad placements.
            </p>
          </div>

          <div className="flex flex-col justify-between h-56 text-skin-secondary p-4 bg-skin-secondarymuted border border-skin-secondary rounded-md">
            <div>
              <span className="uppercase font-mono text-sm 2xl:text-md">
                advertisers
              </span>
              <h3 className="text-xl max-w-[20ch] mt-1 2xl:text-2xl">
                Pay per click.
              </h3>
            </div>
            <p className="text-sm max-w-[32ch] 2xl:text-[16px]">
              You only pay when users engage with your ads, ensuring
              cost-efficiency and measurable ROI.
            </p>
          </div>

          <div className="flex flex-col justify-between h-56 text-skin-secondary p-4 bg-skin-secondarymuted border border-skin-secondary rounded-md">
            <div>
              <span className="uppercase font-mono text-sm 2xl:text-md">
                advertisers
              </span>
              <h3 className="text-xl max-w-[20ch] mt-1 2xl:text-2xl">
                Add AI platforms to your omnichannel strategy.
              </h3>
            </div>
            <p className="text-sm max-w-[32ch] 2xl:text-[16px]">
              Easily integrate AI-driven ads into your broader marketing
              efforts.
            </p>
          </div>

          <div className="flex flex-col justify-between h-56 text-skin-base p-4 bg-skin-subtle border border-skin-muted rounded-md">
            <div>
              <span className="uppercase font-mono text-sm 2xl:text-md">
                AI platforms
              </span>
              <h3 className="text-xl max-w-[20ch] mt-1 2xl:text-2xl">
                Enhance user experience with relevant ads.
              </h3>
            </div>
            <p className="text-sm max-w-[32ch] 2xl:text-[16px]">
              Improve user satisfaction by displaying ads that are contextually
              relevant.
            </p>
          </div>

          <div className="flex flex-col justify-between h-56 text-skin-base p-4 bg-skin-subtle border border-skin-muted rounded-md">
            <div>
              <span className="uppercase font-mono text-sm 2xl:text-md">
                AI platforms
              </span>
              <h3 className="text-xl max-w-[20ch] mt-1 2xl:text-2xl">
                Get paid per click.
              </h3>
            </div>
            <p className="text-sm max-w-[32ch] 2xl:text-[16px]">
              With Yantar, you earn revenue for every ad click generated through
              your platform, providing a consistent income stream.
            </p>
          </div>

          <div className="flex flex-col justify-between h-56 text-skin-base p-4 bg-skin-subtle border border-skin-muted rounded-md">
            <div>
              <span className="uppercase font-mono text-sm 2xl:text-md">
                AI platforms
              </span>
              <h3 className="text-xl max-w-[20ch] mt-1 2xl:text-2xl">
                Integrate easily.
              </h3>
            </div>
            <p className="text-sm max-w-[32ch] 2xl:text-[16px]">
              Set up quickly with a unique API key and start fetching relevant
              ads seamlessly.
            </p>
          </div>

          <div className="flex flex-col justify-between h-56 text-gray-800 p-4 bg-gray-100 border border-gray-300 rounded-md">
            <div>
              <span className="uppercase font-mono text-sm 2xl:text-md">
                core principle
              </span>
              <h3 className="text-xl max-w-[20ch] mt-1 2xl:text-2xl">
                Revenue Sharing
              </h3>
            </div>
            <p className="text-sm max-w-[32ch] 2xl:text-[16px]">
              Advertisers pay to have their ads streamed into the AI
              interactions, and a portion of this revenue is shared with the AI
              platforms hosting the ads.
            </p>
          </div>

          <div className="flex flex-col justify-between h-56 text-gray-800 p-4 bg-gray-100 border border-gray-300 rounded-md">
            <div>
              <span className="uppercase font-mono text-sm 2xl:text-md">
                core principle
              </span>
              <h3 className="text-xl max-w-[20ch] mt-1 2xl:text-2xl">
                Semantic Analysis
              </h3>
            </div>
            <p className="text-sm max-w-[32ch] 2xl:text-[16px]">
              When a user interacts with an AI chat, Yantar performs a semantic
              analysis of the prompt and selects relevant ads.
            </p>
          </div>

          <div className="flex flex-col justify-between h-56 text-gray-800 p-4 bg-gray-100 border border-gray-300 rounded-md">
            <div>
              <span className="uppercase font-mono text-sm 2xl:text-md">
                core principle
              </span>
              <h3 className="text-xl max-w-[20ch] mt-1 2xl:text-2xl">
                Ad Streaming
              </h3>
            </div>
            <p className="text-sm max-w-[32ch] 2xl:text-[16px]">
              The selected ads are then seamlessly streamed into the
              AI-generated text or interaction.
            </p>
          </div>
        </section>

        <section className="my-10">
          {/* <h2 className="text-skin-base leading-[1.275] text-4xl lg:text-6xl 2xl:text-8xl 4xl:text-9xl">
            By leveraging semantic analysis and{" "}
            <span className="text-skin-secondary">contextual ad placement</span>
            , Yantar aims to create a{" "}
            <span className="text-skin-secondary">more effective</span> and less
            intrusive{" "}
            <span className="text-skin-secondary">advertising experience</span>{" "}
            across AI platforms.
          </h2> */}
          <a href="https://tally.so/r/3yl5v8">
            <button className="w-full bg-skin-base text-white rounded-md py-6 lg:py-10 text-xl lg:text-4xl hover:bg-skin-secondary transition-colors">{`Join waitlist ->`}</button>
          </a>
        </section>
      </main>
    </>
  );
}
