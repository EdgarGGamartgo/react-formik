import { 
  FooterContainer,
  MainContainer,
  HeaderContainer
} from './styles'
import { ErrorBoundary } from './components'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
      <ErrorBoundary>
        <Provider store={store}>
          <HeaderContainer/>
          <MainContainer/>
          <FooterContainer/>
        </Provider>
      </ErrorBoundary>
  );
}

export default App;
