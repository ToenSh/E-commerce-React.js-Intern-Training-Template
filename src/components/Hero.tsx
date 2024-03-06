export const Hero = () => {
  return (
    <section className="bg-[url('src/assets/hero-background.png')] bg-no-repeat bg-center bg-cover min-w-screen h-[45rem] flex flex-col items-center justify-center">
      <h1 className="text-white flex flex-col gap-6 text-center text-6xl font-semibold">
        <span className="text-2xl tracking-[0.06rem] opacity-70 font-normal ">
          Our Best Selling Weekend Boots
        </span>
        From Winter to Spring
      </h1>
      <button className="bg-white mt-8 px-8 py-3 rounded hover:scale-105">
        Shop All
      </button>
    </section>
  );
};
