import Image from "next/image";
import Button from "../components/buttons/Button";
import Section from "../components/section/Section";
import IconComponents from "../components/svg-icons/Components";
import IconPersonalized from "../components/svg-icons/Personalized";
const SectionEmoji = () => {
  return (
    <Section className="space-24">
      <div className="img">
        <Image
          src={"https://i.ibb.co/nQ0xbzj/emoji.png"}
          alt="emoji"
          layout="responsive"
          height={400}
          width={450}
        />
      </div>
      <div className="flex flex-col space-24">
        <div className="flex flex-col space-16">
          <span className="overline text-gray-1000">Life is all 🌸</span>
          <h1 className="text-heading">
            Habitant tristique aliquam in vel scelerisque
          </h1>
          <span className="text-gray-1000 text-medium">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </span>
        </div>
        <div className="flex space-24 py-16">
          <article className="flex flex-col space-24">
            <IconPersonalized />
            <span>
              <h6 className={`text-heading`}>Lapita Capita</h6>
              <p className="text-gray-1000 font-medium">
                Lorem ipsum dolor sit.
              </p>
            </span>
          </article>
          <article className="flex flex-col space-24">
            <IconComponents />
            <span>
              <h6 className={`text-heading`}>Lapita Capita</h6>
              <p className="text-gray-1000 font-medium">
                Lorem ipsum dolor sit.
              </p>
            </span>
          </article>
        </div>
        <div className="flex space-24 py-16">
          <Button text="Get started" type="primary" />
          <Button text="Learn more" type="secondary" />
        </div>
      </div>
    </Section>
  );
};
export default SectionEmoji;
