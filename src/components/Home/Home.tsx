import banks from "../../assets/nash-mobile-banking.webp";
import GenericSection from "./GenericSection/GenericSection";
import {
  optionalText3,
  paragraph,
  paragraph3,
  paragraph4,
  primaryText,
  primaryText3,
  primaryText4,
  secondaryText,
  secondaryText3,
  secondaryText4,
} from "./GenericSection/mockedData";
import HeadingContainer from "./Heading/HeadingContainer";

function Home() {
  return (
    <>
      <HeadingContainer />
      <GenericSection
        primaryText={primaryText}
        secondaryText={secondaryText}
        paragraph={paragraph}
      />
      <GenericSection
        primaryText={primaryText3}
        secondaryText={secondaryText3}
        paragraph={paragraph3}
        optionalText={optionalText3}
        picture={banks}
      />
      <GenericSection
        primaryText={primaryText4}
        secondaryText={secondaryText4}
        paragraph={paragraph4}
        optionalText={optionalText3}
      />
    </>
  );
}

export default Home;
