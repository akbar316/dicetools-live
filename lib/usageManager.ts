import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AI_TOOLS = [
  'ai-image-gen',
  'logo-generator',
  'ai-image-editor',
  'ai-hairstyle',
  'ai-summarizer',
  'ai-grammar',
  'ai-translator',
  'code-formatter',
  'json-validator',
  'meta-tag-gen',
  'citation-gen',
  'flashcard-maker',
  'math-solver',
  'seo-content-analyzer',
  'backlink-checker',
  'keyword-research',
  'article-idea-gen',
];

const DAILY_LIMIT = 5;

export const isAITool = (toolId: string) => AI_TOOLS.includes(toolId);

export const getGuestUsage = (): { count: number; date: string } => {
  const usage = localStorage.getItem('ai_usage');
  if (usage) {
    return JSON.parse(usage);
  }
  return { count: 0, date: new Date().toISOString().split('T')[0] };
};

const incrementGuestUsage = () => {
  const today = new Date().toISOString().split('T')[0];
  let usage = getGuestUsage();

  if (usage.date === today) {
    usage.count += 1;
  } else {
    usage = { count: 1, date: today };
  }
  localStorage.setItem('ai_usage', JSON.stringify(usage));
};

export const getAuthUserUsage = async (userId: string): Promise<number> => {
  const today = new Date().toISOString().split('T')[0];
  const docRef = doc(db, 'userUsage', `${userId}_${today}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().count;
  } else {
    await setDoc(docRef, { userId, date: today, count: 0 });
    return 0;
  }
};

const incrementAuthUserUsage = async (userId: string) => {
  const today = new Date().toISOString().split('T')[0];
  const docRef = doc(db, 'userUsage', `${userId}_${today}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, { count: docSnap.data().count + 1 });
  } else {
    await setDoc(docRef, { userId, date: today, count: 1 });
  }
};

export const checkUsageLimit = async (userId: string | null): Promise<boolean> => {
  if (userId) { // Authenticated user
    const count = await getAuthUserUsage(userId);
    return count >= DAILY_LIMIT;
  } else { // Guest user
    const usage = getGuestUsage();
    const today = new Date().toISOString().split('T')[0];
    return usage.date === today && usage.count >= DAILY_LIMIT;
  }
};

export const incrementUsage = async (userId: string | null) => {
  if (userId) {
    await incrementAuthUserUsage(userId);
  } else {
    incrementGuestUsage();
  }
};

export const showLimitModal = (onNavigate: () => void) => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl max-w-lg w-full transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modal-in">
    <div class="p-8 text-center">
      <h2 class="text-3xl font-extrabold mb-4 text-slate-900 dark:text-white">Free Limit Reached</h2>
      <p class="text-slate-600 dark:text-slate-400 mb-6 mx-auto max-w-sm">You've used your ${DAILY_LIMIT} daily free credits. Upgrade for more access.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left my-8">
        
        <div class="border dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-700/50">
          <h3 class="font-bold text-lg text-slate-800 dark:text-white">Free</h3>
          <p class="text-2xl font-bold text-slate-900 dark:text-white">$0<span class="text-sm font-medium text-slate-500">/day</span></p>
          <ul class="text-xs text-slate-600 dark:text-slate-400 mt-2 space-y-1">
            <li>- ${DAILY_LIMIT} AI Uses</li>
            <li>- Basic Tools</li>
          </ul>
        </div>

        <div class="border-2 border-primary-500 rounded-lg p-4 bg-white dark:bg-slate-800 relative">
            <div class="absolute top-0 -mt-3.5 w-full text-center"><span class="px-3 py-1 text-xs font-bold text-white bg-primary-500 rounded-full">POPULAR</span></div>
            <h3 class="font-bold text-lg text-primary-500">Standard</h3>
            <p class="text-2xl font-bold text-slate-900 dark:text-white">$9<span class="text-sm font-medium text-slate-500">/mo</span></p>
            <ul class="text-xs text-slate-600 dark:text-slate-400 mt-2 space-y-1">
                <li>- 500 AI Uses</li>
                <li>- Advanced Tools</li>
            </ul>
        </div>

        <div class="border dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-700/50">
            <h3 class="font-bold text-lg text-slate-800 dark:text-white">Premium</h3>
            <p class="text-2xl font-bold text-slate-900 dark:text-white">$29<span class="text-sm font-medium text-slate-500">/mo</span></p>
            <ul class="text-xs text-slate-600 dark:text-slate-400 mt-2 space-y-1">
                <li>- Unlimited AI Uses</li>
                <li>- All Tools</li>
            </ul>
        </div>

      </div>

      <button id="upgradeBtn" class="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow w-full">View Pricing & Upgrade</button>
      <button id="closeBtn" class="mt-4 text-sm text-slate-500 dark:text-slate-400 hover:underline">Maybe later</button>
    </div>
  </div>

  <style>
    @keyframes modal-in {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    .animate-modal-in { animation: modal-in 0.3s forwards; }
  </style>
    `;
    document.body.appendChild(modal);

    document.getElementById('upgradeBtn')?.addEventListener('click', () => {
      onNavigate();
      modal.remove();
    });

    document.getElementById('closeBtn')?.addEventListener('click', () => {
      modal.remove();
    });
};
