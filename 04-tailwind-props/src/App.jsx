import { useState } from "react";
import "./App.css";
import "./index.css";
import Card from "./component/Card";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="min-h-[60vh] flex items-center justify-center bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 p-3">
        <Card
          imageSrc="https://img.freepik.com/premium-photo/birthday-pink-cake-decorated-pink-background-big-birthday-cake-with-pink-cream-toppings_667286-3444.jpg?w=1060"
          title="🎉 Happy Birthday! 🎉"
          message="Wishing you love, joy, and endless happiness on your special day."
          buttonText="Celebrate 🎊"
        />
      </div>
    </>
  );
}

export default App;
