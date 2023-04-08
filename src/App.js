import Layout from "./components/Layout/Layout";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount:false,
      refetchOnWindowFocus:false
    }
  }
})
function App() {
  
  return <QueryClientProvider client={queryClient}>
         <Layout/>
      </QueryClientProvider>
  
 
}

export default App;
