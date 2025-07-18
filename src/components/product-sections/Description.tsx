import { ProductData } from '@/types/product';

export default function Description({ productData }: { productData: ProductData }) {
  return (
    <div className="max-w-4xl mx-auto mb-16 px-4">
      {productData.description.map((paragraph: string, idx: number) => (
        <p
          key={idx}
          className="text-gray-700 mb-4 leading-relaxed text-center"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
