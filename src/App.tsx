import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WireframeLayout } from "@/components/wireframe/WireframeLayout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CoursesListPage from "./pages/CoursesListPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseReviewPage from "./pages/CourseReviewPage";
import CourseReviewEditPage from "./pages/CourseReviewEditPage";
import ToolsPage from "./pages/ToolsPage";
import NetworksPage from "./pages/NetworksPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import LandingTools from "./pages/LandingTools";
import LandingCourses from "./pages/LandingCourses";
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
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/courses/:slug/review" element={<CourseReviewPage />} />
            <Route path="/courses/:slug/review/edit" element={<CourseReviewEditPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/networks" element={<NetworksPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/best-affiliate-tools" element={<LandingTools />} />
            <Route path="/best-affiliate-courses" element={<LandingCourses />} />
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
