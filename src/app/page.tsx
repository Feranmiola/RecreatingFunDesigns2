import Ring from "@/Components/Images/Ring";
import WavyLines from "@/Components/Images/WavyLines";

export default function Home() {
  return (
    <div className="w-screen flex items-center justify-center h-screen">
      <div className="w-full h-full max-w-[1261px] flex flex-col space-y-10 items-center justify-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col space-y-16  items-center justify-between">
            <WavyLines />

            <div className="ringImage">
              <Ring />
            </div>
          </div>

          <div className="flex flex-col space-y-3 items-center justify-center w-full">
            <p className="text-[72px] text-black font-bold text-center leading-tight">
              Your ultimate
              <br />
              fashion outfits{" "}
            </p>
            <div className="flex flex-col space-y-2 items-center justify-center w-full">
              <p className="text-2xl text-center">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Faucibus in libero risus
              </p>

              <div className="flex items-center justify-center font-poppins cursor-pointer px-5 py-2 w-max bg-black text-white rounded-[24px] text-base border border-transparent hover:bg-white hover:scale-110 hover:border-black hover:text-black transition ease-in-out">
                Explore
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-16  items-center justify-between">
            <div className="ringImage">
              <Ring />
            </div>

            <WavyLines />
          </div>
        </div>
      </div>
    </div>
  );
}
