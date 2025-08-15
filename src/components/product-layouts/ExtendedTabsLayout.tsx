import { ProductData } from '@/types/product';

export default function ExtendedTabsLayout({ data }: { data: ProductData }) {
  if (!data.extendedTabContent) return null;
  const { extendedTabContent } = data;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Navigation Buttons */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex border border-green-600 rounded-lg overflow-hidden flex-wrap">
          <button
            onClick={() => scrollToSection('description')}
            className="py-3 px-4 text-green-600 hover:bg-green-50 transition-colors border-r border-green-600"
          >
            DESCRIPTION
          </button>
          <button
            onClick={() => scrollToSection('history')}
            className="py-3 px-4 text-green-600 hover:bg-green-50 transition-colors border-r border-green-600"
          >
            HISTORY
          </button>
          <button
            onClick={() => scrollToSection('specification')}
            className="py-3 px-4 text-green-600 hover:bg-green-50 transition-colors border-r border-green-600"
          >
            SPECIFICATION
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="py-3 px-4 text-green-600 hover:bg-green-50 transition-colors border-r border-green-600"
          >
            FEATURES
          </button>
          <button
            onClick={() => scrollToSection('ingredients')}
            className="py-3 px-4 text-green-600 hover:bg-green-50 transition-colors border-r border-green-600"
          >
            INGREDIENTS
          </button>
          <button
            onClick={() => scrollToSection('uses-benefits')}
            className="py-3 px-4 text-green-600 hover:bg-green-50 transition-colors"
          >
            USES & BENEFITS
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Description Section */}
        <section id="description">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">DESCRIPTION</h2>
          <div className="space-y-4">
            {extendedTabContent.description.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* History Section */}
        <section id="history">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">HISTORY</h2>
          <div className="space-y-4">
            {extendedTabContent.history.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Specification Section */}
        <section id="specification">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">SPECIFICATION</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-800 bg-white w-1/3">Product Name</td>
                  <td className="px-6 py-4 text-gray-600 bg-white">{extendedTabContent.specification.productName}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-800 bg-gray-50">Origin</td>
                  <td className="px-6 py-4 text-gray-600 bg-gray-50">{extendedTabContent.specification.origin}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-800 bg-white">Family</td>
                  <td className="px-6 py-4 text-gray-600 bg-white">{extendedTabContent.specification.family}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800 bg-gray-50">Binomial Name</td>
                  <td className="px-6 py-4 text-gray-600 bg-gray-50">{extendedTabContent.specification.binomialName}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Features Section */}
        <section id="features">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">FEATURES & CHARACTERISTICS</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-800 bg-white w-1/3">Color</td>
                  <td className="px-6 py-4 text-gray-600 bg-white">{extendedTabContent.features.color}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-800 bg-gray-50">Taste and Smell</td>
                  <td className="px-6 py-4 text-gray-600 bg-gray-50">{extendedTabContent.features.tasteAndSmell}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800 bg-white">Quality</td>
                  <td className="px-6 py-4 text-gray-600 bg-white">{extendedTabContent.features.quality}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ingredients Section */}
        <section id="ingredients">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">INGREDIENTS</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-800 bg-white w-1/3">Nutrients</td>
                  <td className="px-6 py-4 text-gray-600 bg-white">
                    <div className="space-y-1">
                      <p>{extendedTabContent.ingredients.nutrients.calories}</p>
                      <p>{extendedTabContent.ingredients.nutrients.carbohydrates}</p>
                      <p>{extendedTabContent.ingredients.nutrients.fiber}</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-800 bg-gray-50">Minerals</td>
                  <td className="px-6 py-4 text-gray-600 bg-gray-50">
                    <div className="grid grid-cols-2 gap-2">
                      {extendedTabContent.ingredients.minerals.map((mineral, idx) => (
                        <span key={idx} className="inline-block">• {mineral}</span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-800 bg-white">Vitamins</td>
                  <td className="px-6 py-4 text-gray-600 bg-white">
                    {extendedTabContent.ingredients.vitamins.map((vitamin, idx) => (
                      <span key={idx} className="inline-block">• {vitamin}</span>
                    ))}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-800 bg-gray-50">Protein</td>
                  <td className="px-6 py-4 text-gray-600 bg-gray-50">{extendedTabContent.ingredients.protein}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800 bg-white">Fats</td>
                  <td className="px-6 py-4 text-gray-600 bg-white">{extendedTabContent.ingredients.fats}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Uses & Benefits Section */}
        <section id="uses-benefits">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">USES & BENEFITS</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-gray-800 mb-4">USES :</h3>
              <div className="space-y-2">
                {extendedTabContent.usesAndBenefits.uses.map((use, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>{use}</span>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-4">TURMERIC USES & BENEFITS :</h3>
              <div className="space-y-2">
                {extendedTabContent.usesAndBenefits.healthBenefits.map((benefit, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>{benefit}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
