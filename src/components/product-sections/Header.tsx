import { ProductData } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  productData: ProductData;
  params: {
    category: string;
    product: string;
  };
}

export default function Header({ productData, params }: HeaderProps) {
  return (
    <>
      {/* Banner Image */}
      <div className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
        <Image
          src={productData.headerImage}
          alt={params.product}
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-sm mb-8 text-gray-600">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/product/${params.category}`}
            className="hover:text-primary"
          >
            {params.category.charAt(0).toUpperCase() +
              params.category.slice(1).replace(/-/g, ' ')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">
            {params.product.charAt(0).toUpperCase() +
              params.product.slice(1).replace(/-/g, ' ')}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {productData.title}
        </h1>
      </div>
    </>
  );
}
