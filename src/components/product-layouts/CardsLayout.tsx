import { ProductData } from '@/types/product';

export default function CardsLayout({ data }: { data: ProductData }) {
  if (!data.cardSections) return null;

  return (
    <div className="max-w-6xl mx-auto">
      {/* This is a Cards Layout */}
      {data.cardSections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            {section.title}
          </h2>
          <div className="py-8 px-4 bg-[#f9f9f9]">
            <p className="text-center mb-8 text-gray-700">
              {sectionIndex === 0
                ? 'There are around 40,000 varieties of Rice found across the world. We broadly export two categories of Rice Basmati and Non-Basmati. These are several varieties under these broad categories.'
                : 'All other varieties of rice, except basmati is called non- basmati rice. Non-basmati rice includes rice of different varieties, sizes, and shapes. Some types of rice are long and slender, while some are short and thick. Non-Basmati Rice is used in homes for daily use and also is used and exported for commercial use.'}
            </p>

            <div className="space-y-12">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-6"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-2xl font-bold">
                        {item.id}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
