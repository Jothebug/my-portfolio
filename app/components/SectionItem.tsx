export default function SectionItem({
  header,
  data,
}: {
  header: string;
  data: {
    title: string;
    date?: string;
    specialization?: string;
    achievements?: string[];
    link?: string;
  }[];
}) {
  return (
    <div className="flex flex-row w-screen justify-center gap-10">
      <div>
        <h3 className="font-sans font-semibold tracking-wide uppercase ">
          {header}
        </h3>
        <hr className="border-b-1.2 border-teal-500 items-center mt-3" />
      </div>

      <div className="w-[65%]">
        {data.map((i, index) => (
          <div key={index} className="space-y-2 mb-8">
            <h3 className="font-sans tracking-wide text-xl font-bold mb-2">
              {i.title}
            </h3>
            <p className="font-sans text-gray-500">{i.specialization}</p>
            <p className="font-sans text-gray-500">{i.date}</p>
            {i.achievements &&
              i.achievements.map((achievement, index) => (
                <p
                  key={index}
                  className="font-sans tracking-wide font-normal text-gray-400 mb-2"
                >
                  {" "}
                  {achievement}
                </p>
              ))}
            {i.link && (
              <a
                href={i.link}
                target="_blank"
                className="font-sans tracking-wide font-normal text-gray-400"
              >
                {i.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
