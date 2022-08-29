import { Form, useActionData } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";

import Button from "./Button";
import clsx from "clsx";

interface ResError {
  ok: false;
  error_code: number;
  error: string;
}

interface ResData {
  ok: true;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
}

export type ShortenUrlResponse = ResData | ResError;

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const url = formData.get("url");

  const res = await fetch("https://api.shrtco.de/v2/shorten?url=" + url);
  return res.json();
}

const Shorten = () => {
  const data = useActionData<ShortenUrlResponse>();

  return (
    <section className="bg-primary-bg p-5 md:p-8 rounded-md overflow-hidden my-10 bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top md:bg-cover">
      <Form
        className="flex flex-col items-stretch gap-4 md:flex-row relative"
        method="post"
      >
        <div className="md:flex-1 relative">
          <input
            type="url"
            name="url"
            className={clsx(
              "rounded py-2 px-4 w-full focus-visible:outline-none ring-primary focus-visible:ring-2 transition-all",
              !data?.ok &&
                data?.error &&
                "placeholder:text-secondary ring-secondary"
            )}
            placeholder="Shorten a link here..."
            aria-invalid={!data?.ok && !!data?.error}
          />
          {!data?.ok && data?.error && (
            <p className="text-secondary italic mt-1 md:my-0 md:absolute md:left-0 md:-bottom-5 w-auto my-0 text-xs md:text-sm">
              {data.error}
            </p>
          )}
        </div>
        <Button className="relative w-full md:w-auto" type="submit">
          Shorten It!
        </Button>
      </Form>
    </section>
  );
};

export default Shorten;
