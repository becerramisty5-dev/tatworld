import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { SlotsPage } from '@/pages/SlotsPage'
import { GalleryPage } from '@/pages/GalleryPage'
import { Navigation } from '@/components/Navigation'
import { Toaster } from '@/components/ui/sonner'
const queryClient = new QueryClient();
function Layout() {
  return (
    <div className="min-h-screen bg-[#0F0F13]">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Toaster richColors closeButton theme="dark" position="bottom-right" />
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/slots", element: <SlotsPage /> },
      { path: "/gallery", element: <GalleryPage /> },
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)