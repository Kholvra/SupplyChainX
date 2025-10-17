import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute("/dashboard")({
  component: Dashboard,
});

import Card from "../components/Card";
import Container from '../components/Container';

export default function Dashboard() {
  return (
    <Container>
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-white mb-10">Dashboard</h1>
      <div className="flex justify-center gap-6 flex-wrap">
        <Card title="Total Batches" value="12" />
        <Card title="Total Sales" value="$5,000" />
        <Card title="Status" value="Delivered" />
      </div>

      <div className="mt-10 bg-blue-200 h-24 w-full rounded-lg max-w-3xl mx-auto"></div>
    </div>
    </Container>
  );
}

