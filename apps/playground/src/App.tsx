import "./App.css";
import Card from "./components/Card/Card";
import Hero from "./components/Hero";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <header style={{ marginBottom: "4em" }}>
        <Hero />
      </header>
      <main>
        <div className="container">
          <Card style={{ width: "33.3%" }}>foo</Card>
          <Card style={{ width: "33.3%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            accusamus libero repellendus possimus architecto labore fugiat nemo,
            alias atque dolorum saepe, nam maiores animi et omnis fuga, tempore
            delectus quaerat. Neque itaque illum mollitia ut repudiandae quis
            iusto doloribus optio quo officiis eum, expedita dolorum quaerat
            fuga consequuntur ratione quasi fugit quam sed cum qui ipsa suscipit
            consequatur incidunt! Blanditiis.
          </Card>
          <Card style={{ width: "33.3%" }}>foo</Card>
        </div>
      </main>
    </>
  );
}

export default App;
