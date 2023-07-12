/* eslint-disable @next/next/no-img-element */

const LoadingScreen = () => {
  return (
    <section className="relative min-h-screen bg-yellow scrollbar-hide ">
      <div className="flex items-center justify-center h-screen">
        <img
          src="/assets/ZTFR.png"
          alt="ZTFR-MAIN-LOGO"
          className="w-[274px] animate-pulse"
        />
      </div>
    </section>
  );
};

export default LoadingScreen;
