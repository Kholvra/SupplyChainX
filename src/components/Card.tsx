interface CardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function Card({ title, value, subtitle }: CardProps) {
  return (
    <div className="bg-blue-100 shadow-md rounded-xl p-6 text-center w-60">
      <h2 className="text-2xl font-bold text-blue-800">{value}</h2>
      <p className="text-blue-700 font-medium">{title}</p>
      {subtitle && <p className="text-blue-500 text-sm mt-1">{subtitle}</p>}
    </div>
  );
}

