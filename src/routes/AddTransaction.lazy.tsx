import { createLazyFileRoute } from "@tanstack/react-router";
import Container from "../components/Container";

export const Route = createLazyFileRoute("/AddTransaction")({
  component: AddTransaction,
});

export default function AddTransaction() {
  return (
   <Container>
      <div className="bg-white text-gray-800 rounded-2xl shadow-md p-6 w-full max-w-sm flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-blue-700 items-center flex justify-center mb-3">ADD TRANSACTION</h2>
        <input
          type="text"
          placeholder="Product Name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
        />
        <input
          type="text"
          placeholder="Batch Number"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
        />
        <input
          type="text"
          placeholder="Supplier"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition font-medium">
            Add Transaction
        </button>
      </div>
    </Container>
  );
}
