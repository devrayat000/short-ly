import Boost from "~/components/Boost";
import Card from "~/components/Card";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Shorten from "~/components/Shorten";

export { action } from "~/components/Shorten";

export default function Index() {
  return (
    <div className="prose max-w-none prose-h1:mb-0 prose-hr:my-2 overflow-x-hidden">
      <div className="p-6 md:px-20">
        <Header />

        <Hero />

        <Shorten />

        {/* <ShortLinks /> */}

        <section>
          <header className="prose-h2:text-center prose-p:text-center flex flex-col items-center justify-center">
            <h2 className="md:text-3xl mb-3">Advanced Statistics</h2>
            <p className="md:max-w-[44ch]">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </header>

          <div className="relative">
            <hr className="absolute top-10 md:top-1/2 left-1/2 md:left-0 w-2 md:w-full h-3/4 md:h-2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 bg-primary" />
            <div className="flex flex-col md:flex-row md:gap-7 items-stretch relative">
              <Card
                title="Brand Recognition"
                image="/images/icon-brand-recognition.svg"
              >
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </Card>

              <Card
                title="Detailed Records"
                image="/images/icon-detailed-records.svg"
                className="md:mt-24"
              >
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </Card>

              <Card
                title="Fully Customizable"
                image="/images/icon-fully-customizable.svg"
                className="md:mt-32"
              >
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Boost />

      <Footer />
    </div>
  );
}
