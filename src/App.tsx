import { FC, Suspense } from "react";
import "@styles/index.css";
import LoadingBar from "react-top-loading-bar";

import PageRoutes from "@routes/PageRoutes";

const App: FC = () => {
  return (
    <Suspense fallback={<LoadingBar progress={100} color="#f17020" shadow />}>
      <PageRoutes />
    </Suspense>
  );
};

export default App;
