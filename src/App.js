import logo from './logo.svg';
import './App.css';
import ProductForm from './features/Product/ProductForm';
import { DepsProvider } from './context/DepContext';
import { ProductService } from './services/ProductService';

function App() {
  return (
    <div className="App">
      <DepsProvider services={{productService: ProductService()}}>
        <ProductForm></ProductForm>
      </DepsProvider>
    </div>
  );
}

export default App;
