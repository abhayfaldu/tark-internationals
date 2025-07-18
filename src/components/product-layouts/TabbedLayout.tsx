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

function MarketDemand({ content }: { content?: string[] }) {
  if (!content || content.length === 0) return null;

  return (
    <div className="space-y-4">
      {content.map((paragraph, idx) => (
        <p key={idx} className="text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function Specification({ specification }: {
  specification?: {
    productName?: string;
    origin?: string;
    family?: string;
    binomialName?: string;
    nutrients?: { name: string; value: string }[];
  }
}) {
  if (!specification) return null;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specification.productName && (
          <div>
            <h3 className="font-medium text-gray-800">Product Name</h3>
            <p className="text-gray-600">{specification.productName}</p>
          </div>
        )}
        {specification.origin && (
          <div>
            <h3 className="font-medium text-gray-800">Origin</h3>
            <p className="text-gray-600">{specification.origin}</p>
          </div>
        )}
        {specification.family && (
          <div>
            <h3 className="font-medium text-gray-800">Family</h3>
            <p className="text-gray-600">{specification.family}</p>
          </div>
        )}
        {specification.binomialName && (
          <div>
            <h3 className="font-medium text-gray-800">Binomial Name</h3>
            <p className="text-gray-600">{specification.binomialName}</p>
          </div>
        )}
      </div>

      {specification.nutrients && specification.nutrients.length > 0 && (
        <div className="mt-8">
          <h3 className="font-medium text-gray-800 mb-4">Nutritional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specification.nutrients.map((nutrient, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700">{nutrient.name}</h4>
                <p className="text-gray-600">{nutrient.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Benefits({ content }: { content?: string[] }) {
  if (!content || content.length === 0) return null;

  return (
    <div className="space-y-4">
      {content.map((paragraph, idx) => (
        <p key={idx} className="text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function TabbedLayout({ data }: { data: ProductData }) {
  const [activeTab, setActiveTab] = useState('market');

  if (!data.tabContent) return null;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex space-x-1">
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
        {activeTab === 'market' && (
          <MarketDemand content={data.tabContent.globalMarketDemand} />
        )}
        {activeTab === 'specification' && (
          <Specification specification={data.tabContent.specification} />
        )}
        {activeTab === 'benefits' && (
          <Benefits content={data.tabContent.usesAndBenefits} />
        )}
      </div>
    </div>
  );
}
