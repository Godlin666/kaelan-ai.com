import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div className="flex flex-col gap-2 max-sm:items-center">
          <p className="caption text-n-4 lg:block">
            <span className="font-semibold font-serif text-xs">&copy;</span>{" "}
            <span className="text-color-1 font-medium">Kaelan AI</span> | Jiatong Technology Co., Ltd.{" "}
            {new Date().getFullYear()}. All rights reserved.
          </p>
          <a 
            href="mailto:support@kaelan-ai.com" 
            className="text-n-4 text-xs hover:text-color-1 transition-colors"
          >
            support@kaelan-ai.com
          </a>
        </div>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((social) => (
            <button
              key={social.id}
              onClick={() => alert("Coming Soon!")}
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 cursor-pointer"
            >
              <img
                src={social.iconUrl}
                alt={social.title}
                width={16}
                height={16}
              />
            </button>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;