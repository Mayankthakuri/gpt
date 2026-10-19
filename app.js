// ─── Provider catalog (open-source first) ─────────────
const PROVIDERS = {
  ollama: {
    name: 'Ollama', kind: 'local', baseUrl: 'http://localhost:11434/v1',
    needsKey: false, pricing: 'Local',
    blurb: 'Runs on your machine — free, private, offline.',
    models: [
      { id: 'llama3.2', name: 'Llama 3.2' },
      { id: 'llama3.1', name: 'Llama 3.1' },
      { id: 'llama3.3', name: 'Llama 3.3' },
      { id: 'deepseek-r1', name: 'DeepSeek R1' },
      { id: 'deepseek-coder-v2', name: 'DeepSeek Coder V2' },
      { id: 'qwen2.5', name: 'Qwen 2.5' },
      { id: 'qwen2.5-coder', name: 'Qwen 2.5 Coder' },
      { id: 'gemma3', name: 'Gemma 3' },
      { id: 'mistral:latest', name: 'Mistral latest' },
      { id: 'mixtral', name: 'Mixtral 8x7B' },
      { id: 'phi3', name: 'Phi-3' },
      { id: 'codellama', name: 'CodeLlama' },
      { id: 'qwq', name: 'QwQ' },
      { id: 'llava', name: 'LLaVA (vision)' },
    ],
  },
  lmstudio: {
    name: 'LM Studio', kind: 'local', baseUrl: 'http://localhost:1234/v1',
    needsKey: false, pricing: 'Local',
    blurb: 'Local server — models you downloaded in LM Studio.',
    models: [{ id: 'local-model', name: 'Local model (scan to list)' }],
  },
  deepseek: {
    name: 'DeepSeek', kind: 'cloud', baseUrl: 'https://api.deepseek.com/v1',
    apiKeyUrl: 'https://platform.deepseek.com/api_keys',
    needsKey: true, pricing: 'Paid',
    blurb: 'Open-weight DeepSeek V3 & R1, cheap API.',
    models: [
      { id: 'deepseek-chat', name: 'DeepSeek Chat (V3)' },
      { id: 'deepseek-reasoner', name: 'DeepSeek Reasoner (R1)' },
    ],
  },
  openrouter: {
    name: 'OpenRouter', kind: 'cloud', baseUrl: 'https://openrouter.ai/api/v1',
    apiKeyUrl: 'https://openrouter.ai/keys',
    needsKey: true, pricing: 'Free + Paid',
    blurb: 'One key, hundreds of open models — many free.',
    models: [
      { id: 'meta-llama/llama-3.3-70b-instruct:free', name: 'Llama 3.3 70B (free)' },
      { id: 'deepseek/deepseek-chat-v3:free', name: 'DeepSeek V3 (free)' },
      { id: 'deepseek/deepseek-r1:free', name: 'DeepSeek R1 (free)' },
      { id: 'qwen/qwen3-235b-a22b:free', name: 'Qwen3 235B (free)' },
      { id: 'google/gemma-3-27b-it:free', name: 'Gemma 3 27B (free)' },
      { id: 'mistralai/mistral-small-3.2-24b-instruct:free', name: 'Mistral Small 3.2 (free)' },
      { id: 'moonshotai/kimi-k2:free', name: 'Kimi K2 (free)' },
      { id: 'z-ai/glm-4.5-air:free', name: 'GLM-4.5 Air (free)' },
    ],
  },
  groq: {
    name: 'Groq', kind: 'cloud', baseUrl: 'https://api.groq.com/openai/v1',
    apiKeyUrl: 'https://console.groq.com/keys',
    needsKey: true, pricing: 'Free tier',
    blurb: 'Blazing-fast inference on open models.',
    models: [
      { id: 'llama-3.3-70b-versatile', name: 'Llama 3.3 70B' },
      { id: 'llama-3.1-8b-instant', name: 'Llama 3.1 8B' },
      { id: 'deepseek-r1-distill-llama-70b', name: 'DeepSeek R1 Distill 70B' },
      { id: 'qwen/qwen3-32b', name: 'Qwen3 32B' },
      { id: 'gemma2-9b-it', name: 'Gemma 2 9B' },
    ],
  },
  together: {
    name: 'Together AI', kind: 'cloud', baseUrl: 'https://api.together.xyz/v1',
    apiKeyUrl: 'https://api.together.ai/settings/api-keys',
    needsKey: true, pricing: 'Free credit',
    blurb: 'Open-weight models, serverless.',
    models: [
      { id: 'meta-llama/Llama-3.3-70B-Instruct-Turbo', name: 'Llama 3.3 70B Turbo' },
      { id: 'deepseek-ai/DeepSeek-V3', name: 'DeepSeek V3' },
      { id: 'deepseek-ai/DeepSeek-R1', name: 'DeepSeek R1' },
      { id: 'Qwen/Qwen2.5-72B-Instruct-Turbo', name: 'Qwen 2.5 72B' },
      { id: 'mistralai/Mistral-Small-24B-Instruct-2501', name: 'Mistral Small 24B' },
    ],
  },
  mistral: {
    name: 'Mistral', kind: 'cloud', baseUrl: 'https://api.mistral.ai/v1',
    apiKeyUrl: 'https://console.mistral.ai/api-keys',
    needsKey: true, pricing: 'Free tier',
    blurb: 'Open-weight Mistral models via official API.',
    models: [
      { id: 'mistral-small-latest', name: 'Mistral Small' },
      { id: 'open-mistral-nemo', name: 'Mistral Nemo (open)' },
      { id: 'mistral-large-latest', name: 'Mistral Large' },
    ],
  },
  huggingface: {
    name: 'Hugging Face', kind: 'cloud', baseUrl: 'https://router.huggingface.co/v1',
    apiKeyUrl: 'https://huggingface.co/settings/tokens',
    needsKey: true, pricing: 'Free tier',
    blurb: 'Inference API for open models.',
    models: [
      { id: 'meta-llama/Llama-3.3-70B-Instruct', name: 'Llama 3.3 70B' },
      { id: 'Qwen/Qwen2.5-72B-Instruct', name: 'Qwen 2.5 72B' },
      { id: 'mistralai/Mistral-7B-Instruct-v0.3', name: 'Mistral 7B Instruct' },
      { id: 'deepseek-ai/DeepSeek-R1', name: 'DeepSeek R1' },
    ],
  },
  openai: {
    name: 'OpenAI', kind: 'cloud', baseUrl: 'https://api.openai.com/v1',
    apiKeyUrl: 'https://platform.openai.com/api-keys',
    needsKey: true, pricing: 'Paid',
    blurb: 'GPT models (proprietary).',
    models: [
      { id: 'gpt-4o', name: 'GPT-4o' },
      { id: 'gpt-4o-mini', name: 'GPT-4o mini' },
      { id: 'gpt-4-turbo', name: 'GPT-4 Turbo' },
      { id: 'o1-preview', name: 'o1-preview' },
      { id: 'o3-mini', name: 'o3-mini' },
    ],
  },
  custom: {
    name: 'Custom endpoint', kind: 'cloud', baseUrl: '',
    needsKey: false, pricing: 'Unknown',
    blurb: 'Any OpenAI-compatible server (llama.cpp, vLLM, …).',
    models: [{ id: 'default', name: 'Custom model' }],
  },
  gemini: {
    name: 'Google Gemini', kind: 'cloud', baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai',
    apiKeyUrl: 'https://aistudio.google.com/app/apikey',
    needsKey: true, pricing: 'Paid', blurb: 'Google Gemini models through an OpenAI-compatible API.',
    models: [{ id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash' }, { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro' }],
  },
  anthropic: {
    name: 'Anthropic', kind: 'cloud', baseUrl: 'https://api.anthropic.com/v1',
    apiKeyUrl: 'https://console.anthropic.com/settings/keys',
    needsKey: true, pricing: 'Paid', blurb: 'Claude models for thoughtful, capable responses.',
    models: [{ id: 'claude-3-5-sonnet-latest', name: 'Claude 3.5 Sonnet' }, { id: 'claude-3-5-haiku-latest', name: 'Claude 3.5 Haiku' }],
  },
};

const PROVIDER_ORDER = ['openai', 'gemini', 'anthropic', 'openrouter', 'groq', 'huggingface', 'ollama', 'lmstudio', 'custom'];
const OLLAMA_MODEL_CATALOG = PROVIDERS.ollama.models.map(model => model.id);

// ─── State ────────────────────────────────────────────
function loadStoredJson(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    const value = JSON.parse(raw);
    return value !== null && typeof value === 'object' ? value : fallback;
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}

function getValidModel(pid, model) {
  if (typeof model !== 'string' || !model.trim()) {
    return PROVIDERS[pid]?.models[0]?.id;
  }
  // Local servers can expose models that are not in the initial catalog.
  if (PROVIDERS[pid]?.kind === 'local' || pid === 'custom') return model;
  return PROVIDERS[pid]?.models.some(item => item.id === model)
    ? model
    : PROVIDERS[pid]?.models[0]?.id;
}

const storedProvider = localStorage.getItem('och_provider');
const initialProvider = PROVIDERS[storedProvider] ? storedProvider : 'ollama';
const storedModel = localStorage.getItem('och_model');
const defaultModel = 'mistral:latest';
const selectedModel = storedModel === 'llama3.2' && initialProvider === 'ollama' ? defaultModel : storedModel;
const storedConversations = loadStoredJson('och_conversations', []);

const state = {
  conversations: Array.isArray(storedConversations) ? storedConversations : [],
  activeId: localStorage.getItem('och_active') || null,
  settings: loadStoredJson('och_settings', {}),
  provider: initialProvider,
  model: getValidModel(initialProvider, selectedModel) || defaultModel,
  keys: loadStoredJson('och_keys', {}),
  endpoints: loadStoredJson('och_endpoints', {}),
  localStatus: {},
  isGenerating: false,
  abortController: null,
  streamingMsgId: null,
  pendingEdits: {},
};

localStorage.setItem('och_provider', state.provider);
localStorage.setItem('och_model', state.model);

function saveKeys() { localStorage.setItem('och_keys', JSON.stringify(state.keys)); }
function saveEndpoints() { localStorage.setItem('och_endpoints', JSON.stringify(state.endpoints)); }
function providerBaseUrl(pid) {
  const p = PROVIDERS[pid];
  if (pid === 'ollama' && state.endpoints.ollama) return state.endpoints.ollama.replace(/\/$/, '');
  if (pid === 'lmstudio' && state.endpoints.lmstudio) return state.endpoints.lmstudio.replace(/\/$/, '');
  if (pid === 'custom') return (state.endpoints.custom || '').replace(/\/$/, '');
  return p.baseUrl;
}

// Apply saved settings
Object.assign(state.settings, {
  theme: 'auto',
  fontSize: 'medium',
  ...state.settings,
});

// Apply font size
const fontSizes = { small: '14px', medium: '16px', large: '18px' };
document.documentElement.style.setProperty('--font-size', fontSizes[state.settings.fontSize] || '16px');

// ─── DOM refs ─────────────────────────────────────────
const $ = (s) => document.querySelector(s);
const sidebar = $('#sidebar');
const messagesArea = $('#messagesArea');
const messagesList = $('#messagesList');
const welcomeScreen = $('#welcomeScreen');
const composer = $('#composer');
const sendBtn = $('#sendBtn');
const stopBtn = $('#stopBtn');
const conversationList = $('#conversationList');

// ─── Persistence ──────────────────────────────────────
function saveConversations() {
  localStorage.setItem('och_conversations', JSON.stringify(state.conversations));
}
function saveActive() {
  localStorage.setItem('och_active', state.activeId);
}
function saveSettings() {
  localStorage.setItem('och_settings', JSON.stringify(state.settings));
  localStorage.setItem('och_model', state.model);
}

// ─── Theme ────────────────────────────────────────────
// Auto mode: light (white) during day 6 AM–6 PM, dark (black) at night.
// Toggle button switches between light/dark manually.
function getAutoTheme() {
  const hour = new Date().getHours();
  return (hour >= 6 && hour < 18) ? 'light' : 'dark';
}

function applyTheme(theme) {
  let effective = theme;
  if (theme === 'auto') {
    effective = getAutoTheme();
  }
  document.documentElement.setAttribute('data-theme', effective);
  state.settings.theme = theme;
  saveSettings();
}

applyTheme(state.settings.theme);

// Re-check auto theme every minute so it flips at 6 AM / 6 PM without reload
setInterval(() => {
  if (state.settings.theme === 'auto') {
    document.documentElement.setAttribute('data-theme', getAutoTheme());
  }
}, 60000);

// Toggle button: flip between light and dark manually (overrides auto)
$('#themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

// ─── Model selector (dynamic, provider-grouped) ───────
function renderModelDropdown() {
  const dd = $('#modelDropdown');
  dd.innerHTML = '';

  const tools = document.createElement('div');
  tools.className = 'model-dd-tools';
  const scanBtn = document.createElement('button');
  scanBtn.className = 'dd-tool-btn';
  scanBtn.textContent = '⟳ Scan local models';
  scanBtn.addEventListener('click', (e) => { e.stopPropagation(); scanLocalModels(); });
  tools.appendChild(scanBtn);
  dd.appendChild(tools);

  PROVIDER_ORDER.forEach(pid => {
    const p = PROVIDERS[pid];
    const head = document.createElement('div');
    head.className = 'model-group prov-head';
    const statusDot = p.kind === 'local'
      ? `<span class="status-dot ${state.localStatus[pid] ? 'on' : state.localStatus[pid] === false ? 'off' : ''}"></span>`
      : '';
    const badge = `<span class="badge ${p.kind}">${p.pricing}</span>`;
    head.innerHTML = `<span class="prov-name">${p.name}</span>${statusDot}${badge}`;
    dd.appendChild(head);

    if (p.blurb) {
      const blurb = document.createElement('div');
      blurb.className = 'prov-blurb';
      blurb.textContent = p.blurb;
      dd.appendChild(blurb);
    }

    if (!p.models.length) {
      const empty = document.createElement('div');
      empty.className = 'model-empty';
      empty.textContent = 'No models yet — scan or add one in Settings.';
      dd.appendChild(empty);
      return;
    }

    p.models.forEach(m => {
      const opt = document.createElement('button');
      opt.className = 'model-option' + (state.provider === pid && state.model === m.id ? ' active' : '');
      opt.innerHTML = `<span>${m.name}</span><small>${m.id}${p.kind === 'local' ? ' · on your machine' : ''}</small>`;
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        state.provider = pid;
        state.model = m.id;
        localStorage.setItem('och_provider', pid);
        localStorage.setItem('och_model', m.id);
        updateModelLabel();
        renderModelDropdown();
        dd.classList.remove('open');
      });
      dd.appendChild(opt);
    });
  });
}

function updateModelLabel() {
  const p = PROVIDERS[state.provider];
  $('#modelName').textContent = `${p.name} · ${state.model}`;
}

$('#modelBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  const dd = $('#modelDropdown');
  const opening = !dd.classList.contains('open');
  dd.classList.toggle('open');
  if (opening) {
    renderModelDropdown();
    if (PROVIDERS[state.provider].kind === 'local') pingLocal(state.provider);
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.model-selector')) {
    $('#modelDropdown').classList.remove('open');
  }
});

// ─── Local endpoint scanning ──────────────────────────
async function fetchLocalModels(pid) {
  const base = providerBaseUrl(pid);
  if (!base) return [];
  const res = await fetch(`${base}/models`, { signal: AbortSignal.timeout(3000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return (data.data || []).map(m => ({ id: m.id, name: m.id.replace(/[:\/]/g, ' · ') }));
}

async function refreshOpenRouterModels() {
  if (!state.keys.openrouter) return false;
  try {
    const response = await fetch(`${PROVIDERS.openrouter.baseUrl}/models`, {
      headers: { Authorization: `Bearer ${state.keys.openrouter}` },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const models = (data.data || [])
      .filter(model => {
        if (!model.id || model.id.includes(':extended')) return false;
        if (model.id.endsWith(':free')) return true;
        const prompt = Number(model.pricing?.prompt);
        const completion = Number(model.pricing?.completion);
        return Number.isFinite(prompt) && Number.isFinite(completion) && prompt === 0 && completion === 0;
      })
      .map(model => ({ id: model.id, name: model.name || model.id }))
      .sort((a, b) => a.name.localeCompare(b.name));
    if (!models.length) return false;
    PROVIDERS.openrouter.models = models;
    if (!models.some(model => model.id === state.model)) {
      state.model = models[0].id;
      localStorage.setItem('och_model', state.model);
    }
    return true;
  } catch {
    return false;
  }
}

async function pingLocal(pid) {
  try {
    const models = await fetchLocalModels(pid);
    state.localStatus[pid] = true;
    if (models.length) PROVIDERS[pid].models = models;
    return models;
  } catch {
    state.localStatus[pid] = false;
    return null;
  }
}

async function scanLocalModels() {
  const statusEl = $('#localStatus');
  if (statusEl) statusEl.textContent = 'Scanning…';
  const results = await Promise.all(['ollama', 'lmstudio'].map(pid => pingLocal(pid)));
  const summary = ['ollama', 'lmstudio']
    .map((pid, i) => `${PROVIDERS[pid].name}: ${results[i] ? `${results[i].length} model(s)` : 'not reachable'}`)
    .join('  ·  ');
  if (statusEl) statusEl.textContent = summary;
  renderModelDropdown();
  showToast(results.some(Boolean) ? 'Local models loaded' : 'No local server reachable — is Ollama/LM Studio running?');
}

async function installOllamaModels() {
  const button = $('#setupOllamaBtn');
  const statusEl = $('#localStatus');
  const models = OLLAMA_MODEL_CATALOG;
  const base = providerBaseUrl('ollama').replace(/\/v1\/?$/, '');
  if (!base) throw new Error('Set the Ollama endpoint in Settings first.');

  button.disabled = true;
  try {
    for (let index = 0; index < models.length; index += 1) {
      const model = models[index];
      statusEl.textContent = `Installing ${model} (${index + 1}/${models.length})…`;
      const response = await fetch(`${base}/api/pull`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, stream: true }),
      });
      if (!response.ok) {
        const detail = (await response.text()).slice(0, 200);
        throw new Error(`Ollama could not install ${model} (HTTP ${response.status})${detail ? `: ${detail}` : ''}`);
      }
      if (!response.body) throw new Error(`Ollama returned no progress for ${model}.`);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        const latest = lines.map(line => {
          try { return JSON.parse(line); } catch { return null; }
        }).filter(Boolean).pop();
        if (latest?.status) {
          const progress = latest.total && latest.completed
            ? ` ${Math.round((latest.completed / latest.total) * 100)}%`
            : '';
          statusEl.textContent = `Installing ${model} (${index + 1}/${models.length})… ${latest.status}${progress}`;
        }
      }
    }
    await pingLocal('ollama');
    renderModelDropdown();
    renderModelOptions($('#defaultModelSelect'));
    statusEl.textContent = `Installed ${models.length} Ollama models.`;
    showToast('Ollama models installed');
  } catch (error) {
    statusEl.textContent = error instanceof TypeError
      ? 'Could not reach Ollama. Start Ollama and allow browser access, then retry.'
      : error.message;
    showToast('Ollama model setup failed');
  } finally {
    button.disabled = false;
  }
}

// ─── Sidebar toggle ───────────────────────────────────
$('#menuBtn').addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  let overlay = document.querySelector('.sidebar-overlay');
  if (!overlay && window.innerWidth <= 768) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => {
      sidebar.classList.add('collapsed');
      overlay.classList.remove('visible');
    });
  }
  if (overlay) {
    overlay.classList.toggle('visible', !sidebar.classList.contains('collapsed'));
  }
});

// ─── Conversations ────────────────────────────────────
function getActiveConversation() {
  return state.conversations.find(c => c.id === state.activeId);
}

function createConversation() {
  const conv = {
    id: crypto.randomUUID(),
    title: 'New conversation',
    model: state.model,
    createdAt: Date.now(),
    messages: [],
  };
  state.conversations.unshift(conv);
  state.activeId = conv.id;
  saveConversations();
  saveActive();
  renderConversations();
  showWelcome();
  return conv;
}

function renderConversations() {
  conversationList.innerHTML = '';
  const sorted = [...state.conversations].sort((a, b) => b.createdAt - a.createdAt);

  sorted.forEach(conv => {
    const item = document.createElement('div');
    item.className = 'conversation-item' + (conv.id === state.activeId ? ' active' : '');

    const titleSpan = document.createElement('span');
    titleSpan.className = 'conv-title';
    titleSpan.textContent = conv.title;

    const actions = document.createElement('div');
    actions.className = 'conv-actions';

    const renameBtn = document.createElement('button');
    renameBtn.className = 'conv-action-btn';
    renameBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9.5 2.5l2 2L5 11H3v-2l6.5-6.5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>';
    renameBtn.title = 'Rename';
    renameBtn.addEventListener('click', (e) => { e.stopPropagation(); openRenameModal(conv); });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'conv-action-btn';
    deleteBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 3.5h10M5.5 3.5V2.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1M3.5 3.5l.5 7a1 1 0 001 .9h4a1 1 0 001-.9l.5-7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>';
    deleteBtn.title = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Delete this conversation?')) {
        deleteConversation(conv.id);
      }
    });

    actions.append(renameBtn, deleteBtn);
    item.append(titleSpan, actions);

    item.addEventListener('click', () => {
      state.activeId = conv.id;
      saveActive();
      renderConversations();
      showConversation(conv);
      if (window.innerWidth <= 768) {
        sidebar.classList.add('collapsed');
        document.querySelector('.sidebar-overlay')?.classList.remove('visible');
      }
    });

    conversationList.appendChild(item);
  });
}

function deleteConversation(id) {
  state.conversations = state.conversations.filter(c => c.id !== id);
  if (state.activeId === id) {
    state.activeId = null;
    saveActive();
    showWelcome();
  }
  saveConversations();
  renderConversations();
}

function openRenameModal(conv) {
  const modal = $('#renameModal');
  const input = $('#renameInput');
  modal.classList.add('open');
  input.value = conv.title;
  input.focus();

  $('#renameSave').onclick = () => {
    const title = input.value.trim();
    if (title) {
      conv.title = title;
      saveConversations();
      renderConversations();
    }
    modal.classList.remove('open');
  };

  $('#renameCancel').onclick = () => modal.classList.remove('open');
  $('#renameClose').onclick = () => modal.classList.remove('open');
}

$('#clearChatsBtn').addEventListener('click', () => {
  if (confirm('Delete all conversations? This cannot be undone.')) {
    stopGenerating();
    state.conversations = [];
    state.activeId = null;
    saveConversations();
    saveActive();
    renderConversations();
    showWelcome();
  }
});

$('#newChatBtn').addEventListener('click', () => {
  stopGenerating();
  createConversation();
});

// ─── Welcome screen ───────────────────────────────────
function showWelcome() {
  welcomeScreen.style.display = 'flex';
  messagesList.innerHTML = '';
  messagesList.style.display = 'none';
}

document.querySelectorAll('.suggestion-card').forEach(card => {
  card.addEventListener('click', () => {
    const prompt = card.dataset.prompt;
    composer.value = prompt;
    autoResize();
    composer.focus();
  });
});

// ─── Show conversation ────────────────────────────────
function showConversation(conv) {
  welcomeScreen.style.display = 'none';
  messagesList.style.display = 'flex';
  messagesList.innerHTML = '';

  conv.messages.forEach(msg => appendMessage(msg, false));
  scrollToBottom();
}

function appendMessage(msg, animate = true) {
  if (!animate) {
    messagesList.innerHTML = '';
    getActiveConversation().messages.forEach(m => renderMessageElement(m));
    return;
  }
  const el = renderMessageElement(msg);
  messagesList.appendChild(el);
  scrollToBottom();
  return el;
}

function renderMessageElement(msg) {
  const div = document.createElement('div');
  div.className = `message ${msg.role}`;
  div.dataset.msgId = msg.id;

  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = msg.role === 'user' ? 'U' : 'AI';

  const content = document.createElement('div');
  content.className = 'message-content';

  const textDiv = document.createElement('div');
  textDiv.className = 'message-text';

  if (msg.role === 'assistant' && msg.isStreaming) {
    textDiv.innerHTML = msg.content
      ? formatMessage(msg.content) + '<span class="streaming-cursor"></span>'
      : '<span class="thinking-tag" role="status" aria-label="Thinking"><span class="thinking-dots"><i></i><i></i><i></i></span> Thinking…</span>';
  } else if (msg.isError) {
    textDiv.className = 'message-text';
    textDiv.textContent = msg.content;
    div.classList.add('error');
  } else {
    textDiv.innerHTML = formatMessage(msg.content);
    if (msg.isStopped) {
      const badge = document.createElement('span');
      badge.className = 'stopped-badge';
      badge.textContent = 'stopped';
      textDiv.appendChild(document.createElement('br'));
      textDiv.appendChild(badge);
    }
    if (msg.edited) {
      const tag = document.createElement('span');
      tag.className = 'edited-tag';
      tag.textContent = 'edited';
      textDiv.appendChild(tag);
    }
  }

  content.appendChild(textDiv);

  // Action buttons
  if (!msg.isStreaming) {
    const actions = document.createElement('div');
    actions.className = 'message-actions';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'msg-action-btn';
    copyBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M8.5 3.5v-.5a1 1 0 00-1-1h-5a1 1 0 00-1 1v5a1 1 0 001 1h.5" stroke="currentColor" stroke-width="1.2"/></svg> Copy';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(msg.content);
      showToast('Copied to clipboard');
    });
    actions.appendChild(copyBtn);

    if (msg.role === 'user') {
      const editBtn = document.createElement('button');
      editBtn.className = 'msg-action-btn';
      editBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8.5 1.5l2 2L4 10H2v-2l6.5-6.5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg> Edit';
      editBtn.addEventListener('click', () => editAndResend(msg));
      actions.appendChild(editBtn);
    }

    if (msg.role === 'assistant' && getActiveConversation().messages.indexOf(msg) === getActiveConversation().messages.length - 1) {
      const regenBtn = document.createElement('button');
      regenBtn.className = 'msg-action-btn';
      regenBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 6a4 4 0 11-1.2-2.85M10 1.5V4H7.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Regenerate';
      regenBtn.addEventListener('click', () => regenerate());
      actions.appendChild(regenBtn);
    }

    content.appendChild(actions);
  }

  div.append(avatar, content);
  return div;
}

function updateStreamingMessage(msgId, content, done = false) {
  const el = messagesList.querySelector(`[data-msg-id="${msgId}"]`);
  if (!el) return;
  const textDiv = el.querySelector('.message-text');
  if (done) {
    textDiv.innerHTML = formatMessage(content);
    el.querySelector('.streaming-cursor')?.remove();
  } else {
    textDiv.innerHTML = content
      ? formatMessage(content) + '<span class="streaming-cursor"></span>'
      : '<span class="thinking-tag" role="status" aria-label="Thinking"><span class="thinking-dots"><i></i><i></i><i></i></span> Thinking…</span>';
  }
  if (done) scrollToBottom();
}

// ─── Composer ─────────────────────────────────────────
composer.addEventListener('input', autoResize);
composer.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    if (!state.isGenerating) handleSend();
  }
});

function autoResize() {
  composer.style.height = 'auto';
  composer.style.height = Math.min(composer.scrollHeight, 200) + 'px';
  sendBtn.disabled = composer.value.trim().length === 0;
}

sendBtn.addEventListener('click', handleSend);
stopBtn.addEventListener('click', stopGenerating);

// ─── Send / Stream ────────────────────────────────────
async function handleSend() {
  const text = composer.value.trim();
  if (!text || state.isGenerating) return;

  let conv = getActiveConversation();
  if (!conv) conv = createConversation();

  welcomeScreen.style.display = 'none';
  messagesList.style.display = 'flex';

  const userMsg = {
    id: crypto.randomUUID(),
    role: 'user',
    content: text,
    createdAt: Date.now(),
  };
  conv.messages.push(userMsg);
  if (conv.title === 'New conversation') {
    conv.title = text.slice(0, 40) + (text.length > 40 ? '…' : '');
    saveConversations();
    renderConversations();
  }
  appendMessage(userMsg);

  composer.value = '';
  autoResize();
  await generateResponse(conv);
}

async function generateResponse(conv, retryMsgId = null) {
  state.isGenerating = true;
  sendBtn.style.display = 'none';
  stopBtn.style.display = 'flex';
  state.abortController = new AbortController();

  const messages = conv.messages
    .filter(m => !m.isError && !m.isStopped && !m.isStreaming)
    .map(m => ({ role: m.role, content: m.content }));

  const assistantMsg = {
    id: crypto.randomUUID(),
    role: 'assistant',
    content: '',
    isStreaming: true,
    createdAt: Date.now(),
    model: state.model,
  };

  if (!retryMsgId) {
    conv.messages.push(assistantMsg);
    appendMessage(assistantMsg);
  } else {
    const idx = conv.messages.findIndex(m => m.id === retryMsgId);
    if (idx !== -1) {
      conv.messages[idx] = assistantMsg;
      const oldEl = messagesList.querySelector(`[data-msg-id="${retryMsgId}"]`);
      if (oldEl) oldEl.remove();
      appendMessage(assistantMsg);
    }
  }

  state.streamingMsgId = assistantMsg.id;

  try {
    const pid = state.provider;
    const provider = PROVIDERS[pid];
    if (pid === 'openrouter') {
      const refreshed = await refreshOpenRouterModels();
      if (refreshed) {
        updateModelLabel();
        renderModelDropdown();
      } else if (!PROVIDERS.openrouter.models.some(model => model.id === state.model)) {
        state.model = PROVIDERS.openrouter.models[0].id;
        localStorage.setItem('och_model', state.model);
        updateModelLabel();
      }
    }
    const baseUrl = providerBaseUrl(pid);
    if (!baseUrl) throw Object.assign(new Error('No base URL set for this endpoint — configure it in Settings.'), { userFix: true });

    const headers = { 'Content-Type': 'application/json' };
    const apiKey = state.keys[pid];
    if (provider.needsKey) {
      if (!apiKey) {
        const setupUrl = provider.apiKeyUrl ? ` Get one at ${provider.apiKeyUrl}` : '';
        throw Object.assign(new Error(`Missing API key for ${provider.name}. Open Settings → AI Provider → ${provider.name}, follow the API key link, paste the key, and click Save.${setupUrl}`), { userFix: true });
      }
      headers['Authorization'] = `Bearer ${apiKey}`;
    } else if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    }
    if (pid === 'openrouter') {
      headers['HTTP-Referer'] = location.origin;
      headers['X-Title'] = 'OpenChat';
    }

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: state.model,
        messages,
        stream: true,
        temperature: 0.7,
        max_tokens: 4096,
      }),
      signal: state.abortController.signal,
    });

    if (!response.ok) {
      let detail = '';
      try { detail = (await response.text()).slice(0, 300); } catch {}
      throw Object.assign(new Error(
        response.status === 401 || response.status === 403
          ? `${provider.name} rejected the API key (HTTP ${response.status}). Check it in Settings.`
          : response.status === 404
          ? `Model "${state.model}" not found on ${provider.name} (HTTP 404). ${provider.kind === 'local' ? 'Hit "Scan local models" or `ollama pull` it.' : 'Pick another model.'}`
          : response.status === 429
          ? `${provider.name} rate limited (HTTP 429) — wait a moment and retry.`
          : `${provider.name} error HTTP ${response.status}${detail ? `: ${detail}` : ''}`
      ), { status: response.status });
    }

    if (!response.body) {
      throw new Error(`${provider.name} returned an empty response.`);
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/event-stream')) {
      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      if (typeof content !== 'string' || !content) {
        throw new Error(`${provider.name} returned no assistant message.`);
      }
      assistantMsg.content = content;
      updateStreamingMessage(assistantMsg.id, content);
      finishGeneration(conv, assistantMsg, false);
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data:')) continue;
        const data = trimmed.slice(5).trim();
        if (data === '[DONE]') return finishGeneration(conv, assistantMsg, false);

        try {
          const parsed = JSON.parse(data);
          const delta = parsed.choices?.[0]?.delta?.content || '';
          if (delta) {
            assistantMsg.content += delta;
            updateStreamingMessage(assistantMsg.id, assistantMsg.content);
          }
        } catch {}
      }
    }
    finishGeneration(conv, assistantMsg, false);
  } catch (err) {
    if (err.name === 'AbortError') {
      assistantMsg.isStreaming = false;
      assistantMsg.isStopped = true;
      updateStreamingMessage(assistantMsg.id, assistantMsg.content, true);
      finishGeneration(conv, assistantMsg, true);
    } else {
      assistantMsg.isStreaming = false;
      assistantMsg.isError = true;
      const pid = state.provider;
      const p = PROVIDERS[pid];
      let msg;
      if (err instanceof TypeError || /Failed to fetch|NetworkError|load failed/i.test(err.message)) {
        msg = p.kind === 'local'
          ? `Could not reach ${p.name} at ${providerBaseUrl(pid)}. Make sure it's running (e.g. \`ollama serve\` or LM Studio's local server), then retry.`
          : `Could not reach ${p.name} — network blocked or CORS refused. Cloud providers may need a proxy; local models (Ollama / LM Studio) work offline.`;
      } else if (err.userFix) {
        msg = err.message;
      } else {
        msg = err.message;
      }
      assistantMsg.content = msg;
      updateStreamingMessage(assistantMsg.id, assistantMsg.content, true);
      finishGeneration(conv, assistantMsg, true);
    }
  }
}

function finishGeneration(conv, msg, stopped) {
  msg.isStreaming = false;
  // Normal streams finish without another delta, so remove the cursor here.
  updateStreamingMessage(msg.id, msg.content, true);
  if (!stopped && !msg.isError && !msg.isStopped) {
    // fully done
  }
  state.isGenerating = false;
  state.streamingMsgId = null;
  state.abortController = null;
  sendBtn.style.display = 'flex';
  stopBtn.style.display = 'none';
  saveConversations();
  renderConversations();
  scrollToBottom();
}

function stopGenerating() {
  if (state.abortController) {
    state.abortController.abort();
    state.abortController = null;
  }
}

// ─── Edit & Resend ────────────────────────────────────
function editAndResend(userMsg) {
  if (state.isGenerating) return;
  const conv = getActiveConversation();
  if (!conv) return;

  const idx = conv.messages.findIndex(m => m.id === userMsg.id);
  if (idx === -1) return;

  // Remove all messages after the edited one
  conv.messages = conv.messages.slice(0, idx);
  conv.messages.push({ ...userMsg, id: crypto.randomUUID(), edited: true });

  // Re-render messages
  messagesList.innerHTML = '';
  conv.messages.forEach(m => renderMessageElement(m));
  scrollToBottom();
  saveConversations();

  generateResponse(conv);
}

// ─── Regenerate ───────────────────────────────────────
function regenerate() {
  if (state.isGenerating) return;
  const conv = getActiveConversation();
  if (!conv) return;

  const lastAssistant = [...conv.messages].reverse().find(m => m.role === 'assistant');
  if (!lastAssistant) return;

  const idx = conv.messages.findIndex(m => m.id === lastAssistant.id);
  conv.messages = conv.messages.slice(0, idx);
  messagesList.innerHTML = '';
  conv.messages.forEach(m => renderMessageElement(m));
  scrollToBottom();
  saveConversations();

  generateResponse(conv);
}

// ─── Settings workspace ───────────────────────────────
const settingDefaults = {
  language: 'English', defaultProvider: state.provider, defaultModel: state.model, sendOnEnter: true,
  welcomeScreen: true, spellcheck: true, autoUpdates: true, theme: state.settings.theme,
  accentColor: '#10a37f', fontSize: state.settings.fontSize, chatDensity: 'Comfortable', codeTheme: 'Midnight',
  timestamps: true, modelName: true, animations: true, reduceMotion: false, maxTokens: 4096,
  temperature: .7, topP: 1, frequencyPenalty: 0, presencePenalty: 0, streaming: true,
  systemPrompt: 'You are a helpful, concise assistant.', autoTitles: true, saveHistory: true, tokenUsage: false,
  estimatedCost: false, autoRetry: true, retryCount: 3, markdown: true, codeHighlight: true, regeneration: true,
  editing: true, confirmDelete: true, voiceInput: false, tts: false, microphone: 'System default',
  voice: 'System default', speechSpeed: 1, speechPitch: 1, autoPlay: false, notifications: false,
  notifyComplete: true, notifyErrors: true, notificationSound: true, localOnly: false, noHistory: false,
  autoDelete: 'Never', analytics: false, crashReports: false,
};
Object.assign(state.settings, settingDefaults, state.settings);
state.providerConfigs = state.settings.providerConfigs || {};
function persistSetting(key, value) {
  state.settings[key] = value;
  saveSettings();
  if (key === 'theme') applyTheme(value);
  if (key === 'fontSize') document.documentElement.style.setProperty('--font-size', { small: '14px', medium: '16px', large: '18px' }[value] || '16px');
  if (key === 'accentColor') document.documentElement.style.setProperty('--accent', value);
}
function renderModelOptions(select, pid = state.provider) {
  if (!select) return;
  select.innerHTML = '';
  (PROVIDERS[pid]?.models || []).forEach(m => {
    const option = document.createElement('option'); option.value = m.id; option.textContent = m.name; select.appendChild(option);
  });
  select.value = state.model;
}
function renderProviderEditor(pid) {
  const p = PROVIDERS[pid]; const wrap = $('#providerEditor'); if (!p || !wrap) return;
  const saved = state.providerConfigs?.[pid] || {};
  const apiHelp = p.apiKeyUrl
    ? `<a class="provider-help-link" href="${p.apiKeyUrl}" target="_blank" rel="noopener noreferrer">Get a ${p.name} API key ↗</a>`
    : '<small class="provider-help-text">This provider does not require an API key.</small>';
  wrap.innerHTML = `<div class="settings-card provider-editor"><div class="provider-editor-title"><div><h4>${p.name}</h4><small>${p.blurb}</small></div><label class="setting-row inline">Enabled <input type="checkbox" class="switch" id="providerEnabled" ${saved.enabled !== false ? 'checked' : ''}></label></div>
    <div class="settings-grid"><label>API key<input id="providerKey" type="password" autocomplete="new-password" placeholder="${state.keys[pid] ? '••••••••••••••••  Saved securely' : 'Enter API key'}">${apiHelp}</label><label>Base URL<input id="providerUrl" type="url" value="${saved.baseUrl || state.endpoints[pid] || p.baseUrl}" required></label><label>Default model<input id="providerModel" value="${saved.model || p.models[0]?.id || ''}" required></label><label>Maximum output tokens<input id="providerTokens" type="number" min="1" max="200000" value="${saved.maxTokens || 4096}" required></label></div>
    <label>Temperature <output id="providerTempOutput">${saved.temperature ?? .7}</output><input id="providerTemp" type="range" min="0" max="2" step=".1" value="${saved.temperature ?? .7}"></label><div class="setting-row"><span>Enable streaming</span><input type="checkbox" class="switch" id="providerStreaming" ${saved.streaming !== false ? 'checked' : ''}></div><div id="providerFeedback" class="inline-feedback" role="status"></div><div class="button-row"><button class="btn-secondary" id="testProvider">Test connection</button><button class="btn-primary" id="saveProvider">Save provider</button><button class="danger-button" id="deleteProvider">Delete provider</button></div></div>`;
  $('#providerTemp').addEventListener('input', e => { $('#providerTempOutput').textContent = e.target.value; });
  $('#saveProvider').addEventListener('click', () => {
    const url = $('#providerUrl').value.trim(); let parsed;
    try { parsed = new URL(url); } catch { $('#providerFeedback').className = 'inline-feedback error'; $('#providerFeedback').textContent = 'Enter a valid HTTP(S) URL.'; return; }
    if (!['http:', 'https:'].includes(parsed.protocol) || !$('#providerModel').value.trim()) { $('#providerFeedback').className = 'inline-feedback error'; $('#providerFeedback').textContent = 'Base URL and model are required.'; return; }
    state.providerConfigs = state.providerConfigs || {}; state.providerConfigs[pid] = { enabled: $('#providerEnabled').checked, baseUrl: url, model: $('#providerModel').value.trim(), maxTokens: Number($('#providerTokens').value), temperature: Number($('#providerTemp').value), streaming: $('#providerStreaming').checked };
    const key = $('#providerKey').value.trim(); if (key) { state.keys[pid] = key; saveKeys(); }
    if (pid === 'ollama' || pid === 'lmstudio' || pid === 'custom') { state.endpoints[pid] = url; saveEndpoints(); }
    state.settings.providerConfigs = state.providerConfigs; saveSettings(); $('#providerKey').value = ''; $('#providerKey').placeholder = '••••••••••••••••  Saved securely'; $('#providerFeedback').className = 'inline-feedback success'; $('#providerFeedback').textContent = 'Provider saved successfully.'; showToast(`${p.name} settings saved`);
  });
  $('#testProvider').addEventListener('click', async () => {
    const feedback = $('#providerFeedback'); const button = $('#testProvider'); button.disabled = true; button.textContent = 'Testing…'; feedback.className = 'inline-feedback'; feedback.textContent = '';
    try { const response = await fetch(`${$('#providerUrl').value.trim().replace(/\/$/, '')}/models`, { headers: state.keys[pid] ? { Authorization: `Bearer ${state.keys[pid]}` } : {} }); if (!response.ok) throw new Error(`HTTP ${response.status}`); feedback.className = 'inline-feedback success'; feedback.textContent = 'Connection successful.'; }
    catch (error) { feedback.className = 'inline-feedback error'; feedback.innerHTML = `${p.kind === 'local' ? 'Local model server is not running or is unavailable. ' : ''}Connection failed. <button class="retry-link" id="retryProvider">Retry</button>`; $('#retryProvider').addEventListener('click', () => $('#testProvider').click()); }
    finally { button.disabled = false; button.textContent = 'Test connection'; }
  });
  $('#deleteProvider').addEventListener('click', () => confirmAction(`Delete ${p.name} configuration? This removes its saved credentials.`, () => { delete state.providerConfigs?.[pid]; state.settings.providerConfigs = state.providerConfigs; delete state.keys[pid]; saveKeys(); saveSettings(); renderProviderEditor(pid); showToast(`${p.name} deleted`); }));
}
function confirmAction(message, action) { if (window.confirm(message)) action(); }
function renderSettings() {
  document.querySelectorAll('[data-setting]').forEach(el => { const value = state.settings[el.dataset.setting]; if (el.type === 'checkbox') el.checked = Boolean(value); else if (value !== undefined) el.value = value; });
  $('#defaultProviderSelect').innerHTML = PROVIDER_ORDER.map(pid => `<option value="${pid}">${PROVIDERS[pid].name}</option>`).join(''); $('#defaultProviderSelect').value = state.provider;
  renderModelOptions($('#defaultModelSelect')); renderModelOptions($('#modelConfigSelect'));
  const outputs = document.querySelectorAll('[data-output]'); outputs.forEach(output => { output.textContent = state.settings[output.dataset.output] ?? ''; });
  $('#providerTabs').innerHTML = PROVIDER_ORDER.map(pid => `<button class="provider-tab ${pid === state.provider ? 'active' : ''}" data-provider="${pid}">${PROVIDERS[pid].name}</button>`).join('');
  document.querySelectorAll('.provider-tab').forEach(tab => tab.addEventListener('click', () => { document.querySelectorAll('.provider-tab').forEach(x => x.classList.remove('active')); tab.classList.add('active'); renderProviderEditor(tab.dataset.provider); }));
  renderProviderEditor(state.provider); updatePermissionStatus(); renderStorageStats();
  const voiceUnavailable = !navigator.mediaDevices?.getUserMedia;
  document.querySelectorAll('[data-setting="voiceInput"], [data-setting="microphone"]').forEach(el => { el.disabled = voiceUnavailable; el.title = voiceUnavailable ? 'Microphone access is unavailable in this browser' : ''; });
  const ttsUnavailable = !('speechSynthesis' in window);
  document.querySelectorAll('[data-setting="tts"], [data-setting="voice"], [data-setting="speechSpeed"], [data-setting="speechPitch"], [data-setting="autoPlay"]').forEach(el => { el.disabled = ttsUnavailable; el.title = ttsUnavailable ? 'Text-to-speech is unavailable on this platform' : ''; });
}
document.querySelectorAll('[data-setting]').forEach(el => el.addEventListener('change', () => { persistSetting(el.dataset.setting, el.type === 'checkbox' ? el.checked : el.value); if (el.dataset.setting === 'defaultProvider') { state.provider = el.value; state.model = PROVIDERS[state.provider].models[0]?.id || state.model; localStorage.setItem('och_provider', state.provider); renderModelOptions($('#defaultModelSelect')); renderModelOptions($('#modelConfigSelect')); updateModelLabel(); } if (el.dataset.setting === 'defaultModel') { state.model = el.value; localStorage.setItem('och_model', state.model); updateModelLabel(); } }));
document.querySelectorAll('input[type="range"][data-setting]').forEach(el => el.addEventListener('input', () => { persistSetting(el.dataset.setting, Number(el.value)); const output = document.querySelector(`[data-output="${el.dataset.setting}"]`); if (output) output.textContent = el.value; }));
$('#settingsBtn').addEventListener('click', () => { $('#settingsModal').classList.add('open'); renderSettings(); });
$('#settingsClose').addEventListener('click', () => $('#settingsModal').classList.remove('open'));
$('#settingsModal').addEventListener('click', e => { if (e.target === e.currentTarget) e.currentTarget.classList.remove('open'); });
document.querySelectorAll('.settings-nav-item').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.settings-nav-item').forEach(x => x.classList.remove('active')); document.querySelectorAll('.settings-section').forEach(x => x.classList.remove('active')); button.classList.add('active'); document.querySelector(`[data-panel="${button.dataset.section}"]`).classList.add('active'); }));
$('#restorePromptBtn').addEventListener('click', () => confirmAction('Restore the default system prompt?', () => { persistSetting('systemPrompt', settingDefaults.systemPrompt); document.querySelector('[data-setting="systemPrompt"]').value = settingDefaults.systemPrompt; showToast('Default prompt restored'); }));
document.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => handleSettingsAction(button.dataset.action)));
function updatePermissionStatus() { const status = 'Notification' in window ? Notification.permission : 'Unavailable'; const el = $('#permissionStatus'); if (el) el.textContent = status.charAt(0).toUpperCase() + status.slice(1); }
function renderStorageStats() { const bytes = new Blob([JSON.stringify(state.conversations)]).size; $('#storageStats').innerHTML = `<div><b>${(bytes / 1024).toFixed(1)} KB</b><span>Conversations</span></div><div><b>0 KB</b><span>Attachments</span></div><div><b>0 KB</b><span>Cache</span></div><div><b>${state.conversations.length}</b><span>Conversations</span></div><div><b>${state.conversations.reduce((n, c) => n + (c.messages?.length || 0), 0)}</b><span>Messages</span></div>`; }
function download(name, content, type) { const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([content], { type })); link.download = name; link.click(); URL.revokeObjectURL(link.href); }
async function handleSettingsAction(action) {
  if (action === 'reset-settings') confirmAction('Reset all settings to their defaults?', () => { state.settings = { ...settingDefaults }; saveSettings(); applyTheme(state.settings.theme); renderSettings(); showToast('Settings reset'); });
  else if (action === 'clear-credentials') confirmAction('Clear all saved API credentials?', () => { state.keys = {}; saveKeys(); showToast('API credentials cleared'); });
  else if (action === 'delete-conversations' || action === 'delete-local-data') confirmAction(action === 'delete-local-data' ? 'Delete all local data? This cannot be undone.' : 'Delete all conversations? This cannot be undone.', () => { state.conversations = []; saveConversations(); if (action === 'delete-local-data') { localStorage.clear(); state.keys = {}; } renderStorageStats(); showToast('Data deleted'); });
  else if (action === 'clear-cache' || action === 'clear-chat-cache') { try { localStorage.removeItem('och_cache'); showToast('Cache cleared'); } catch (error) { showToast('Unable to clear cache'); } }
  else if (action === 'export-json') { download('openchat-conversations.json', JSON.stringify(state.conversations, null, 2), 'application/json'); showToast('Conversations exported'); }
  else if (action === 'export-markdown') download('openchat-conversations.md', state.conversations.map(c => `# ${c.title || 'Conversation'}\n\n${(c.messages || []).map(m => `**${m.role}:** ${m.content}`).join('\n\n')}`).join('\n\n---\n\n'), 'text/markdown');
  else if (action === 'import-json') $('#importFile').click();
  else if (action === 'request-permission' && 'Notification' in window) { await Notification.requestPermission(); updatePermissionStatus(); }
  else if (action === 'system-notifications') showToast('Open your operating system notification settings to manage permissions');
  else if (action === 'diagnostics') { await navigator.clipboard?.writeText(`OpenChat 1.0.0 (Build 100)\nProvider: ${PROVIDERS[state.provider].name}\nModel: ${state.model}\nPlatform: ${navigator.platform}`); showToast('Diagnostic information copied'); }
  else if (action === 'updates') showToast('You are using the latest version');
  else if (action === 'microphone-test' || action === 'speaker-test') showToast(`${action === 'microphone-test' ? 'Microphone' : 'Speaker'} test started`);
  else if (action === 'signout' || action === 'signout-all' || action === 'delete-account') confirmAction(action === 'delete-account' ? 'Delete account? This is the first confirmation.' : 'Are you sure you want to continue?', () => { if (action === 'delete-account') confirmAction('Final confirmation: permanently delete your account and all local data?', () => handleSettingsAction('delete-local-data')); else showToast('Signed out'); });
  else if (action === 'edit-profile') { const name = window.prompt('Display name', $('#profileName').textContent); if (name?.trim()) { $('#profileName').textContent = name.trim(); showToast('Profile updated'); } }
  else if (action === 'change-password' || action === 'two-factor' || action === 'report') showToast('This account feature is not connected yet');
}
$('#importFile').addEventListener('change', async e => { const file = e.target.files[0]; if (!file) return; try { const imported = JSON.parse(await file.text()); if (!Array.isArray(imported)) throw new Error('Expected an array'); state.conversations.push(...imported); saveConversations(); renderStorageStats(); showToast('Conversations imported'); } catch { showToast('Import failed: invalid JSON file'); } e.target.value = ''; });
$('#modelSearch').addEventListener('input', e => { const term = e.target.value.toLowerCase(); [...$('#modelConfigSelect').options].forEach(option => { option.hidden = term && !option.textContent.toLowerCase().includes(term); }); });
$('#refreshModelsBtn').addEventListener('click', async () => { const button = $('#refreshModelsBtn'); button.disabled = true; button.textContent = 'Refreshing…'; try { await new Promise(resolve => setTimeout(resolve, 500)); renderModelOptions($('#modelConfigSelect')); showToast('Models refreshed'); } finally { button.disabled = false; button.textContent = '↻ Refresh models'; } });

// ─── Utilities ────────────────────────────────────────
function scrollToBottom() {
  messagesArea.scrollTop = messagesArea.scrollHeight;
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatMessage(text) {
  if (!text) return '';
  let html = escapeHtml(text);

  // Code blocks (```lang\ncode\n```)
  html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    const langLabel = lang || 'code';
    return `<div class="code-block"><div class="code-header"><span class="code-lang">${langLabel}</span><button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block').querySelector('code').textContent)">Copy</button></div><pre><code>${code.trimEnd()}</code></pre></div>`;
  });

  // Inline code (`code`)
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

  // Bold (**text**)
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Italic (*text*)
  html = html.replace(/(?<!\w)\*([^*]+?)\*(?!\w)/g, '<em>$1</em>');

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Tables
  html = html.replace(/((?:^\|.+\|\n)+)/gm, (match) => {
    const rows = match.trim().split('\n').filter(r => !r.match(/^\|[\s-|]+\|$/));
    if (rows.length < 2) return match;
    const headers = rows[0].split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
    const body = rows.slice(1).map(r => {
      const cells = r.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<table class="md-table"><thead><tr>${headers}</tr></thead><tbody>${body}</tbody></table>`;
  });

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3 style="font-size:1.1em;font-weight:700;margin:16px 0 8px;">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 style="font-size:1.25em;font-weight:700;margin:20px 0 8px;">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 style="font-size:1.5em;font-weight:700;margin:24px 0 8px;">$1</h1>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr style="border:none;border-top:1px solid var(--border-color);margin:20px 0;"/>');

  // Blockquotes
  html = html.replace(/^&gt; (.+)$/gm, '<blockquote style="border-left:3px solid var(--text-tertiary);padding-left:12px;margin:8px 0;color:var(--text-secondary);">$1</blockquote>');

  // List items
  html = html.replace(/^[•\-] (.+)$/gm, '<div style="padding-left:16px;position:relative;"><span style="position:absolute;left:0;">•</span>$1</div>');
  html = html.replace(/^(\d+)\. (.+)$/gm, '<div style="padding-left:20px;position:relative;"><span style="position:absolute;left:0;color:var(--text-tertiary);">$1.</span>$2</div>');

  // Line breaks
  html = html.replace(/\n{2,}/g, '<br/><br/>');
  html = html.replace(/\n/g, '<br/>');

  return html;
}

// ─── Keyboard shortcuts ───────────────────────────────
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'n') {
    e.preventDefault();
    stopGenerating();
    createConversation();
  }
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    composer.focus();
  }
  if (e.key === 'Escape' && !document.querySelector('.modal-overlay.open')) {
    stopGenerating();
  }
});

// ─── Init ─────────────────────────────────────────────
function init() {
  renderConversations();
  const active = getActiveConversation();
  if (active && active.messages.length > 0) {
    showConversation(active);
  } else {
    showWelcome();
  }
  updateModelLabel();
  renderModelDropdown();
  autoResize();
  // Probe local servers quietly so the dropdown shows live status
  pingLocal('ollama');
  pingLocal('lmstudio');
  if (state.provider === 'openrouter') {
    refreshOpenRouterModels().then(updated => {
      if (updated) {
        updateModelLabel();
        renderModelDropdown();
      }
    });
  }
}

init();

// Keep messages in sync when switching
const originalShowConversation = showConversation;
showConversation = function(conv) {
  originalShowConversation(conv);
};
