import Container from "../shared/Container";
import Form from "../functional/Form";
import SearchResult from "../layout/SearchResult";

function Home() {
  return (
    <div className="w-full">
      <Container
        classes={`mt-20 flex flex-col justify-center items-center gap-6`}
      >
        <Form />
        <SearchResult />
      </Container>
    </div>
  );
}

export default Home;
