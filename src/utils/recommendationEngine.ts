import { LearningContent } from "@/data/learningContent";

// Interface for user preferences
export interface UserPreferences {
  interests: string[];
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  contentType: 'Video' | 'Article' | 'Course' | 'Tutorial' | 'Book' | 'Any';
}

// Interface for recommendation results
export interface RecommendationResult {
  content: LearningContent;
  score: number;
  matchedTags: string[];
}

/**
 * Calculate TF-IDF score for a document
 * @param term - The term to calculate TF-IDF for
 * @param document - The document (content tags and description)
 * @param corpus - All documents in the corpus
 * @returns TF-IDF score
 */
function calculateTFIDF(term: string, document: string[], corpus: string[][]): number {
  // Term Frequency (TF)
  const termCount = document.filter(word => word.toLowerCase() === term.toLowerCase()).length;
  const tf = termCount / document.length;
  
  // Inverse Document Frequency (IDF)
  const documentsWithTerm = corpus.filter(doc => 
    doc.some(word => word.toLowerCase() === term.toLowerCase())
  ).length;
  const idf = Math.log(corpus.length / (documentsWithTerm || 1));
  
  return tf * idf;
}

/**
 * Calculate cosine similarity between two vectors
 * @param vectorA - First vector
 * @param vectorB - Second vector
 * @returns Cosine similarity score (0-1)
 */
function cosineSimilarity(vectorA: number[], vectorB: number[]): number {
  const dotProduct = vectorA.reduce((sum, a, i) => sum + a * vectorB[i], 0);
  const magnitudeA = Math.sqrt(vectorA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vectorB.reduce((sum, b) => sum + b * b, 0));
  
  if (magnitudeA === 0 || magnitudeB === 0) return 0;
  return Math.abs(dotProduct / (magnitudeA * magnitudeB));
}

/**
 * Create a TF-IDF vector for content based on user interests
 * @param content - Learning content item
 * @param userInterests - User's interests
 * @param corpus - All content corpus
 * @returns TF-IDF vector
 */
function createTFIDFVector(
  content: LearningContent, 
  userInterests: string[], 
  corpus: string[][]
): number[] {
  const contentTerms = [
    ...content.tags.map(tag => tag.toLowerCase()),
    ...content.title.toLowerCase().split(' '),
    ...content.description.toLowerCase().split(' ')
  ];
  
  return userInterests.map(interest => 
    calculateTFIDF(interest.toLowerCase(), contentTerms, corpus)
  );
}

/**
 * Create user preference vector based on interests
 * @param userInterests - User's interests
 * @returns User preference vector
 */
function createUserVector(userInterests: string[]): number[] {
  // Give equal weight to all user interests
  return userInterests.map(() => 1);
}

/**
 * Calculate additional relevance score based on exact matches
 * @param content - Learning content item
 * @param userPreferences - User preferences
 * @returns Additional relevance score
 */
function calculateAdditionalRelevance(
  content: LearningContent, 
  userPreferences: UserPreferences
): number {
  let score = 0;
  
  // Skill level match (higher weight for exact match)
  if (content.skillLevel === userPreferences.skillLevel) {
    score += 0.3;
  } else if (
    (userPreferences.skillLevel === 'Intermediate' && content.skillLevel === 'Beginner') ||
    (userPreferences.skillLevel === 'Advanced' && content.skillLevel === 'Intermediate')
  ) {
    score += 0.1; // Partial match for progressive difficulty
  }
  
  // Content type match
  if (userPreferences.contentType === 'Any' || content.type === userPreferences.contentType) {
    score += 0.2;
  }
  
  // Tag matching bonus
  const matchedTags = content.tags.filter(tag => 
    userPreferences.interests.some(interest => 
      interest.toLowerCase() === tag.toLowerCase()
    )
  );
  score += matchedTags.length * 0.1;
  
  return Math.min(score, 1); // Cap at 1
}

/**
 * Get learning content recommendations based on user preferences
 * @param userPreferences - User's learning preferences
 * @param allContent - All available learning content
 * @param topN - Number of recommendations to return (default: 5)
 * @returns Array of recommended content with scores
 */
export function getRecommendations(
  userPreferences: UserPreferences,
  allContent: LearningContent[],
  topN: number = 5
): RecommendationResult[] {
  if (userPreferences.interests.length === 0) {
    return [];
  }
  
  // Create corpus for TF-IDF calculation
  const corpus = allContent.map(content => [
    ...content.tags.map(tag => tag.toLowerCase()),
    ...content.title.toLowerCase().split(' '),
    ...content.description.toLowerCase().split(' ')
  ]);
  
  // Create user preference vector
  const userVector = createUserVector(userPreferences.interests);
  
  // Calculate recommendations
  const recommendations: RecommendationResult[] = allContent.map(content => {
    // Create TF-IDF vector for this content
    const contentVector = createTFIDFVector(content, userPreferences.interests, corpus);
    
    // Calculate cosine similarity
    const similarity = cosineSimilarity(userVector, contentVector);
    
    // Calculate additional relevance
    const additionalRelevance = calculateAdditionalRelevance(content, userPreferences);
    
    // Combine scores (weighted average)
    const finalScore = (similarity * 0.7) + (additionalRelevance * 0.3);
    
    // Find matched tags
    const matchedTags = content.tags.filter(tag => 
      userPreferences.interests.some(interest => 
        interest.toLowerCase() === tag.toLowerCase()
      )
    );
    
    return {
      content,
      score: finalScore,
      matchedTags
    };
  });
  
  // Sort by score and return top N
  return recommendations
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);
}

/**
 * Get popular tags from the content database
 * @param allContent - All available learning content
 * @returns Array of popular tags
 */
export function getPopularTags(allContent: LearningContent[]): string[] {
  const tagCounts: { [tag: string]: number } = {};
  
  allContent.forEach(content => {
    content.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([tag]) => tag)
    .slice(0, 20); // Return top 20 tags
}