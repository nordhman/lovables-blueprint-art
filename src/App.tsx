import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WireframeLayout } from "@/components/wireframe/WireframeLayout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CoursesListPage from "./pages/CoursesListPage";
import CoursePartPage from "./pages/CoursePartPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseReviewPage from "./pages/CourseReviewPage";
import CourseReviewEditPage from "./pages/CourseReviewEditPage";
import ToolsPage from "./pages/ToolsPage";
import NetworksPage from "./pages/NetworksPage";
import VerticalsDirectoryPage from "./pages/VerticalsDirectoryPage";
import GeoDirectoryPage from "./pages/GeoDirectoryPage";
import GeoNetworksPage from "./pages/GeoNetworksPage";
import BroadNetworksPage from "./pages/BroadNetworksPage";
import VerticalNetworksPage from "./pages/VerticalNetworksPage";
import NetworkReviewPage from "./pages/NetworkReviewPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import TopToolsPage from "./pages/TopToolsPage";
import ToolReviewPage from "./pages/ToolReviewPage";

import LandingNetworks from "./pages/LandingNetworks";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<WireframeLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/list" element={<CoursesListPage />} />
            <Route path="/courses/list/:partSlug" element={<CoursePartPage />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/courses/:slug/review" element={<CourseReviewPage />} />
            <Route path="/courses/:slug/review/edit" element={<CourseReviewEditPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/networks" element={<NetworksPage />} />
            <Route path="/networks/verticals" element={<VerticalsDirectoryPage />} />
            <Route path="/networks/geographic" element={<GeoDirectoryPage />} />
            <Route path="/networks/geographic/:region" element={<GeoNetworksPage />} />
            <Route path="/networks/broad" element={<BroadNetworksPage />} />
            <Route path="/networks/:vertical" element={<VerticalNetworksPage />} />
            <Route path="/networks/:vertical/:slug" element={<NetworkReviewPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/best-affiliate-tools" element={<TopToolsPage />} />
            <Route path="/best-affiliate-tools/:category/:slug/review" element={<ToolReviewPage />} />
            
            
            <Route path="/best-affiliate-networks" element={<LandingNetworks />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
