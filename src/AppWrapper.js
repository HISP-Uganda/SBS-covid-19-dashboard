import { QueryClient, QueryClientProvider } from "react-query";
import App from "./components/App";
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
const MyApp = () => (
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={true}/>
  </QueryClientProvider>
);
export default MyApp;