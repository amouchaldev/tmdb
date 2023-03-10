import Pages from "./pages/Pages"
import store from "./app/store"
import { Provider } from "react-redux"
function App() {

  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  )
}

export default App
