import react from "react";
import Footer from "./Footer";
import Header  from "./Header";
import PaymentForm from "./PaymentForm";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main section">
        <PaymentForm/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
