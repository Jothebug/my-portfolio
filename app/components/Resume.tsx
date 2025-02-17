import { CERTIFICATIONS, EXPERIENCES, LANGUAGES, TECHNOLOGIES } from "./DATA";
import SectionItem from "./SectionItem";

export default function Resume() {
  return (
    <section id={"resume"}>
      <SectionItem header={"Work Experience"} data={EXPERIENCES} />
      <SectionItem header={"Technical Skills"} data={TECHNOLOGIES} />
      <SectionItem header={"Certifications"} data={CERTIFICATIONS} />
      <SectionItem header={"Languages"} data={LANGUAGES} />
    </section>
  );
}
