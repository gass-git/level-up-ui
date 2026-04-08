import { Routes, Route, Navigate } from "react-router";
import Section from "./Section";

export default function Content() {
  return (
    <div className="rpg-border" style={{ height: `243px` }}>
      <div className="flex-container" style={{ height: `271px` }}>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Section sectionNumber="0" />} />
          <Route path="section-0" element={<Section sectionNumber="0" />} />
          <Route path="section-1" element={<Section sectionNumber="1" />} />
          <Route path="section-2" element={<Section sectionNumber="2" />} />
          <Route path="section-3" element={<Section sectionNumber="3" />} />
          <Route path="section-4" element={<Section sectionNumber="4" />} />
        </Routes>
      </div>
    </div>
  );
}
