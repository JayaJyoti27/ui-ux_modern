import { socials } from "../constants";

const Footer = () => {
  return (
    <div className="!px -0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          {new Date().getFullYear()} .ALL RIGHTS RESERVED @copyright Jaya
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} />
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
