import { createLazyFileRoute } from "@tanstack/react-router";
import Button from "../components/Button";
import Container from "../components/Container";

export const Route = createLazyFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <h1 className="text-5xl text-white">Login</h1>
      <div className="flex flex-col gap-3">
        <Button>Connect SUI Wallet</Button>
        <Button>Login with Email</Button>
      </div>
    </Container>
  );
}
