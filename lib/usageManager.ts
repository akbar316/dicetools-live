
import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

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

const getGuestUsage = (): { count: number; date: string } => {
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

const getAuthUserUsage = async (userId: string): Promise<number> => {
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

export const showLimitModal = (onSignIn: () => void) => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl max-w-sm w-full text-center">
        <h2 class="text-2xl font-bold mb-4 dark:text-white">Daily Limit Reached</h2>
        <p class="text-slate-600 dark:text-slate-400 mb-6">You have reached your daily limit of ${DAILY_LIMIT} free AI tool uses. Please sign in to continue.</p>
        <button id="signInBtn" class="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold">Sign In</button>
        <button id="closeBtn" class="mt-4 text-sm text-slate-500 dark:text-slate-400">Close</button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('signInBtn')?.addEventListener('click', () => {
      onSignIn();
      modal.remove();
    });

    document.getElementById('closeBtn')?.addEventListener('click', () => {
      modal.remove();
    });
};
