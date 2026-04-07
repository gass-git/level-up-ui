import { Routes, Route, Navigate } from "react-router";
import Section from "./Section";
import { config } from "../config";

export default function Content() {
  return (
    <div
      className="rpg-border"
      style={{ height: `243px`, width: config.width }}
    >
      <div className="flex-container" style={{ height: `271px` }}>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Section sectionNumber="1" />} />
          <Route path="section-1" element={<Section sectionNumber="1" />} />
          <Route path="section-2" element={<Section sectionNumber="2" />} />
          <Route path="section-3" element={<Section sectionNumber="3" />} />
          <Route path="section-4" element={<Section sectionNumber="4" />} />
          <Route path="section-5" element={<Section sectionNumber="5" />} />
        </Routes>
      </div>
    </div>
  );
}
