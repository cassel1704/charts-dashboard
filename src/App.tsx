import {
  QueryClientProvider,
  ThemeProvider,
  StoreProvider,
  SnackbarProvider,
} from "@/providers";
import { Layout } from "@/layouts";
import {
  Completeness,
  OnlineOptimization,
  ECP,
  Recommendations,
} from "@/components";

function App() {
  return (
    <QueryClientProvider>
      <StoreProvider>
        <ThemeProvider>
          <SnackbarProvider />
          <Layout>
            <Completeness />
            <OnlineOptimization />
            <ECP />
            <Recommendations />
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App;
