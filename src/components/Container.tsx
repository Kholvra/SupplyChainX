type containerProp = {
    children: React.ReactNode
}

export default function Container({children}:containerProp) {
  return (
    <div className="h-screen bg-blue-900">
      <div className="flex flex-col justify-center items-center gap-20 w-3/4 h-full m-auto">
      {children}
      </div>
    </div>
  );
}
