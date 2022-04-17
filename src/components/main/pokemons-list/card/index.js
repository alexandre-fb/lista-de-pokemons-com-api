import { CardContainer } from "./card-container";
import { Image } from "./image";
import { Name } from "./name";

const Card = () => {
  return (
    <CardContainer>
      <Image />
      <Name>Pokemon Name</Name>
    </CardContainer>
  );
};

export { Card };
