import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import RelativeDating from "./pages/RelativeDating";
import Fossils from "./pages/Fossils";
import RadiometricDating from "./pages/RadiometricDating";
import GeologicTimeScale from "./pages/GeologicTimeScale";
import CaseStudies from "./pages/CaseStudies";
import Glossary from "./pages/Glossary";
import References from "./pages/References";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relative-dating" element={<RelativeDating />} />
        <Route path="/fossils" element={<Fossils />} />
        <Route path="/radiometric-dating" element={<RadiometricDating />} />
        <Route path="/geologic-time-scale" element={<GeologicTimeScale />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Layout>
  );
};

export default App;
