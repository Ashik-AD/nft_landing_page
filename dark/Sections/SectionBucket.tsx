import Image from "next/image";
import Button from "../components/buttons/Button";
import Section from "../components/section/Section";

const SectionBucket = () => {
  return (
    <Section>
      <div className="flex flex-col space-24">
        <span className="overline text-gray-1000">hola amigo</span>
        <h1 className="text-heading">
          Sapien ipsum scelerisque convallis fusce
        </h1>
        <span className="text-medium text-gray-1000">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </span>

        <div className="flex space-24" style={{ marginTop: 20 }}>
          <Button text="Get started" type="primary" />
          <Button text="Learn more" type="secondary" />
        </div>
      </div>
      <div className="flex content-center overflow-hidden">
        <Image
          src={"https://i.ibb.co/p3w4TFz/bucket.png"}
          alt="bucket"
          // layout="responsive"
          quality={80}
          height={400}
          width={450}
        />
      </div>
    </Section>
  );
};

export default SectionBucket;
