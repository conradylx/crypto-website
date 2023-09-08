import HeadingContainer from "./Heading/HeadingContainer";
import GenericSection from "./SecondSection/GenericSection";
import {
  optionalText3,
  paragraph,
  paragraph3,
  primaryText,
  primaryText3,
  secondaryText,
  secondaryText3,
} from "./SecondSection/mockedData";
import banks from "../../assets/nash-mobile-banking.webp";

function Home() {
  return (
    <>
      <HeadingContainer />
      <GenericSection
        primaryText={primaryText}
        secondaryText={secondaryText}
        paragraph={paragraph}
      />
      {/* TODO: Add brand new <Section2/> */}
      <GenericSection
        primaryText={primaryText3}
        secondaryText={secondaryText3}
        paragraph={paragraph3}
        optionalText={optionalText3}
        picture={banks}
      />
    </>
  );
}

export default Home;
