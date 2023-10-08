import BullsEye from "../assets/GameHub Resources/Emojis/bulls-eye.webp";
import ThumbsUp from "..//assets/GameHub Resources/Emojis/thumbs-up.webp";
import Meh from "..//assets/GameHub Resources/Emojis/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: {[key: number]: ImageProps} = {
    3: { src: Meh, alt: "Meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: BullsEye, alt: "Exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1}/>;
};

export default Emoji;
