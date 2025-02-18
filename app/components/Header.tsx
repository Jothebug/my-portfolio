/* eslint-disable @next/next/no-img-element */
import NavBar from "./NavBar";

const DATA = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/yen-ha-752399221/",
    icon: "linkedin.svg",
  },
  { name: "github", url: "https://github.com/Jothebug", icon: "github.svg" },
];

export default function Header() {
  return (
    <div
      id="home"
      className="h-screen bg-[url('/images/headerBg.jpg')] bg-cover "
    >
      <NavBar />
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="font-sans font-bold text-[90px] leading-[1.1em] text-white tracking-[-2px] mb-[32px]">
          I am Ha Yen.
        </h1>
        <h3 className="font-serif font-normal text-[18px] leading-[1.9em] text-[#A8A8A8] w-[70%]">
          A strong believer that self-education is the key to thriving in the
          ever-evolving tech landscape, I am committed to continuous learning
          and professional growth. With over three years of experience as a
          React Native developer, I specialize in developing high-performance
          mobile applications, emphasizing clean architecture, efficient state
          management, and seamless user experiences.
        </h3>

        <hr className="w-[60%] my-[18px] mb-[24px] border border-[rgba(150,150,150,0.1)]" />
        <ul className="flex my-[24px] gap-4">
          {DATA.map(({ name, url, icon }) => {
            return (
              <li key={name}>
                <a href={url} target="_blank">
                  <img
                    src={`/${icon}`}
                    alt={`icon-${name}`}
                    className="w-7 h-7 filter invert brightness-0"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
