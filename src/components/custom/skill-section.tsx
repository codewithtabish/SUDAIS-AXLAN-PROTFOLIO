/** @format */

import IconCloud from '@/components/ui/icon-cloud';
import BlurFade from '../magicui/blur-fade';

// import IconCloud from '@/components/magicui/icon-cloud';

const slugs = [
  'python',
  'typescript',
  'javascript',
  'docker',
  'android',
  'postgresql',
  'firebase',
  'github',
 
  'kotlin',
  'androidstudio',
 
  'machine learning',
  'ai',

  // Added for AI / ML / Data Science
  'pandas',
  'numpy',
  'scikit-learn',
  'tensorflow',
  'keras',
  'pytorch',
  'matplotlib',
  'seaborn',
  'huggingface',
  'jupyter',
  'colab',
  'openai',
  'langchain',
  'mlflow',
  'xgboost',
  'lightgbm'
];


export function SkillIcons() {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div>
      {/* <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <h2 className='text-xl font-bold'>Skill</h2>
      </BlurFade> */}
      <div className='relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  mx-auto px-20 pb-20  '>
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
