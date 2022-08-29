import Button from "./Button";

const Boost = () => {
  return (
    <div id="boost">
      <section className="relative mt-10 bg-primary-bg bg-[url('/images/bg-boost-mobile.svg')] md:bg-[url('/images/bg-boost-desktop.svg')] bg-right-top md:bg-left-top bg-no-repeat md:bg-cover">
        <article className="py-20 relative prose-h2:mt-0">
          <h2 id="boost-title" className="font-bold text-center text-white">
            Boost your links today
          </h2>
          <div className="grid place-items-center">
            <Button pill>Get Started</Button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Boost;
