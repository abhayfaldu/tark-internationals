import { NutritionFacts, ProductData, Variety } from '@/types/product';

function NutritionTable({ nutritionFacts }: { nutritionFacts: NutritionFacts }) {
  return (
    <div className="max-w-4xl mx-auto">
      <table className="w-full border-collapse border border-[#e5efdc]">
        <tbody>
          {nutritionFacts.nutrients && (
            <tr>
              <td className="py-6 px-8 text-gray-700 font-medium text-lg w-1/4 align-top border border-[#e5efdc]">
                Nutrients
              </td>
              <td className="py-6 px-8 text-gray-700 border border-[#e5efdc]">
                <div className="space-y-2">
                  {nutritionFacts.nutrients.map((nutrient, idx) => (
                    <div key={idx}>
                      {nutrient.name} - {nutrient.value}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          )}
          {nutritionFacts.minerals && (
            <tr>
              <td className="py-6 px-8 text-gray-700 font-medium text-lg w-1/4 align-top border border-[#e5efdc]">
                Minerals
              </td>
              <td className="py-6 px-8 text-gray-700 border border-[#e5efdc]">
                <div className="space-y-2">
                  {nutritionFacts.minerals.map((mineral, idx) => (
                    <div key={idx}>
                      {mineral.name} - {mineral.value}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          )}
          {nutritionFacts.vitamins && (
            <tr>
              <td className="py-6 px-8 text-gray-700 font-medium text-lg w-1/4 align-top border border-[#e5efdc]">
                Vitamins
              </td>
              <td className="py-6 px-8 text-gray-700 border border-[#e5efdc]">
                <div className="space-y-2">
                  {nutritionFacts.vitamins.map((vitamin, idx) => (
                    <div key={idx}>
                      {vitamin.name} - {vitamin.value}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          )}
          {nutritionFacts.protein && (
            <tr>
              <td className="py-6 px-8 text-gray-700 font-medium text-lg w-1/4 align-top border border-[#e5efdc]">
                Protein
              </td>
              <td className="py-6 px-8 text-gray-700 border border-[#e5efdc]">
                <div className="space-y-2">
                  {nutritionFacts.protein.map((protein, idx) => (
                    <div key={idx}>
                      {protein.name} - {protein.value}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          )}
          {nutritionFacts.fat && (
            <tr>
              <td className="py-6 px-8 text-gray-700 font-medium text-lg w-1/4 align-top border border-[#e5efdc]">
                Fat
              </td>
              <td className="py-6 px-8 text-gray-700 border border-[#e5efdc]">
                <div className="space-y-2">
                  {nutritionFacts.fat.map((fat, idx) => (
                    <div key={idx}>
                      {fat.name} - {fat.value}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function VarietiesList({ varieties }: { varieties: Variety[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {varieties.map((variety) => (
        <div key={variety.id} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{variety.name}</h3>
          {variety.description.map((desc, idx) => (
            <p key={idx} className="text-gray-600 mb-3">
              {desc}
            </p>
          ))}
          {variety.benefits && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
              <ul className="list-disc list-inside space-y-1">
                {variety.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-600">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {variety.nutritionFacts && (
            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-4">
                Nutrition Information:
              </h4>
              <NutritionTable nutritionFacts={variety.nutritionFacts} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function StandardLayout({ data }: { data: ProductData }) {
  return (
    <>
      {data.nutritionFacts && (
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
            NUTRITION FACTS
          </h2>
          <NutritionTable nutritionFacts={data.nutritionFacts} />
        </section>
      )}

      {data.varieties && data.varieties.length > 0 && (
        <section className="py-16 bg-[#f5f9ef]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
              VARIETIES WE EXPORT
            </h2>
            <VarietiesList varieties={data.varieties} />
          </div>
        </section>
      )}
    </>
  );
}
