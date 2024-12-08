import Button from "./components/Button";
import Container from "./components/Container";
import PasswordField from "./components/PasswordField";
import Typography from "./components/Typography";

function App() {
  return (
    <main className="bg-very-dark-grey min-h-screen">
      <Container className="max-w-[540px] text-center">
        <Typography element="h1" treatment="heading-m" className="text-grey">
          Password Generator
        </Typography>
        <PasswordField password="P4$5W0rD!" />
        <div className="bg-dark-grey p-8">
          Character Length Include Uppercase Letters Include Lowercase Letters
          Include Numbers Include Symbols Strength Generate Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Architecto numquam fugiat
          reprehenderit est alias dolor optio error unde doloribus? Vel libero
          placeat nam molestiae minima et iure voluptates ipsam explicabo
          doloribus ullam totam, aliquid est ea eos enim quam aspernatur harum
          delectus. Suscipit quidem, doloremque labore consequatur pariatur eum
          aliquid provident porro natus iure sapiente ipsam veritatis
          exercitationem optio beatae qui ducimus excepturi nemo distinctio
          sunt. Labore repellendus similique quis omnis eum consectetur.
          Temporibus quos aut exercitationem iusto atque eaque distinctio
          impedit esse, at est eum ipsam repellendus rerum natus nostrum,
          tempora dicta qui ducimus sed velit itaque minus sint. Qui quibusdam
          aspernatur accusantium obcaecati inventore, earum sunt repellat amet,
          itaque iste odit error velit ratione laudantium sequi eaque
          reprehenderit harum cupiditate fugiat eos rerum quidem quia
          exercitationem? Ullam deserunt, necessitatibus ipsa quisquam est iusto
          voluptatum cumque quam nesciunt eligendi exercitationem corporis
          dolore voluptatibus dignissimos eius aliquam? Ullam enim molestiae
          quod dolores impedit beatae, nulla distinctio consequatur doloremque
          aliquid. Optio libero veritatis distinctio, explicabo ut dolorem est,
          corrupti accusamus, quos odit minima soluta aut et at facere rem
          accusantium! Atque sapiente et saepe provident, impedit sint molestiae
          nostrum tenetur! Possimus quis, quia error quidem nisi necessitatibus
          facilis totam tenetur obcaecati, eaque dolore nam, mollitia illum.
          Itaque id dolor exercitationem, ratione dolorum corporis atque error
          reprehenderit voluptatum ipsum quibusdam omnis praesentium repellendus
          nam non? Quaerat aliquam ducimus cum neque nesciunt temporibus, ab
          dolores quisquam suscipit itaque aut laborum nulla voluptatum est a
          <Button
            onClick={() => {
              console.log("TODO");
            }}
            label="Generate"
          />
        </div>
      </Container>
    </main>
  );
}

export default App;
