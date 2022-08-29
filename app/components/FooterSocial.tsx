const FooterSocial = () => {
  const socialLinkCls =
    "p-2 rounded-full grid place-items-center active:bg-slate-200/20 focus-visible:outline-none focus-visible:bg-slate-200/20";

  return (
    <div className="flex justify-center">
      <div className="flex gap-4 prose-img:my-0">
        <a
          href="https://www.facebook.com/rayat.ass"
          target="_blank"
          rel="noreferrer"
          className={socialLinkCls}
        >
          <img src="/images/icon-facebook.svg" alt="Facebook" />
        </a>
        <a
          href="https://twitter.com/RayatMusaddik"
          target="_blank"
          rel="noreferrer"
          className={socialLinkCls}
        >
          <img src="/images/icon-twitter.svg" alt="Twitter" />
        </a>
        <a
          href="https://www.pinterest.com/devrayat000"
          target="_blank"
          rel="noreferrer"
          className={socialLinkCls}
        >
          <img src="/images/icon-pinterest.svg" alt="Pinterest" />
        </a>
        <a href="https://www.instagram.com/zul.rayat" className={socialLinkCls}>
          <img src="/images/icon-instagram.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
