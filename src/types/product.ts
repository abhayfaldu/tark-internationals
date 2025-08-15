export type ProductLayoutType =
  | 'standard'
  | 'tabbed'
  | 'cards'
  | 'simple-tabs'
  | 'extended-tabs'

export interface Ingredient {
  name: string
  value: string
}

export interface NutritionFacts {
  nutrients?: Ingredient[]
  protein?: Ingredient[]
  vitamins?: Ingredient[]
  minerals?: Ingredient[]
  fat?: Ingredient[]
}

export interface Variety {
  id: number
  name: string
  description: string[]
  benefits?: string[]
  nutritionFacts?: NutritionFacts
}

export interface Specification {
  productName?: string
  origin?: string
  family?: string
  binomialName?: string
  nutrients?: Ingredient[]
  minerals?: string[]
  vitamins?: string[]
  protein?: string
  fats?: string
}

export interface TabContent {
  globalMarketDemand?: string[]
  specification?: Specification
  ingredients?: {
    nutrients: {
      calories: string
      carbohydrates: string
      fiber: string
    }
    minerals: string[]
    vitamins: string[]
    protein: string
    fats: string
  }
  usesAndBenefits?: string[]
}

export interface CardSection {
  title: string
  description?: string
  category?: string
  items: {
    id: number
    title: string
    description: string
  }[]
}

export interface SimpleTabContent {
  globalMarketDemand: string[]
  specification: {
    productName: string
    origin: string
    family: string
    binomialName: string
  }
  ingredients: {
    nutrients: {
      calories: string
      carbohydrates: string
      fiber: string
    }
    minerals: string[]
    vitamins: string[]
    protein: string
    fats: string
  }
  usesAndBenefits: {
    uses: string[]
  }
}

export interface ExtendedTabContent {
  description: string[]
  history: string[]
  specification: {
    productName: string
    origin: string
    family: string
    binomialName: string
  }
  features: {
    color: string
    tasteAndSmell: string
    quality: string
  }
  ingredients: {
    nutrients: {
      calories: string
      carbohydrates: string
      fiber: string
    }
    minerals: string[]
    vitamins: string[]
    protein: string
    fats: string
  }
  usesAndBenefits: {
    uses: string[]
    healthBenefits: string[]
  }
}

export interface ProductData {
  title: string
  layoutType: ProductLayoutType
  headerImage: string
  description: string[]
  nutritionFacts?: NutritionFacts
  varieties?: Variety[]
  conclusion: string[]
  tabContent?: TabContent
  cardSections?: CardSection[]
  simpleTabContent?: SimpleTabContent
  extendedTabContent?: ExtendedTabContent
}

export interface Product {
  name: string
  img: string
  category?: string
  slug?: string
}

export interface ProductCategoryData {
  headerImg: string
  headerText: string
  descTitle: string
  descText: string[]
  products: Array<{
    slug: string
    name: string
    img: string
    data?: ProductData
  }>
}
