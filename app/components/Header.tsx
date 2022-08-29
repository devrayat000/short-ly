import { useState } from "react";
import Button from "./Button";
import Drawer from "./Drawer";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleDrawerToggle(state?: boolean) {
    setDrawerOpen(state ?? ((prev) => !prev));
  }

  return (
    <header className="flex justify-between items-center">
      <Drawer open={drawerOpen} onClose={() => handleDrawerToggle(false)} />
      <section className="mr-10">
        <h1>Shortly</h1>
      </section>
      <nav className="md:flex-1 gap-5">
        <button
          id="burger"
          type="button"
          className="flex flex-col items-stretch justify-center gap-1.5 rounded-full transition-colors p-3 md:hidden active:bg-slate-200 focus:bg-transparent focus-visible:bg-slate-200 focus-visible:outline-none"
          onClick={() => handleDrawerToggle()}
        >
          <span className="h-0.5 w-7 bg-gray-400 rounded-lg" />
          <span className="h-0.5 w-7 bg-gray-400 rounded-lg" />
          <span className="h-0.5 w-7 bg-gray-400 rounded-lg" />
        </button>
        <section className="hidden md:flex justify-between">
          <div>
            <Button variant="text" className="text-neutral-dark-blue">
              Features
            </Button>
            <Button variant="text" className="text-neutral-dark-blue">
              Pricing
            </Button>
            <Button variant="text" className="text-neutral-dark-blue">
              Resources
            </Button>
          </div>
          <div>
            <Button variant="text" className="text-neutral-dark-blue">
              Login
            </Button>
            <Button pill>Sign Up</Button>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
