import { FC, Suspense } from "react";
import "@styles/index.css";

import PageRoutes from "@routes/PageRoutes";

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <PageRoutes />
    </Suspense>
  );
};

export default App;