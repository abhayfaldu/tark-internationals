export default function Conclusion({ conclusion }: { conclusion: string[] }) {
  return (
    <div className="max-w-4xl mx-auto mt-16 px-4">
      {conclusion.map((paragraph: string, idx: number) => (
        <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
