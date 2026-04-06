import { Routes, Route, Navigate } from "react-router";
import OptionOne from "./OptionOne";
import OptionTwo from "./OptionTwo";
import OptionThree from "./OptionThree";
import OptionFour from "./OptionFour";

export default function Content() {
  return (
    <div className="content-display">
      <div className="border-img">
        <div className="inner-container">
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<OptionOne />} />
            <Route path="option-1" element={<OptionOne />} />
            <Route path="option-2" element={<OptionTwo />} />
            <Route path="option-3" element={<OptionThree />} />
            <Route path="option-4" element={<OptionFour />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
