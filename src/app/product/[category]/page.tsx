import ProductSearch from '@/components/ProductSearch'
import { productCategoriesData, ProductCategory, ProductData } from '@/data/data'

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  const categoryData = productCategoriesData[category as keyof typeof productCategoriesData]

  if (!categoryData) {
    return <div>Category not found</div>
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="h-[200px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] w-full max-w-[1200px] mx-auto overflow-hidden"
        style={{
          backgroundImage: `url(${categoryData.headerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        {/* Content */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {categoryData.headerText}
          </h1>
          <div className="flex items-center gap-2 text-white/90">
            <a href="/" className="hover:text-white transition-colors">
              HOME
            </a>
            <span>/</span>
            <span className="uppercase">{categoryData.headerText}</span>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {categoryData.descTitle}
          </h2>
          <div className="space-y-4">
            {categoryData.descText.map((text, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Product Search Component */}
      <ProductSearch
        products={categoryData.products}
        categoryName={categoryData.headerText}
        categorySlug={category}
      />
    </main>
  )
}
