import { createLazyFileRoute } from "@tanstack/react-router";
import TrackerChain from "../components/TrackerChain";
import Button from "../components/Button";
import Container from "../components/Container";

export const Route = createLazyFileRoute("/track")({
  component: TrackSupplyChain,
});

function TrackSupplyChain() {
  return (
    <Container>
      <h1 className="text-5xl text-white">Track Supply Chain</h1>
      <TrackerChain />
      <Button size="py-3 px-20">Track</Button>
    </Container>
  );
}
