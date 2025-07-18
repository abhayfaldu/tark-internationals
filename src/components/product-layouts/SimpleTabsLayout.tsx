import { ProductData } from '@/types/product';
import { useState } from 'react';

interface TabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  isFirst?: boolean;
}

function TabButton({ active, onClick, children, isFirst }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 focus:outline-none ${active
          ? 'border-b-2 border-green-600 font-medium text-green-600'
          : 'text-gray-500 hover:text-gray-700'
        } ${isFirst ? 'rounded-l-lg' : ''}`}
    >
      {children}
    </button>
  );
}

export default function SimpleTabsLayout({ data }: { data: ProductData }) {
  const [activeTab, setActiveTab] = useState('market');

  if (!data.simpleTabContent) return null;
  const { simpleTabContent } = data;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex">
          <TabButton
            active={activeTab === 'market'}
            onClick={() => setActiveTab('market')}
            isFirst
          >
            GLOBAL MARKET DEMAND
          </TabButton>
          <TabButton
            active={activeTab === 'specification'}
            onClick={() => setActiveTab('specification')}
          >
            SPECIFICATION
          </TabButton>
          <TabButton
            active={activeTab === 'ingredients'}
            onClick={() => setActiveTab('ingredients')}
          >
            INGREDIENTS
          </TabButton>
          <TabButton
            active={activeTab === 'benefits'}
            onClick={() => setActiveTab('benefits')}
          >
            USES & BENEFITS
          </TabButton>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-8 px-4">
        {activeTab === 'market' && simpleTabContent.globalMarketDemand && (
          <div className="space-y-4">
            {simpleTabContent.globalMarketDemand.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {activeTab === 'specification' && simpleTabContent.specification && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800">Product Name</h3>
              <p className="text-gray-600">
                {simpleTabContent.specification.productName}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Origin</h3>
              <p className="text-gray-600">
                {simpleTabContent.specification.origin}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Family</h3>
              <p className="text-gray-600">
                {simpleTabContent.specification.family}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Binomial Name</h3>
              <p className="text-gray-600">
                {simpleTabContent.specification.binomialName}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'ingredients' && simpleTabContent.ingredients && (
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-4">Nutrients</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">
                    Calories: {simpleTabContent.ingredients.nutrients.calories}
                  </p>
                  <p className="text-gray-600">
                    Carbohydrates:{' '}
                    {simpleTabContent.ingredients.nutrients.carbohydrates}
                  </p>
                  <p className="text-gray-600">
                    Fiber: {simpleTabContent.ingredients.nutrients.fiber}
                  </p>
                </div>
              </div>
            </div>

            {simpleTabContent.ingredients.minerals.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Minerals</h3>
                <ul className="list-disc list-inside space-y-2">
                  {simpleTabContent.ingredients.minerals.map((mineral, idx) => (
                    <li key={idx} className="text-gray-600">
                      {mineral}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {simpleTabContent.ingredients.vitamins.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Vitamins</h3>
                <ul className="list-disc list-inside space-y-2">
                  {simpleTabContent.ingredients.vitamins.map((vitamin, idx) => (
                    <li key={idx} className="text-gray-600">
                      {vitamin}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'benefits' && simpleTabContent.usesAndBenefits && (
          <div className="space-y-4">
            {simpleTabContent.usesAndBenefits.uses.map((use, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed">
                {use}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
