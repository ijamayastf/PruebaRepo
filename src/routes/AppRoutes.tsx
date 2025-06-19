
import { AuthRedirectPage } from "@/pages/AuthRedirectPage";
import { Dashboard } from "@/pages/dashboard"
import { LoginPage } from "@/pages/LoginPage";
import { MenuBase } from "@/pages/MenuBase"
import { NotFoundPage } from "@/pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"



export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotFoundPage />} />
        <Route path="/webapp/*" element={<WebRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>

  )
}

function WebRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="principal" element={<MenuBase />} />
      <Route path="authenticating" element={<AuthRedirectPage />} />      
      <Route path="*" element={<NotFoundPage />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}


export default AppRoutes