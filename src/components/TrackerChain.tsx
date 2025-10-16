import TrackerBox from "./TrackerBox";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function TrackerChain() {
  return (
      <div className="flex flex-row items-center gap-5">
        <TrackerBox/>
        <FaLongArrowAltRight className="text-3xl"/>
        <TrackerBox />
        <FaLongArrowAltRight className="text-3xl"/>
        <TrackerBox/>
      </div>
  );
}
